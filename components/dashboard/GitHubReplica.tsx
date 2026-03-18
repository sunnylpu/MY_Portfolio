"use client";

import { Book, Star } from "lucide-react";

interface GitHubProps {
    data: {
        username: string;
        repos: number;
        followers: number;
        stars: number;
        lastCommit: string;
        avatar: string;
        profileUrl: string;
    };
}

export default function GitHubReplica({ data }: GitHubProps) {
    return (
        <div className="bg-white dark:bg-[#0d1117] rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-6 font-sans">
            <div className="flex flex-col gap-6">

                {/* Header */}
                <div className="flex items-start gap-4">
                    <div className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={data.avatar} alt="Profile" className="w-20 h-20 rounded-full border border-neutral-200 dark:border-white/10" />
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-white dark:bg-[#0d1117] rounded-full flex items-center justify-center border border-neutral-200 dark:border-white/10">
                            <div className="text-[10px]">😊</div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-neutral-900 dark:text-[#c9d1d9]">
                            <a href={data.profileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline transition-colors">
                                {data.username}
                            </a>
                        </h2>
                        <div className="text-neutral-500 dark:text-[#8b949e]">Full Stack Developer</div>

                        <div className="flex items-center gap-4 mt-3 text-sm text-neutral-600 dark:text-[#8b949e]">
                            <span className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
                                <strong className="text-neutral-900 dark:text-[#c9d1d9]">{data.followers}</strong> followers
                            </span>
                            <span className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
                                <strong className="text-neutral-900 dark:text-[#c9d1d9]">12</strong> following
                            </span>
                            <span className="flex items-center gap-1">
                                <Star size={14} /> <strong className="text-neutral-900 dark:text-[#c9d1d9]">{data.stars}</strong>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Pinned Repos Style Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent text-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <Book size={14} className="text-neutral-500" />
                            <span className="font-bold text-blue-600 dark:text-[#58a6ff]">resume_project</span>
                            <span className="px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500">Public</span>
                        </div>
                        <p className="text-xs text-neutral-500 mb-3">Portfolio website built with Next.js 15 & MERN stack.</p>
                        <div className="flex items-center gap-4 text-xs text-neutral-500">
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400"></span> JavaScript</span>
                            <span className="flex items-center gap-1"><Star size={12} /> {data.stars}</span>
                        </div>
                    </div>

                    <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent text-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <Book size={14} className="text-neutral-500" />
                            <span className="font-bold text-blue-600 dark:text-[#58a6ff]">leetcode-solutions</span>
                            <span className="px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500">Public</span>
                        </div>
                        <p className="text-xs text-neutral-500 mb-3">Collection of optimized solutions for LeetCode problems.</p>
                        <div className="flex items-center gap-4 text-xs text-neutral-500">
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> C++</span>
                            <span className="flex items-center gap-1"><Star size={12} /> 4</span>
                        </div>
                    </div>
                </div>

                {/* Contribution Graph Replica */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-neutral-900 dark:text-[#c9d1d9]">284 contributions in the last year</span>
                    </div>
                    <div className="border border-neutral-200 dark:border-neutral-800 rounded-md p-2 overflow-hidden">
                        <div className="flex gap-[2px]">
                            {Array.from({ length: 52 }).map((_, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-[2px]">
                                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                                        // Simulate random contribution density
                                        const density = Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0;
                                        const colors = [
                                            "bg-[#ebedf0] dark:bg-[#161b22]", // 0
                                            "bg-[#9be9a8] dark:bg-[#0e4429]", // 1
                                            "bg-[#40c463] dark:bg-[#006d32]", // 2
                                            "bg-[#30a14e] dark:bg-[#26a641]", // 3
                                            "bg-[#216e39] dark:bg-[#39d353]", // 4
                                        ];
                                        return (
                                            <div key={dayIndex} className={`w-[10px] h-[10px] rounded-[2px] ${colors[density]}`} />
                                        )
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-2 text-xs text-neutral-500">
                        <span>Learn how we count contributions</span>
                        <div className="flex items-center gap-1">
                            <span>Less</span>
                            <div className="w-[10px] h-[10px] bg-[#ebedf0] dark:bg-[#161b22] rounded-[2px]"></div>
                            <div className="w-[10px] h-[10px] bg-[#9be9a8] dark:bg-[#0e4429] rounded-[2px]"></div>
                            <div className="w-[10px] h-[10px] bg-[#40c463] dark:bg-[#006d32] rounded-[2px]"></div>
                            <div className="w-[10px] h-[10px] bg-[#30a14e] dark:bg-[#26a641] rounded-[2px]"></div>
                            <div className="w-[10px] h-[10px] bg-[#216e39] dark:bg-[#39d353] rounded-[2px]"></div>
                            <span>More</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
