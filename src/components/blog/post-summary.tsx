"use client";

import { ChevronDown, Sparkles } from "@getpapillon/papicons";
import { motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";
import { easeOutPapillon } from "@/lib/motion";

type PostSummaryProps = { summary: string; title: string; label: string };

const transition = { duration: 0.3, ease: easeOutPapillon };

export function PostSummary({ summary, title, label }: PostSummaryProps) {
  const [open, setOpen] = useState(false);
  const [generation, setGeneration] = useState(0);
  const reduceMotion = useReducedMotion();
  const id = useId();
  const tokens = summary.match(/\S+\s*/g) ?? [];

  function toggle() {
    if (!open) setGeneration((count) => count + 1);
    setOpen(!open);
  }

  return (
    <div className="mb-5 rounded-3xl bg-surface">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        data-sound="fold"
        onClick={toggle}
        className="flex w-full items-center gap-2 py-3 pr-3 pl-5 text-left text-md"
      >
        <Sparkles aria-hidden className="size-5 shrink-0 text-foreground/60" />
        <span className="font-semibold">{title}</span>
        <span aria-hidden className="text-foreground/30">
          ·
        </span>
        <span className="text-foreground/60">{label}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={transition}
          className={`ml-auto flex size-9 shrink-0 items-center justify-center rounded-full text-foreground/60 transition-colors duration-300 ${open ? "bg-foreground/8" : ""}`}
        >
          <ChevronDown aria-hidden className="size-5" />
        </motion.span>
      </button>
      <motion.div
        id={id}
        role="region"
        inert={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={reduceMotion ? { duration: 0 } : transition}
        className="overflow-hidden"
      >
        <p key={generation} className="px-5 pb-5 text-lg/relaxed text-pretty text-foreground/60">
          {tokens.map((token, index) => (
            <motion.span
              key={`${index}-${token}`}
              initial={reduceMotion || generation === 0 ? false : { opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.035, ease: easeOutPapillon }}
            >
              {token}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </div>
  );
}
