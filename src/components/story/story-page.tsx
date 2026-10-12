import Image, { type StaticImageData } from "next/image";
import coding from "@/assets/association/value-2-b.png";
import ipadPro from "@/assets/devices/Devices-iPadPro.png";
import overview from "@/assets/grades/overview.webp";
import home from "@/assets/schedule/home.webp";
import list from "@/assets/schedule/list.webp";
import loginSearch from "@/assets/steps/Login_Step1.png";
import loginDone from "@/assets/steps/Login_Step4.png";
import teamPhoto from "@/assets/team/PapillonTeam.png";
import { PlaceholderShot } from "./placeholder-shot";
import { StoryHero } from "./story-hero";
import { StoreBadges } from "@/components/download/store-badges";
import { teamMembers } from "@/content/team";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";

type Histoire = Dictionary["story"];
type Visual =
  | { kind: "placeholder"; image: StaticImageData; label: keyof Histoire["placeholders"] }
  | { kind: "photo" | "phone" | "wide"; image: StaticImageData; alt: keyof Histoire["images"] };

const visuals: Visual[] = [
  { kind: "placeholder", image: loginSearch, label: "first" },
  { kind: "photo", image: coding, alt: "openSource" },
  { kind: "placeholder", image: overview, label: "stores" },
  { kind: "placeholder", image: list, label: "v7" },
  { kind: "placeholder", image: loginDone, label: "ranking" },
  { kind: "placeholder", image: home, label: "million" },
  { kind: "wide", image: teamPhoto, alt: "association" },
  { kind: "phone", image: home, alt: "v8" },
  { kind: "placeholder", image: loginSearch, label: "universities" },
  { kind: "wide", image: ipadPro, alt: "devices" },
];

type StoryPageProps = { dict: Dictionary; locale: Locale };

function MilestoneVisual({ visual, t }: { visual: Visual; t: Histoire }) {
  if (visual.kind === "placeholder") {
    return <PlaceholderShot image={visual.image} prefix={t.placeholder} label={t.placeholders[visual.label]} className="w-40 shrink-0 lg:w-48" sizes="192px" />;
  }
  const sizing = {
    photo: "w-full max-w-md rounded-3xl",
    phone: "w-40 shrink-0 lg:w-48",
    wide: "w-full max-w-2xl",
  }[visual.kind];
  return <Image src={visual.image} alt={t.images[visual.alt]} sizes="(min-width: 1024px) 672px, 90vw" className={`h-auto ${sizing}`} />;
}

export function StoryPage({ dict, locale }: StoryPageProps) {
  const t = dict.story;
  const vince = teamMembers[0];

  return (
    <main className="overflow-x-clip">
      <StoryHero t={t.hero} />

      <section aria-label={t.timelineLabel} className="px-6 pb-28 lg:pb-40">
        <ol className="mx-auto max-w-5xl">
          {t.timeline.map((step, index) => {
            const visual = visuals[index];
            const beside = visual.kind === "placeholder" || visual.kind === "phone";
            return (
              <li key={step.date} className="grid gap-x-12 gap-y-4 border-t border-foreground/10 py-12 lg:grid-cols-4 lg:py-16">
                <p className="text-lg font-semibold text-primary-dark lg:sticky lg:top-28 lg:self-start">{step.date}</p>
                <div className={`flex flex-col gap-8 lg:col-span-3 ${beside ? "sm:flex-row sm:items-start sm:justify-between sm:gap-12" : ""}`}>
                  <div className="flex max-w-md flex-col gap-3">
                    <h2 className="text-3xl font-semibold tracking-tight text-balance">{step.title}</h2>
                    <p className="text-xl/normal text-pretty text-foreground/70">{step.text}</p>
                  </div>
                  <MilestoneVisual visual={visual} t={t} />
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-labelledby="vision-title" className="theme-primary bg-background px-6 py-24 text-foreground lg:py-32">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2 lg:gap-24">
          <figure className="flex flex-col gap-8">
            <blockquote className="text-2xl/snug font-medium text-pretty">«{"\u00a0"}{t.vinceQuote}{"\u00a0"}»</blockquote>
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
