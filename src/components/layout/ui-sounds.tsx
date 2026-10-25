"use client";

import { useEffect } from "react";
import { type SoundName, sounds } from "@/lib/sounds";

const interactive = "a, button, summary, [role=button], [role=tab], input[type=checkbox], input[type=radio]";
const jitter = { detune: 40, volume: 0.1 };

const isSound = (name: string | null | undefined): name is SoundName => !!name && name in sounds;

function soundFor(element: Element): SoundName {
  const own = element.getAttribute("data-sound");
  if (isSound(own)) return own;
  if (element.matches("summary")) return element.parentElement?.hasAttribute("open") ? "close" : "open";
  const expanded = element.getAttribute("aria-expanded");
  if (expanded) return expanded === "true" ? "close" : "open";
  if (element.matches("[role=tab]")) return "tab";
  if (element.hasAttribute("aria-pressed") || element.matches("input")) return "toggle";
  const zone = element.closest("[data-sound]")?.getAttribute("data-sound");
  return isSound(zone) ? zone : "tap";
}

export function UiSounds() {
  useEffect(() => {
    let hovered: Element | null = null;

    const playClick = (event: MouseEvent) => {
      const element = (event.target as Element).closest(interactive);
      if (!element || element.matches(":disabled, [aria-disabled=true]")) return;
      sounds[soundFor(element)]({ jitter });
    };

    const playHover = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const item = (event.target as Element).closest("[data-hover-item], [data-hover-sound]");
      if (item === hovered) return;
      hovered = item;
      if (!item || !navigator.userActivation.hasBeenActive) return;
      const name = item.getAttribute("data-hover-sound");
      if (name === "none") return;
      sounds[isSound(name) ? name : "tick"]({ jitter });
    };

    document.addEventListener("click", playClick, true);
    document.addEventListener("pointerover", playHover, true);
    return () => {
      document.removeEventListener("click", playClick, true);
      document.removeEventListener("pointerover", playHover, true);
    };
  }, []);

  return null;
}
