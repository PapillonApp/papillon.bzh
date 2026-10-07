import { Phone } from "@getpapillon/papicons";
import Image, { type StaticImageData } from "next/image";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeading } from "@/components/ui/section-heading";

export type LargeScreenText = { title: string; description: string; imageAlt: string };

type LargeScreenProps = {
  t: LargeScreenText;
  image: StaticImageData;
};

export function LargeScreen({ t, image }: LargeScreenProps) {
  return (
    <section className="relative isolate overflow-hidden px-4 py-24 lg:px-5 lg:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-radial-[at_bottom] from-primary/20 via-primary/5 via-40% to-transparent to-70%"
      />
      <SectionHeading
        icon={Phone}
        iconColor="text-foreground/50"
        title={t.title}
        description={t.description}
      />
      <FadeUp delay={0.1} className="mx-auto mt-12 max-w-5xl lg:mt-16">
        <Image
          src={image}
          alt={t.imageAlt}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="h-auto w-full drop-shadow-2xl"
        />
      </FadeUp>
    </section>
  );
}
