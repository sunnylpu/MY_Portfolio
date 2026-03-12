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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay }}
            className="text-lg md:text-xl text-text-secondary mt-6 max-w-2xl mx-auto leading-relaxed"
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.1,
                        delay: delay + index * 0.03, // Typing speed
                        ease: "linear"
                    }}
                >
                    {char}
                </motion.span>
            ))}
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

                {/* Typing effect for Bio */}
                <TypewriterText text={PROFILE.bio} delay={1.5} />

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
