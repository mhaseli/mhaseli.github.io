"use client";

import { publications } from "@/lib/data";
import { LinkIcon, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function PublicationList() {
    const journals = publications.filter((p) => p.type === "journal");
    const conferences = publications.filter((p) => p.type === "conference");
    const theses = publications.filter((p) => p.type === "thesis");

    return (
        <section className="py-8 space-y-10">
            <PublicationSection title="Journal Articles" items={journals} sectionId="journals" />
            <PublicationSection title="Conference Proceedings" items={conferences} sectionId="conferences" />
            <PublicationSection title="Theses" items={theses} sectionId="theses" />
        </section>
    );
}


function PublicationSection({
    title,
    items,
    sectionId,
}: {
    title: string;
    items: typeof publications;
    sectionId: string;
}) {
    if (items.length === 0) return null;

    return (
        <motion.div
            id={sectionId}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="scroll-mt-32"
        >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4 mb-6"
            >
                <h2 className="text-2xl font-serif font-medium text-foreground">
                    {title}
                </h2>
                <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-px bg-gradient-to-r from-accent/50 to-transparent flex-grow"
                />
            </motion.div>

            <div className="space-y-3">
                {items.map((pub, index) => (
                    <PublicationRow key={pub.id} pub={pub} index={index + 1} />
                ))}
            </div>
        </motion.div>
    );
}

function PublicationRow({ pub, index }: { pub: (typeof publications)[0]; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Highlight author name
    const highlightAuthor = (authors: string) => {
        const parts = authors.split(/(M\. Haseli|Masih Haseli)/g);
        return parts.map((part, i) =>
            part.match(/M\. Haseli|Masih Haseli/) ? (
                <span key={i} className="font-semibold text-foreground">
                    {part}
                </span>
            ) : (
                <span key={i} className="text-muted-foreground/80">{part}</span>
            )
        );
    };

    return (
        <motion.div
            id={pub.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={clsx(
                "group relative p-5 -mx-5 rounded-2xl transition-all duration-300 flex gap-4 items-baseline border scroll-mt-24",
                pub.award
                    ? "bg-amber-50/50 dark:bg-amber-950/20 border-amber-200/60 dark:border-amber-900/40 hover:bg-amber-100/70 dark:hover:bg-amber-900/30 hover:border-amber-300/80 dark:hover:border-amber-800/60 hover:translate-x-1"
                    : "border-transparent hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent hover:border-accent/20 hover:translate-x-1"
            )}
        >
            {/* Numbering */}
            <div className="flex-shrink-0 w-8 text-right">
                <span className="text-muted-foreground/60 font-serif text-lg font-medium group-hover:text-accent/80 transition-colors">
                    {index}.
                </span>
            </div>

            <div className="flex-grow">
                {/* Title & Meta */}
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-start gap-4">
                        <h3 className={clsx(
                            "text-xl font-serif font-medium leading-tight tracking-tight",
                            pub.award ? "text-amber-900 dark:text-amber-100" : "text-foreground group-hover:text-accent transition-colors duration-150"
                        )}>
                            {pub.links && pub.links.length > 0 ? (
                                <a href={pub.links[0].url} target="_blank" rel="noreferrer">
                                    {pub.title}
                                </a>
                            ) : (
                                <span>{pub.title}</span>
                            )}
                        </h3>
                    </div>

                    <p className="text-sm max-w-4xl leading-relaxed mt-1">
                        {highlightAuthor(pub.authors)}
                    </p>

                    <div className="flex flex-wrap items-baseline gap-2 text-sm mt-1">
                        <span className="font-serif italic text-foreground/90">
                            {pub.venue}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className={pub.year === "submitted" || pub.year === "to appear" ? "text-muted-foreground italic" : "font-semibold text-foreground/80"}>
                            {pub.year !== "submitted" && pub.year !== "to appear" ? pub.year : capitalize(pub.year)}
                        </span>
                        {pub.note && (
                            <>
                                <span className="text-muted-foreground">•</span>
                                <span className="text-muted-foreground italic">{pub.note}</span>
                            </>
                        )}
                    </div>

                    {pub.award && (
                        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-sm font-semibold mt-2 bg-amber-100/50 dark:bg-amber-900/20 w-fit px-3 py-1 rounded-full border border-amber-200/50 dark:border-amber-800/30">
                            <span className="text-base">🏆</span>
                            {pub.award}
                        </div>
                    )}
                </div>

                {/* Actions & Abstract */}
                <div className="flex flex-col gap-3 mt-4 w-full">
                    <div className="flex flex-wrap items-center gap-3">
                        {/* Abstract Toggle - Primary Action */}
                        {pub.abstract && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className={clsx(
                                    "flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300",
                                    isExpanded
                                        ? "bg-accent text-accent-foreground shadow-sm"
                                        : "bg-secondary/50 text-foreground hover:bg-accent hover:text-accent-foreground"
                                )}
                            >
                                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                                {isExpanded ? "Hide Abstract" : "Read Abstract"}
                            </button>
                        )}

                        {/* Links - Badged (Excluding the first link which is the Title link) */}
                        {pub.links?.slice(1).map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className={clsx(
                                    "flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-300",
                                    "bg-secondary/50 border-border/40 text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
                                )}
                            >
                                {link.name === "PDF" && <FileText className="w-3.5 h-3.5" />}
                                {link.name !== "PDF" && <LinkIcon className="w-3.5 h-3.5" />}
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Expandable Abstract */}
                    <AnimatePresence>
                        {isExpanded && pub.abstract && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="mt-2 p-4 bg-secondary/30 border-l-2 border-accent rounded-r-xl rounded-bl-xl">
                                    <p className="text-sm text-foreground/90 leading-relaxed max-w-4xl font-serif text-justify">
                                        {pub.abstract}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}

function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
