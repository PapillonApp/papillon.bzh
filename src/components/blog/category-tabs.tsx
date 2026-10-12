"use client";

import { Grid } from "@getpapillon/papicons";
import { motion, useReducedMotion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import { type ReactNode, useState } from "react";
import bubble from "@/assets/hero/bubble.svg";
import calendar from "@/assets/hero/calendar.svg";
import homework from "@/assets/hero/homework.svg";
import type { PostCategory } from "@/lib/blog";

type Tab = "all" | PostCategory;

const icons: Record<PostCategory, StaticImageData> = {
  articles: bubble,
  development: homework,
  releaseNotes: calendar,
};

const spring = { type: "spring", bounce: 0.15, duration: 0.3 } as const;

type CategoryTabsProps = {
  allLabel: string;
  labels: Record<PostCategory, string>;
  panels: Record<Tab, ReactNode>;
};

export function CategoryTabs({ allLabel, labels, panels }: CategoryTabsProps) {
  const [active, setActive] = useState<Tab>("all");
  const reduceMotion = useReducedMotion();
  const tabs: Tab[] = ["all", ...(Object.keys(labels) as PostCategory[])];

  return (
    <>
      <div className="-mx-3 mt-10 flex gap-1 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            aria-pressed={active === tab}
            onClick={() => setActive(tab)}
            className="relative isolate flex h-10 shrink-0 items-center gap-2 rounded-full px-3 text-md font-medium text-foreground/60 transition-colors duration-150 hover:text-foreground aria-pressed:text-foreground"
          >
            {active === tab && (
              <motion.span
                layoutId="blog-category"
                transition={reduceMotion ? { duration: 0 } : spring}
                className="absolute inset-0 -z-10 rounded-full bg-foreground/5"
              />
            )}
            {tab === "all" ? (
              <Grid aria-hidden className="size-6 opacity-50" />
            ) : (
              <Image src={icons[tab]} alt="" className="size-6" />
            )}
            <span className="text-trim">{tab === "all" ? allLabel : labels[tab]}</span>
          </button>
        ))}
      </div>
      {panels[active]}
    </>
  );
}
