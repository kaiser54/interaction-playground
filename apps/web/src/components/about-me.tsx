import { useEffect } from "react";

export default function AboutMe() {
    useEffect(() => {
        const { body } = document;
        const previousOverflow = body.style.overflow;

        body.style.overflow = "hidden";

        return () => {
            body.style.overflow = previousOverflow;
        };
    }, []);

    return (
        <div className="h-svh w-screen fixed inset-0 overflow-y-auto"
            style={{ backgroundColor: "rgb(139, 92, 246)" }}
        >
            <section className="max-w-[900px] mx-auto space-y-4 w-full p-4">
                <h2 className="text-sm font-medium text-default">About Me</h2>
                <p className="text-4xl md:text-7xl text-white leading-32 tracking-tight font-semibold text-pretty">I am an interaction designer at OpenAI shaping ChatGPT. Previously, I spent time at Linear and GitHub. I focus on the intersection of form and function to create experiences that effortlessly become an extension of oneself. I believe in ideas over opinions, prototypes as the most valuable tool for collaboration, and exploring one hundred ideas to find the right one. I am driven by curiosity and strive for a high level of craftsmanship and excellence in my work.</p>
            </section>
        </div>
    )
}
