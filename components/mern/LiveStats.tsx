"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const StatInitial = {
    schemas: 0,
    apis: 0,
    users: 0
};

const StatTarget = {
    schemas: 12,
    apis: 34,
    users: 1240
};

export default function LiveStats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [stats, setStats] = useState(StatInitial);

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const interval = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;

                setStats({
                    schemas: Math.floor(StatTarget.schemas * progress),
                    apis: Math.floor(StatTarget.apis * progress),
                    users: Math.floor(StatTarget.users * progress)
                });

                if (currentStep >= steps) clearInterval(timer);
            }, interval);

            return () => clearInterval(timer);
        }
    }, [isInView]);

    return (
        <section ref={ref} className="py-20 bg-neutral-900 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            className="text-5xl font-bold font-display text-primary mb-2"
                        >
                            {stats.schemas}
                        </motion.div>
                        <p className="text-gray-400 uppercase tracking-wider text-sm">DB Schemas Designed</p>
                    </div>

                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-secondary/50 transition-colors">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            className="text-5xl font-bold font-display text-secondary mb-2"
                        >
                            {stats.apis}
                        </motion.div>
                        <p className="text-gray-400 uppercase tracking-wider text-sm">REST APIs Built</p>
                    </div>

                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/50 transition-colors">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            className="text-5xl font-bold font-display text-accent mb-2"
                        >
                            {stats.users}+
                        </motion.div>
                        <p className="text-gray-400 uppercase tracking-wider text-sm">Users Handled</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
