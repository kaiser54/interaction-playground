import type { Transition, Variants } from "motion/react";

export const showIconVariant: Variants = {
  initial: {
    opacity: 0,
    y: -4,
    scale: 0.92,
    filter: "blur(2px)",
  },
  hover: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
};

export const showIconTransition: Transition = {
  duration: 0.18,
  ease: [0.23, 1, 0.32, 1],
};
