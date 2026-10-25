"use client";

import { type MotionValue, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { type ReactNode, useRef } from "react";
import { useWide } from "./use-wide";

const shrinkPerCard = 0.04;

export function StoryStack({ items, label }: { items: ReactNode[]; label: string }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const wide = useWide();
  const reduceMotion = useReducedMotion();
  const animate = wide && !reduceMotion;

  return (
    <ol ref={ref} aria-label={label} className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
      {items.map((item, index) => (
        <StackCard key={index} index={index} count={items.length} progress={scrollYProgress} animate={animate}>
          {item}
        </StackCard>
      ))}
    </ol>
  );
}

type StackCardProps = {
  index: number;
  count: number;
  progress: MotionValue<number>;
  animate: boolean;
  children: ReactNode;
};

function StackCard({ index, count, progress, animate, children }: StackCardProps) {
  const scale = useTransform(progress, [index / count, 1], [1, 1 - (count - 1 - index) * shrinkPerCard]);

  return (
    <li className="lg:sticky lg:top-24">
      <motion.div style={animate ? { scale } : undefined} className="origin-top">
        {children}
      </motion.div>
    </li>
  );
}
