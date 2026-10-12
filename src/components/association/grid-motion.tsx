"use client";

import {
  type MotionValue,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import Image, { type StaticImageData } from "next/image";
import { useEffect } from "react";
import eventPhoto from "@/assets/association/event.jpg";
import value1a from "@/assets/association/value-1-a.png";
import value1b from "@/assets/association/value-1-b.png";
import value2a from "@/assets/association/value-2-a.png";
import value2b from "@/assets/association/value-2-b.png";
import value3a from "@/assets/association/value-3-a.png";
import value3b from "@/assets/association/value-3-b.png";
import groupPhoto from "@/assets/team/PapillonTeam.png";
import { teamMembers } from "@/content/team";
import { easeOutPapillon } from "@/lib/motion";

const ROWS = 4;
const COLUMNS = 7;
const MAX_SHIFT = 300;
const rowSprings = [
  { stiffness: 60, damping: 20 },
  { stiffness: 40, damping: 20 },
  { stiffness: 28, damping: 18 },
  { stiffness: 18, damping: 16 },
];

const [vince, lucas, tom, raphael, remy, mael] = teamMembers.map((member) => member.photo);

const photos = [
  value1b, vince, eventPhoto, value2a, lucas, value3b, tom,
  groupPhoto, value1a, raphael, value2b, remy, value3a, mael,
];

export function GridMotion() {
  const reduceMotion = useReducedMotion();
  const pointer = useMotionValue(0.5);

  useEffect(() => {
    if (reduceMotion) return;
    function onMove(event: PointerEvent) {
      if (event.pointerType === "mouse") pointer.set(event.clientX / window.innerWidth);
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [pointer, reduceMotion]);

  return (
    <motion.div
      aria-hidden
      initial={reduceMotion ? false : { opacity: 0, scale: 1.15 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, ease: easeOutPapillon }}
      className="absolute -inset-1/4 grid -rotate-15 grid-rows-4 gap-4"
    >
      {Array.from({ length: ROWS }, (_, row) => (
        <GridRow
          key={row}
          row={row}
          pointer={pointer}
          images={Array.from({ length: COLUMNS }, (_, col) => photos[(row * (COLUMNS + 2) + col) % photos.length])}
        />
      ))}
    </motion.div>
  );
}

type GridRowProps = {
  row: number;
  pointer: MotionValue<number>;
  images: StaticImageData[];
};

function GridRow({ row, pointer, images }: GridRowProps) {
  const direction = row % 2 ? -1 : 1;
  const target = useTransform(pointer, [0, 1], [(-MAX_SHIFT / 2) * direction, (MAX_SHIFT / 2) * direction]);
  const x = useSpring(target, rowSprings[row]);

  return (
    <motion.div style={{ x }} className="grid grid-cols-7 gap-4">
      {images.map((src, index) => (
        <div key={index} className="relative overflow-hidden rounded-2xl bg-surface">
          <Image
            src={src}
            alt=""
            fill
            sizes="(min-width: 1024px) 20vw, 40vw"
            className="object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
}
