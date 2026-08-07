import { MetadataRoute } from "next";
import { publications } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = "https://mhaseli.github.io";
    const currentDate = new Date().toISOString();

    return [
        {
            url: `${siteUrl}/`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${siteUrl}/research/`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/publications/`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/awards/`,
            lastModified: currentDate,
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/talks/`,
            lastModified: currentDate,
            changeFrequency: "yearly",
            priority: 0.8,
        },
        ...publications.map((publication) => ({
            url: `${siteUrl}/publications/${publication.slug}/`,
            lastModified: currentDate,
            changeFrequency: "yearly" as const,
            priority: 0.7,
        })),
    ];
}
