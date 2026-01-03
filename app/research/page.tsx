"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { researchThemes, awards, publications } from "@/lib/data";
import { Award, ArrowRight, Lightbulb, Trophy, BookOpen } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    },
};

export default function ResearchPage() {
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
                        href="#overview"
                        className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-200"
                    >
                        <BookOpen size={16} className="text-accent/70 group-hover:text-accent transition-colors" />
                        General Research
                    </a>
                    <a
                        href="#themes"
                        className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-200"
                    >
                        <Lightbulb size={16} className="text-accent/70 group-hover:text-accent transition-colors" />
                        Research Themes
                    </a>
                    <a
                        href="#awards"
                        className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-200"
                    >
                        <Trophy size={16} className="text-accent/70 group-hover:text-accent transition-colors" />
                        Awards
                    </a>
                </motion.nav>
            </div>

            {/* Hero Section */}
            <motion.div
                id="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-16 scroll-mt-32"
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-50 font-serif tracking-tight">
                    Research
                </h1>
                <p className="text-lg text-muted leading-relaxed mb-6 text-justify">
                    I am interested in{" "}
                    <span className="text-accent font-medium">dynamical systems and control</span>.
                    Specifically, I study general nonlinear systems (without assuming additional structure) in
                    a systematic way. The{" "}
                    <span className="text-accent font-medium">Koopman operator theory</span> is central
                    to my research, as it enables the systematic study of complex systems through algebraic
                    structures that are more suitable for scalable algorithmic procedures compared to
                    geometric viewpoints.
                </p>
                <p className="text-muted leading-relaxed mb-4 text-justify">
                    My work is structured around three key areas:
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center text-accent font-semibold text-sm mt-0.5">1</span>
                        <div>
                            <span className="font-semibold text-foreground">Rigorous Mathematical Foundations:</span>
                            <span className="text-muted text-justify"> Developing the underlying theoretical structures.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center text-accent font-semibold text-sm mt-0.5">2</span>
                        <div>
                            <span className="font-semibold text-foreground">Efficient Data-Driven Algorithms:</span>
                            <span className="text-muted text-justify"> Creating algorithms with guaranteed convergence and accuracy.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center text-accent font-semibold text-sm mt-0.5">3</span>
                        <div>
                            <span className="font-semibold text-foreground">Real-Time Applications:</span>
                            <span className="text-muted text-justify"> Applying these algorithms for practical prediction and control tasks.</span>
                        </div>
                    </li>
                </ul>
            </motion.div>

            {/* Research Themes */}
            <motion.section
                id="themes"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mb-20 scroll-mt-32"
            >
                <h2 className="text-2xl font-bold mb-8 text-zinc-800 dark:text-zinc-100 font-serif">
                    Research Themes
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {researchThemes.map((theme) => (
                        <motion.div
                            key={theme.id}
                            variants={itemVariants}
                            className="group relative bg-secondary/50 dark:bg-secondary/30 rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 card-lift"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={theme.image}
                                    alt={theme.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6 -mt-12 relative">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 font-serif mb-2">
                                    {theme.title}
                                </h3>
                                <p className="text-sm text-accent font-medium mb-3">
                                    {theme.shortDescription}
                                </p>
                                <p className="text-muted text-sm leading-relaxed text-justify">
                                    {theme.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Awards Section */}
            <motion.section
                id="awards"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mb-20 scroll-mt-32"
            >
                <h2 className="text-2xl font-bold mb-8 text-zinc-800 dark:text-zinc-100 font-serif">
                    Awards
                </h2>
                <div className="grid gap-4">
                    {awards.map((award, index) => {
                        const relatedPub = award.relatedPublication
                            ? publications.find((p) => p.id === award.relatedPublication)
                            : null;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-start gap-4 p-4 bg-secondary/30 dark:bg-secondary/20 rounded-lg border border-border hover:border-accent/30 transition-colors"
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center">
                                    <Award size={20} className="text-accent" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-baseline gap-2 flex-wrap">
                                        <span className="text-sm font-medium text-accent">
                                            {award.year}
                                        </span>
                                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                                            {award.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-muted mt-1">
                                        {award.organization}
                                    </p>
                                    {relatedPub && (
                                        <Link
                                            href={`/publications#${relatedPub.id}`}
                                            className="text-xs text-accent/80 hover:text-accent mt-2 italic block hover:underline transition-colors"
                                        >
                                            &ldquo;{relatedPub.title}&rdquo;
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* View All Publications CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <Link
                    href="/publications"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                    View All Publications
                    <ArrowRight size={18} />
                </Link>
            </motion.div>
        </div>
    );
}
