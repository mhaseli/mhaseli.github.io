import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Research",
    description: "Research by Masih Haseli in Koopman operator theory, data-driven control, dynamical systems analysis, and robotics applications. Postdoctoral Scholar Research Associate at Caltech.",
    keywords: [
        "Koopman operator theory",
        "dynamical systems",
        "robot learning",
        "control theory",
        "machine learning",
        "data-driven methods",
        "EDMD",
        "Extended Dynamic Mode Decomposition",
        "nonlinear control",
    ],
    openGraph: {
        type: "website",
        url: "https://mhaseli.github.io/research/",
        title: "Research | Masih Haseli",
        description: "Research in Koopman operator theory, data-driven control, and robotics.",
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
        title: "Research | Masih Haseli",
        description: "Research in Koopman operator theory, data-driven control, and robotics.",
        images: ["/images/profile_photo.png"],
    },
    alternates: {
        canonical: "https://mhaseli.github.io/research/",
    },
};

export default function ResearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
