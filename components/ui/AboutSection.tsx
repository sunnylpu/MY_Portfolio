"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROFILE } from "@/app/data";

export default function AboutSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section id="about" ref={targetRef} className="relative py-32 bg-white dark:bg-black overflow-hidden flex items-center min-h-[60vh]">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    style={{ y, opacity }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                        {/* Text Content */}
                        <div className="flex-1 space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-neutral-900 dark:text-neutral-50 mb-8">
                                About <span className="text-gradient">Me</span>
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed">
                                {PROFILE.about.text1}
                            </p>
                            <p className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed">
                                {PROFILE.about.text2}
                            </p>
                        </div>
                        {/* Stats Section */}
                        <div className="grid grid-cols-2 gap-4 md:w-1/3 shrink-0">
                             {PROFILE.about.stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="p-6 bg-neutral-100 dark:bg-neutral-900/50 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-center hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                                >
                                    <div className="text-3xl font-bold text-primary mb-2 font-display">{stat.value}</div>
                                    <div className="text-sm text-neutral-700 dark:text-neutral-300 font-medium tracking-wide uppercase">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
        </section>
    );
}
