"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Circle } from "lucide-react";

const logs = [
    { type: "info", msg: "Initializing MERN stack services..." },
    { type: "success", msg: "MongoDB connected successfully" },
    { type: "info", msg: "Loading user profiles..." },
    { type: "warn", msg: "Rate limit threshold approaching for IP 192.168.1.1" },
    { type: "success", msg: "API Gateway active on port 3000" },
    { type: "info", msg: "Fetching latest project data from GitHub API" },
    { type: "error", msg: "Failed to load cached assets, retrying..." },
    { type: "success", msg: "Cache refreshed. Assets loaded." },
    { type: "info", msg: "User login: admin_user via OAuth" },
    { type: "info", msg: "Generating JWT token..." },
    { type: "success", msg: "Token dispatched to client" },
    { type: "info", msg: "Background job: 'Image Optimization' started" },
    { type: "success", msg: "Job completed in 234ms" },
];

export default function TerminalLogs() {
    const [visibleLogs, setVisibleLogs] = useState<typeof logs>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setVisibleLogs((prev) => {
                const next = [...prev, logs[index % logs.length]];
                if (next.length > 8) next.shift(); // Keep only last 8 logs
                return next;
            });
            index++;
        }, 1500); // Add new log every 1.5s

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [visibleLogs]);

    const getColor = (type: string) => {
        switch (type) {
            case "success": return "text-green-400";
            case "warn": return "text-yellow-400";
            case "error": return "text-red-400";
            default: return "text-blue-400";
        }
    };

    return (
        <section className="py-20 bg-black text-white font-mono text-sm relative z-10 border-y border-neutral-800">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 shadow-2xl">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-4 py-2 bg-neutral-800">
                        <div className="flex gap-2">
                            <Circle size={10} className="text-red-500 fill-red-500" />
                            <Circle size={10} className="text-yellow-500 fill-yellow-500" />
                            <Circle size={10} className="text-green-500 fill-green-500" />
                        </div>
                        <div className="flex items-center gap-2 text-neutral-400">
                            <Terminal size={12} />
                            <span className="text-xs">server_logs — zsh</span>
                        </div>
                        <div className="w-10"></div>
                    </div>

                    {/* Logs Content */}
                    <div ref={scrollRef} className="p-6 h-64 overflow-y-auto space-y-2">
                        {visibleLogs.map((log, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex gap-3"
                            >
                                <span className="text-neutral-500">[{new Date().toLocaleTimeString()}]</span>
                                <span className={`uppercase font-bold w-16 ${getColor(log.type)}`}>
                                    {log.type}
                                </span>
                                <span className="text-neutral-300">{log.msg}</span>
                            </motion.div>
                        ))}
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="h-4 w-2 bg-white inline-block ml-1"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
