"use client";

import { AnimatePresence, motion } from "motion/react";
import { type ReactNode, useEffect, useId, useRef, useState } from "react";
import { easeOutPapillon } from "@/lib/motion";

const placements = {
  bottom: "top-full mt-2",
  top: "bottom-full mb-2",
};

const alignments = {
  start: "left-0",
  end: "right-0",
};

type DropdownProps = {
  trigger: ReactNode;
  triggerClassName: string;
  side?: keyof typeof placements;
  align?: keyof typeof alignments;
  children: ReactNode;
};

export function Dropdown({
  trigger,
  triggerClassName,
  side = "bottom",
  align = "end",
  children,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.stopPropagation();
      setOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        data-hover-item
        className={triggerClassName}
      >
        {trigger}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: side === "bottom" ? -4 : 4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: side === "bottom" ? -4 : 4, scale: 0.97 }}
            transition={{ duration: 0.2, ease: easeOutPapillon }}
            onClick={(event) => {
              if ((event.target as Element).closest("a")) setOpen(false);
            }}
            className={`absolute z-10 min-w-44 rounded-2xl border border-black/10 bg-background p-1.5 text-foreground shadow-xl ${placements[side]} ${alignments[align]}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
