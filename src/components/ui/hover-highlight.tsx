"use client";

import { AnimatePresence, motion } from "motion/react";
import { type PointerEvent, type ReactNode, useEffect, useRef, useState } from "react";

type Box = { x: number; y: number; width: number; height: number };

const spring = { type: "spring", bounce: 0.15, duration: 0.3 } as const;
const leaveDelay = 80;

type HoverGroupProps = {
  children: ReactNode;
  highlightClassName: string;
  className?: string;
};

export function HoverGroup({ children, highlightClassName, className = "" }: HoverGroupProps) {
  const groupRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<Box | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(leaveTimer.current), []);

  const scheduleLeave = () => {
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setBox(null), leaveDelay);
  };

  const trackHoveredItem = (event: PointerEvent) => {
    event.stopPropagation();
    if (event.pointerType !== "mouse" || !groupRef.current) return;

    const target = event.target as Element;
    const item = target.closest("[data-hover-item]");
    if (!item) {
      scheduleLeave();
      return;
    }

    clearTimeout(leaveTimer.current);
    const itemBox = item.getBoundingClientRect();
    const groupBox = groupRef.current.getBoundingClientRect();
    const next = {
      x: itemBox.left - groupBox.left,
      y: itemBox.top - groupBox.top,
      width: itemBox.width,
      height: itemBox.height,
    };
    setBox((current) => (current && sameBox(current, next) ? current : next));
  };

  return (
    <div
      ref={groupRef}
      onPointerOver={trackHoveredItem}
      onPointerLeave={scheduleLeave}
      className={`relative isolate ${className}`}
    >
      <AnimatePresence>
        {box && (
          <motion.span
            aria-hidden
            initial={{ ...box, opacity: 0, scale: 0.9 }}
            animate={{ ...box, opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={spring}
            className={`pointer-events-none absolute top-0 left-0 -z-10 ${highlightClassName}`}
          />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}

function sameBox(a: Box, b: Box) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
