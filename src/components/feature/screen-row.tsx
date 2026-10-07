import type { StaticImageData } from "next/image";
import { FadeUp } from "@/components/ui/fade-up";
import { Screen } from "./screen";

type ScreenRowProps = {
  items: { image: StaticImageData; t: { title: string; description: string; imageAlt: string } }[];
  staggered?: boolean;
};

export function ScreenRow({ items, staggered }: ScreenRowProps) {
  const columns = items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <ul className={`mx-auto grid max-w-6xl gap-x-8 gap-y-16 sm:grid-cols-2 ${columns}`}>
      {items.map(({ image, t }, index) => (
        <li key={t.title} className={staggered && index % 2 ? "lg:mt-24" : ""}>
          <FadeUp delay={index * 0.05} className="flex flex-col items-center gap-8">
            <Screen image={image} alt={t.imageAlt} className="w-56 lg:w-full lg:max-w-72" />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold tracking-tight text-balance">{t.title}</h2>
              <p className="text-md/normal text-pretty text-foreground/60">{t.description}</p>
            </div>
          </FadeUp>
        </li>
      ))}
    </ul>
  );
}
