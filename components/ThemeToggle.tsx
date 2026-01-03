"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9" />; // Placeholder to avoid hydration mismatch
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <motion.div
                    initial={false}
                    animate={{ scale: theme === "dark" ? 0 : 1, rotate: theme === "dark" ? 180 : 0 }}
                    className="absolute inset-0 flex items-center justify-center text-zinc-900"
                >
                    <Sun size={20} />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{ scale: theme === "dark" ? 1 : 0, rotate: theme === "dark" ? 0 : -180 }}
                    className="absolute inset-0 flex items-center justify-center text-zinc-100"
                >
                    <Moon size={20} />
                </motion.div>
            </div>
        </button>
    );
}
