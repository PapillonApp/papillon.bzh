import { Code, Heart, Lock } from "@getpapillon/papicons";
import { ColorCard } from "@/components/ui/color-card";
import { FadeUp } from "@/components/ui/fade-up";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { ChapterHeading } from "./chapter-heading";

type CommitmentsDict = Dictionary["association"]["commitments"];

const items: { key: keyof CommitmentsDict["items"]; icon: typeof Heart; className: string }[] = [
  { key: "free", icon: Heart, className: "from-swatch-pink to-swatch-pink/30" },
  { key: "open", icon: Code, className: "from-feature-news to-feature-news/30" },
  { key: "privacy", icon: Lock, className: "from-feature-schedule to-feature-schedule/30" },
];

export function Commitments({ t }: { t: CommitmentsDict }) {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:gap-16">
        <FadeUp>
          <ChapterHeading title={t.title} />
        </FadeUp>
        <ul className="grid gap-4 md:grid-cols-3">
          {items.map(({ key, icon: Icon, className }, index) => (
            <li key={key}>
              <FadeUp delay={index * 0.08} className="h-full">
                <ColorCard className={`min-h-100 ${className}`}>
                  <Icon aria-hidden className="size-12 text-foreground/80" />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-3xl font-bold tracking-tight text-balance">{t.items[key].title}</h3>
                    <p className="text-md/normal text-pretty text-foreground/80">{t.items[key].description}</p>
                  </div>
                </ColorCard>
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
