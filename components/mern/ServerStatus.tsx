"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Globe, Clock } from "lucide-react";

interface HealthData {
    status: string;
    latency: number;
    region: string;
    uptime: number;
}

export default function ServerStatus() {
    const [data, setData] = useState<HealthData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/health");
                const json = await res.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch health data", error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 5000); // Poll every 5 seconds
        return () => clearInterval(interval);
    }, []);

    if (loading) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 shadow-2xl flex items-center gap-6 text-xs font-mono"
            >
                {/* Status Indicator */}
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                        <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
                    </div>
                    <span className="font-bold text-green-600 dark:text-green-400">ONLINE</span>
                </div>

                {/* Latency */}
                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                    <Zap size={14} className="text-yellow-500" />
                    <span>{data?.latency}ms</span>
                </div>

                {/* Region */}
                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                    <Globe size={14} className="text-blue-500" />
                    <span>{data?.region}</span>
                </div>

                {/* Uptime */}
                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                    <Clock size={14} className="text-purple-500" />
                    <span>{Math.floor(data?.uptime || 0)}s</span>
                </div>
            </motion.div>
        </div>
    );
}
