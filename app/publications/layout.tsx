import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Publications",
    description: "Academic publications by Masih Haseli including journal articles in IEEE Transactions, Automatica, and conference proceedings. Research on Koopman operator theory, data-driven control, and robotics.",
    keywords: [
        "Koopman operator publications",
        "EDMD",
        "control theory papers",
        "IEEE Transactions on Automatic Control",
        "Automatica",
        "dynamical systems research",
        "data-driven methods",
    ],
    openGraph: {
        type: "website",
        url: "https://mhaseli.github.io/publications/",
        title: "Publications | Masih Haseli",
        description: "Academic publications on Koopman operator theory, data-driven control, and robotics.",
        images: [
            {
                url: "/images/profile_photo.png",
                width: 400,
                height: 400,
                alt: "Masih Haseli",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "Publications | Masih Haseli",
        description: "Academic publications on Koopman operator theory, data-driven control, and robotics.",
        images: ["/images/profile_photo.png"],
    },
    alternates: {
        canonical: "https://mhaseli.github.io/publications/",
    },
};

export default function PublicationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
