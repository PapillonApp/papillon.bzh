"use client";

import { usePathname } from "next/navigation";
import { createContext, type ReactNode, useContext, useState, useSyncExternalStore } from "react";

type HeaderMenu = { menuOpen: boolean; setMenuOpen: (open: boolean) => void };

const HeaderMenuContext = createContext<HeaderMenu>({ menuOpen: false, setMenuOpen: () => {} });

export const useHeaderMenu = () => useContext(HeaderMenuContext);

const lightAfterScroll = 8;

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function isOverDarkHero() {
  return Boolean(document.querySelector("[data-dark-hero]")) && window.scrollY <= lightAfterScroll;
}

export function HeaderShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const overDarkHero = useSyncExternalStore(subscribeToScroll, isOverDarkHero, () =>
    isHome(pathname),
  );
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderMenuContext value={{ menuOpen, setMenuOpen }}>
      <header
        data-light={menuOpen || !overDarkHero || undefined}
        className="group/header fixed inset-x-0 top-0 z-20 text-white transition-colors data-light:text-foreground"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 border-b border-black/5 bg-background/85 opacity-0 backdrop-blur-xl transition-opacity group-data-light/header:opacity-100"
        />
        {children}
      </header>
    </HeaderMenuContext>
  );
}

function isHome(pathname: string) {
  return pathname.split("/").filter(Boolean).length <= 1;
}
