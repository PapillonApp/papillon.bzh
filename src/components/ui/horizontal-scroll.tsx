"use client";

import { type MotionValue, motion, useScroll, useTransform } from "motion/react";
import { Children, type CSSProperties, type ReactNode, useRef } from "react";

type SlideProps = {
  index: number;
  count: number;
  progress: MotionValue<number>;
  children: ReactNode;
};

function Slide({ index, count, progress, children }: SlideProps) {
  const opacity = useTransform(progress, (value) => 1 - Math.min(Math.abs(index - value * (count - 1)), 1));

  return (
    <motion.li style={{ opacity }} className="max-lg:opacity-100! lg:h-full lg:w-full lg:shrink-0">
      {children}
    </motion.li>
  );
}

export function HorizontalScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const slides = Children.toArray(children);
  const count = slides.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (progress) => `${-progress * (count - 1) * 100}%`);

  return (
    <section
      ref={ref}
      style={{ "--count": count } as CSSProperties}
      className="py-24 lg:h-[calc(var(--count)*100svh)] lg:py-0"
    >
      <div className="lg:sticky lg:top-0 lg:h-svh lg:overflow-hidden">
        <motion.ul
          style={{ x }}
          className="flex flex-col gap-24 max-lg:transform-none! lg:mx-auto lg:h-full lg:max-w-6xl lg:flex-row lg:gap-0"
        >
          {slides.map((slide, index) => (
            <Slide key={index} index={index} count={count} progress={scrollYProgress}>
              {slide}
            </Slide>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
