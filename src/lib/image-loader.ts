"use client";

import type { ImageLoaderProps } from "next/image";

// Export statique : les variantes sont générées après le build par `scripts/resize-images.ts`.
export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  if (!src.startsWith("/") || !/\.(jpe?g|png|webp)$/i.test(src)) return src;
  return src.replace(/\.\w+$/, `.w${width}q${quality ?? 75}.webp`);
}
