"use client";

import { news } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function News() {
    if (news.length === 0) return null;

    return (
        <section className="py-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4 mb-6"
            >
                <h2 className="text-2xl font-serif font-medium text-foreground">
                    News
                </h2>
                <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-px bg-gradient-to-r from-accent/50 to-transparent flex-grow"
                />
            </motion.div>

            <div className="flex flex-col gap-4">
                {news.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm p-3 -ml-3 rounded-lg border-l-2 border-transparent hover:border-accent hover:bg-accent/5 hover:translate-x-1 transition-all duration-150 ease-out cursor-default"
                    >
                        <div className="w-24 flex-shrink-0 text-accent font-semibold font-serif pt-0.5">
                            {item.date}
                        </div>
                        <div className="text-muted-foreground leading-relaxed">
                            {item.url ? (
                                <a href={item.url} target="_blank" rel="noreferrer" className="group hover:text-accent transition-colors">
                                    {highlightKeywords(item.content)}
                                </a>
                            ) : item.relatedPublication ? (
                                <Link href={`/publications#${item.relatedPublication}`} className="group hover:text-accent transition-colors">
                                    {highlightKeywords(item.content)}
                                </Link>
                            ) : (
                                highlightKeywords(item.content)
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function highlightKeywords(text: string) {
    // Specific highlighting for the award name and acceptance
    const parts = text.split(/(2025 IEEE Control Systems Letters Outstanding Paper Award|accepted)/gi);
    return parts.map((part, i) => {
        if (part.match(/accepted/i)) {
            return <span key={i} className="text-foreground font-medium group-hover:text-inherit">{part}</span>;
        }
        if (part.match(/2025 IEEE Control Systems Letters Outstanding Paper Award/i)) {
            return <span key={i} className="text-accent font-semibold group-hover:text-inherit">{part}</span>;
        }
        return part;
    });
}
