import Image, { type StaticImageData } from "next/image";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionTitle } from "./section-title";

export type LargeScreenText = { title: string; description: string; imageAlt: string };

type LargeScreenProps = {
  t: LargeScreenText;
  image: StaticImageData;
};

export function LargeScreen({ t, image }: LargeScreenProps) {
  return (
    <section className="px-6 py-24 lg:py-32">
      <SectionTitle title={t.title} description={t.description} />
      <FadeUp
        delay={0.1}
        className="mx-auto max-w-6xl rounded-3xl bg-surface px-6 py-10 sm:px-12 lg:px-24 lg:py-16"
      >
        <Image
          src={image}
          alt={t.imageAlt}
          sizes="(min-width: 1024px) 960px, 100vw"
          className="mx-auto h-auto w-full max-w-4xl drop-shadow-xl/15"
        />
      </FadeUp>
    </section>
  );
}
