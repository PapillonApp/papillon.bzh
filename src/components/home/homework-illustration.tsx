"use client";

import { Check, Sparkles } from "@getpapillon/papicons";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { easeOutPapillon } from "@/lib/motion";

type HomeworkIllustrationProps = {
  homework: Dictionary["home"]["features"]["cards"]["instant"]["homework"];
};

export function HomeworkIllustration({ homework }: HomeworkIllustrationProps) {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(false);
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.4, ease: easeOutPapillon };

  return (
    <>
      <div className="absolute inset-0 bg-linear-to-b from-swatch-purple/25 to-transparent" />
      <div className="absolute right-6 bottom-6 flex w-150 flex-col gap-5 rounded-4xl bg-linear-to-b from-swatch-purple/20 outline-2 outline-black/10 to-background p-7 shadow-2xl/10">
        <div className="flex items-center gap-3 text-2xl">
          <span aria-hidden>{homework.emoji}</span>
          <span className="font-semibold text-swatch-purple">{homework.subject}</span>
          <span className="ml-auto text-foreground/60">{homework.due}</span>
        </div>
        <p className="text-2xl/snug">{homework.content}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-3 rounded-2xl bg-swatch-purple/15 px-5 py-3 text-xl font-semibold text-swatch-purple">
            <Sparkles className="size-6" />
            {homework.tag}
          </span>
          <motion.button
            layout
            type="button"
            aria-pressed={done}
            data-sound="check"
            aria-label={homework.markDone}
            onClick={() => setDone(!done)}
            transition={transition}
            style={{ borderRadius: 9999 }}
            className={`relative flex h-14 overflow-hidden items-center justify-center gap-2.5 border-2 transition-colors ${
              done
                ? "border-transparent bg-swatch-purple px-6 text-background"
                : "w-14  border-black/20 bg-background text-foreground/70"
            }`}
          >
            <motion.span layout="position" transition={transition}>
              <Check className="size-7" />
            </motion.span>
            <AnimatePresence mode="popLayout" initial={false}>
              {done && (
                <motion.span
                  layout="position"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                  className="text-xl font-semibold whitespace-nowrap"
                >
                  {homework.done}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </>
  );
}
