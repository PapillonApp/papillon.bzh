"use client";

import { ChevronLeft, ChevronRight } from "@getpapillon/papicons";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import { type KeyboardEvent, type PointerEvent, useId, useRef, useState } from "react";
import duoClosed from "@/assets/devices/Devices-Duo-Closed.webp";
import mac from "@/assets/devices/Devices-MacApp.webp";
import android from "@/assets/devices/Devices-Pixel10.webp";
import ipad from "@/assets/devices/Devices-iPadPro.webp";
import iphone from "@/assets/devices/Devices-iPhone.webp";
import duoOpen from "@/assets/devices/iPhone Duo-Open.webp";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { easeOutPapillon } from "@/lib/motion";

type DeviceKey = keyof Dictionary["home"]["devices"]["names"];

const devices: { key: DeviceKey; isNew?: boolean }[] = [
  { key: "iphone" },
  { key: "android" },
  { key: "ipad" },
  { key: "mac" },
  { key: "iphoneDuo", isNew: true },
];

type DuoState = "closed" | "open";
type HighlightKey = keyof Dictionary["home"]["devices"]["highlights"];
type Hotspot = { key: HighlightKey; side: "left" | "right"; top: number; height: number };
type Mockup = { image: StaticImageData; hotspots: Hotspot[] };

const mockups: Record<Exclude<DeviceKey, "iphoneDuo">, Mockup> = {
  iphone: {
    image: iphone,
    hotspots: [
      { key: "liquidGlass", side: "right", top: 16, height: 13 },
      { key: "liveActivity", side: "left", top: 83, height: 6 },
    ],
  },
  android: {
    image: android,
    hotspots: [{ key: "materialYou", side: "right", top: 9, height: 20 }],
  },
  ipad: {
    image: ipad,
    hotspots: [
      { key: "sidebar", side: "left", top: 17, height: 19 },
      { key: "weekView", side: "right", top: 15, height: 65 },
    ],
  },
  mac: {
    image: mac,
    hotspots: [
      { key: "macApp", side: "left", top: 14, height: 17 },
      { key: "weekView", side: "right", top: 12, height: 73 },
    ],
  },
};

const duoMockups: Record<DuoState, Mockup> = {
  closed: {
    image: duoClosed,
    hotspots: [
      { key: "wideLayout", side: "left", top: 32, height: 52 },
      { key: "sideTabs", side: "right", top: 64, height: 27 },
    ],
  },
  open: {
    image: duoOpen,
    hotspots: [
      { key: "wideLayout", side: "left", top: 32, height: 52 },
      { key: "sideTabs", side: "right", top: 64, height: 27 },
    ],
  },
};

const slide = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 48 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction * -48 }),
};

const slideTransition = { duration: 0.4, ease: easeOutPapillon };

const delayedSlide = {
  ...slide,
  center: { ...slide.center, transition: { ...slideTransition, delay: 0.08 } },
};

const arrowStyle =
  "flex size-11 shrink-0 items-center justify-center rounded-full bg-surface transition hover:bg-foreground/10 active:scale-95 lg:size-12";

export function DeviceShowcase({ t }: { t: Dictionary["home"]["devices"] }) {
  const reduceMotion = useReducedMotion();
  const [{ index, direction }, setSelection] = useState({ index: 0, direction: 1 });
  const [duoState, setDuoState] = useState<DuoState>("closed");
  const [hoveredSide, setHoveredSide] = useState<Hotspot["side"] | null>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  const trackHoveredSide = (event: PointerEvent) => {
    if (event.pointerType !== "mouse" || !mockupRef.current) return;
    const box = mockupRef.current.getBoundingClientRect();
    setHoveredSide(event.clientX > box.right ? "right" : event.clientX < box.left ? "left" : null);
  };
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const id = useId();

  const select = (next: number, step = next - index) => {
    const wrapped = (next + devices.length) % devices.length;
    setSelection({ index: wrapped, direction: Math.sign(step) || 1 });
    centerTab(tabBarRef.current, tabRefs.current[wrapped]);
    return wrapped;
  };

  const moveWithKeyboard = (event: KeyboardEvent) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    tabRefs.current[select(index + step, step)]?.focus();
  };

  const device = devices[index];
  const slideDirection = reduceMotion ? 0 : direction;
  const isDuo = device.key === "iphoneDuo";
  const mockup = device.key === "iphoneDuo" ? duoMockups[duoState] : mockups[device.key];

  return (
    <div className="mt-10 flex flex-col items-center gap-8 lg:mt-14 lg:gap-12">
      <div
        ref={tabBarRef}
        className="scrollbar-none max-w-full overflow-x-auto rounded-full bg-surface p-1"
      >
        <div
          role="tablist"
          aria-label={t.tabsLabel}
          onKeyDown={moveWithKeyboard}
          className="relative isolate flex gap-1"
        >
          {devices.map((item, itemIndex) => {
            const selected = itemIndex === index;
            return (
              <button
                key={item.key}
                ref={(element) => {
                  tabRefs.current[itemIndex] = element;
                }}
                type="button"
                role="tab"
                id={`${id}-tab-${item.key}`}
                aria-selected={selected}
                aria-controls={`${id}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(itemIndex)}
                className={`relative flex h-9 shrink-0 items-center gap-2 rounded-full pl-4 text-md whitespace-nowrap transition-colors ${item.isNew ? "pr-1" : "pr-4"} ${selected ? "text-foreground" : "text-foreground/60 hover:text-foreground"}`}
              >
                {selected && (
                  <motion.span
                    layoutId={`${id}-indicator`}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
                    style={{ borderRadius: 999 }}
                    className="absolute inset-0 -z-10 bg-background shadow-sm"
                  />
                )}
                <span className="text-trim">{t.names[item.key]}</span>
                {item.isNew && (
                  <span className="flex h-7 items-center rounded-full bg-primary/15 px-2.5 text-sm font-semibold text-primary-dark">
                    <span className="text-trim">{t.new}</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${device.key}`}
        className="flex w-full max-w-6xl flex-col items-center gap-6 lg:gap-8"
      >
        <div className="flex w-full items-center gap-3 lg:gap-6">
          <button
            type="button"
            aria-label={t.previous}
            onClick={() => select(index - 1, -1)}
            className={arrowStyle}
          >
            <ChevronLeft aria-hidden className="size-6" />
          </button>

          <div
            onPointerMove={trackHoveredSide}
            onPointerLeave={() => setHoveredSide(null)}
            className="group/stage relative aspect-4/5 flex-1 overflow-hidden rounded-3xl bg-surface sm:aspect-video"
          >
            <AnimatePresence initial={false} custom={slideDirection}>
              <motion.div
                key={device.key}
                custom={slideDirection}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center"
              >
                <AnimatePresence initial={false}>
                  <motion.div
                    key={mockup.image.src}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={slideTransition}
                    style={{ containerType: "size" }}
                    className="absolute inset-0 flex items-center justify-center [--mockup-max:92cqw] lg:[--mockup-max:calc(100cqw-var(--spacing)*108)]"
                  >
                    <div
                      ref={(element) => {
                        if (element) mockupRef.current = element;
                      }}
                      className="relative"
                      style={{
                        width: `min(var(--mockup-max), ${(88 * mockup.image.width) / mockup.image.height}cqh)`,
                        aspectRatio: `${mockup.image.width} / ${mockup.image.height}`,
                      }}
                    >
                      <Image
                        src={mockup.image}
                        alt={
                          isDuo ? `${t.names.iphoneDuo} (${t.duo[duoState]})` : t.names[device.key]
                        }
                        sizes="(min-width: 1024px) 600px, 80vw"
                        quality={90}
                        className="size-full object-contain drop-shadow-2xl"
                      />
                      {mockup.hotspots.map((hotspot) => (
                        <DeviceHotspot
                          key={hotspot.key}
                          hotspot={hotspot}
                          content={t.highlights[hotspot.key]}
                          hovered={hoveredSide === hotspot.side}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
                {isDuo && (
                  <div
                    role="radiogroup"
                    aria-label={t.duo.label}
                    className="absolute bottom-4 isolate flex rounded-full bg-background p-1 shadow-sm"
                  >
                    {(["closed", "open"] as const).map((state) => (
                      <button
                        key={state}
                        type="button"
                        role="radio"
                        aria-checked={duoState === state}
                        onClick={() => setDuoState(state)}
                        className={`relative flex h-8 items-center rounded-full px-4 text-md transition-colors ${duoState === state ? "text-foreground" : "text-foreground/60 hover:text-foreground"}`}
                      >
                        {duoState === state && (
                          <motion.span
                            layoutId={`${id}-duo`}
                            transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
                            style={{ borderRadius: 999 }}
                            className="absolute inset-0 -z-10 bg-surface"
                          />
                        )}
                        <span className="text-trim">{t.duo[state]}</span>
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            aria-label={t.next}
            onClick={() => select(index + 1, 1)}
            className={arrowStyle}
          >
            <ChevronRight aria-hidden className="size-6" />
          </button>
        </div>

        <div className="relative grid max-w-2xl text-center">
          {devices.map((item) => (
            <p
              key={item.key}
              aria-hidden
              className="invisible col-start-1 row-start-1 text-lg/normal text-pretty"
            >
              {t.details[item.key]}
            </p>
          ))}
          <AnimatePresence initial={false} custom={slideDirection}>
            <motion.p
              key={device.key}
              custom={slideDirection}
              variants={delayedSlide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="absolute inset-0 text-lg/normal text-pretty text-foreground/60"
            >
              {t.details[device.key]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

type DeviceHotspotProps = {
  hotspot: Hotspot;
  content: { title: string; description: string };
  hovered: boolean;
};

function DeviceHotspot({ hotspot, content, hovered }: DeviceHotspotProps) {
  const [focused, setFocused] = useState(false);
  const open = hovered || focused;
  const onRight = hotspot.side === "right";

  return (
    <div
      style={{ top: `${hotspot.top}%`, height: `${hotspot.height}%` }}
      className={`absolute flex items-center opacity-0 transition-opacity duration-300 group-has-focus-visible/stage:opacity-100 group-hover/stage:opacity-100 max-lg:hidden ${onRight ? "left-full" : "right-full flex-row-reverse"}`}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-label={content.title}
        onPointerUp={(event) => event.pointerType !== "mouse" && setFocused(!focused)}
        onFocus={(event) => event.currentTarget.matches(":focus-visible") && setFocused(true)}
        onBlur={() => setFocused(false)}
        className="flex h-full items-stretch px-3"
      >
        <span
          className={`w-0.5 rounded-full bg-foreground transition-opacity duration-150 ${open ? "opacity-100" : "opacity-20"}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: onRight ? -8 : 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: onRight ? -8 : 8 }}
            transition={{ duration: 0.25, ease: easeOutPapillon }}
            className={`flex w-40 flex-col gap-1 ${onRight ? "text-left" : "text-right"}`}
          >
            <span className="text-lg font-semibold">{content.title}</span>
            <span className="text-md/snug text-foreground/60">{content.description}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function centerTab(tabBar: HTMLElement | null, tab: HTMLElement | null) {
  if (!tabBar || !tab) return;
  tabBar.scrollTo({
    left: tab.offsetLeft - (tabBar.clientWidth - tab.offsetWidth) / 2,
    behavior: "smooth",
  });
}
