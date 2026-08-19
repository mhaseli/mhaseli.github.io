import { copyFile, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const primaryPath = path.join(projectRoot, "out", "sitemap.xml");
const searchConsolePath = path.join(projectRoot, "out", "sitemap-pages.xml");

const primaryXml = await readFile(primaryPath, "utf8");

if (!primaryXml.startsWith("<?xml") || !primaryXml.includes("<urlset")) {
    throw new Error("The generated sitemap.xml is not a valid XML URL set.");
}

await copyFile(primaryPath, searchConsolePath);

console.log("Created sitemap-pages.xml from the authoritative sitemap.xml.");
