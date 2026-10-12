import type { StaticImageData } from "next/image";
import { FadeUp } from "@/components/ui/fade-up";
import { Screen } from "./screen";

type TilesProps = {
  items: {
    image: StaticImageData;
    t: { title: string; description: string; imageAlt: string };
    showBottom?: boolean;
  }[];
};

const layouts = {
  2: { grid: "lg:grid-cols-2", tile: "h-96 lg:h-112", screen: "w-60 lg:w-72" },
  3: { grid: "lg:grid-cols-3", tile: "h-88 lg:h-96", screen: "w-56 lg:w-64" },
  4: { grid: "lg:grid-cols-4", tile: "h-88 lg:h-80", screen: "w-56 lg:w-48" },
};

export function Tiles({ items }: TilesProps) {
  const layout = layouts[items.length as keyof typeof layouts] ?? layouts[3];

  return (
    <ul className={`mx-auto grid max-w-6xl gap-x-5 gap-y-12 sm:grid-cols-2 ${layout.grid}`}>
      {items.map(({ image, t, showBottom }, index) => (
        <li key={t.title}>
          <FadeUp delay={index * 0.05} className="flex flex-col gap-6">
            <div
              className={`flex justify-center overflow-hidden rounded-3xl bg-surface ${
                showBottom ? "items-end pb-10" : "items-start pt-10"
              } ${layout.tile}`}
            >
              <Screen image={image} alt={t.imageAlt} className={`shrink-0 ${layout.screen}`} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold tracking-tight text-balance">{t.title}</h3>
              <p className="text-md/normal text-pretty text-foreground/60">{t.description}</p>
            </div>
          </FadeUp>
        </li>
      ))}
    </ul>
  );
}
