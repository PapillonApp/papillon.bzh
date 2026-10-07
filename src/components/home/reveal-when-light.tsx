"use client";

import { motion, useMotionValueEvent, useReducedMotion } from "motion/react";
import { type ReactNode, useState } from "react";
import { easeOutPapillon } from "@/lib/motion";
import { pageLight } from "@/lib/page-tone";

type RevealWhenLightProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function RevealWhenLight({ children, delay = 0, className }: RevealWhenLightProps) {
  const reduceMotion = useReducedMotion();
  const [revealed, setRevealed] = useState(false);

  useMotionValueEvent(pageLight, "change", (light) => {
    if (light >= 1) setRevealed(true);
  });

  return (
    <motion.div
      initial={false}
      animate={revealed || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: easeOutPapillon }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
