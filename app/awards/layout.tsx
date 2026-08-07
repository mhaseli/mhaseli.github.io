import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Awards",
    description: "Awards and honors received by Masih Haseli for research in control systems, dynamical systems, and Koopman operator theory.",
    keywords: [
        "Masih Haseli awards",
        "IEEE Control Systems Letters Outstanding Paper Award",
        "Robert Skelton Dissertation Award",
        "ACC Best Student Paper Award",
        "control systems awards",
    ],
    alternates: {
        canonical: "https://mhaseli.github.io/awards/",
    },
    openGraph: {
        type: "website",
        url: "https://mhaseli.github.io/awards/",
        title: "Awards | Masih Haseli",
        description: "Awards and honors recognizing research in control systems, dynamical systems, and Koopman operator theory.",
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
        title: "Awards | Masih Haseli",
        description: "Awards and honors recognizing research in control systems, dynamical systems, and Koopman operator theory.",
        images: ["/images/profile_photo.png"],
    },
};

export default function AwardsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
