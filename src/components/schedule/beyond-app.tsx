import type { StaticImageData } from "next/image";
import { Points } from "@/components/feature/points";
import { Screen } from "@/components/feature/screen";
import { FadeUp } from "@/components/ui/fade-up";

type ScreenText = { title: string; description: string; points: string[]; imageAlt: string };

type BeyondAppProps = {
  live: { t: ScreenText; image: StaticImageData };
  widget: { t: ScreenText; image: StaticImageData };
};

export function BeyondApp({ live, widget }: BeyondAppProps) {
  return (
    <div data-dark-section className="theme-dark bg-background">
      <section className="relative isolate overflow-hidden px-6 py-24 lg:py-36">
        <div
          aria-hidden
          className="absolute inset-x-0 top-1/3 -z-10 h-2/3 bg-radial from-primary/25 via-primary/6 via-40% to-transparent to-70%"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-semibold tracking-tight text-balance lg:text-5xl">{live.t.title}</h2>
            <p className="max-w-lg text-lg/normal text-pretty text-foreground/70">{live.t.description}</p>
            <Points points={live.t.points} className="mt-2 max-w-md" />
          </div>

          <div className="flex items-end justify-center gap-4 lg:gap-8">
            <FadeUp delay={0.1}>
              <Screen image={live.image} alt={live.t.imageAlt} className="w-48 sm:w-64 lg:w-80" />
            </FadeUp>
            <FadeUp delay={0.2} className="hidden translate-y-16 sm:block">
              <Screen image={widget.image} alt={widget.t.imageAlt} className="w-56 lg:w-64" />
            </FadeUp>
          </div>
        </div>

        <div className="mx-auto mt-24 flex max-w-6xl flex-col gap-3 border-t border-foreground/15 pt-10 lg:mt-32 lg:flex-row lg:gap-20">
          <h3 className="text-2xl font-semibold tracking-tight text-balance lg:w-1/3">{widget.t.title}</h3>
          <p className="max-w-xl text-lg/normal text-pretty text-foreground/70">{widget.t.description}</p>
        </div>
      </section>
    </div>
  );
}
