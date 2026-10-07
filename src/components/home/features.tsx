import { Grid } from "@getpapillon/papicons";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary } from "@/i18n/server";
import { FeatureCard } from "./feature-card";
import { RevealWhenLight } from "./reveal-when-light";

type CardKey = keyof Dictionary["home"]["features"]["cards"];

const cards: { key: CardKey; className?: string }[] = [
  { key: "connected", className: "md:row-span-2" },
  { key: "private" },
  { key: "instant" },
  { key: "smart" },
  { key: "personal" },
];

export async function Features() {
  const t = (await getDictionary()).home.features;

  return (
    <section id="features" className="scroll-mt-20 px-4 py-24 lg:px-5 lg:py-32">
      <RevealWhenLight>
        <SectionHeading
          icon={Grid}
          iconColor="text-primary"
          title={t.title}
          description={t.description}
        />
      </RevealWhenLight>
      <RevealWhenLight
        delay={0.1}
        className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:grid-rows-2"
      >
        {cards.map((card) => (
          <FeatureCard
            key={card.key}
            title={t.cards[card.key].title}
            description={t.cards[card.key].description}
            className={card.className}
          />
        ))}
      </RevealWhenLight>
    </section>
  );
}
