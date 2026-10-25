"use client";

import { ExternalLink, MapPin } from "@getpapillon/papicons";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { HoverGroup } from "@/components/ui/hover-highlight";
import { teamMembers } from "@/content/team";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { easeOutPapillon } from "@/lib/motion";

type Members = Dictionary["association"]["team"]["members"];
type Point = [longitude: number, latitude: number];

const mainland: Point[] = [
  [2.37, 51.03], [2.9, 50.7], [3.6, 50.5], [4.2, 50], [4.85, 50.15], [5, 49.8], [5.8, 49.55], [6.4, 49.45],
  [7, 49.1], [8.2, 48.97], [7.8, 48.5], [7.55, 47.6], [6.9, 47.4], [6.4, 46.9], [6.1, 46.4], [6.8, 46.4],
  [7, 45.9], [6.8, 45.6], [7.1, 45.2], [6.6, 45.1], [7, 44.7], [6.9, 44.3], [7.5, 43.8], [6.9, 43.45],
  [6.6, 43.15], [5.9, 43.1], [5.4, 43.2], [4.8, 43.35], [4.2, 43.45], [3.5, 43.28], [3.05, 43], [3.17, 42.43],
  [2.5, 42.35], [1.7, 42.5], [0.7, 42.8], [-0.3, 42.8], [-0.7, 42.9], [-1.4, 43.1], [-1.78, 43.37], [-1.45, 43.6],
  [-1.25, 44.6], [-1.15, 45.1], [-1.2, 45.7], [-1.1, 46.2], [-1.8, 46.5], [-2.1, 46.9], [-2.2, 47.25], [-2.8, 47.5],
  [-3.5, 47.7], [-4.37, 47.8], [-4.7, 48.05], [-4.3, 48.25], [-4.77, 48.4], [-4.6, 48.6], [-4, 48.72], [-3.5, 48.83],
  [-3, 48.8], [-2.6, 48.55], [-2, 48.62], [-1.5, 48.65], [-1.6, 49.2], [-1.85, 49.65], [-1.25, 49.7], [-1.1, 49.35],
  [-0.2, 49.3], [0.2, 49.45], [0.6, 49.85], [1.2, 49.95], [1.6, 50.25], [1.6, 50.85], [1.85, 50.95],
];

const corsica: Point[] = [
  [9.4, 43], [9.55, 42.6], [9.55, 42.1], [9.25, 41.4], [8.8, 41.6], [8.6, 41.9], [8.7, 42.3], [8.6, 42.6], [9.1, 42.75],
];

const WEST = -5;
const NORTH = 51.2;
const WIDTH = 1018;
const HEIGHT = 1000;
const LONGITUDE_SCALE = 68.8;

function project([longitude, latitude]: Point) {
  return { x: (longitude - WEST) * LONGITUDE_SCALE, y: (NORTH - latitude) * 100 };
}

function outline(points: Point[]) {
  return `M${points.map((point) => `${project(point).x},${project(point).y}`).join("L")}Z`;
}

const cities = [...new Set(teamMembers.map((member) => member.city))].map((city) => {
  const members = teamMembers.filter((member) => member.city === city);
  return { city, members, ...project(members[0].coordinates) };
});

const links = cities.flatMap((from, index) => cities.slice(index + 1).map((to) => ({ from, to })));

export function TeamAtlas({ members }: { members: Members }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
      <FranceMap active={active} />
      <HoverGroup highlightClassName="rounded-3xl bg-surface" className="-mx-5">
        <ul className="flex flex-col">
          {teamMembers.map((member) => (
            <li key={member.key}>
              <a
                data-hover-item
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                onPointerEnter={() => setActive(member.city)}
                onPointerLeave={() => setActive(null)}
                onFocus={() => setActive(member.city)}
                onBlur={() => setActive(null)}
                className="group flex gap-5 rounded-3xl p-5 transition active:scale-98"
              >
                <Image src={member.photo} alt="" sizes="56px" className="size-14 shrink-0 rounded-full object-cover" />
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight">{member.name}</h3>
                    <ExternalLink
                      aria-hidden
                      className="mt-1 size-5 shrink-0 text-foreground/30 transition-colors group-hover:text-foreground/60"
                    />
                  </div>
                  <p className="text-md font-medium text-primary">{members[member.key].role}</p>
                  <p className="text-md text-foreground/60">{members[member.key].school}</p>
                  <p className="mt-2 text-md/normal text-pretty text-foreground/80">{members[member.key].description}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-md text-foreground/50">
                    <MapPin aria-hidden className="size-5" />
                    {member.city}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </HoverGroup>
    </div>
  );
}

function FranceMap({ active }: { active: string | null }) {
  const reduceMotion = useReducedMotion();

  function reveal(delay: number) {
    return {
      initial: reduceMotion ? false : { pathLength: 0, opacity: 0 },
      whileInView: { pathLength: 1, opacity: 1 },
      viewport: { once: true, amount: 0.4 },
      transition: { duration: 1.2, delay, ease: easeOutPapillon },
    } as const;
  }

  return (
    <div aria-hidden className="relative aspect-1018/1000 w-full lg:sticky lg:top-28">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="absolute inset-0 size-full overflow-visible">
        <path d={outline(mainland)} className="fill-surface" />
        <path d={outline(corsica)} className="fill-surface" />
        {links.map(({ from, to }, index) => {
          const lit = active === from.city || active === to.city;
          return (
            <motion.path
              key={`${from.city}-${to.city}`}
              d={`M${from.x},${from.y}L${to.x},${to.y}`}
              {...reveal(0.2 + index * 0.06)}
              strokeWidth={lit ? 2.5 : 1.5}
              vectorEffect="non-scaling-stroke"
              className={`transition-colors ${
                active && !lit ? "stroke-primary/10" : lit ? "stroke-primary" : "stroke-primary/40"
              }`}
            />
          );
        })}
      </svg>

      {cities.map(({ city, members, x, y }, index) => {
        const dimmed = active !== null && active !== city;
        return (
          <motion.div
            key={city}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: easeOutPapillon }}
            style={{ left: `${(x / WIDTH) * 100}%`, top: `${(y / HEIGHT) * 100}%` }}
            className="absolute"
          >
            <div
              className={`relative flex -translate-x-1/2 -translate-y-1/2 flex-col items-center transition duration-300 ${
                dimmed ? "opacity-30" : ""
              } ${active === city ? "scale-110" : ""}`}
            >
              <div className="flex -space-x-4">
                {members.map((member) => (
                  <Image
                    key={member.key}
                    src={member.photo}
                    alt=""
                    sizes="56px"
                    className="size-10 rounded-full object-cover ring-3 ring-background sm:size-14 sm:ring-4"
                  />
                ))}
              </div>
              <span className="absolute top-full mt-1.5 rounded-full bg-background px-2 py-1 text-sm font-medium whitespace-nowrap sm:mt-2 sm:px-2.5 sm:text-md">
                <span className="text-trim">{city}</span>
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
