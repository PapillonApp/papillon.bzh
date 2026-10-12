"use client";

import {
  AnimatePresence,
  type MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import Image, { type StaticImageData } from "next/image";
import { type ClipboardEvent, useEffect, useRef, useState } from "react";
import bubble from "@/assets/hero/bubble.svg";
import calendar from "@/assets/hero/calendar.svg";
import cards from "@/assets/hero/cards.svg";
import homework from "@/assets/hero/homework.svg";
import menu from "@/assets/hero/menu.svg";
import { easeOutPapillon } from "@/lib/motion";

const titleIcons = [bubble, cards, calendar, menu, homework];

const MotionImage = motion.create(Image);

const iconVariants: Variants = {
  hidden: { width: 0, opacity: 0, scale: 0.4, rotate: -12 },
  visible: (index: number) => ({
    width: "auto",
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.55, delay: 0.4 + index * 0.09, ease: easeOutPapillon },
  }),
};

const proximitySpring = { stiffness: 260, damping: 28 };
const verticalReach = 450;

type TitlePointer = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  active: MotionValue<number>;
};

function copyCollapsedText(event: ClipboardEvent<HTMLElement>) {
  const selection = window.getSelection();
  if (
    !selection?.rangeCount ||
    !event.currentTarget.contains(selection.getRangeAt(0).commonAncestorContainer)
  )
    return;
  event.preventDefault();
  event.clipboardData.setData("text/plain", selection.toString().replace(/\s+/g, " ").trim());
}

function useProximity<T extends Element>(pointer: TitlePointer, radius: number) {
  const ref = useRef<T>(null);

  const target = useTransform(() => {
    const x = pointer.x.get();
    const y = pointer.y.get();
    const active = pointer.active.get();
    if (!active || !ref.current) return 0;
    const box = ref.current.getBoundingClientRect();
    const dx = x - (box.left + box.width / 2);
    const dy = y - (box.top + box.height / 2);
    return active * Math.exp(-((dx / radius) ** 2) - (dy / verticalReach) ** 2);
  });

  return { ref, proximity: useSpring(target, proximitySpring) };
}

function TitleChar({ char, pointer }: { char: string; pointer: TitlePointer }) {
  const { ref, proximity } = useProximity<HTMLSpanElement>(pointer, 100);
  const boost = useTransform(proximity, [0, 1], [0, 489]);
  const fontWeight = useMotionTemplate`calc(var(--font-weight-book) + ${boost})`;

  return (
    <motion.span ref={ref} style={{ fontWeight }}>
      {char}
    </motion.span>
  );
}

function TitleText({ text, pointer }: { text: string; pointer: TitlePointer }) {
  return (
    <span className="text-trim whitespace-nowrap">
      {Array.from(text).map((char, index) => (
        <TitleChar key={index} char={char} pointer={pointer} />
      ))}
    </span>
  );
}

function TitleIcon({
  icon,
  label,
  index,
  pointer,
}: {
  icon: StaticImageData;
  label: string;
  index: number;
  pointer: TitlePointer;
}) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const { ref, proximity } = useProximity<HTMLSpanElement>(pointer, 70);
  const scale = useTransform(proximity, [0, 1], [1, 1.6]);

  return (
    <motion.span
      ref={ref}
      custom={index}
      variants={iconVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex h-12 justify-center lg:h-17"
    >
      <MotionImage src={icon} alt="" style={{ scale }} className="size-12 max-w-none lg:size-17" />
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
            transition={{ duration: 0.2, ease: easeOutPapillon }}
            className="pointer-events-none absolute bottom-full mb-2 rounded-full bg-foreground/80 px-3 py-1.5 text-md font-medium tracking-normal text-background whitespace-nowrap backdrop-blur-md lg:mb-3"
          >
            <span className="text-trim">{label}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.span>
  );
}

export function HeroTitle({
  start,
  end,
  iconLabels,
}: {
  start: string;
  end: string;
  iconLabels: string[];
}) {
  const reduceMotion = useReducedMotion();
  const origin = useRef<HTMLHeadingElement>(null);
  const pointer: TitlePointer = {
    x: useMotionValue(0),
    y: useMotionValue(0),
    active: useMotionValue(0),
  };

  useEffect(() => {
    const area = origin.current?.closest("section");
    if (reduceMotion || !area) return;

    function track(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      pointer.x.set(event.clientX);
      pointer.y.set(event.clientY);
      pointer.active.set(1);
    }
    function release() {
      pointer.active.set(0);
    }

    area.addEventListener("pointermove", track);
    area.addEventListener("pointerleave", release);
    return () => {
      area.removeEventListener("pointermove", track);
      area.removeEventListener("pointerleave", release);
    };
  }, [reduceMotion, pointer.x, pointer.y, pointer.active]);

  return (
    <h1
      ref={origin}
      onCopy={copyCollapsedText}
      className="flex cursor-default items-center justify-center gap-1.5 text-4xl leading-none font-book tracking-tight lg:text-5xl max-md:flex-col"
    >
      <TitleText text={start} pointer={pointer} />
      <motion.span
        aria-hidden
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? "visible" : undefined}
        whileInView="visible"
        className="flex items-center select-none"
      >
        {titleIcons.map((icon, index) => (
          <TitleIcon
            key={icon.src}
            icon={icon}
            label={iconLabels[index]}
            index={index}
            pointer={pointer}
          />
        ))}
      </motion.span>
      <TitleText text={end} pointer={pointer} />
    </h1>
  );
}
