"use client";

import { MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";
import { createContext, type ReactNode, useContext, useState, useSyncExternalStore } from "react";

type HeaderMenu = { menuOpen: boolean; setMenuOpen: (open: boolean) => void };

const HeaderMenuContext = createContext<HeaderMenu>({ menuOpen: false, setMenuOpen: () => {} });

export const useHeaderMenu = () => useContext(HeaderMenuContext);

const lightAfterScroll = 8;

const headerMiddle = 40;

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

function isOverDarkSection() {
  return [...document.querySelectorAll("[data-dark-section]")].some((section) => {
    const { top, bottom } = section.getBoundingClientRect();
    return top <= headerMiddle && bottom > headerMiddle;
  });
}

function isOverDarkHero() {
  return Boolean(document.querySelector("[data-dark-hero]")) && window.scrollY <= lightAfterScroll;
}

export function HeaderShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const overDarkHero = useSyncExternalStore(subscribeToScroll, isOverDarkHero, () =>
    isHome(pathname),
  );
  const overDarkSection = useSyncExternalStore(subscribeToScroll, isOverDarkSection, () => false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderMenuContext value={{ menuOpen, setMenuOpen }}>
      <header
        data-light={menuOpen || !overDarkHero || undefined}
        data-dark={(overDarkSection && !menuOpen) || undefined}
        className="group/header fixed inset-x-0 top-0 z-20 text-white transition-colors duration-300 data-light:text-foreground data-dark:theme-dark"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 border-b border-foreground/5 bg-background/85 group-data-dark/header:border-foreground/10 opacity-0 backdrop-blur-xl transition-[opacity,background-color,border-color] duration-300 group-data-light/header:opacity-100"
        />
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </header>
    </HeaderMenuContext>
  );
}

function isHome(pathname: string) {
  return pathname.split("/").filter(Boolean).length <= 1;
}
