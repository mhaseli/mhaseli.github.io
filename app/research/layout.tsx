import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Research",
    description: "Research by Masih Haseli in Koopman operator theory, data-driven control, dynamical systems analysis, and robotics applications. Postdoctoral Scholar at Caltech.",
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
        title: "Research | Masih Haseli",
        description: "Research in Koopman operator theory, data-driven control, and robotics.",
    },
};

export default function ResearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
