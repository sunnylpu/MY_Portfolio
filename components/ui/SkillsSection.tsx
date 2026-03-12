"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "@/app/data";
import TiltCard from "./TiltCard";

// Replaced vertical SkillBar with horizontal cards below in the section rendering.

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
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-text-primary">
                        Technical <span className="text-gradient">Expertise</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        A diverse skill set enabling comprehensive web solutions from concept to deployment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Technical Skills */}
                    <TiltCard className="bg-card border border-border p-8 rounded-2xl md:col-span-1 lg:col-span-2 shadow-sm">
                        <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2 border-b border-border pb-4">
                            Technical 
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {SKILLS.technical.map((skill, index) => (
                                <motion.div 
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-3 p-4 bg-background/50 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-background transition-all cursor-default"
                                >
                                    {skill.icon && (
                                        <img 
                                            src={skill.icon} 
                                            alt={`${skill.name} icon`} 
                                            className="w-8 h-8 object-contain drop-shadow-md shrink-0"
                                        />
                                    )}
                                    <span className="font-semibold text-text-primary">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </TiltCard>

                    {/* Tools */}
                    <TiltCard className="bg-card border border-border p-8 rounded-2xl md:col-span-1 lg:col-span-1 shadow-sm">
                        <h3 className="text-2xl font-bold mb-6 text-accent flex items-center gap-2 border-b border-border pb-4">
                            Tools
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {SKILLS.tools.map((tool, index) => (
                                <motion.div
                                    key={tool.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-2 p-3 bg-background/50 rounded-xl border border-border/50 hover:bg-background transition-colors cursor-default"
                                >
                                    {tool.icon && (
                                        <img 
                                            src={tool.icon} 
                                            alt={`${tool.name} icon`} 
                                            className="w-6 h-6 object-contain shrink-0"
                                        />
                                    )}
                                    <span className="text-sm font-medium text-text-primary">{tool.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </TiltCard>

                    {/* Professional Skills (Moved to the bottom row, spanning full width) */}
                    <TiltCard className="bg-card border border-border p-8 rounded-2xl md:col-span-2 lg:col-span-3 shadow-sm">
                        <h3 className="text-2xl font-bold mb-6 text-secondary flex justify-center border-b border-border pb-4">
                            Professional Traits
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {SKILLS.professional.map((skill) => (
                                <div key={skill.name} className="text-center p-4 bg-background/50 rounded-xl border border-border/50 hover:bg-background transition-colors">
                                    <div className="relative w-16 h-16 mx-auto mb-2">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle
                                                cx="32"
                                                cy="32"
                                                r="28"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                fill="transparent"
                                                className="text-border"
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
                                        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-text-primary">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-text-primary">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
}
