"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import appIcon from "@/assets/app-icon.png";
import duoClosed from "@/assets/devices/Devices-Duo-Closed.png";
import ipadPro from "@/assets/devices/Devices-iPadPro.png";
import iphone from "@/assets/devices/Devices-iPhone.png";
import pixel from "@/assets/devices/Devices-Pixel10.png";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { easeOutPapillon } from "@/lib/motion";

const devices = [
  { image: pixel, width: "w-1/7", delay: 0.12 },
  { image: ipadPro, width: "w-5/12", delay: 0 },
  { image: duoClosed, width: "w-1/5", delay: 0.06 },
  { image: iphone, width: "w-1/7", delay: 0.18 },
];

export function StoryHero({ t }: { t: Dictionary["story"]["hero"] }) {
  const reduceMotion = useReducedMotion();

  function reveal(delay: number, from: Record<string, number>) {
    return {
      initial: reduceMotion ? false : { opacity: 0, ...from },
      animate: { opacity: 1, y: 0, scale: 1, rotate: 0 },
      transition: { duration: 0.8, delay, ease: easeOutPapillon },
    } as const;
  }

  return (
    <section aria-labelledby="histoire-title" className="px-6 pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <motion.div {...reveal(0, { scale: 0.6, rotate: -12 })}>
          <Image src={appIcon} alt="" preload sizes="80px" className="size-20" />
        </motion.div>
        <motion.h1 id="histoire-title" {...reveal(0.1, { y: 24 })} className="text-5xl leading-tight font-semibold tracking-tight text-balance">
          {t.title}
        </motion.h1>
        <motion.p {...reveal(0.18, { y: 24 })} className="max-w-xl text-xl/normal text-pretty text-foreground/70">
          {t.description}
        </motion.p>
      </div>
      <div role="img" aria-label={t.devicesAlt} className="mx-auto mt-14 flex max-w-5xl items-end justify-center gap-3 sm:gap-6 lg:mt-20">
        {devices.map(({ image, width, delay }) => (
          <motion.div key={image.src} {...reveal(0.3 + delay, { y: 96 })} className={width}>
            <Image src={image} alt="" preload sizes="(min-width: 1024px) 430px, 42vw" className="h-auto w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
