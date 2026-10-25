import Image from "next/image";
import appIcon from "@/assets/app-icon.png";
import icon2021 from "@/assets/story/icon-2021.png";
import icon2022 from "@/assets/story/icon-2022.png";
import iconV4 from "@/assets/story/icon-v4.png";
import type { Dictionary } from "@/i18n/dictionaries/fr";

const icons = [icon2021, icon2022, iconV4, appIcon];

export function StoryHero({ t }: { t: Dictionary["story"]["hero"] }) {
  return (
    <section aria-labelledby="histoire-title" className="px-6 pt-32 pb-16 lg:pt-44 lg:pb-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <div role="img" aria-label={t.iconsAlt} className="mb-2 flex gap-3 sm:gap-4">
          {icons.map((icon) => (
            <Image key={icon.src} src={icon} alt="" preload sizes="80px" className="size-14 sm:size-20" />
          ))}
        </div>
        <h1 id="histoire-title" className="text-5xl leading-tight font-semibold tracking-tight text-balance">
          {t.title}
        </h1>
        <p className="max-w-xl text-xl/normal text-pretty text-foreground/70">{t.description}</p>
      </div>
    </section>
  );
}
