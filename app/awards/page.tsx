"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    FileBadge,
    FileText,
    GraduationCap,
    Medal,
    type LucideIcon,
} from "lucide-react";
import { awards, publications, type Award } from "@/lib/data";
import { getPublicationLinks } from "@/lib/publications";

type AwardStyle = {
    icon: LucideIcon;
    iconClass: string;
    iconWrapClass: string;
};

const awardStyles: Record<string, AwardStyle> = {
    JP3: {
        icon: FileBadge,
        iconClass: "text-amber-700 dark:text-amber-300",
        iconWrapClass: "bg-amber-100 dark:bg-amber-950/60 ring-amber-300/80 dark:ring-amber-700/60",
    },
    Thesis: {
        icon: GraduationCap,
        iconClass: "text-amber-700 dark:text-amber-300",
        iconWrapClass: "bg-amber-100 dark:bg-amber-950/60 ring-amber-300/80 dark:ring-amber-700/60",
    },
    CP4: {
        icon: FileBadge,
        iconClass: "text-amber-700 dark:text-amber-300",
        iconWrapClass: "bg-amber-100 dark:bg-amber-950/60 ring-amber-300/80 dark:ring-amber-700/60",
    },
    "2014": {
        icon: Medal,
        iconClass: "text-[#95501f] dark:text-[#e0a06a]",
        iconWrapClass: "bg-[#f4e2d1] dark:bg-[#3b2417] ring-[#c98a58]/80 dark:ring-[#8f552d]/70",
    },
    "2008": {
        icon: Medal,
        iconClass: "text-zinc-500 dark:text-zinc-300",
        iconWrapClass: "bg-zinc-100 dark:bg-zinc-800/80 ring-zinc-300/80 dark:ring-zinc-600/70",
    },
};

const defaultStyle: AwardStyle = {
    icon: Medal,
    iconClass: "text-accent",
    iconWrapClass: "bg-accent/10 ring-accent/20",
};

const researchAwards = awards.filter((award) => award.relatedPublication);
const earlierDistinctions = awards.filter((award) => !award.relatedPublication);

export default function AwardsPage() {
    return (
        <div className="py-12 relative">
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

            <motion.header
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
            >
                <h1 className="text-3xl md:text-4xl font-bold text-foreground font-sans tracking-tight">
                    Awards
                </h1>
            </motion.header>

            <div className="space-y-12">
                <AwardGroup
                    id="research-recognition"
                    title="Research Recognition"
                    items={researchAwards}
                    startIndex={0}
                />
                <AwardGroup
                    id="earlier-distinctions"
                    title="Earlier Distinctions"
                    items={earlierDistinctions}
                    startIndex={researchAwards.length}
                />
            </div>
        </div>
    );
}

function AwardGroup({
    id,
    title,
    items,
    startIndex,
}: {
    id: string;
    title: string;
    items: Award[];
    startIndex: number;
}) {
    return (
        <section aria-labelledby={id}>
            <div className="mb-4 flex items-center gap-4">
                <h2 id={id} className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {title}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>
            <div className="space-y-2">
                {items.map((honor, index) => (
                    <AwardRow
                        key={`${honor.year}-${honor.title}`}
                        honor={honor}
                        index={startIndex + index}
                    />
                ))}
            </div>
        </section>
    );
}

function AwardRow({ honor, index }: { honor: Award; index: number }) {
    const publication = honor.relatedPublication
        ? publications.find((candidate) => candidate.id === honor.relatedPublication)
        : null;
    const style = awardStyles[honor.relatedPublication ?? honor.year] ?? defaultStyle;
    const Icon = style.icon;
    const pdfLink = publication
        ? getPublicationLinks(publication).find((link) => /pdf|journal version/i.test(link.name))
        : null;

    return (
        <motion.article
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 + index * 0.08 }}
            className="group relative -mx-4 flex gap-3 rounded-xl border border-border/50 p-4 transition-all duration-300 hover:translate-x-1 hover:border-accent/40 hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent sm:-mx-5 sm:gap-4 sm:p-5"
        >
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 sm:h-12 sm:w-12 ${style.iconWrapClass}`}>
                <Icon size={24} className={style.iconClass} aria-hidden="true" />
            </div>

            <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                    <span className="font-semibold text-accent">{honor.year}</span>
                    <span className="text-foreground/55" aria-hidden="true">•</span>
                    <span className="text-foreground/65">{honor.organization}</span>
                </div>

                <h3 className="text-lg font-semibold leading-tight tracking-tight text-foreground sm:text-xl">
                    {honor.title}
                </h3>

                {publication && (
                    <div className="mt-4 border-t border-border/80 pt-4">
                        <div className="flex items-start gap-2.5">
                            <FileText className="mt-0.5 h-4 w-4 shrink-0 text-foreground/45" aria-hidden="true" />
                            <h4 className="text-base font-medium leading-snug text-foreground/90 sm:text-lg">
                                {publication.title}
                            </h4>
                        </div>

                        <div className="ml-6.5 mt-2">
                            <p className="text-sm leading-relaxed text-foreground/70">
                                {publication.authors}
                            </p>

                            <div className="mt-1 flex flex-wrap items-baseline gap-2 text-xs text-foreground/65 sm:text-sm">
                                <span className="italic text-foreground/80">{publication.venue}</span>
                                <span aria-hidden="true">•</span>
                                <span className="font-semibold text-foreground/75">{publication.year}</span>
                                {publication.note && (
                                    <>
                                        <span aria-hidden="true">•</span>
                                        <span className="italic">{publication.note}</span>
                                    </>
                                )}
                            </div>

                            <div className="mt-3 flex flex-wrap gap-2">
                                <Link
                                    href={`/publications/${publication.slug}`}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                    View publication
                                </Link>
                                {pdfLink && (
                                    <a
                                        href={pdfLink.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-3 py-1.5 text-xs font-semibold text-foreground/75 transition-colors hover:border-accent/50 hover:text-accent dark:text-foreground/85"
                                    >
                                        <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                                        PDF
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.article>
    );
}
