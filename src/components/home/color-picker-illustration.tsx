"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { easeOutPapillon } from "@/lib/motion";

type ColorKey = keyof Dictionary["home"]["features"]["cards"]["personal"]["colors"];

const swatches: { key: ColorKey; text: string; gradient: string }[] = [
  { key: "pink", text: "text-swatch-pink", gradient: "from-swatch-pink/25" },
  { key: "orange", text: "text-swatch-orange", gradient: "from-swatch-orange/25" },
  { key: "green", text: "text-primary", gradient: "from-primary/25" },
  { key: "purple", text: "text-swatch-purple", gradient: "from-swatch-purple/25" },
  { key: "blue", text: "text-swatch-blue", gradient: "from-swatch-blue/25" },
  { key: "gray", text: "text-swatch-gray", gradient: "from-swatch-gray/25" },
];

type ColorPickerIllustrationProps = {
  label: string;
  colors: Record<ColorKey, string>;
};

export function ColorPickerIllustration({ label, colors }: ColorPickerIllustrationProps) {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<ColorKey>("orange");
  const current = swatches.find((swatch) => swatch.key === selected)!;
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.4, ease: easeOutPapillon };

  return (
    <>
      <AnimatePresence initial={false}>
        <motion.div
          key={selected}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className={`absolute inset-0 bg-linear-to-b to-transparent ${current.gradient}`}
        />
      </AnimatePresence>
      <div
        role="radiogroup"
        aria-label={label}
        className="absolute inset-0 flex items-center justify-center gap-5"
      >
        {swatches.map((swatch) => {
          const isSelected = swatch.key === selected;

          return (
            <label
              key={swatch.key}
              className={`relative size-8 cursor-pointer rounded-full has-focus-visible:outline-2 has-focus-visible:outline-offset-6 has-focus-visible:outline-current ${swatch.text}`}
            >
              <input
                type="radio"
                name="app-color"
                value={swatch.key}
                checked={isSelected}
                onChange={() => setSelected(swatch.key)}
                aria-label={colors[swatch.key]}
                className="sr-only"
              />
              <span className="absolute inset-0 rounded-full bg-current" />
              <AnimatePresence initial={false}>
                {isSelected && (
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={transition}
                    className="absolute -inset-1.5 rounded-full border-3 border-current"
                  />
                )}
              </AnimatePresence>
            </label>
          );
        })}
      </div>
    </>
  );
}
