import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Talks",
    description: "Invited talks and research presentations by Masih Haseli on Koopman operator theory, nonlinear control, data-driven modeling, and robotics.",
    openGraph: {
        type: "website",
        url: "https://mhaseli.github.io/talks/",
        title: "Talks | Masih Haseli",
        description: "Invited seminars and conference presentations on Koopman operator theory, data-driven modeling, and nonlinear control.",
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
        title: "Talks | Masih Haseli",
        description: "Invited seminars and conference presentations on Koopman operator theory, data-driven modeling, and nonlinear control.",
        images: ["/images/profile_photo.png"],
    },
    alternates: {
        canonical: "https://mhaseli.github.io/talks/",
    },
};

export default function TalksLayout({ children }: { children: React.ReactNode }) {
    return children;
}
