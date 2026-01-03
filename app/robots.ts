import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const siteUrl = "https://mhaseli.github.io";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
