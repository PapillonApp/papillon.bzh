"use client";

import { Search, Star } from "@getpapillon/papicons";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { preload } from "react-dom";
import { HeroTitle } from "@/components/home/hero-title";
import { DownloadButton } from "@/components/ui/download-button";
import { ServiceLogos } from "@/components/ui/service-logos";
import { Spinner } from "@/components/ui/spinner";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { withBasePath } from "@/lib/base-path";
import { easeOutPapillon } from "@/lib/motion";
import { pageLight } from "@/lib/page-tone";

const posterPlaceholder =
  "url(data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAABwBQCdASogABIAPrVIn0unI6KhsBgIAOAWiWQAnTKEgQAWBT3/P1+I7O/2TGCpo2zCsllgAPni198fNHP6ZlejASbk6PR3Jo+kzAyDbBtGWCiGHofyHjHALvum2l7UUeQj1/PKF2E1Ah4HmttjZrUtO4TqfUH087Rg03+VdVoLIk6QyAgAAA==)";

const posterUrl = withBasePath("/hero/papievent-poster.jpg");

const fadeDuration = 0.3;

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

function isSlowConnection() {
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  return !!connection?.saveData || /2g|3g/.test(connection?.effectiveType ?? "");
}

type HeroProps = {
  t: Dictionary["home"]["hero"];
  download: Dictionary["download"];
  stats: Dictionary["home"]["adoption"]["stats"];
  compatible: string;
};

export function Hero({ t, download, stats, compatible }: HeroProps) {
  preload(posterUrl, { as: "image", fetchPriority: "high" });
  const toneRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [buffering, setBuffering] = useState(true);
  const [ready, setReady] = useState(false);
  const inViewRef = useRef(false);
  const shownRef = useRef(false);
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
    if (!video.getAttribute("src") && isSlowConnection()) {
      const hevc = video.canPlayType('video/mp4; codecs="hvc1"');
      video.src = withBasePath(`/hero/papievent-reveal-720p.${hevc ? "mp4" : "webm"}`);
    }
    if (!shownRef.current && (!video.paused || video.currentTime > 0)) {
      video.pause();
      video.currentTime = 0;
    }
    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) setBuffering(false);
    if (reduceMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.intersectionRatio >= 0.5;
        if (inViewRef.current && shownRef.current) {
          video.play().catch(() => setBuffering(false));
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

  useEffect(() => {
    if (!ready || reduceMotion) return;
    const timer = setTimeout(() => {
      shownRef.current = true;
      if (inViewRef.current) videoRef.current?.play().catch(() => setBuffering(false));
    }, (fadeDuration * 1000) / 2);
    return () => clearTimeout(timer);
  }, [ready, reduceMotion]);

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
        <div
          style={{ backgroundImage: `url(${posterUrl}), ${posterPlaceholder}` }}
          className="absolute inset-0 scale-105 bg-cover bg-center blur-2xl"
        />
        <motion.video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onWaiting={() => setBuffering(true)}
          onCanPlay={() => setBuffering(false)}
          onPlaying={(event) => {
            setBuffering(false);
            if (shownRef.current) return;
            event.currentTarget.pause();
            event.currentTarget.currentTime = 0;
          }}
          onSeeked={() => {
            if (!shownRef.current) setReady(true);
          }}
          initial={false}
          animate={{ opacity: ready && !reduceMotion ? 1 : 0 }}
          transition={{ duration: fadeDuration, ease: easeOutPapillon }}
          className="absolute inset-0 size-full object-cover"
        >
          <source
            src={withBasePath("/hero/papievent-reveal.mp4")}
            type='video/mp4; codecs="hvc1"'
            media="(min-width: 1440px) and (min-resolution: 2dppx)"
          />
          <source src={withBasePath("/hero/papievent-reveal-1080p.mp4")} type='video/mp4; codecs="hvc1"' />
          <source
            src={withBasePath("/hero/papievent-reveal.webm")}
            type="video/webm"
            media="(min-width: 1440px) and (min-resolution: 2dppx)"
          />
          <source src={withBasePath("/hero/papievent-reveal-1080p.webm")} type="video/webm" />
        </motion.video>
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/80 via-black/50 to-transparent" />
        <AnimatePresence>
          {buffering && (
            <motion.div
              initial={false}
              exit={{ opacity: 0, transition: { duration: 0.2, ease: easeOutPapillon } }}
              className="absolute inset-0 grid place-items-center motion-reduce:hidden"
            >
              <div className="transition-opacity delay-600 duration-300 ease-out starting:opacity-0">
                <Spinner className="size-8 text-current/70" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
