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
                    <h2 className="text-4xl font-bold font-display mb-4 text-text-primary">
                        Professional <span className="text-gradient">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {CERTIFICATES.map((cert, i) => (
                        <TiltCard key={i} className="h-64 cursor-pointer group">
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full w-full rounded-3xl overflow-hidden relative drop-shadow-2xl"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${cert.image})` }}
                                />
                                
                                {/* Dark Gradient Overlay for readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/80 transition-colors duration-500" />
                                
                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="bg-blue-500/20 w-fit p-2 rounded-lg text-blue-400 mb-3 backdrop-blur-md border border-white/10">
                                        <Award size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white leading-tight mb-2 group-hover:text-blue-200 transition-colors">
                                        {cert.name}
                                    </h3>
                                    
                                    <div className="flex items-center gap-2 text-sm font-medium text-blue-400 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        View Certificate <Award size={14} />
                                    </div>
                                </div>
                            </a>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
