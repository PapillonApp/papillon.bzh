"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
  type Transition,
} from "motion/react";
import { useId, useRef, useState, type PointerEvent } from "react";
import { Chevron } from "@/components/ui/chevron";
import { easeOutPapillon } from "@/lib/motion";

const grades = [
  14.71, 14.92, 16.84, 16.62, 16.08, 16.21, 16.25, 16.19, 16.07, 15.94, 15.8, 15.96, 15.74, 15.75,
  15.31, 15.18, 15.24, 15.26, 15.2, 15.24, 15.27, 15.25, 15.32, 14.95, 15.14, 15.17, 15.53,
];
const last = grades.length - 1;
const min = Math.min(...grades) - 0.4;
const max = Math.max(...grades) + 0.4;

const clamp = (value: number, low: number, high: number) => Math.min(Math.max(value, low), high);

function gradeAt(progress: number) {
  const position = clamp(progress, 0, 1) * last;
  const index = Math.min(Math.floor(position), last - 1);
  const t = position - index;
  const [p0, p1, p2, p3] = [index - 1, index, index + 1, index + 2].map(
    (i) => grades[clamp(i, 0, last)],
  );

  return (
    0.5 *
    (2 * p1 +
      (p2 - p0) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t ** 2 +
      (3 * p1 - p0 - 3 * p2 + p3) * t ** 3)
  );
}

const yAt = (progress: number) => ((max - gradeAt(progress)) / (max - min)) * 100;

const path = Array.from({ length: 161 }, (_, i) => i / 160)
  .map((p, i) => `${i ? "L" : "M"}${(p * 100).toFixed(2)} ${yAt(p).toFixed(2)}`)
  .join(" ");

function Line({ clipPath, className }: { clipPath?: string; className?: string }) {
  return (
    <path
      d={path}
      clipPath={clipPath}
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      className={className}
    />
  );
}

const ping = { scale: [0.4, 1.6], opacity: [0, 0.8, 0] };
const pingTransition = {
  scale: { duration: 1.6, repeat: Infinity, ease: "easeOut" },
  opacity: { duration: 1.6, repeat: Infinity, times: [0, 0.2, 1], ease: "linear" },
} satisfies Transition;
const pingStopped = { scale: 0.4, opacity: 0 };
const pingStopTransition = { duration: 0.15 };
const digitTransition = { duration: 0.2, ease: easeOutPapillon };
const digitFade = { duration: 0.15 };
const digitDelay = (delay: number) => ({
  y: { ...digitTransition, delay },
  opacity: { ...digitFade, delay },
});
const digitVariants = {
  enter: { y: "0.25em", opacity: 0 },
  idle: (delay: number) => ({ y: 0, opacity: 1, transition: digitDelay(delay) }),
  exit: (delay: number) => ({ y: "-0.25em", opacity: 0, transition: digitDelay(delay) }),
};

function RollingNumber({ value, scrubbing }: { value: string; scrubbing: boolean }) {
  const reduceMotion = useReducedMotion();
  const [digits, setDigits] = useState({ value, ids: [...value].map(() => 0) });

  if (digits.value !== value) {
    setDigits({
      value,
      ids: [...value].map((char, i) =>
        char === digits.value[i] ? digits.ids[i] : (digits.ids[i] ?? 0) + 1,
      ),
    });
  }

  return (
    <span className="inline-flex">
      {[...value].map((char, i) => {
        const delay = scrubbing ? 0 : i * 0.04;

        return (
          <motion.span
            key={i}
            layout="position"
            transition={digitTransition}
            className="relative inline-block"
          >
            <AnimatePresence mode="popLayout" initial={false} custom={delay}>
              <motion.span
                key={digits.ids[i] ?? 0}
                custom={delay}
                variants={digitVariants}
                initial={reduceMotion ? false : "enter"}
                animate="idle"
                exit={reduceMotion ? undefined : "exit"}
                className="inline-block"
              >
                {char}
              </motion.span>
            </AnimatePresence>
          </motion.span>
        );
      })}
    </span>
  );
}

type GradeChartIllustrationProps = {
  label: string;
  source: string;
};

export function GradeChartIllustration({ label, source }: GradeChartIllustrationProps) {
  const reduceMotion = useReducedMotion();
  const clipId = useId();
  const graph = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(1);
  const [index, setIndex] = useState(last);
  const [dragging, setDragging] = useState(false);

  const left = useTransform(progress, (p) => `${p * 100}%`);
  const top = useTransform(progress, (p) => `${yAt(p)}%`);
  const clipWidth = useTransform(progress, (p) => p * 100 + 10);

  useMotionValueEvent(progress, "change", (p) => setIndex(Math.round(p * last)));

  function seek(event: PointerEvent) {
    const rect = graph.current!.getBoundingClientRect();
    progress.set(clamp((event.clientX - rect.left) / rect.width, 0, 1));
  }

  function release() {
    setDragging(false);
    progress.set(1);
  }

  return (
    <>
      <div className="absolute inset-0 bg-linear-to-b from-primary/25 to-transparent" />
      <div
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          setDragging(true);
          seek(event);
        }}
        onPointerMove={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) seek(event);
        }}
        onPointerUp={release}
        onPointerCancel={release}
        className="absolute inset-0 flex cursor-pointer touch-pan-y flex-col select-none"
      >
        <div ref={graph} aria-hidden className="relative mt-6 mr-8 h-20 shrink-0">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="size-full overflow-visible text-primary"
          >
            <clipPath id={clipId}>
              <motion.rect x={-10} y={-50} height={200} width={clipWidth} />
            </clipPath>
            <Line className="opacity-50" />
            <Line clipPath={`url(#${clipId})`} />
          </svg>
          <motion.div style={{ left, top }} className="absolute size-0">
            <motion.div
              animate={reduceMotion || dragging ? pingStopped : ping}
              transition={dragging ? pingStopTransition : pingTransition}
              className="absolute size-11 -translate-1/2 rounded-full bg-primary/25"
            />
            <div className="absolute size-4 -translate-1/2 rounded-full bg-primary ring-3 ring-background" />
          </motion.div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center pb-2 -mt-1">
          <p className="flex items-baseline font-bold text-primary -mb-0.5">
            <span className="text-3xl">
              <RollingNumber value={grades[index].toFixed(2)} scrubbing={dragging} />
            </span>
            <motion.span
              layout="position"
              transition={digitTransition}
              className="text-lg text-primary/60"
            >
              /20
            </motion.span>
          </p>
          <p className="flex items-center gap-1.5 text-md font-semibold">
            {label}
            <Chevron className="text-foreground/60" />
          </p>
          <p className="text-sm text-foreground/60">{source}</p>
        </div>
      </div>
    </>
  );
}
