import { FadeUp } from "@/components/ui/fade-up";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { PhoneShot, type Shot } from "./phone-shot";

type TodayProps = {
  era: Dictionary["story"]["eras"][number];
  label: string;
  shots: Shot[];
};

export function Today({ era, label, shots }: TodayProps) {
  return (
    <article className="pt-16 pb-8 lg:pt-24 lg:pb-12">
      <FadeUp className="mx-auto flex max-w-6xl flex-col gap-4 px-6">
        <p className="text-3xl font-semibold tracking-tight text-primary-dark">{label}</p>
        <h2 className="text-4xl font-semibold tracking-tight text-balance lg:text-5xl">{era.title}</h2>
        <p className="max-w-2xl text-xl/normal text-pretty text-foreground/70">{era.text}</p>
      </FadeUp>
      <ul className="mt-4 flex snap-x gap-4 overflow-x-auto px-6 pt-8 pb-16 justify-center-safe lg:mt-8">
        {shots.map((shot, index) => (
          <li key={shot.image.src} className="shrink-0 snap-center">
            <PhoneShot shot={shot} alt={era.alts[index]} className="w-48 lg:w-44 xl:w-48" />
          </li>
        ))}
      </ul>
    </article>
  );
}
