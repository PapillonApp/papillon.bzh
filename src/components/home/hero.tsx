"use client";

import { Search } from "@getpapillon/papicons";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import phoneInHand from "@/assets/hero/phone-in-hand.png";
import { AnimatedGradient } from "@/components/home/animated-gradient";
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
      className="relative isolate z-10 flex flex-col overflow-x-clip pt-18 pb-12 text-page-foreground lg:h-svh lg:min-h-180 lg:pt-20 lg:pb-16"
    >
      <div ref={toneRef} aria-hidden className="absolute inset-x-0 top-0 h-75" />
      <AnimatedGradient className="absolute inset-0 -z-10 size-full mask-b-from-40% opacity-[calc(100%-var(--page-light))]" />

      <MotionImage
        initial={reduceMotion ? false : { opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: easeOutPapillon }}
        src={phoneInHand}
        alt={t.imageAlt}
        sizes="(min-width: 1024px) 1100px, (min-width: 768px) 800px, 680px"
        loading="eager"
        fetchPriority="high"
        quality={90}
        className="-mb-16 w-170 max-w-none self-center mask-b-from-75% md:-mb-14 md:w-200 lg:-mb-24 lg:min-h-0 lg:w-full lg:max-h-240 lg:flex-1 lg:object-contain lg:object-bottom"
      />

      <div className="relative mx-auto mt-auto flex max-w-3xl flex-col items-center gap-5 px-6 text-center">
        <HeroTitle start={t.titleStart} end={t.titleEnd} />

        <p className="text-trim text-lg/normal font-book text-current/60">{t.description}</p>

        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <DownloadButton t={download} variant="primary" />
          <a
            href="#features"
            className="flex h-10 items-center gap-1.5 rounded-full border border-current/30 px-4 text-md font-medium text-current/60 transition hover:border-current/50 hover:text-current/80 active:scale-97"
          >
            <Search aria-hidden className="size-6" />
            <span className="text-trim">{t.discover}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
