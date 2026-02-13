"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROFILE } from "@/app/data";
import Magnetic from "./Magnetic";
import { ArrowDown } from "lucide-react";

const Letter = ({ children, index }: { children: string; index: number }) => {
    return (
        <motion.span
            initial={{ y: 400 }}
            animate={{ y: 0 }}
            transition={{
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.95],
                delay: index * 0.05,
            }}
            className="inline-block hover:text-primary transition-colors duration-300"
        >
            {children === " " ? "\u00A0" : children}
        </motion.span>
    );
};

const Title = ({ text }: { text: string }) => {
    return (
        <div className="overflow-hidden">
            {text.split("").map((char, i) => (
                <Letter key={i} index={i}>
                    {char}
                </Letter>
            ))}
        </div>
    );
};

export default function HeroSection() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

    return (
        <div
            ref={container}
            className="h-screen overflow-hidden flex flex-col items-center justify-center relative"
        >
            <motion.div style={{ y }} className="relative z-10 text-center">
                <h1 className="text-[12vw] leading-[0.8] font-display font-bold uppercase tracking-tighter mix-blend-difference mb-4">
                    <Title text={PROFILE.name} />
                </h1>

                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-2xl md:text-3xl font-light text-gray-400 mt-8"
                >
                    {PROFILE.title}
                </motion.div>

                <div className="flex gap-4 justify-center mt-12">
                    {PROFILE.socials.map((social, i) => (
                        <Magnetic key={social.name}>
                            <motion.a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", delay: 1.2 + i * 0.1 }}
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-colors text-white"
                            >
                                <social.icon size={20} />
                            </motion.a>
                        </Magnetic>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="animate-bounce">
                    <ArrowDown size={24} className="text-gray-400" />
                </div>
            </motion.div>
        </div>
    );
}
