import { ColorCard } from "@/components/ui/color-card";
import { FadeUp } from "@/components/ui/fade-up";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { ChapterHeading } from "./chapter-heading";

type TodayProps = {
  t: Dictionary["association"]["today"];
  stats: Dictionary["home"]["adoption"]["stats"];
};

export function Today({ t, stats }: TodayProps) {
  const facts = [
    { ...t.facts.founded, className: "from-primary to-primary/30" },
    { ...stats.downloads, className: "from-feature-news to-feature-news/30" },
    { ...stats.sessions, className: "from-swatch-purple to-swatch-purple/30" },
    { ...t.facts.appStore, className: "from-feature-schedule to-feature-schedule/30" },
  ];

  return (
    <div
      data-dark-section
      className="theme-night relative my-12 py-16 before:absolute before:-inset-x-1/2 before:top-0 before:h-16 before:rounded-t-[50%_100%] before:bg-background after:absolute after:-inset-x-1/2 after:bottom-0 after:h-16 after:rounded-b-[50%_100%] after:bg-background lg:my-20 lg:py-32 lg:before:h-32 lg:after:h-32"
    >
      <section className="bg-background px-6 py-8 lg:py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:gap-20">
          <FadeUp>
            <ChapterHeading title={t.title} description={t.description} />
          </FadeUp>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact, index) => (
              <FadeUp key={fact.label} delay={index * 0.05} className="h-full">
                <ColorCard className={`min-h-64 ${fact.className}`}>
                  <dl className="mt-auto flex flex-col-reverse gap-2">
                    <dt className="text-md/snug text-pretty text-foreground/80">{fact.label}</dt>
                    <dd className="text-5xl font-bold tracking-tight tabular-nums">{fact.value}</dd>
                  </dl>
                </ColorCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
