import type { Variants } from "motion/react";

export const pageVariant: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.24, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.18, ease: "easeOut" } },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" },
  },
};
