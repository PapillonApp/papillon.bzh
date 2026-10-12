"use client";

import { Search, Star } from "@getpapillon/papicons";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef } from "react";
import { HeroTitle } from "@/components/home/hero-title";
import { DownloadButton } from "@/components/ui/download-button";
import { ServiceLogos } from "@/components/ui/service-logos";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { pageLight } from "@/lib/page-tone";

type HeroProps = {
  t: Dictionary["home"]["hero"];
  download: Dictionary["download"];
  stats: Dictionary["home"]["adoption"]["stats"];
  compatible: string;
};

export function Hero({ t, download, stats, compatible }: HeroProps) {
  const toneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: toneRef, offset: ["start start", "end start"] });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // The listener outlives the page while <Activity> keeps it hidden
    if (!toneRef.current?.checkVisibility()) return;
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
      className="relative isolate z-10 flex flex-col overflow-x-clip min-h-svh pt-18 pb-12 text-page-foreground lg:h-svh lg:min-h-180 lg:pt-20 lg:pb-16"
    >
      <div ref={toneRef} aria-hidden className="absolute inset-x-0 top-0 h-75" />
      <video
        src="/hero/papievent-reveal.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="absolute inset-0 -z-10 size-full object-cover mask-t-from-80% mask-t-to-black/40 mask-b-from-40% opacity-[calc(100%-var(--page-light))]"
      />

      <div className="relative mx-auto mt-auto flex max-w-3xl flex-col items-center gap-5 px-6 text-center">
        <HeroTitle start={t.titleStart} end={t.titleEnd} iconLabels={t.iconLabels} />

        <p className="text-trim text-lg/normal font-book text-current/60">{t.description}</p>

        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <DownloadButton t={download} variant="primary" menuSide="top" />
          <a
            href="#features"
            className="flex h-10 items-center gap-1.5 rounded-full border border-current/30 px-4 text-md font-medium text-current/60 transition hover:border-current/50 hover:text-current/80 active:scale-97"
          >
            <Search aria-hidden className="size-6" />
            <span className="text-trim">{t.discover}</span>
          </a>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-md text-current/60">
          <p className="flex items-center gap-1.5">
            <Star aria-hidden className="size-5" />
            <span className="text-trim">
              {stats.rating.value} {t.stars}
            </span>
          </p>
          <span aria-hidden className="h-4 w-px bg-current/30 max-sm:hidden" />
          <p className="text-trim">
            {stats.downloads.value} {stats.downloads.label}
          </p>
          <span aria-hidden className="h-4 w-px bg-current/30 max-sm:hidden" />
          <p className="flex items-center gap-x-3">
            <span className="text-trim">{compatible}</span>
            <ServiceLogos />
          </p>
        </div>
      </div>
    </section>
  );
}
