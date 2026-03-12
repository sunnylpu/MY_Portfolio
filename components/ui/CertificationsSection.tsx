"use client";

import { motion } from "framer-motion";
import { CERTIFICATES } from "@/app/data";
import { Award } from "lucide-react";
import TiltCard from "./TiltCard";

export default function CertificationsSection() {
    return (
        <section className="py-20 relative z-10" id="certifications">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                        Continual Learning
                    </span>
                    <h2 className="text-4xl font-bold font-display mb-4">
                        Professional <span className="text-gradient">Certifications</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <TiltCard className="h-full">
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl h-full">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-500">
                                    <Award size={28} />
                                </div>
                                <h3 className="text-2xl font-bold">Certifications</h3>
                            </div>

                            <div className="space-y-4">
                                {CERTIFICATES.map((cert, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-center justify-between gap-3 p-4 rounded-xl border border-dashed border-neutral-800 hover:border-primary/50 hover:bg-white/5 transition-colors group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                                            <span className="text-base font-medium">{cert.name}</span>
                                        </div>
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                                        >
                                            View <Award size={14} />
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
