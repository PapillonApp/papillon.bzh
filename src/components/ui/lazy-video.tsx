"use client";

import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

export function LazyVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const near = useInView(ref, { margin: "50%" });

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (near) video.play().catch(() => {});
    else video.pause();
  }, [near]);

  return (
    <video
      ref={ref}
      src={src}
      preload="none"
      muted
      loop
      playsInline
      aria-hidden
      className={className}
    />
  );
}
