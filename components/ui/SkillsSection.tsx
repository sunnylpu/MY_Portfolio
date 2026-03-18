"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const [isOrbitView, setIsOrbitView] = useState(true);

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

                        {/* Toggle Button */}
                        <button 
                            onClick={() => setIsOrbitView(!isOrbitView)}
                            className={`absolute z-50 bg-background border transition-all duration-500 flex items-center justify-center shadow-[0_0_30px_rgba(var(--primary),0.3)] cursor-pointer group hover:border-primary/80 ${
                                isOrbitView 
                                    ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-border rounded-full" 
                                    : "top-6 right-6 translate-x-0 translate-y-0 w-14 h-14 border-primary rounded-xl"
                            }`}
                            title={isOrbitView ? "View as Grid" : "View as Orbit"}
                        >
                            <Code2 size={isOrbitView ? 40 : 24} className="text-primary animate-pulse group-hover:scale-110 transition-transform" />
                        </button>

                        <AnimatePresence mode="wait">
                            {isOrbitView ? (
                                <motion.div
                                    key="orbit"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0"
                                >
                                    {/* Rings */}
                                    <OrbitRing radius={140} speed={25} reverse={true} items={SKILLS.tools} iconSize={48} />
                                    <OrbitRing radius={240} speed={35} reverse={false} items={SKILLS.technical} iconSize={56} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="grid"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full max-w-5xl z-30 pt-16 pb-8 px-4"
                                    style={{ maxHeight: "600px", overflowY: "auto" }}
                                >
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                        {[...SKILLS.technical, ...SKILLS.tools].map((item: any, i: number) => (
                                            <motion.div
                                                key={item.name}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.03 }}
                                                className="bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-card/50 transition-all group shadow-sm hover:shadow-md"
                                            >
                                                {item.icon ? (
                                                    <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                        <img src={item.icon} alt={item.name} className="w-12 h-12 object-contain drop-shadow-sm" />
                                                    </div>
                                                ) : (
                                                    <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-primary/10 rounded-full">
                                                        <Code2 size={24} className="text-primary" />
                                                    </div>
                                                )}
                                                <span className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors text-center">
                                                    {item.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    <TiltCard className="bg-card border border-border p-8 rounded-2xl md:col-span-2 lg:col-span-3 shadow-sm">
                        <h3 className="text-2xl font-bold mb-6 text-secondary flex justify-center border-b border-border pb-4">
                            Professional Traits
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {SKILLS.professional.map((skill: any) => (
                                <div key={skill.name} className="group relative overflow-hidden text-center p-6 bg-background/50 rounded-2xl border border-border/50 hover:bg-background transition-all hover:scale-105 shadow-sm min-h-[220px] flex flex-col justify-end">
                                    {skill.image && (
                                        <>
                                            <img src={skill.image} alt={skill.name} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-0" />
                                        </>
                                    )}
                                    
                                    <div className="relative z-10 w-full flex flex-col items-center">
                                        <div className="relative w-16 h-16 mx-auto mb-4 drop-shadow-md">
                                            <svg className="w-full h-full transform -rotate-90 drop-shadow-lg">
                                                <circle
                                                    cx="32"
                                                    cy="32"
                                                    r="28"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    fill="transparent"
                                                    className="text-background/80"
                                                />
                                                <motion.circle
                                                    cx="32"
                                                    cy="32"
                                                    r="28"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    fill="transparent"
                                                    className="text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]"
                                                    initial={{ strokeDasharray: "175.9", strokeDashoffset: "175.9" }}
                                                    whileInView={{ strokeDashoffset: String(175.9 - (175.9 * skill.level) / 100) }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                />
                                            </svg>
                                            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-md">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <p className="text-base font-bold text-white tracking-wide drop-shadow-md">{skill.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
}
