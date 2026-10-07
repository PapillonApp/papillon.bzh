"use client";

import { Search } from "@getpapillon/papicons";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import Image from "next/image";
import { type ClipboardEvent, useEffect, useRef } from "react";
import bubble from "@/assets/hero/bubble.svg";
import calendar from "@/assets/hero/calendar.svg";
import cards from "@/assets/hero/cards.svg";
import homework from "@/assets/hero/homework.svg";
import menu from "@/assets/hero/menu.svg";
import phoneInHand from "@/assets/hero/phone-in-hand.webp";
import { DownloadButton } from "@/components/ui/download-button";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { easeOutPapillon } from "@/lib/motion";
import { pageLight } from "@/lib/page-tone";

const titleIcons = [bubble, cards, calendar, menu, homework];

const MotionImage = motion.create(Image);

const iconVariants: Variants = {
  hidden: { width: 0, opacity: 0, scale: 0.4, rotate: -12 },
  visible: (index: number) => ({
    width: "auto",
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.55, delay: 0.4 + index * 0.09, ease: easeOutPapillon },
  }),
};

function copyCollapsedText(event: ClipboardEvent<HTMLElement>) {
  const selection = window.getSelection();
  if (
    !selection?.rangeCount ||
    !event.currentTarget.contains(selection.getRangeAt(0).commonAncestorContainer)
  )
    return;
  event.preventDefault();
  event.clipboardData.setData("text/plain", selection.toString().replace(/\s+/g, " ").trim());
}

type HeroProps = {
  t: Dictionary["home"]["hero"];
  download: Dictionary["download"];
};

export function Hero({ t, download }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const toneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: toneRef, offset: ["start start", "end start"] });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    pageLight.set(progress);
    document.documentElement.style.setProperty("--page-light", `${progress * 100}%`);
  });
  useEffect(() => {
    pageLight.set(scrollYProgress.get());
    return () => {
      pageLight.set(0);
      document.documentElement.style.removeProperty("--page-light");
    };
  }, [scrollYProgress]);

  return (
    <section
      data-dark-hero
      className="relative isolate flex flex-col overflow-hidden pt-18 pb-12 text-page-foreground lg:h-svh lg:min-h-180 lg:pb-16"
    >
      <div ref={toneRef} aria-hidden className="absolute inset-x-0 top-0 h-75" />
      <div
        aria-hidden
        className="absolute -top-193 left-1/2 -z-10 h-386 w-918 -translate-x-1/2 bg-radial from-primary/30 from-21% via-primary/15 via-43% to-transparent to-65%"
      />
      <div
        aria-hidden
        className="absolute -top-112 left-1/2 -z-10 h-238 w-428 -translate-x-1/2 bg-radial from-primary/55 via-primary/30 via-26% to-transparent to-71%"
      />

      <MotionImage
        initial={reduceMotion ? false : { opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: easeOutPapillon }}
        src={phoneInHand}
        alt={t.imageAlt}
        sizes="(min-width: 1024px) 850px, (min-width: 768px) 652px, 92vw"
        loading="eager"
        fetchPriority="high"
        className="mx-auto -mb-8 w-11/12 max-w-163 translate-x-1/7 md:-mb-14 lg:absolute lg:inset-0 lg:m-auto lg:h-3/4 lg:max-h-220 lg:w-auto lg:max-w-none"
      />

      <div className="relative mx-auto mt-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center">
        <h1
          onCopy={copyCollapsedText}
          className="flex items-center justify-center gap-1.5 text-4xl leading-none font-book tracking-tight lg:text-5xl max-md:flex-col"
        >
          <span className="text-trim whitespace-nowrap">{t.titleStart}</span>
          <motion.span
            aria-hidden
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? "visible" : undefined}
            whileInView="visible"
            className="flex items-center select-none"
          >
            {titleIcons.map((icon, index) => (
              <motion.span
                key={icon.src}
                custom={index}
                variants={iconVariants}
                className="flex h-12 justify-center lg:h-17"
              >
                <Image src={icon} alt="" className="size-12 max-w-none lg:size-17" />
              </motion.span>
            ))}
          </motion.span>
          <span className="text-trim whitespace-nowrap">{t.titleEnd}</span>
        </h1>

        <p className="text-trim text-lg/normal font-book text-current/60">{t.description}</p>

        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <DownloadButton t={download} variant="primary" />
          <a
            href="#features"
            className="flex h-10 items-center gap-1.5 rounded-full border border-current/30 px-4 text-md font-medium text-current/60 transition-colors hover:border-current/50 hover:text-current/80"
          >
            <Search aria-hidden className="size-6" />
            <span className="text-trim">{t.discover}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
