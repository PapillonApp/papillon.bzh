"use client";

import { ArrowRightUp, Cross, Menu, PapillonApp } from "@getpapillon/papicons";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { type ReactNode, useEffect, useState } from "react";
import { Chevron } from "@/components/ui/chevron";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { externalProps, linkHrefs, localizeHref } from "@/lib/links";
import { easeOutPapillon } from "@/lib/motion";
import { useHeaderMenu } from "./header-shell";
import { LanguageMenu } from "./language-menu";
import { type MenuKey, menuIcons, navItems } from "./nav";

const transition = { duration: 0.35, ease: easeOutPapillon };

const cardStyle =
  "flex w-full items-center justify-between rounded-2xl bg-background px-5 py-4 text-left text-xl font-semibold transition-[scale,background-color] duration-150 active:scale-98 active:bg-foreground/5";

const slide = {
  enter: (direction: number) => ({ x: `${direction * 30}%`, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: `${direction * -30}%`, opacity: 0 }),
};

type MobileMenuProps = {
  nav: Dictionary["nav"];
  language: Dictionary["language"];
  download: Dictionary["download"];
  locale: string;
};

export function MobileMenu({ nav, language, download, locale }: MobileMenuProps) {
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: easeOutPapillon }}
            onClick={(event) => {
              if ((event.target as Element).closest("a")) setOpen(false);
            }}
            className="fixed inset-0 -z-10 flex flex-col gap-2 overflow-x-hidden overflow-y-auto overscroll-contain bg-surface px-4 pt-20 pb-6 text-foreground lg:hidden"
          >
            <MenuViews nav={nav} locale={locale} />

            <div className="mt-auto flex flex-col gap-2 pt-6">
              <LanguageMenu
                t={language}
                side="top"
                align="start"
                triggerClassName="flex w-full items-center gap-2 rounded-2xl bg-background px-5 py-4 text-md font-medium"
              />
              <a
                href={`/${locale}/download`}
                className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-md font-semibold text-white transition-[scale,filter] duration-150 active:scale-98 active:brightness-90"
              >
                <PapillonApp aria-hidden className="size-6" />
                <span className="text-trim">{download.label}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuViews({ nav, locale }: { nav: Dictionary["nav"]; locale: string }) {
  const [view, setView] = useState<MenuKey | null>(null);

  return (
    <nav aria-label={nav.label} className="relative">
      <AnimatePresence mode="popLayout" initial={false} custom={view ? 1 : -1}>
        <motion.div
          key={view ?? "root"}
          custom={view ? 1 : -1}
          variants={slide}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
        >
          {view ? (
            <SubMenu item={view} nav={nav} locale={locale} onBack={() => setView(null)} />
          ) : (
            <ul className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <Card key={item} index={index}>
                  <button type="button" onClick={() => setView(item)} className={cardStyle}>
                    <span className="text-trim">{nav[item]}</span>
                    <Chevron className="size-5 -rotate-90 text-foreground/30" />
                  </button>
                </Card>
              ))}
              <Card index={navItems.length}>
                <Link href={`/${locale}/blog`} className={cardStyle}>
                  <span className="text-trim">{nav.blog}</span>
                  <Chevron className="size-5 -rotate-90 text-foreground/30" />
                </Link>
              </Card>
            </ul>
          )}
        </motion.div>
      </AnimatePresence>
    </nav>
  );
}

function Card({ index, children }: { index: number; children: ReactNode }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...transition, delay: index * 0.04 }}
    >
      {children}
    </motion.li>
  );
}

type SubMenuProps = {
  item: MenuKey;
  nav: Dictionary["nav"];
  locale: string;
  onBack: () => void;
};

function SubMenu({ item, nav, locale, onBack }: SubMenuProps) {
  const links = Object.entries(nav.menus[item]) as [
    keyof typeof menuIcons,
    { title: string; description: string },
  ][];

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        autoFocus
        onClick={onBack}
        className="flex items-center gap-2 self-start rounded-full py-2 pr-3 pl-2 text-md font-medium text-foreground/60 transition-colors active:bg-foreground/5"
      >
        <Chevron className="size-5 rotate-90" />
        <span className="text-trim">{nav.back}</span>
      </button>
      <h2 className="px-1 pb-2 text-3xl font-semibold">{nav[item]}</h2>
      <ul className="grid grid-cols-2 gap-2">
        {links.map(([key, { title, description }], index) => {
          const { Icon, color } = menuIcons[key];
          const href = localizeHref(linkHrefs[key], locale);
          const external = href.startsWith("http");
          return (
            <Card key={key} index={index}>
              <a
                href={href}
                {...(external ? externalProps : {})}
                className="flex h-full flex-col gap-3 rounded-2xl bg-background p-4 transition-[scale,background-color] duration-150 active:scale-98 active:bg-foreground/5"
              >
                <Icon aria-hidden className={`size-6 ${color}`} />
                <span className="flex items-center gap-1 pt-1">
                  <span className="text-trim text-md font-semibold">{title}</span>
                  {external && <ArrowRightUp aria-hidden className="-my-1 size-3.5 text-foreground/30" />}
                </span>
                <span className="text-sm text-pretty text-foreground/55">{description}</span>
              </a>
            </Card>
          );
        })}
      </ul>
    </div>
  );
}
