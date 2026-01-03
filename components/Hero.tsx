"use client";

import Image from "next/image";
import { profile } from "@/lib/data";
import { Mail, MapPin, Linkedin, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="relative flex flex-col md:flex-row gap-10 items-start md:items-center py-12 md:py-20">
            {/* Background Spotlights */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/5 dark:bg-accent/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/3 flex justify-center md:justify-start relative"
            >
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-background card-lift">
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20" />
                    <Image
                        src={profile.image}
                        alt={profile.name}
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full md:w-2/3 space-y-6 relative"
            >
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="text-4xl md:text-5xl font-bold text-foreground font-serif tracking-tight"
                    >
                        {profile.name}
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="text-xl md:text-2xl text-accent font-medium mt-2 font-serif"
                    >
                        {profile.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className="text-lg text-muted-foreground mt-1"
                    >
                        {profile.institution}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="flex flex-col gap-2 text-sm text-muted-foreground"
                >
                    <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">{profile.email}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{profile.office}</span>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <a href={profile.scholar} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors">
                            <GraduationCap size={16} /> Google Scholar
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors">
                            <Linkedin size={16} /> LinkedIn
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="prose dark:prose-invert max-w-none text-muted-foreground text-justify"
                >
                    <p>
                        I am a postdoctoral scholar in Computing and Mathematical Sciences at Caltech, advised by <a href="https://www.eas.caltech.edu/people/jburdick" target="_blank" rel="noreferrer" className="text-accent hover:underline font-medium">Prof. Joel W. Burdick</a>. Previously, I was a postdoctoral scholar in the Department of Mechanical and Aerospace Engineering at the University of California San Diego with <a href="http://terrano.ucsd.edu/jorge/" target="_blank" rel="noreferrer" className="text-accent hover:underline font-medium">Prof. Jorge Cortés</a>.
                        I received my Ph.D. in Engineering Sciences (Mechanical Engineering) from the University of California San Diego in 2022.
                    </p>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        My research develops theoretically principled, data-driven methods for modeling, analysis, and control of nonlinear dynamical systems, with applications in learning and robotics. I am particularly interested in Koopman operator theory and nonlinear control.
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
}
