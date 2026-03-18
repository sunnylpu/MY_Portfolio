"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/app/data";
import { Mail, Copy, Check, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import Magnetic from "./Magnetic";

export default function ContactSection() {
    const [copied, setCopied] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const copyEmail = () => {
        navigator.clipboard.writeText(PROFILE.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            
            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Failed to send message.");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("An unexpected error occurred.");
            setTimeout(() => setStatus("idle"), 4000);
        }
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

                        <div className="max-w-2xl mx-auto mt-12 bg-card/60 backdrop-blur-xl border border-border/50 p-6 md:p-10 rounded-3xl shadow-lg relative overflow-hidden text-left">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-secondary ml-1">Your Name</label>
                                        <input 
                                            type="text" 
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans outline-hidden"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-secondary ml-1">Your Email</label>
                                        <input 
                                            type="email" 
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans outline-hidden"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-secondary ml-1">Message</label>
                                    <textarea 
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans resize-none outline-hidden"
                                        placeholder="Hi Sunny, I'd like to discuss a project..."
                                    />
                                </div>
                                
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                                    <div className="flex-1">
                                        {status === "success" && <p className="text-green-500 text-sm font-medium">Message sent successfully!</p>}
                                        {status === "error" && <p className="text-red-500 text-sm font-medium">{errorMessage}</p>}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === "loading" || status === "success"}
                                        className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white shadow-sm hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] rounded-full text-base font-medium overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-75 disabled:hover:scale-100 cursor-pointer"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {status === "loading" ? (
                                                <><Loader2 size={18} className="animate-spin" /> Sending...</>
                                            ) : status === "success" ? (
                                                <><Check size={18} /> Sent</>
                                            ) : (
                                                <><Send size={18} /> Send Message</>
                                            )}
                                        </span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    </button>
                                </div>
                            </form>
                            
                            <div className="mt-6 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-text-secondary">
                                <span>Or reach me directly at:</span>
                                <button
                                    onClick={copyEmail}
                                    className="flex items-center gap-2 hover:text-primary transition-colors bg-background/50 px-3 py-1.5 rounded-lg border border-border/50 cursor-pointer"
                                >
                                    {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                    <span>{PROFILE.email}</span>
                                </button>
                            </div>
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
