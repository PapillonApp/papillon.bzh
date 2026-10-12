"use client";

import { MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";
import { createContext, type ReactNode, useContext, useState, useSyncExternalStore } from "react";

type HeaderMenu = { menuOpen: boolean; setMenuOpen: (open: boolean) => void };

const HeaderMenuContext = createContext<HeaderMenu>({ menuOpen: false, setMenuOpen: () => {} });

export const useHeaderMenu = () => useContext(HeaderMenuContext);

const lightAfterScroll = 8;

const headerMiddle = 40;

function subscribeToPage(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.body, { childList: true, subtree: true });
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    observer.disconnect();
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

function isScrolled() {
  return window.scrollY > lightAfterScroll;
}

function isOverDarkHero() {
  return (
    [...document.querySelectorAll("[data-dark-hero], [data-primary-hero], [data-photo-hero]")].some(
      (hero) => hero.checkVisibility(),
    ) &&
    window.scrollY <= lightAfterScroll
  );
}

export function HeaderShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const overDarkHero = useSyncExternalStore(subscribeToPage, isOverDarkHero, () =>
    startsOverDarkHero(pathname),
  );
  const overDarkSection = useSyncExternalStore(subscribeToPage, isOverDarkSection, () => false);
  const scrolled = useSyncExternalStore(subscribeToPage, isScrolled, () => false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderMenuContext value={{ menuOpen, setMenuOpen }}>
      <header
        data-light={menuOpen || !overDarkHero || undefined}
        data-dark={(overDarkSection && !menuOpen) || undefined}
        data-bordered={scrolled || !isFeaturePage(pathname) || undefined}
        className="group/header fixed inset-x-0 top-0 z-20 text-white transition-colors duration-300 data-light:text-foreground data-dark:theme-dark"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 border-b border-transparent bg-background/85 group-data-bordered/header:border-foreground/5 group-data-dark/header:border-foreground/10 opacity-0 backdrop-blur-xl transition-[opacity,background-color,border-color] duration-300 group-data-light/header:opacity-100"
        />
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </header>
    </HeaderMenuContext>
  );
}

function startsOverDarkHero(pathname: string) {
  return ["", "association"].includes(pathname.split("/")[2] ?? "");
}

function isFeaturePage(pathname: string) {
  return ["grades", "schedule", "homework", "news"].includes(pathname.split("/")[2] ?? "");
}
