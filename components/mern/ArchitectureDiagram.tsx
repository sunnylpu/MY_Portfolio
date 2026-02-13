"use client";

import { motion } from "framer-motion";
import { Database, Server, Smartphone, Globe, Lock, Cloud } from "lucide-react";
import TiltCard from "../ui/TiltCard";

const FlowLine = ({ delay }: { delay: number }) => (
    <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1.5, delay, repeat: Infinity, repeatDelay: 3 }}
        className="h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 absolute top-1/2 left-0 -translate-y-1/2 z-0"
    />
);

import { LucideIcon } from "lucide-react";

const Node = ({ icon: Icon, label, color }: { icon: LucideIcon; label: string; color: string }) => (
    <motion.div
        whileHover={{ scale: 1.1 }}
        className={`flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm z-10 w-24 h-24 ${color}`}
    >
        <Icon size={32} className="mb-2" />
        <span className="text-xs font-bold">{label}</span>
    </motion.div>
);

export default function ArchitectureDiagram() {
    return (
        <section className="py-24 relative z-10 bg-neutral-900/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold font-display mb-4">
                        System <span className="text-gradient">Architecture</span>
                    </h2>
                    <p className="text-gray-400">High-level overview of the application infrastructure.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <TiltCard className="p-8 md:p-12 bg-black/40 border border-white/5 rounded-3xl relative overflow-hidden">

                        {/* Client Layer */}
                        <div className="flex justify-between items-center relative mb-16">
                            <Node icon={Smartphone} label="Mobile" color="text-purple-400" />
                            <div className="flex-1 relative mx-4 h-full">
                                <FlowLine delay={0} />
                            </div>
                            <Node icon={Globe} label="Web App" color="text-blue-400" />
                        </div>

                        {/* Server Layer */}
                        <div className="flex justify-center mb-16 relative">
                            <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400/50 to-green-400/50 left-1/2 -z-10" />
                            <Node icon={Server} label="API Gateway" color="text-green-400" />
                        </div>

                        {/* Services Layer */}
                        <div className="grid grid-cols-3 gap-8 relative">
                            <div className="flex flex-col items-center gap-4">
                                <div className="h-12 w-1 bg-green-400/20" />
                                <Node icon={Lock} label="Auth" color="text-yellow-400" />
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="h-12 w-1 bg-green-400/20" />
                                <Node icon={Database} label="MongoDB" color="text-green-500" />
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="h-12 w-1 bg-green-400/20" />
                                <Node icon={Cloud} label="CDN" color="text-cyan-400" />
                            </div>
                        </div>

                    </TiltCard>
                </div>
            </div>
        </section>
    );
}
