"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, Home, BookOpen, FlaskConical, Mic2, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Research", href: "/research", icon: FlaskConical },
    { name: "Publications", href: "/publications", icon: BookOpen },
    { name: "Talks", href: "/talks", icon: Mic2 },
    { name: "Awards", href: "/awards", icon: Trophy },
    { name: "CV", href: "/Material/CV_Masih_Haseli.pdf", icon: FileText, external: true },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-foreground font-sans">
                    Masih Haseli
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6">
                    {navItems.map((item) => {
                        const isActive = !item.external && (
                            item.href === "/"
                                ? pathname === "/"
                                : pathname === item.href || pathname.startsWith(`${item.href}/`)
                        );
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noreferrer" : undefined}
                                className={clsx(
                                    "relative text-sm font-medium transition-colors hover:text-accent py-1",
                                    isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-underline"
                                        className="absolute left-0 right-0 -bottom-1 h-0.5 bg-accent rounded-full"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                    <div className="ml-2">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-border bg-background overflow-hidden shadow-lg"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navItems.map((item) => {
                                const isActive = !item.external && (
                                    item.href === "/"
                                        ? pathname === "/"
                                        : pathname === item.href || pathname.startsWith(`${item.href}/`)
                                );
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        target={item.external ? "_blank" : undefined}
                                        rel={item.external ? "noreferrer" : undefined}
                                        onClick={() => setIsOpen(false)}
                                        className={clsx(
                                            "flex items-center gap-3 rounded-lg px-2 py-1.5 text-base font-medium transition-colors hover:text-accent",
                                            isActive ? "bg-accent/10 text-accent" : "text-muted-foreground"
                                        )}
                                    >
                                        <item.icon size={18} />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
