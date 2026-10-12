"use client";

import { motion, useInView, useReducedMotion, useScroll } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { useWide } from "./use-wide";
import { easeOutPapillon } from "@/lib/motion";

type Gauge = { label: string; fill: number };

type StoryProps = {
  gauges: Gauge[];
  title: string;
  children: ReactNode;
};

export function Story({ gauges, title, children }: StoryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const wide = useWide(1280);
  const visible = useInView(ref, { margin: "-30% 0px -30% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  useEffect(() => {
    const items = ref.current?.querySelectorAll<HTMLElement>("[data-milestone]");
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.milestone));
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    for (const item of items) observer.observe(item);
    return () => observer.disconnect();
  }, []);

  const gauge = gauges[active] ?? gauges[0];

  return (
    <div ref={ref} className="relative">
      <div aria-hidden className="absolute top-0 bottom-0 left-6 w-1 rounded-full bg-foreground/10 lg:left-1/2 lg:-translate-x-1/2" />
      <motion.div
        aria-hidden
        style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
        className="absolute top-0 bottom-0 left-6 w-1 origin-top rounded-full bg-primary lg:left-1/2 lg:-translate-x-1/2"
      />

      <motion.div
        aria-hidden
        initial={false}
        animate={{ opacity: visible ? 1 : 0, y: visible || reduceMotion ? 0 : 12 }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none fixed inset-x-4 bottom-4 z-30 flex items-center gap-4 rounded-2xl bg-foreground px-5 py-3 text-background xl:inset-x-auto xl:top-1/2 xl:bottom-auto xl:left-6 xl:w-28 xl:-translate-y-1/2 xl:flex-col xl:items-start xl:px-4 xl:py-5"
      >
        <div className="flex flex-col xl:order-last">
          <span className="text-2xl font-semibold tracking-tight tabular-nums">{gauge.label}</span>
          <span className="text-sm text-background/70">{title}</span>
        </div>
        <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-background/20 xl:h-56 xl:w-2 xl:flex-none">
          <motion.div
            initial={false}
            animate={wide ? { scaleX: 1, scaleY: gauge.fill } : { scaleX: gauge.fill, scaleY: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: easeOutPapillon }}
            className="absolute inset-0 origin-left rounded-full bg-primary xl:origin-bottom"
          />
        </div>
      </motion.div>

      {children}
    </div>
  );
}
