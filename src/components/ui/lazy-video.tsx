"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type LazyVideoProps = { src: string; poster?: string; className?: string };

export function LazyVideo({ src, poster, className }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const near = useInView(ref, { margin: "50%" });
  const still = useReducedMotion() && poster;

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (near && !still) video.play().catch(() => {});
    else video.pause();
  }, [near, still]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      preload="none"
      muted
      loop
      playsInline
      aria-hidden
      className={className}
    />
  );
}
