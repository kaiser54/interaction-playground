import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { AboutMe } from "./about-me";

export function Header() {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    return (
        <>
            <div className="container-wrapper pt-0 mb-8">
                <button
                    type="button"
                    aria-label="Open About Me"
                    className="rounded-full cursor-pointer"
                    onClick={() => setIsAboutOpen(true)}
                >
                    <Avatar className="size-10">
                        <AvatarImage src="https://github.com/shadcn.png" alt="Portrait of Temitope Agboola" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </button>
            </div>

            <AnimatePresence>
                {isAboutOpen ? <AboutMe onClose={() => setIsAboutOpen(false)} /> : null}
            </AnimatePresence>
        </>
    )
}
