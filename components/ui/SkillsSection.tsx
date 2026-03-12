"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SKILLS, PROFILE } from "@/app/data";
import TiltCard from "./TiltCard";
import { Code2 } from "lucide-react";

const OrbitRing = ({ radius, speed, reverse, items, iconSize = 48 }: any) => {
    return (
        <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: reverse ? -360 : 360 }}
            transition={{ duration: speed, ease: "linear", repeat: Infinity }}
            className="absolute rounded-full border border-border/20 border-dashed"
            style={{ width: radius * 2, height: radius * 2, top: `calc(50% - ${radius}px)`, left: `calc(50% - ${radius}px)` }}
        >
            {items.map((item: any, i: number) => {
                const angle = (i / items.length) * 360;
                return (
                    <motion.div
                        key={item.name}
                        className="absolute origin-center"
                        style={{
                            top: "50%",
                            left: "50%",
                            width: iconSize,
                            height: iconSize,
                            marginTop: -iconSize / 2,
                            marginLeft: -iconSize / 2,
                            transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                        }}
                    >
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: reverse ? 360 : -360 }}
                            transition={{ duration: speed, ease: "linear", repeat: Infinity }}
                            className="bg-card/90 backdrop-blur-md border border-border/50 rounded-full flex items-center justify-center p-2.5 shadow-lg shadow-black/5 hover:scale-125 hover:border-primary transition-all group relative z-10"
                            style={{ width: "100%", height: "100%" }}
                        >
                            {item.icon && <img src={item.icon} alt={item.name} className="w-full h-full object-contain pointer-events-none drop-shadow-md" />}
                            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-text-primary whitespace-nowrap bg-background/90 px-2 py-1 rounded-md border border-border pointer-events-none shadow-xl">
                                {item.name}
                            </span>
                        </motion.div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Massive Orbital Canvas */}
                    <div className="lg:col-span-3 bg-gradient-to-b from-card/30 to-background border border-border/50 rounded-3xl p-8 relative overflow-hidden flex items-center justify-center min-h-[600px] shadow-sm">
                        
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

                        {/* Center Core */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-background border border-border rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(var(--primary),0.3)] z-20">
                            <Code2 size={40} className="text-primary animate-pulse" />
                        </div>

                        {/* Rings */}
                        <OrbitRing radius={140} speed={25} reverse={true} items={SKILLS.tools} iconSize={48} />
                        <OrbitRing radius={240} speed={35} reverse={false} items={SKILLS.technical} iconSize={56} />
                        
                    </div>
                </div>

                <div className="grid grid-cols-1">
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
