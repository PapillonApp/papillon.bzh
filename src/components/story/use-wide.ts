"use client";

import { useSyncExternalStore } from "react";

export function useWide(minWidth = 1024) {
  const query = `(min-width: ${minWidth}px)`;
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
