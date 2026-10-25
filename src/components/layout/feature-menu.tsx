import { Calendar, Grades, Newspaper, Tasks } from "@getpapillon/papicons";
import Image, { type StaticImageData } from "next/image";
import course from "@/assets/navbar/course.svg";
import grade from "@/assets/navbar/grade.svg";
import homework from "@/assets/navbar/homework.svg";
import news from "@/assets/navbar/news.svg";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { linkHrefs, localizeHref } from "@/lib/links";

type Features = Dictionary["nav"]["menus"]["features"];
type Placed = { Icon: typeof Grades; className: string };

type Composition = {
  card: string;
  shot: { src: StaticImageData; className: string };
  watermark: Placed;
};

const compositions: Record<keyof Features, Composition> = {
  grades: {
    card: "bg-feature-grades",
    shot: { src: grade, className: "-top-4 -right-2 w-48 -rotate-4" },
    watermark: { Icon: Grades, className: "-top-6 -left-6 rotate-12" },
  },
  schedule: {
    card: "bg-feature-schedule",
    shot: { src: course, className: "top-3 -right-12 w-72 rotate-3" },
    watermark: { Icon: Calendar, className: "-top-8 -left-4 -rotate-12" },
  },
  homework: {
    card: "bg-feature-homework",
    shot: { src: homework, className: "-top-6 -right-16 w-68 -rotate-3" },
    watermark: { Icon: Tasks, className: "-top-6 -left-6 rotate-6" },
  },
  news: {
    card: "bg-feature-news",
    shot: { src: news, className: "top-0 -right-12 w-72 -rotate-2" },
    watermark: { Icon: Newspaper, className: "-top-6 -left-6 -rotate-6" },
  },
};

type FeatureMenuProps = {
  labels: Dictionary["nav"];
  locale: string;
};

export function FeatureMenu({ labels, locale }: FeatureMenuProps) {
  const entries = Object.entries(labels.menus.features) as [
    keyof Features,
    Features[keyof Features],
  ][];

  return (
    <ul className="grid grid-cols-2 gap-1.5">
      {entries.map(([key, { title, description }]) => {
        const { card, shot, watermark } = compositions[key];
        return (
          <li key={key}>
            <a
              href={localizeHref(linkHrefs[key], locale)}
              data-sound="card"
              data-hover-sound="cardHover"
              className={`relative flex h-48 w-72 flex-col justify-end overflow-hidden rounded-2xl p-5 text-white transition-[scale,filter] duration-150 ease-out hover:scale-98 hover:brightness-90 ${card}`}
            >
              <watermark.Icon
                aria-hidden
                className={`absolute size-36 text-white/10 ${watermark.className}`}
              />

              <Image
                src={shot.src}
                alt=""
                unoptimized
                className={`absolute h-auto max-w-none drop-shadow-xl ${shot.className}`}
              />

              <span className="relative text-trim text-xl font-semibold">{title}</span>
              <span className="relative mt-2.5 truncate text-sm text-white/75">{description}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
