"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/app/data";
import { Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import Magnetic from "./Magnetic";

export default function ContactSection() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(PROFILE.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const currentYear = new Date().getFullYear();

    return (
        <section className="relative min-h-[80vh] flex flex-col justify-end bg-background text-text-primary overflow-hidden border-t border-border/20" id="contact">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-transparent z-0 pointer-events-none" />

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold font-display mb-8 text-text-primary">
                            Let&apos;s create something <br />
                            <span className="text-primary">extraordinary</span> together.
                        </h2>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
                            <Magnetic>
                                <a
                                    href={`mailto:${PROFILE.email}`}
                                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white shadow-sm hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] rounded-full text-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Mail size={20} />
                                        Send me an email
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </a>
                            </Magnetic>

                            <button
                                onClick={copyEmail}
                                className="group flex items-center gap-2 px-8 py-4 bg-card border border-border rounded-full hover:bg-background transition-colors backdrop-blur-sm shadow-sm"
                            >
                                {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
                                <span>{copied ? "Copied!" : "Copy Email"}</span>
                            </button>
                        </div>
                    </motion.div>
                </div>

                <div className="border-t border-border/50 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h3 className="text-2xl font-bold font-display text-text-primary">{PROFILE.name}</h3>
                        <p className="text-text-secondary">{PROFILE.title}</p>
                    </div>

                    <div className="flex gap-6">
                        {PROFILE.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-secondary hover:text-text-primary transition-colors relative group"
                            >
                                {social.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    <div className="text-text-secondary/80 text-sm">
                        © {currentYear} All rights reserved.
                    </div>
                </div>
            </div>
        </section>
    );
}
