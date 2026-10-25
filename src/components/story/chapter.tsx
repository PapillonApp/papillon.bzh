import type { Dictionary } from "@/i18n/dictionaries/fr";
import { PhoneShot, type Shot } from "./phone-shot";

type Era = Dictionary["story"]["eras"][number];

export function Chapter({ era, shots }: { era: Era; shots: Shot[] }) {
  const pair = shots.length > 1;

  return (
    <article className="grid items-center gap-10 rounded-4xl bg-background p-8 shadow-xl shadow-foreground/5 outline-1 -outline-offset-1 outline-foreground/5 sm:p-12 lg:min-h-160 lg:grid-cols-2 lg:gap-16 lg:p-14">
      <div className="flex flex-col gap-4">
        <p className="text-3xl font-semibold tracking-tight text-primary-dark">{era.date}</p>
        <h2 className="text-4xl font-semibold tracking-tight text-balance">{era.title}</h2>
        <p className="max-w-lg text-xl/normal text-pretty text-foreground/70">{era.text}</p>
      </div>
      <div className="flex justify-center gap-4 sm:gap-6">
        {shots.map((shot, index) => (
          <PhoneShot key={shot.image.src} shot={shot} alt={era.alts[index]} className={pair ? "w-1/2 max-w-52" : "w-56 lg:w-64"} />
        ))}
      </div>
    </article>
  );
}
