"use client";

import { Butterfly } from "@getpapillon/papicons";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);

export function RunawayButterfly() {
  const reduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0, rotate: 0 });

  const flee = () =>
    setPosition({
      x: randomBetween(-140, 140),
      y: randomBetween(-110, 60),
      rotate: randomBetween(-30, 30),
    });

  if (reduceMotion) return <Butterfly aria-hidden className="size-24 text-primary lg:size-32" />;

  return (
    <motion.span
      aria-hidden
      onPointerEnter={flee}
      onPointerDown={flee}
      animate={position}
      transition={{ type: "spring", stiffness: 180, damping: 11 }}
      className="relative z-10 block cursor-pointer touch-none"
    >
      <motion.span
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="block"
      >
        <motion.span
          animate={{ scaleX: [1, 0.5, 1] }}
          transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <Butterfly className="size-24 text-primary drop-shadow-xl lg:size-32" />
        </motion.span>
      </motion.span>
    </motion.span>
  );
}
