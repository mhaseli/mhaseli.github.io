import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = "https://mhaseli.github.io";
    const currentDate = new Date().toISOString();

    return [
        {
            url: siteUrl,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${siteUrl}/research`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/publications`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.9,
        },
    ];
}
