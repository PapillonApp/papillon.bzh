"use client";

import { Search, Star } from "@getpapillon/papicons";
import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import papieventBg from "@/assets/hero/papievent-bg.jpg";
import { HeroTitle } from "@/components/home/hero-title";
import { DownloadButton } from "@/components/ui/download-button";
import { ServiceLogos } from "@/components/ui/service-logos";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { withBasePath } from "@/lib/base-path";
import { pageLight } from "@/lib/page-tone";

type HeroProps = {
  t: Dictionary["home"]["hero"];
  download: Dictionary["download"];
  stats: Dictionary["home"]["adoption"]["stats"];
  compatible: string;
};

export function Hero({ t, download, stats, compatible }: HeroProps) {
  const toneRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) setVideoReady(true);
    if (reduceMotion) {
      video.pause();
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          video.play().catch(() => {});
        } else if (!entry.isIntersecting) {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: [0, 0.5] },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <section
      data-dark-hero
      className="relative isolate z-10 flex flex-col overflow-x-clip min-h-svh pt-18 pb-12 text-page-foreground lg:h-svh lg:min-h-180 lg:pt-20 lg:pb-16"
    >
      <div ref={toneRef} aria-hidden className="absolute inset-x-0 top-0 h-75" />
      <div
        aria-hidden
        className="relative -z-10 -mt-18 -mb-8 min-h-72 flex-1 mask-t-from-80% mask-t-to-black/40 mask-b-from-50% lg:absolute lg:inset-0 lg:m-0 lg:mask-b-from-40% opacity-[calc(100%-var(--page-light))]"
      >
        <Image src={papieventBg} alt="" fill preload sizes="100vw" className="object-cover blur-md scale-105" />
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 size-full object-cover ${videoReady ? "" : "invisible"}`}
        >
          <source
            src={withBasePath("/hero/papievent-reveal.mov")}
            type='video/quicktime; codecs="hvc1"'
            media="(min-width: 1440px) and (min-resolution: 2dppx)"
          />
          <source src={withBasePath("/hero/papievent-reveal-1080p.mov")} type='video/quicktime; codecs="hvc1"' />
          <source
            src={withBasePath("/hero/papievent-reveal.webm")}
            type="video/webm"
            media="(min-width: 1440px) and (min-resolution: 2dppx)"
          />
          <source src={withBasePath("/hero/papievent-reveal-1080p.webm")} type="video/webm" />
        </video>
      </div>

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
