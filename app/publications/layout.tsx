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
        title: "Publications | Masih Haseli",
        description: "Academic publications on Koopman operator theory, data-driven control, and robotics.",
    },
};

export default function PublicationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
