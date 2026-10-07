"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { easeOutPapillon } from "@/lib/motion";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay, ease: easeOutPapillon }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
