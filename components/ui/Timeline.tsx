"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EDUCATION } from "@/app/data";

const TimelineItem = ({ edu }: { edu: (typeof EDUCATION)[0] }) => {
    return (
        <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-100 dark:bg-neutral-800 rounded-3xl p-8 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
            <div className="absolute top-4 right-8 text-6xl font-black text-neutral-200 dark:text-neutral-700 -z-10 group-hover:text-primary/20 transition-colors">
                {edu.period.split(" - ")[0]}
            </div>

            <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                        {edu.degree}
                    </span>
                    <h3 className="text-3xl font-bold font-display leading-tight mb-2">
                        {edu.institution}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 font-medium">
                        {edu.period}
                    </p>
                </div>

                <div>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                        {edu.desc}
                    </p>

                    {edu.tags && (
                        <div className="flex flex-wrap gap-2">
                            {edu.tags.map((tag) => (
                                <span key={tag} className="text-xs px-2 py-1 bg-white dark:bg-black rounded border border-neutral-200 dark:border-neutral-700 text-neutral-500">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {edu.grade && (
                        <div className="mt-4 flex items-center gap-2">
                            <span className="text-sm font-bold">Grade:</span>
                            <span className="text-sm bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">{edu.grade}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function Timeline() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white dark:bg-black" id="experience">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-20 left-20 z-10 max-w-sm">
                    <h2 className="text-5xl font-bold font-display mb-6">
                        Academic <br />
                        <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        My educational path and milestones that shaped my technical expertise.
                    </p>
                </div>

                <motion.div style={{ x }} className="flex gap-12 pl-[40vw]">
                    {EDUCATION.map((edu, i) => (
                        <TimelineItem key={i} edu={edu} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
