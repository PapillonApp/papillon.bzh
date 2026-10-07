import type { StaticImageData } from "next/image";
import { Points } from "@/components/feature/points";
import { Screen } from "@/components/feature/screen";
import { FadeUp } from "@/components/ui/fade-up";

type Callout = { text: string; side: "left" | "right"; top: string };

type AnnotatedScreenProps = {
  t: { title: string; description: string; imageAlt: string };
  image: StaticImageData;
  callouts: Callout[];
};

export function AnnotatedScreen({ t, image, callouts }: AnnotatedScreenProps) {
  return (
    <section className="overflow-hidden px-6 py-24 lg:py-32">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-balance lg:text-5xl">{t.title}</h2>
        <p className="text-lg/normal text-pretty text-foreground/60">{t.description}</p>
      </div>

      <FadeUp delay={0.1} className="relative mx-auto mt-16 w-64 lg:mt-20 lg:w-80">
        <Screen image={image} alt={t.imageAlt} className="w-full" />
        {callouts.map((callout) => (
          <p
            key={callout.text}
            style={{ top: callout.top }}
            className={`absolute hidden w-64 -translate-y-1/2 items-center gap-3 text-md font-semibold lg:flex ${
              callout.side === "left"
                ? "right-full -mr-10 flex-row-reverse text-right"
                : "left-full -ml-10"
            }`}
          >
            <span aria-hidden className="size-3 shrink-0 rounded-full bg-primary ring-4 ring-background" />
            <span aria-hidden className="h-px w-16 shrink-0 bg-primary/50" />
            <span className="text-balance">{callout.text}</span>
          </p>
        ))}
      </FadeUp>

      <Points points={callouts.map((callout) => callout.text)} className="mx-auto mt-12 max-w-sm lg:hidden" />
    </section>
  );
}
