import { Check } from "@getpapillon/papicons";
import Image, { type StaticImageData } from "next/image";
import { FadeUp } from "@/components/ui/fade-up";

type HighlightText = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  imageAlt: string;
};

type HighlightsProps<Key extends string> = {
  t: Record<Key, HighlightText>;
  items: { key: Key; image: StaticImageData }[];
};

export function Highlights<Key extends string>({ t, items }: HighlightsProps<Key>) {
  return (
    <div className="flex flex-col gap-24 px-6 py-12 lg:gap-32 lg:py-20">
      {items.map(({ key, image }, index) => (
        <section
          key={key}
          className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          <FadeUp
            className={`relative isolate flex justify-center ${index % 2 ? "lg:order-last" : ""}`}
          >
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-radial from-primary/20 via-primary/5 via-40% to-transparent to-70%"
            />
            <Image
              src={image}
              alt={t[key].imageAlt}
              sizes="(min-width: 1024px) 320px, 256px"
              className="h-auto w-64 drop-shadow-2xl lg:w-80"
            />
          </FadeUp>

          <FadeUp delay={0.1} className="flex flex-col items-start gap-5">
            <p className="text-md font-semibold text-primary">{t[key].eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
              {t[key].title}
            </h2>
            <p className="max-w-xl text-lg/normal text-pretty text-foreground/60">
              {t[key].description}
            </p>
            <ul className="mt-2 flex flex-col gap-3">
              {t[key].points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-md font-medium">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check aria-hidden className="size-4" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </FadeUp>
        </section>
      ))}
    </div>
  );
}
