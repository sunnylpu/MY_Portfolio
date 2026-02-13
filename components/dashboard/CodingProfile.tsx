"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LeetCodeReplica from "./LeetCodeReplica";
import GitHubReplica from "./GitHubReplica";

interface CodingData {
    github: {
        username: string;
        repos: number;
        followers: number;
        stars: number;
        lastCommit: string;
        lastActive: string;
        avatar: string;
        profileUrl: string;
    } | null;
    leetcode: {
        username: string;
        totalSolved: number;
        easy: number;
        medium: number;
        hard: number;
        ranking: number;
        submissionCalendar: Record<string, number>;
        profileUrl: string;
    } | null;
}

export default function CodingProfile() {
    const [data, setData] = useState<CodingData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/coding-stats")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="py-20 relative z-10 text-center">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-40 w-full max-w-4xl bg-white/5 rounded-3xl mb-8"></div>
                    <p className="text-neutral-500">Syncing with Developer Networks...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 relative z-10" id="coding-profile">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                        Live Metrics
                    </span>
                    <h2 className="text-4xl font-bold font-display mb-4">
                        Coding <span className="text-gradient">Activity</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Real-time data fetched from GitHub & LeetCode APIs. Visualized to match the native platforms.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {/* GitHub Container */}
                    {data?.github && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <GitHubReplica data={data.github} />
                        </motion.div>
                    )}

                    {/* LeetCode Container */}
                    {data?.leetcode && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <LeetCodeReplica data={data.leetcode} />
                        </motion.div>
                    )}

                </div>
            </div>
        </section>
    );
}
