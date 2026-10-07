"use client";

import { Search } from "@getpapillon/papicons";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import phoneInHand from "@/assets/hero/phone-in-hand.webp";
import { HeroTitle } from "@/components/home/hero-title";
import { DownloadButton } from "@/components/ui/download-button";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { easeOutPapillon } from "@/lib/motion";
import { pageLight } from "@/lib/page-tone";

const MotionImage = motion.create(Image);

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
        <HeroTitle start={t.titleStart} end={t.titleEnd} />

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
