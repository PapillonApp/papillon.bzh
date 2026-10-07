import { Star, TextBubble } from "@getpapillon/papicons";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { reviews } from "@/content/reviews";
import { getDictionary } from "@/i18n/server";
import { ReviewMarquee } from "./review-marquee";

type StatKey = keyof Dictionary["home"]["adoption"]["stats"];

const stats: { key: StatKey; withStar?: boolean }[] = [
  { key: "downloads" },
  { key: "rating", withStar: true },
  { key: "reviews" },
  { key: "sessions" },
];

export async function Adoption() {
  const t = (await getDictionary()).home.adoption;

  return (
    <section className="py-24 lg:py-32">
      <div className="px-4 lg:px-5">
        <SectionHeading
          icon={TextBubble}
          iconColor="text-violet-500"
          title={t.title}
          description={t.description}
        />
        <dl className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-10 lg:mt-16 lg:grid-cols-4">
          {stats.map(({ key, withStar }) => (
            <div key={key} className="flex flex-col-reverse items-center gap-2 text-center">
              <dt className="text-md text-foreground/60">{t.stats[key].label}</dt>
              <dd className="flex items-center gap-2 text-4xl font-semibold tracking-tight lg:text-5xl">
                {t.stats[key].value}
                {withStar && <Star aria-hidden className="size-8 lg:size-10" />}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-16 lg:mt-20">
        <ReviewMarquee reviews={reviews} label={t.reviewsLabel} ratingLabel={t.ratingLabel} />
      </div>
    </section>
  );
}
