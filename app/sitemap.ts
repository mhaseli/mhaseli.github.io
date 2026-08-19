import { MetadataRoute } from "next";
import { publications } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = "https://mhaseli.github.io";

    return [
        {
            url: `${siteUrl}/`,
        },
        {
            url: `${siteUrl}/research/`,
        },
        {
            url: `${siteUrl}/publications/`,
        },
        {
            url: `${siteUrl}/awards/`,
        },
        {
            url: `${siteUrl}/talks/`,
        },
        ...publications.map((publication) => ({
            url: `${siteUrl}/publications/${publication.slug}/`,
        })),
    ];
}
