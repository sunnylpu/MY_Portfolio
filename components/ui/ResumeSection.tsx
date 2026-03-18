"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, X } from "lucide-react";
import { PROFILE } from "@/app/data";
import { useState } from "react";

export default function ResumeSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const resumeLink = PROFILE.socials.find(s => s.name === "Resume")?.href || "#";
    // Convert view link to preview link for iframe embedding
    const previewLink = resumeLink.replace("/view?usp=sharing", "/preview").replace("/view", "/preview");

    return (
        <section id="resume" className="relative py-24 bg-neutral-50 dark:bg-neutral-900/50 overflow-hidden flex items-center justify-center min-h-[40vh]">
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl h-[85vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                        >
                            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/50 backdrop-blur-md">
                                <h3 className="text-xl font-bold text-text-primary">Preview Resume</h3>
                                <button 
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 rounded-full hover:bg-white/10 text-text-secondary hover:text-white transition-colors cursor-pointer"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="flex-1 w-full bg-neutral-100 dark:bg-neutral-900 p-0 md:p-4 rounded-b-2xl">
                                <iframe 
                                    src={previewLink} 
                                    className="w-full h-full border-none rounded-xl bg-white shadow-inner"
                                    title="Resume Preview"
                                    allow="autoplay"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container mx-auto px-6 text-center z-10"
            >
                <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/30 dark:bg-black/30 p-12 rounded-[3rem] border border-neutral-200 dark:border-neutral-800 shadow-2xl relative overflow-hidden">
                     {/* Decorative background elements inside the card */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
                     <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

                    <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
                        Want to see the <span className="text-gradient hover:text-primary transition-colors duration-300">full picture?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
                        Download my comprehensive resume to dive deeper into my professional experience, academic background, and technical skillset.
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <motion.button
                            onClick={() => setIsModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary/50 text-text-primary font-semibold rounded-full hover:bg-primary/10 hover:border-primary transition-all duration-300 shadow-lg cursor-pointer"
                        >
                            <Eye size={20} className="text-primary" />
                            View Resume
                        </motion.button>

                        <motion.a
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                        >
                            <Download size={20} />
                            Download
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
