import type { Transition, Variants } from "motion/react";

export const scaleCardVariant: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.015 },
  tap: { scale: 0.985 },
};

export const scaleCardTransition: Transition = {
  duration: 0.14,
  ease: [0.23, 1, 0.32, 1],
};
