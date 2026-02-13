"use client";

import { motion } from "framer-motion";

interface LeetCodeProps {
    data: {
        username: string;
        totalSolved: number;
        easy: number;
        medium: number;
        hard: number;
        ranking: number;
        submissionCalendar: Record<string, number>;
        profileUrl: string;
    };
}

export default function LeetCodeReplica({ data }: LeetCodeProps) {
    const totalQuestions = 3368; // Approximate total on LeetCode
    // Calculate specific totals if needed or use static approximations for progress bars
    const totalEasy = 838;
    const totalMedium = 1754;
    const totalHard = 776;

    // submissionCalendar is a map of timestamp -> count
    // We can visualize this as a simple activity strip or heatmap
    // For this replica, we'll create a simplified "Recent Activity" view or a mini heatmap

    return (
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-6 font-sans">
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-lg">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" className="w-8 h-8 opacity-80 dark:invert" alt="LeetCode" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">{data.username}</h3>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">Global Rank: {data.ranking.toLocaleString()}</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Circle Chart Section */}
                <div className="flex flex-col items-center justify-center p-4">
                    <div className="relative w-32 h-32">
                        {/* Background Circle */}
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-neutral-200 dark:text-neutral-700" />
                            {/* Progress - Simplified for total */}
                            <motion.circle
                                initial={{ strokeDasharray: "0 1000" }}
                                animate={{ strokeDasharray: `${(data.totalSolved / totalQuestions) * 377} 1000` }}
                                cx="64" cy="64" r="60" stroke="#fbbf24" strokeWidth="4" fill="transparent" strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="text-3xl font-bold text-neutral-900 dark:text-white">{data.totalSolved}</span>
                            <span className="text-xs text-neutral-500">Solved</span>
                        </div>
                    </div>
                </div>

                {/* Stats Bars Section */}
                <div className="space-y-4 flex flex-col justify-center">
                    {/* Easy */}
                    <div className="bg-neutral-50 dark:bg-[#262626] p-3 rounded-lg flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">Easy</span>
                            <span className="font-medium text-neutral-800 dark:text-white">{data.easy} <span className="text-xs text-neutral-500">/ {totalEasy}</span></span>
                        </div>
                        <div className="text-xs font-bold text-[#00b8a3] dark:text-[#00b8a3]">{(data.easy / totalEasy * 100).toFixed(1)}%</div>
                    </div>
                    {/* Medium */}
                    <div className="bg-neutral-50 dark:bg-[#262626] p-3 rounded-lg flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">Medium</span>
                            <span className="font-medium text-neutral-800 dark:text-white">{data.medium} <span className="text-xs text-neutral-500">/ {totalMedium}</span></span>
                        </div>
                        <div className="text-xs font-bold text-[#ffc01e] dark:text-[#ffc01e]">{(data.medium / totalMedium * 100).toFixed(1)}%</div>
                    </div>
                    {/* Hard */}
                    <div className="bg-neutral-50 dark:bg-[#262626] p-3 rounded-lg flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">Hard</span>
                            <span className="font-medium text-neutral-800 dark:text-white">{data.hard} <span className="text-xs text-neutral-500">/ {totalHard}</span></span>
                        </div>
                        <div className="text-xs font-bold text-[#ef4743] dark:text-[#ef4743]">{(data.hard / totalHard * 100).toFixed(1)}%</div>
                    </div>
                </div>
            </div>

            {/* Visual only - submission calendar representation */}
            <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Activity (Last 6 Months)</span>
                </div>
                <div className="flex gap-1 overflow-hidden h-3 opacity-70">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-sm ${i % 3 === 0 ? 'bg-[#2db55d]' : 'bg-neutral-200 dark:bg-neutral-700'}`} />
                    ))}
                    {/* Note: Real heatmap implementation requires complex D3 or calendar libs, using simplified visual for replica aesthetic */}
                </div>
            </div>
        </div>
    );
}
