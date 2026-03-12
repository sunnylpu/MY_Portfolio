"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROFILE } from "@/app/data";
import Magnetic from "./Magnetic";
import { ArrowDown } from "lucide-react";

const Letter = ({ children, index }: { children: string; index: number }) => {
    return (
        <span className="inline-block overflow-hidden pb-4 -mb-4">
            <motion.span
                initial={{ y: "150%" }}
                animate={{ y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                    delay: index * 0.03,
                }}
                className="inline-block hover:text-primary transition-colors duration-300"
            >
                {children === " " ? "\u00A0" : children}
            </motion.span>
        </span>
    );
};

const Title = ({ text }: { text: string }) => {
    return (
        <div className="overflow-hidden flex flex-wrap justify-center gap-x-2 md:gap-x-4">
            {text.split(" ").map((word, wordIdx) => (
                <div key={wordIdx} className="flex">
                    {word.split("").map((char, i) => (
                        <Letter key={`${wordIdx}-${i}`} index={wordIdx * 5 + i}>
                            {char}
                        </Letter>
                    ))}
                </div>
            ))}
        </div>
    );
};

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
        <span className="inline-block">
            {text.split("").map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.1,
                        delay: delay + index * 0.03,
                        ease: "linear"
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
};

const TerminalBio = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="w-full max-w-2xl mx-auto mt-8 bg-neutral-950/80 rounded-xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-md text-left z-20 relative"
        >
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10 gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-neutral-400 font-mono ml-2 flex-1 text-center pr-10">~/developer/portfolio</div>
            </div>
            <div className="p-5 font-mono text-sm md:text-base leading-relaxed text-gray-300">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.2 }}
                >
                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-white">npm run build --premium</span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.8 }}
                    className="text-neutral-500 my-1"
                >
                    Building high-performance interfaces...
                </motion.div>
                <div className="mt-2 text-emerald-300 flex">
                    <span className="mr-2 text-green-400">✔</span> 
                    <TypewriterText text={text} delay={delay + 1.2} />
                </div>
            </div>
        </motion.div>
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
                <h1 className="text-[9vw] leading-[0.8] font-display font-bold tracking-tighter mix-blend-difference mb-4">
                    <Title text={PROFILE.name} />
                </h1>

                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-2xl md:text-3xl font-light text-primary mt-8 mb-2"
                >
                    {PROFILE.title}
                </motion.div>

                {/* Terminal Effect for Bio */}
                <TerminalBio text={PROFILE.bio} delay={1.2} />

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
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:bg-card backdrop-blur-sm transition-colors text-text-primary shadow-sm hover:shadow-md"
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
                    <ArrowDown size={24} className="text-text-secondary" />
                </div>
            </motion.div>
        </div>
    );
}
