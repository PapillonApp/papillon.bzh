import type { StaticImageData } from "next/image";
import { Points } from "@/components/feature/points";
import { Screen } from "@/components/feature/screen";
import { FadeUp } from "@/components/ui/fade-up";

type LedgerProps = {
  items: {
    image: StaticImageData;
    t: { title: string; description: string; points: string[]; imageAlt: string };
  }[];
};

export function Ledger({ items }: LedgerProps) {
  return (
    <ol className="mx-auto flex max-w-6xl flex-col px-6 py-16 lg:py-24">
      {items.map(({ image, t }, index) => (
        <li
          key={t.title}
          className="grid items-center gap-12 border-t border-foreground/10 pt-14 lg:grid-cols-2 lg:gap-20 lg:pt-20"
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance lg:text-5xl">{t.title}</h2>
            <p className="max-w-xl text-lg/normal text-pretty text-foreground/60">{t.description}</p>
            <Points points={t.points} className="max-w-md" />
          </div>
          <FadeUp
            className={`mx-auto h-100 overflow-hidden mask-b-from-60% lg:h-128 ${
              index % 2 ? "lg:order-first" : ""
            }`}
          >
            <Screen image={image} alt={t.imageAlt} className="w-64 lg:w-80" />
          </FadeUp>
        </li>
      ))}
    </ol>
  );
}
