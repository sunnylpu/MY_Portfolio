"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCw } from "lucide-react";

export default function ApiPlayground() {
    const [method, setMethod] = useState("GET");
    const [endpoint, setEndpoint] = useState("/api/users");
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const simulateRequest = () => {
        setLoading(true);
        setResponse(null);

        setTimeout(() => {
            setLoading(false);
            setResponse(JSON.stringify({
                status: 200,
                data: [
                    { id: 1, name: "Sunny Tyagi", role: "Developer" },
                    { id: 2, name: "Recruiter", role: "Hiring Manager" }
                ],
                message: "Data fetched successfully"
            }, null, 2));
        }, 1200);
    };

    return (
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold font-display mb-4">
                        API <span className="text-gradient">Playground</span>
                    </h2>
                    <p className="text-gray-400">Test the backend directly from the browser.</p>
                </motion.div>

                <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl overflow-hidden">
                    {/* Request Bar */}
                    <div className="p-4 bg-neutral-100 dark:bg-neutral-800/50 border-b border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row gap-4">
                        <select
                            value={method}
                            onChange={(e) => setMethod(e.target.value)}
                            className="bg-transparent font-bold text-neutral-800 dark:text-neutral-200 focus:outline-none border border-neutral-300 dark:border-neutral-700 rounded-lg px-3 py-2"
                        >
                            <option>GET</option>
                            <option>POST</option>
                            <option>PUT</option>
                            <option>DELETE</option>
                        </select>

                        <input
                            type="text"
                            value={endpoint}
                            onChange={(e) => setEndpoint(e.target.value)}
                            className="flex-1 bg-transparent font-mono text-sm focus:outline-none border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 text-neutral-600 dark:text-neutral-400"
                        />

                        <button
                            onClick={simulateRequest}
                            disabled={loading}
                            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50"
                        >
                            {loading ? <RotateCw className="animate-spin" size={18} /> : <Play size={18} />}
                            Send
                        </button>
                    </div>

                    {/* Response Area */}
                    <div className="p-6 bg-neutral-50 dark:bg-black min-h-[300px] font-mono text-sm overflow-auto">
                        {loading && (
                            <div className="flex items-center justify-center h-full text-neutral-400">
                                Processing request...
                            </div>
                        )}

                        {!loading && !response && (
                            <div className="flex items-center justify-center h-full text-neutral-400">
                                Ready to send request
                            </div>
                        )}

                        {response && (
                            <motion.pre
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-green-600 dark:text-green-400"
                            >
                                {response}
                            </motion.pre>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
