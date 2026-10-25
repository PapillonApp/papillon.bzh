import { ArrowRight } from "@getpapillon/papicons";
import Image from "next/image";
import v1 from "@/assets/story/v1.png";
import { FadeUp } from "@/components/ui/fade-up";
import { teamMembers } from "@/content/team";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { ChapterHeading } from "./chapter-heading";

type OriginProps = {
  t: Dictionary["association"]["origin"];
  quote: string;
  role: string;
  locale: string;
};

export function Origin({ t, quote, role, locale }: OriginProps) {
  const vince = teamMembers[0];

  return (
    <section className="px-6 py-24 lg:py-32">
      <FadeUp className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <ChapterHeading title={t.title} description={t.description}>
          <figure className="mt-6 flex flex-col gap-5">
            <blockquote className="text-xl/snug font-medium text-pretty">« {quote} »</blockquote>
            <figcaption className="flex items-center gap-3">
              <Image src={vince.photo} alt="" sizes="40px" className="size-10 rounded-full object-cover" />
              <span className="flex flex-col text-md">
                <span className="font-semibold">{vince.name}</span>
                <span className="text-foreground/60">{role}</span>
              </span>
            </figcaption>
          </figure>
          <a
            href={`/${locale}/story`}
            className="group mt-4 flex w-fit items-center gap-1.5 text-md font-semibold text-primary"
          >
            <span className="text-trim">{t.link}</span>
            <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </ChapterHeading>
        <div className="flex justify-center">
          <Image src={v1} alt={t.imageAlt} sizes="(min-width: 1024px) 288px, 60vw" className="h-auto w-60 -rotate-3 lg:w-72" />
        </div>
      </FadeUp>
    </section>
  );
}
