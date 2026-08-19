import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteUrl = "https://mhaseli.github.io";
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "out");

const readOutput = (relativePath) => readFile(path.join(outputRoot, relativePath), "utf8");
const extractLocations = (xml) =>
    [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

async function findIndexFiles(directory = outputRoot) {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = await Promise.all(
        entries.map(async (entry) => {
            const fullPath = path.join(directory, entry.name);
            if (entry.isDirectory()) return findIndexFiles(fullPath);
            return entry.name === "index.html" ? [fullPath] : [];
        }),
    );

    return files.flat();
}

const [primaryXml, searchConsoleXml, robotsTxt] = await Promise.all([
    readOutput("sitemap.xml"),
    readOutput("sitemap-pages.xml"),
    readOutput("robots.txt"),
]);

if (primaryXml !== searchConsoleXml) {
    throw new Error("sitemap.xml and sitemap-pages.xml contain different data.");
}

if (!primaryXml.startsWith("<?xml") || !primaryXml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
    throw new Error("The sitemap is missing its XML declaration or standard namespace.");
}

if (/<(?:lastmod|priority|changefreq)>/.test(primaryXml)) {
    throw new Error("The sitemap contains unsupported or unverifiable change metadata.");
}

if (!robotsTxt.includes("User-Agent: *") || !robotsTxt.includes("Allow: /")) {
    throw new Error("robots.txt does not explicitly allow public crawling.");
}

if (robotsTxt.includes("Disallow:") || !robotsTxt.includes(`Sitemap: ${siteUrl}/sitemap-pages.xml`)) {
    throw new Error("robots.txt blocks crawling or advertises the wrong sitemap.");
}

const locations = extractLocations(primaryXml);
const uniqueLocations = new Set(locations);

if (locations.length === 0 || uniqueLocations.size !== locations.length) {
    throw new Error("The sitemap is empty or contains duplicate URLs.");
}

const htmlByLocation = new Map();

for (const location of locations) {
    const url = new URL(location);
    if (url.origin !== siteUrl || !url.pathname.endsWith("/")) {
        throw new Error(`Noncanonical sitemap URL: ${location}`);
    }

    const relativeHtml = url.pathname === "/"
        ? "index.html"
        : path.join(url.pathname.slice(1), "index.html");
    const html = await readOutput(relativeHtml);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1];

    if (canonical !== location) {
        throw new Error(`Canonical mismatch for ${location}: ${canonical ?? "missing"}`);
    }

    if (robots !== "index, follow") {
        throw new Error(`Page is not explicitly indexable: ${location}`);
    }

    htmlByLocation.set(location, html);
}

const indexFiles = await findIndexFiles();
const canonicalPages = new Set();

for (const file of indexFiles) {
    const html = await readFile(file, "utf8");
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1];
    if (canonical?.startsWith(siteUrl) && robots === "index, follow") {
        canonicalPages.add(canonical);
    }
}

const missingFromSitemap = [...canonicalPages].filter((url) => !uniqueLocations.has(url));
const missingPages = locations.filter((url) => !canonicalPages.has(url));

if (missingFromSitemap.length || missingPages.length) {
    throw new Error(
        `Sitemap/page mismatch. Missing from sitemap: ${missingFromSitemap.join(", ") || "none"}. ` +
        `Missing pages: ${missingPages.join(", ") || "none"}.`,
    );
}

const allIndexableHtml = [...htmlByLocation.values()].join("\n");
const unlinkedPages = locations
    .filter((location) => location !== `${siteUrl}/`)
    .filter((location) => {
        const pathname = new URL(location).pathname;
        return !allIndexableHtml.includes(`href="${pathname}"`);
    });

if (unlinkedPages.length) {
    throw new Error(`Pages without crawlable internal links: ${unlinkedPages.join(", ")}`);
}

console.log(
    `Verified ${locations.length} sitemap URLs: XML parity, robots, canonicals, indexability, and internal links are consistent.`,
);
