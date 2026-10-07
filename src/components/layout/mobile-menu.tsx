"use client";

import { Cross, Menu } from "@getpapillon/papicons";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { easeOutPapillon } from "@/lib/motion";
import { useHeaderMenu } from "./header-shell";
import { LanguageMenu } from "./language-menu";
import { NavEntry, navEntryStyle, navItems } from "./nav";

const entryStyle =
  "flex w-full items-center justify-between border-b border-foreground/10 py-5 text-2xl transition-colors hover:text-primary";

type MobileMenuProps = {
  nav: Dictionary["nav"];
  language: Dictionary["language"];
  locale: string;
};

export function MobileMenu({ nav, language, locale }: MobileMenuProps) {
  const { menuOpen: open, setMenuOpen: setOpen } = useHeaderMenu();

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.documentElement.classList.add("max-lg:overflow-hidden");
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.documentElement.classList.remove("max-lg:overflow-hidden");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open, setOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? nav.closeMenu : nav.openMenu}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
        className="flex size-11 items-center justify-center rounded-full transition hover:bg-current/10 active:scale-95 lg:hidden"
      >
        {open ? <Cross aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: easeOutPapillon }}
            onClick={(event) => {
              if ((event.target as Element).closest("a")) setOpen(false);
            }}
            className="fixed inset-0 -z-10 flex flex-col overflow-y-auto bg-background px-4 pt-20 pb-8 lg:hidden"
          >
            <nav aria-label={nav.label}>
              <ul>
                {navItems.map((item) => (
                  <li key={item.key}>
                    <NavEntry
                      item={item}
                      labels={nav}
                      locale={locale}
                      className={entryStyle}
                    />
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto self-start">
              <LanguageMenu
                t={language}
                side="top"
                align="start"
                triggerClassName={navEntryStyle}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
