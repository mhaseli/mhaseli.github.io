"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, Mic2, Play } from "lucide-react";
import { talks } from "@/lib/data";

export default function TalksPage() {
    return (
        <div className="relative py-12">
            <div className="fixed right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
            <div className="fixed bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

            <motion.header
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 max-w-3xl"
            >
                <h1 className="text-3xl font-bold tracking-tight text-foreground font-sans md:text-4xl">
                    Talks
                </h1>
                <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
                    Invited seminars and conference presentations on Koopman operator theory, data-driven modeling, and nonlinear control.
                </p>
            </motion.header>

            <section aria-label="Invited talks" className="space-y-2">
                {talks.map((talk, index) => (
                    <motion.article
                        key={`${talk.date}-${talk.title}-${talk.event}`}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.06 + index * 0.06 }}
                        className="group -mx-4 grid grid-cols-[2.75rem_minmax(0,1fr)] gap-3 rounded-xl border border-border/50 p-4 transition-all duration-300 hover:translate-x-1 hover:border-accent/40 hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent sm:-mx-5 sm:grid-cols-[7rem_3rem_minmax(0,1fr)] sm:gap-4 sm:p-5"
                    >
                        <div className="hidden pt-1 text-right sm:block">
                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                                {talk.date}
                            </span>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 sm:h-12 sm:w-12">
                            <Mic2 className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                        </div>

                        <div className="min-w-0">
                            <span className="mb-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent sm:hidden">
                                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                                {talk.date}
                            </span>

                            <h2 className="text-lg font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-xl">
                                {talk.title}
                            </h2>

                            <p className="mt-2 text-sm font-medium leading-relaxed text-foreground/80 sm:text-base">
                                {talk.event}
                            </p>

                            {talk.location && (
                                <p className="mt-1.5 flex items-start gap-1.5 text-sm leading-relaxed text-muted">
                                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                                    <span>{talk.location}</span>
                                </p>
                            )}

                            {talk.url && (
                                <a
                                    href={talk.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                    <Play className="h-3.5 w-3.5" aria-hidden="true" />
                                    Watch talk
                                </a>
                            )}
                        </div>
                    </motion.article>
                ))}
            </section>
        </div>
    );
}
