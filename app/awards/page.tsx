import Link from "next/link";
import { FileText, ArrowUpRight, FileBadge, GraduationCap, Medal } from "lucide-react";
import { awards, publications, type Award } from "@/lib/data";
import { getPublicationLinks } from "@/lib/publications";

export default function AwardsPage() {
    return (
        <div className="relative py-12">
            <div aria-hidden="true" className="fixed top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div aria-hidden="true" className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
            <header className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    Awards
                </h1>
            </header>

            <ol className="space-y-3">
                {awards.map((honor) => (
                    <AwardRow key={`${honor.year}-${honor.title}`} honor={honor} />
                ))}
            </ol>
        </div>
    );
}

function AwardRow({ honor }: { honor: Award }) {
    const publication = honor.relatedPublication
        ? publications.find((candidate) => candidate.id === honor.relatedPublication)
        : null;
    const pdfLink = publication
        ? getPublicationLinks(publication).find((link) => /pdf|journal version/i.test(link.name))
        : null;

    const Icon = publication?.type === "thesis"
        ? GraduationCap
        : publication ? FileBadge : Medal;

    return (
        <li className="group relative -mx-3 grid gap-2 rounded-2xl border border-transparent px-3 py-6 transition-all duration-300 hover:translate-x-1 hover:border-accent/20 hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent focus-within:border-accent/20 focus-within:bg-accent/5 motion-reduce:transform-none motion-reduce:transition-none sm:-mx-5 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-6 sm:px-5">
            <time dateTime={honor.year} className="pt-0.5 text-base font-semibold tabular-nums text-accent">
                {honor.year}
            </time>

            <div className="min-w-0">
                <h2 className="flex items-start gap-2.5 text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors duration-150 group-hover:text-accent sm:text-xl">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-accent/70" strokeWidth={1.5} aria-hidden="true" />
                    <span>{honor.title}</span>
                </h2>
                <p className="mt-1.5 text-base leading-relaxed text-muted">
                    {honor.organization}
                </p>

                {publication && (
                    <div className="mt-3">
                        <p className="max-w-3xl text-sm leading-relaxed text-muted">
                            {publication.title}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-3">
                            <Link
                                href={`/publications/${publication.slug}`}
                                className="inline-flex items-center gap-1.5 rounded-full bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                            >
                                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                                View publication
                            </Link>
                            {pdfLink && (
                                <a
                                    href={pdfLink.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`PDF: ${publication.title}`}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                                >
                                    <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                                    PDF
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </li>
    );
}
