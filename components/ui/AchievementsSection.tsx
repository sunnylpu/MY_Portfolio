"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS, CERTIFICATES } from "@/app/data";
import { Trophy, Award } from "lucide-react";
import TiltCard from "./TiltCard";

export default function AchievementsSection() {
    return (
        <section className="py-20 relative z-10" id="achievements">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                        Recognition
                    </span>
                    <h2 className="text-4xl font-bold font-display mb-4">
                        Awards & <span className="text-gradient">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Achievements */}
                    <TiltCard className="h-full">
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl h-full">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-yellow-500/20 rounded-xl text-yellow-500">
                                    <Trophy size={28} />
                                </div>
                                <h3 className="text-2xl font-bold">Achievements</h3>
                            </div>

                            <div className="space-y-6">
                                {ACHIEVEMENTS.map((ach, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group"
                                    >
                                        {ach.link ? (
                                            <a href={ach.link} target="_blank" rel="noopener noreferrer" className="block">
                                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                                                    <ach.icon size={24} className="text-primary mt-1 shrink-0 group-hover:text-accent transition-colors" />
                                                    <div>
                                                        <h4 className="font-bold text-lg leading-tight mb-1 flex items-center gap-2">
                                                            {ach.title}
                                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs border border-accent/30 text-accent px-2 py-0.5 rounded-full">View</span>
                                                        </h4>
                                                        <p className="text-neutral-400 text-sm mb-1">{ach.desc}</p>
                                                        <span className="text-xs font-mono text-neutral-500">{ach.date}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                                <ach.icon size={24} className="text-primary mt-1 shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-lg leading-tight mb-1">{ach.title}</h4>
                                                    <p className="text-neutral-400 text-sm mb-1">{ach.desc}</p>
                                                    <span className="text-xs font-mono text-neutral-500">{ach.date}</span>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </TiltCard>

                    {/* Certificates */}
                    <TiltCard className="h-full">
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl h-full">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-500">
                                    <Award size={28} />
                                </div>
                                <h3 className="text-2xl font-bold">Certifications</h3>
                            </div>

                            <div className="space-y-3">
                                {CERTIFICATES.map((cert, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-center justify-between gap-3 p-3 rounded-lg border border-dashed border-neutral-800 hover:border-primary/50 hover:bg-white/5 transition-colors group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                                            <span className="text-sm font-medium">{cert.name}</span>
                                        </div>
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                                        >
                                            View <Award size={12} />
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
}
