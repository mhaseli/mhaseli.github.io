"use client";

import PublicationList from "@/components/PublicationList";
import { motion } from "framer-motion";
import { BookOpen, Presentation, GraduationCap, ScrollText } from "lucide-react";
import { profile } from "@/lib/data";

export default function PublicationsPage() {
    return (
        <div className="py-12 relative">
            {/* Background Spotlights */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

            {/* Sticky Navigation Bar - Floating Pill */}
            <div className="sticky top-16 z-40 mb-8 flex justify-center">
                <motion.nav
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex gap-2 p-2 bg-background/70 backdrop-blur-lg rounded-full border border-border/30 shadow-lg shadow-black/5 dark:shadow-black/20"
                >
                    <a
                        href="#journals"
                        className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-200"
                    >
                        <BookOpen size={16} className="text-accent/70 group-hover:text-accent transition-colors" />
                        <span className="hidden sm:inline">Journal Articles</span>
                    </a>
                    <a
                        href="#conferences"
                        className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-200"
                    >
                        <Presentation size={16} className="text-accent/70 group-hover:text-accent transition-colors" />
                        <span className="hidden sm:inline">Conference Proceedings</span>
                    </a>
                    <a
                        href="#theses"
                        className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-200"
                    >
                        <ScrollText size={16} className="text-accent/70 group-hover:text-accent transition-colors" />
                        <span className="hidden sm:inline">Theses</span>
                    </a>
                    <div className="hidden sm:block w-px h-6 bg-border/50 mx-1 self-center" />
                    <a
                        href={profile.scholar}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-200"
                    >
                        <GraduationCap size={16} className="text-accent/70 group-hover:text-accent transition-colors" />
                        <span className="hidden sm:inline">Google Scholar</span>
                    </a>
                </motion.nav>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-50 font-serif tracking-tight">
                Publications
            </h1>

            <PublicationList />
        </div>
    );
}
