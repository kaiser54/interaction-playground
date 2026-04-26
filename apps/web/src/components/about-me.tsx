import { useEffect } from "react";
import { motion } from "motion/react";
import { AVATAR_SHARED_TRANSITION } from "./header";

type AboutMeProps = {
    onClose: () => void;
    AVATAR_LAYOUT_ID: string;
};

export function AboutMe({ onClose, AVATAR_LAYOUT_ID }: AboutMeProps) {
    useEffect(() => {
        const { body } = document;
        const previousOverflow = body.style.overflow;

        body.style.overflow = "hidden";

        return () => {
            body.style.overflow = previousOverflow;
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="h-svh w-screen fixed inset-0 overflow-y-auto pt-[33svh] pb-[20vh] overscroll-none z-55"
            onClick={onClose}
            style={{ backgroundColor: "rgb(139, 92, 246)" }}
        >
            <section
                className="max-w-[900px] mx-auto space-y-4 w-full p-4"
                onClick={(event) => event.stopPropagation()}
            >
                <motion.img
                    layoutId={AVATAR_LAYOUT_ID}
                    transition={AVATAR_SHARED_TRANSITION}
                    src="https://github.com/shadcn.png"
                    alt="Portrait of Temitope Agboola"
                    className="size-50 md:size-85 mx-auto object-cover"
                    style={{ borderRadius: "12px", willChange: "transform, border-radius" }}
                />
                <div className="">
                    <h2 className="text-sm font-medium text-default">About Me</h2>
                    <p className="text-4xl md:text-7xl text-white leading-32 tracking-tight font-semibold text-pretty">I am an interaction designer at OpenAI shaping ChatGPT. Previously, I spent time at Linear and GitHub. I focus on the intersection of form and function to create experiences that effortlessly become an extension of oneself. I believe in ideas over opinions, prototypes as the most valuable tool for collaboration, and exploring one hundred ideas to find the right one. I am driven by curiosity and strive for a high level of craftsmanship and excellence in my work.</p>
                </div>
            </section>
        </motion.div>
    )
}
