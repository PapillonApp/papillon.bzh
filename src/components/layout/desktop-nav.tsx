"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import {
  type PointerEvent,
  type ReactNode,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Chevron } from "@/components/ui/chevron";
import { HoverGroup } from "@/components/ui/hover-highlight";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { easeOutPapillon } from "@/lib/motion";
import { FeatureMenu } from "./feature-menu";
import { MenuLinks, type MenuKey, navEntryStyle, navItems } from "./nav";

const closeDelay = 120;
const transition = { duration: 0.3, ease: easeOutPapillon };

const isMouse = (event: PointerEvent) => event.pointerType === "mouse";

type DesktopNavProps = {
  labels: Dictionary["nav"];
  locale: string;
};

export function DesktopNav({ labels, locale }: DesktopNavProps) {
  const [active, setActive] = useState<MenuKey | null>(null);
  const [offset, setOffset] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const panelId = useId();

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!active) return;

    const closeOnOutsideClick = (event: globalThis.PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setActive(null);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [active]);

  const show = (key: MenuKey, trigger: HTMLElement) => {
    clearTimeout(closeTimer.current);
    setActive(key);
    setOffset(trigger.offsetLeft);
  };

  return (
    <nav
      ref={navRef}
      aria-label={labels.label}
      onPointerEnter={(event) => isMouse(event) && clearTimeout(closeTimer.current)}
      onPointerLeave={(event) => {
        if (!isMouse(event)) return;
        closeTimer.current = setTimeout(() => setActive(null), closeDelay);
      }}
      className="relative max-lg:hidden"
    >
      <ul className="flex items-center gap-1">
        {navItems.map((item) => (
          <li key={item}>
            <button
              type="button"
              aria-expanded={active === item}
              aria-controls={panelId}
              onPointerEnter={(event) => isMouse(event) && show(item, event.currentTarget)}
              onClick={(event) => {
                const fromMouse = (event.nativeEvent as globalThis.PointerEvent).pointerType === "mouse";
                if (active === item && !fromMouse) setActive(null);
                else show(item, event.currentTarget);
              }}
              data-hover-item
              className={navEntryStyle}
            >
              <span className="text-trim">{labels[item]}</span>
              <Chevron className="text-current/30" />
            </button>
          </li>
        ))}
        <li>
          <Link
            href={`/${locale}/blog`}
            onPointerEnter={(event) => isMouse(event) && setActive(null)}
            data-hover-item
            className={navEntryStyle}
          >
            <span className="text-trim">{labels.blog}</span>
          </Link>
        </li>
      </ul>

      <AnimatePresence>
        {active && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: -4, scale: 0.97, x: offset }}
            animate={{ opacity: 1, y: 0, scale: 1, x: offset }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={transition}
            onClick={(event) => {
              if ((event.target as Element).closest("a")) setActive(null);
            }}
            className="absolute top-full left-0 origin-top-left pt-2"
          >
            <MorphPanel contentKey={active}>
              {active === "features" ? (
                <FeatureMenu labels={labels} locale={locale} />
              ) : (
                <HoverGroup highlightClassName="rounded-2xl bg-foreground/5">
                  <div className="max-w-sm">
                    <MenuLinks links={labels.menus[active]} locale={locale} />
                  </div>
                </HoverGroup>
              )}
            </MorphPanel>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

type Size = { width: number; height: number };

function MorphPanel({ contentKey, children }: { contentKey: string; children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<Size>();

  useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const observer = new ResizeObserver(() =>
      setSize({ width: content.offsetWidth, height: content.offsetHeight }),
    );
    observer.observe(content);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      animate={size}
      transition={transition}
      className="box-content overflow-hidden rounded-3xl border border-foreground/10 bg-background text-foreground shadow-xl"
    >
      <div ref={contentRef} className="relative w-max p-2">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={contentKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
