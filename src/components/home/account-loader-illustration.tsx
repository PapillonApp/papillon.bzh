"use client";

import { motion, useReducedMotion } from "motion/react";

type AccountLoaderIllustrationProps = {
  title: string;
  description: string;
};

export function AccountLoaderIllustration({ title, description }: AccountLoaderIllustrationProps) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div className="absolute inset-0 bg-linear-to-b from-swatch-pink/25 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-8 text-center">
        <motion.svg
          aria-hidden
          viewBox="0 0 24 24"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="mb-5 size-16 text-swatch-pink"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            pathLength={100}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeDasharray="75 100"
          />
        </motion.svg>
        <p className="text-2xl font-bold tracking-tight">{title}</p>
        <p className="max-w-xs text-md/normal font-medium text-foreground/60">{description}</p>
      </div>
    </>
  );
}
