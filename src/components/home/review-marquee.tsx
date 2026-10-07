"use client";

import { Star } from "@getpapillon/papicons";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "motion/react";
import { type KeyboardEvent, type PointerEvent, useEffect, useRef } from "react";
import type { Review } from "@/content/reviews";

const autoplaySpeed = 40;
const keyboardPush = 900;

type ReviewMarqueeProps = {
  reviews: Review[];
  label: string;
  ratingLabel: string;
};

export function ReviewMarquee({ reviews, label, ratingLabel }: ReviewMarqueeProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLUListElement>(null);
  const loopWidth = useRef(0);
  const velocity = useRef(-autoplaySpeed);
  const hovered = useRef(false);
  const drag = useRef<{ x: number; time: number } | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(() => {
      loopWidth.current = track.scrollWidth / 2;
    });
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const moveBy = (distance: number) => {
    const width = loopWidth.current;
    const next = x.get() + distance;
    x.set(width ? (((next % width) + width) % width) - width : next);
  };

  useAnimationFrame((_, delta) => {
    if (drag.current) return;
    const target = hovered.current || reduceMotion ? 0 : -autoplaySpeed;
    velocity.current += (target - velocity.current) * Math.min(1, delta / 500);
    moveBy((velocity.current * delta) / 1000);
  });

  const startDrag = (event: PointerEvent) => {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { x: event.clientX, time: event.timeStamp };
    velocity.current = 0;
  };

  const followDrag = (event: PointerEvent) => {
    if (!drag.current) return;
    const distance = event.clientX - drag.current.x;
    const elapsed = Math.max(event.timeStamp - drag.current.time, 1);
    moveBy(distance);
    velocity.current = (distance / elapsed) * 1000;
    drag.current = { x: event.clientX, time: event.timeStamp };
  };

  const endDrag = () => {
    drag.current = null;
  };

  const pushWithKeyboard = (event: KeyboardEvent) => {
    const direction = { ArrowLeft: 1, ArrowRight: -1 }[event.key];
    if (!direction) return;
    event.preventDefault();
    velocity.current = direction * keyboardPush;
  };

  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      onKeyDown={pushWithKeyboard}
      onPointerEnter={() => {
        hovered.current = true;
      }}
      onPointerLeave={() => {
        hovered.current = false;
      }}
      className="mx-auto max-w-7xl overflow-hidden rounded-2xl mask-x-from-90%"
    >
      <motion.ul
        ref={trackRef}
        style={{ x }}
        onPointerDown={startDrag}
        onPointerMove={followDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="flex w-max cursor-grab touch-pan-y select-none active:cursor-grabbing"
      >
        {[...reviews, ...reviews].map((review, index) => (
          <li
            key={index}
            aria-hidden={index >= reviews.length || undefined}
            className="w-80 shrink-0 pr-4"
          >
            <figure className="flex h-full flex-col gap-4 rounded-2xl bg-surface p-6">
              <div
                role="img"
                aria-label={`${review.rating} ${ratingLabel}`}
                className="flex gap-0.5 text-primary"
              >
                {Array.from({ length: 5 }, (_, star) => (
                  <Star
                    key={star}
                    aria-hidden
                    className={`size-4 ${star < review.rating ? "" : "opacity-20"}`}
                  />
                ))}
              </div>
              <blockquote lang="fr" className="flex-1 text-md/normal text-pretty">
                {review.text}
              </blockquote>
              <figcaption className="text-md">
                <span className="font-semibold">{review.author}</span>
                <span className="text-foreground/60"> · {review.store}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
