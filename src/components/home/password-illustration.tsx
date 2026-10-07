"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { easeOutPapillon } from "@/lib/motion";

const length = 10;

export function PasswordIllustration({ placeholder }: { placeholder: string }) {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const delay = count === 0 ? 900 : count < length ? 70 + Math.random() * 110 : 1400;
    const timeout = setTimeout(() => setCount(count < length ? count + 1 : 0), delay);
    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <>
      <div className="absolute inset-0 bg-linear-to-b from-swatch-blue/25 to-transparent" />
      <div
        aria-hidden
        className="absolute inset-x-6 top-1/2 flex h-16 -translate-y-1/2 items-center rounded-2xl outline-2 outline-foreground/10 bg-background px-5"
      >
        <AnimatePresence>
          {count === 0 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              transition={{ duration: 0.2 }}
              className="absolute text-xl text-foreground/60"
            >
              {placeholder}
            </motion.span>
          )}
        </AnimatePresence>
        <div className="flex gap-1.5">
          <AnimatePresence>
            {Array.from({ length: count }, (_, i) => (
              <motion.span
                key={i}
                initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: easeOutPapillon }}
                className="size-2.5 rounded-full bg-foreground"
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
