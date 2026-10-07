"use client";

import { ChevronDown } from "@getpapillon/papicons";
import { motion } from "motion/react";
import { useId, useState } from "react";
import { easeOutPapillon } from "@/lib/motion";

type AccordionItem = { emoji?: string; question: string; answer: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const id = useId();

  return (
    <ul className="divide-y divide-black/10 border-y border-black/10">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <li key={item.question}>
            <h3>
              <button
                type="button"
                id={`${id}-question-${index}`}
                aria-expanded={open}
                aria-controls={`${id}-answer-${index}`}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold"
              >
                <span className="flex items-center gap-4">
                  {item.emoji && <span aria-hidden className="text-2xl">{item.emoji}</span>}
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: easeOutPapillon }}
                  className="shrink-0 text-foreground/40"
                >
                  <ChevronDown aria-hidden className="size-5" />
                </motion.span>
              </button>
            </h3>
            <motion.div
              id={`${id}-answer-${index}`}
              role="region"
              aria-labelledby={`${id}-question-${index}`}
              inert={!open}
              initial={false}
              animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeOutPapillon }}
              className="overflow-hidden"
            >
              <p className="max-w-2xl pb-6 text-md/normal text-pretty text-foreground/60">
                {item.answer}
              </p>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
}
