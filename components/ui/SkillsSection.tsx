"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "@/app/data";
import TiltCard from "./TiltCard";

const SkillBar = ({ name, level, icon }: { name: string; level: number; icon?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="mb-4">
            <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                    {icon && (
                        <img 
                            src={icon} 
                            alt={`${name} icon`} 
                            className="w-5 h-5 object-contain"
                        />
                    )}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <motion.div
                    className="bg-primary h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </div>
        </div>
    );
};

export default function SkillsSection() {
    return (
        <section className="py-20 relative z-10" id="skills">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Skills
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Technical <span className="text-gradient">Expertise</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A diverse skill set enabling comprehensive web solutions from concept to deployment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Technical Skills */}
                    <TiltCard className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-primary">Technical</h3>
                        {SKILLS.technical.map((skill) => (
                            <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
                        ))}
                    </TiltCard>

                    {/* Professional Skills */}
                    <TiltCard className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-secondary">Professional</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {SKILLS.professional.map((skill) => (
                                <div key={skill.name} className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                    <div className="relative w-16 h-16 mx-auto mb-2">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle
                                                cx="32"
                                                cy="32"
                                                r="28"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                fill="transparent"
                                                className="text-gray-700"
                                            />
                                            <motion.circle
                                                cx="32"
                                                cy="32"
                                                r="28"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                fill="transparent"
                                                className="text-secondary"
                                                initial={{ strokeDasharray: "175.9", strokeDashoffset: "175.9" }}
                                                whileInView={{ strokeDashoffset: String(175.9 - (175.9 * skill.level) / 100) }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                            />
                                        </svg>
                                        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </TiltCard>

                    {/* Tools */}
                    <TiltCard className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-accent">Tools</h3>
                        <div className="flex flex-wrap gap-3">
                            {SKILLS.tools.map((tool, index) => (
                                <motion.span
                                    key={tool}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, rotate: 2 }}
                                    className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                                >
                                    {tool}
                                </motion.span>
                            ))}
                        </div>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
}
