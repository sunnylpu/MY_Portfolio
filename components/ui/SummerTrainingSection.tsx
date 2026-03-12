"use client";

import { motion } from "framer-motion";
import { SUMMER_TRAINING } from "@/app/data";
import { Briefcase } from "lucide-react";

export default function SummerTrainingSection() {
    return (
        <section className="py-20 relative z-10" id="training">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Summer <span className="text-gradient">Training</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {SUMMER_TRAINING.map((training, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
                            
                            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                                <div className="md:w-1/3 shrink-0">
                                    <div className="inline-flex p-4 bg-primary/20 rounded-xl text-primary mb-6">
                                        <Briefcase size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{training.institution}</h3>
                                    <p className="text-primary font-medium mb-2">{training.degree}</p>
                                    <p className="text-neutral-500 font-mono text-sm">{training.period}</p>
                                </div>
                                
                                <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
                                    <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                                        {training.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {training.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-neutral-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
