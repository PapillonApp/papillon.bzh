import React from "react";
import "./herospan.css";

import { motion, MotionConfig, useTransform } from "motion/react"

export default function HeroSpan({ text, color, icon, index }: { text: string; color: string; icon?: React.ReactNode; index: number }) {
  const iconSize = 36;
  // @ts-expect-error
  const newIcon = icon ? React.cloneElement(icon as React.ReactElement, { width: iconSize, height: iconSize, fill: color }) : null;

  return (
    <motion.span
      className="hero-span"
      style={{ backgroundColor: color + "22", color: color, outlineColor: color }}
      initial={{
        opacity: 0,
        scale: 0.1,
        rotate: -4,
      }}
      whileInView={{
        opacity: 1,
        translateY: 4,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        type: "spring",
        bounce: 0.4,
        delay: (index * 0.2),
      }}
    >
      {newIcon}
      {text}
    </motion.span>
  );
}