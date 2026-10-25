import Image from "next/image";
import v1 from "@/assets/story/v1.png";
import v3a from "@/assets/story/v3-a.png";
import v3b from "@/assets/story/v3-b.png";
import v4a from "@/assets/story/v4-a.png";
import v4b from "@/assets/story/v4-b.png";
import v5 from "@/assets/story/v5.png";
import v6 from "@/assets/story/v6.png";
import v7 from "@/assets/story/v7.png";
import v8a from "@/assets/story/v8-1.png";
import v8b from "@/assets/story/v8-2.png";
import v8c from "@/assets/story/v8-3.png";
import v8d from "@/assets/story/v8-4.png";
import v8e from "@/assets/story/v8-5.png";
import v8f from "@/assets/story/v8-6.png";
import { Chapter } from "./chapter";
import { Milestone } from "./milestone";
import type { Shot } from "./phone-shot";
import { StoryHero } from "./story-hero";
import { StoryStack } from "./story-stack";
import { Today } from "./today";
import { StoreBadges } from "@/components/download/store-badges";
import { teamMembers } from "@/content/team";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";

const shots: Shot[][] = [
  [{ image: v1, framed: true }],
  [
    { image: v3a, framed: true },
    { image: v3b, framed: true },
  ],
  [{ image: v4a }, { image: v4b }],
  [{ image: v5, framed: true }],
  [{ image: v6 }],
  [{ image: v7, framed: true }],
];

const milestoneAfter = 5;

const todayShots: Shot[] = [{ image: v8a }, { image: v8b }, { image: v8c }, { image: v8d }, { image: v8e }, { image: v8f }];

type StoryPageProps = { dict: Dictionary; locale: Locale };

export function StoryPage({ dict, locale }: StoryPageProps) {
  const t = dict.story;
  const vince = teamMembers[0];

  return (
    <main className="overflow-x-clip bg-surface">
      <StoryHero t={t.hero} />

      <div>
        <StoryStack
          label={t.timelineLabel}
          items={shots.flatMap((eraShots, index) => [
            <Chapter key={index} era={t.eras[index]} shots={eraShots} />,
            ...(index === milestoneAfter ? [<Milestone key="milestone" t={t.milestone} />] : []),
          ])}
        />
        <Today era={t.eras[shots.length]} label={t.today} shots={todayShots} />
      </div>

      <section aria-labelledby="vision-title" className="theme-primary bg-background px-6 py-24 text-foreground lg:py-32">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2 lg:gap-24">
          <figure className="flex flex-col gap-8">
            <blockquote className="text-2xl/snug font-medium text-pretty">«{" "}{t.vinceQuote}{" "}»</blockquote>
            <figcaption className="flex items-center gap-3">
              <Image src={vince.photo} alt="" sizes="48px" className="size-12 rounded-full object-cover" />
              <span className="flex flex-col text-md">
                <span className="font-semibold">{vince.name}</span>
                <span className="text-foreground/70">{dict.association.team.members.vince.role}</span>
              </span>
            </figcaption>
          </figure>
          <div className="flex flex-col gap-6 lg:pt-2">
            <h2 id="vision-title" className="text-3xl font-semibold tracking-tight text-balance">
              {t.vision.title}
            </h2>
            <p className="text-lg/relaxed text-pretty text-foreground/80">{t.vision.description}</p>
            <p className="text-lg/relaxed font-semibold">{t.cta.description}</p>
            <StoreBadges t={dict.downloadPage.stores} locale={locale} className="justify-start" />
          </div>
        </div>
      </section>
    </main>
  );
}
