import Image from "next/image";
import value1a from "@/assets/association/value-1-a.png";
import value1b from "@/assets/association/value-1-b.png";
import value2a from "@/assets/association/value-2-a.png";
import value2b from "@/assets/association/value-2-b.png";
import value3a from "@/assets/association/value-3-a.png";
import value3b from "@/assets/association/value-3-b.png";
import { FadeUp } from "@/components/ui/fade-up";
import type { Dictionary } from "@/i18n/dictionaries/fr";

const images = [
  [value1a, value1b],
  [value2a, value2b],
  [value3a, value3b],
];

export function Values({ t }: { t: Dictionary["association"]["values"] }) {
  return (
    <section className="px-4 py-16 lg:px-5 lg:py-24">
      <ul className="mx-auto flex max-w-6xl flex-col gap-24 lg:gap-32">
        {t.map((value, index) => {
          const [portrait, landscape] = images[index];

          return (
            <li key={value.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <FadeUp className={`relative pb-16 ${index % 2 ? "lg:order-last" : ""}`}>
                <Image
                  src={landscape}
                  alt=""
                  sizes="(min-width: 1024px) 480px, 80vw"
                  className="ml-auto w-5/6 rounded-3xl"
                />
                <Image
                  src={portrait}
                  alt=""
                  sizes="(min-width: 1024px) 240px, 40vw"
                  className="absolute bottom-0 left-0 w-2/5 rounded-3xl ring-8 ring-background"
                />
              </FadeUp>
              <FadeUp delay={0.08} className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold tracking-tight text-balance lg:text-4xl">
                  {value.title}
                </h2>
                <p className="text-lg/normal text-pretty text-foreground/60">{value.description}</p>
              </FadeUp>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
