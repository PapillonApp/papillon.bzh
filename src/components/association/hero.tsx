"use client";

import { TextBubble } from "@getpapillon/papicons";
import { motion, useReducedMotion } from "motion/react";
import { DownloadButton } from "@/components/ui/download-button";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { discordUrl } from "@/lib/links";
import { easeOutPapillon } from "@/lib/motion";
import { GridMotion } from "./grid-motion";

type HeroProps = {
  t: Dictionary["association"]["hero"];
  download: Dictionary["download"];
};

export function Hero({ t, download }: HeroProps) {
  const reduceMotion = useReducedMotion();

  function reveal(delay: number) {
    return {
      initial: reduceMotion ? false : { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, delay, ease: easeOutPapillon },
    } as const;
  }

  return (
    <section
      data-dark-section
      data-photo-hero
      className="theme-dark relative isolate z-10 flex min-h-svh items-center justify-center overflow-hidden bg-background px-6 pt-32 pb-20"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <GridMotion />
        <div className="absolute inset-0 bg-radial from-background/90 via-background/70 via-45% to-background/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <motion.p
          {...reveal(0.3)}
          className="text-2xl font-bold text-primary -mb-3"
        >
          <span className="text-trim">{t.label}</span>
        </motion.p>
        <motion.h1
          {...reveal(0.38)}
          className="text-4xl font-semibold tracking-tight text-balance lg:text-5xl"
        >
          {t.title}
        </motion.h1>
        <motion.p
          {...reveal(0.46)}
          className="max-w-2xl text-lg/normal text-pretty text-foreground/70"
        >
          {t.description}
        </motion.p>
        <motion.div {...reveal(0.54)} className="mt-4 flex flex-wrap justify-center gap-4">
          <DownloadButton t={download} variant="primary" />
          <a
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 items-center gap-1.5 rounded-full border border-foreground/15 px-4 text-md font-medium text-foreground/60 transition hover:border-foreground/30 hover:text-foreground/80 active:scale-97"
          >
            <TextBubble aria-hidden className="size-6" />
            <span className="text-trim">{t.discord}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
