import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page not found",
    description: "The requested page could not be found on Masih Haseli's academic website.",
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
    alternates: null,
    openGraph: null,
    twitter: null,
};

export default function NotFound() {
    return (
        <section className="flex min-h-[60vh] flex-col items-start justify-center py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">404</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Page not found
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                The page may have moved or the address may be incorrect.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
                <Link
                    href="/"
                    className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                    Return home
                </Link>
                <Link
                    href="/publications"
                    className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                    View publications
                </Link>
            </div>
        </section>
    );
}
