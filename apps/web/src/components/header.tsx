import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useState } from "react";
import { AboutMe } from "./about-me";

const AVATAR_LAYOUT_ID = "profile-avatar";
// eslint-disable-next-line react-refresh/only-export-components
export const AVATAR_SHARED_TRANSITION = {
    layout: { duration: 0.28, ease: [0.23, 1, 0.32, 1]  as const },
    borderRadius: { duration: 0.22, ease: [0.23, 1, 0.32, 0]  as const },
};

export function Header() {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    return (
        <LayoutGroup id="about-me-transition">
            <div className="container-wrapper pt-0 mb-8">
                <button
                    type="button"
                    aria-label="Open About Me"
                    className="rounded-full cursor-pointer"
                    onClick={() => setIsAboutOpen(true)}
                >
                    {!isAboutOpen ? (
                        <motion.img
                            layoutId={AVATAR_LAYOUT_ID}
                            transition={AVATAR_SHARED_TRANSITION}
                            src="https://github.com/shadcn.png"
                            alt="Portrait of Temitope Agboola"
                            className="size-10 object-cover"
                            style={{ borderRadius: "9999px", willChange: "transform, border-radius" }}
                        />
                    ) : (
                        <span className="block size-10" aria-hidden />
                    )}
                </button>
            </div>

            <AnimatePresence>
                {isAboutOpen ? (
                    <AboutMe
                        onClose={() => setIsAboutOpen(false)}
                        AVATAR_LAYOUT_ID={AVATAR_LAYOUT_ID}
                    />
                ) : null}
            </AnimatePresence>
        </LayoutGroup>
    )
}
