import { useEffect } from "react";
import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";
import { cn } from "@workspace/ui/lib/utils";

type AboutMeProps = {
    onClose: () => void;
};

export function AboutMe({ onClose }: AboutMeProps) {
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
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="h-svh w-screen fixed inset-0 overflow-y-auto pt-[33svh] pb-[20vh] overscroll-none z-10"
            onClick={onClose}
            style={{ backgroundColor: "rgb(139, 92, 246)" }}
        >
            <section
                className="max-w-[900px] mx-auto space-y-4 w-full p-4"
                onClick={(event) => event.stopPropagation()}
            >
                <Avatar className="size-85 mx-auto">
                    <AvatarImage className={cn("rounded-md")} src="https://github.com/shadcn.png" alt="Portrait of Temitope Agboola" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="hidden">
                    <h2 className="text-sm font-medium text-default">About Me</h2>
                    <p className="text-4xl md:text-7xl text-white leading-32 tracking-tight font-semibold text-pretty">I am an interaction designer at OpenAI shaping ChatGPT. Previously, I spent time at Linear and GitHub. I focus on the intersection of form and function to create experiences that effortlessly become an extension of oneself. I believe in ideas over opinions, prototypes as the most valuable tool for collaboration, and exploring one hundred ideas to find the right one. I am driven by curiosity and strive for a high level of craftsmanship and excellence in my work.</p>
                </div>
            </section>
        </motion.div>
    )
}
