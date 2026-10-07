"use client";

import { TextBubble } from "@getpapillon/papicons";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { DownloadButton } from "@/components/ui/download-button";
import { teamMembers } from "@/content/team";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { discordUrl } from "@/lib/links";
import { easeOutPapillon } from "@/lib/motion";

const avatarSizes = [
  "size-12 sm:size-16 lg:size-20",
  "size-14 sm:size-20 lg:size-24",
  "size-16 sm:size-22 lg:size-28",
  "size-14 sm:size-21 lg:size-26",
  "size-12 sm:size-18 lg:size-22",
  "size-10 sm:size-14 lg:size-18",
];

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
    <section className="relative isolate z-10 overflow-x-clip px-6 pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-118 left-1/2 h-238 w-428 -translate-x-1/2 bg-radial from-primary/40 via-primary/8 via-40% to-transparent to-65%" />
      </div>

      <ul className="flex items-center justify-center gap-1 sm:gap-3 lg:gap-5">
        {teamMembers.map((member, index) => (
          <motion.li
            key={member.key}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.4, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 + index * 0.07, ease: easeOutPapillon }}
          >
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{
                duration: 4 + (index % 3) * 0.7,
                delay: index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="group relative"
            >
              <motion.div
                whileHover={reduceMotion ? undefined : { scale: 1.12, rotate: index % 2 ? 4 : -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  sizes="112px"
                  priority
                  className={`rounded-full object-cover shadow-lg ${avatarSizes[index]}`}
                />
              </motion.div>
              <span
                aria-hidden
                className="pointer-events-none absolute top-full left-1/2 mt-3 -translate-x-1/2 rounded-full bg-foreground px-2.5 py-1 text-sm font-medium whitespace-nowrap text-background opacity-0 transition-opacity group-hover:opacity-100 max-lg:hidden">
                {member.name}
              </span>
            </motion.div>
          </motion.li>
        ))}
      </ul>

      <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-5 text-center lg:mt-20">
        <motion.p
          {...reveal(0.5)}
          className="text-2xl font-bold text-primary -mb-3"
        >
          <span className="text-trim">{t.label}</span>
        </motion.p>
        <motion.h1
          {...reveal(0.58)}
          className="text-4xl font-semibold tracking-tight text-balance lg:text-5xl"
        >
          {t.title}
        </motion.h1>
        <motion.p
          {...reveal(0.66)}
          className="max-w-2xl text-lg/normal text-pretty text-foreground/60"
        >
          {t.description}
        </motion.p>
        <motion.div {...reveal(0.74)} className="mt-4 flex flex-wrap justify-center gap-4">
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
