import type { Dictionary } from "@/i18n/dictionaries/fr";

export function Milestone({ t }: { t: Dictionary["story"]["milestone"] }) {
  return (
    <div className="flex flex-col justify-center gap-4 rounded-4xl bg-background p-8 shadow-xl shadow-foreground/5 outline-1 -outline-offset-1 outline-foreground/5 sm:p-12 lg:min-h-160 lg:p-14">
      <p className="text-xl text-foreground/60">{t.label}</p>
      <p className="text-4xl font-semibold tracking-tight text-balance text-foreground/40 lg:text-6xl">
        {t.from.value} {t.from.label}.
      </p>
      <p className="text-4xl font-semibold tracking-tight text-balance lg:text-6xl">
        <span className="text-primary">{t.to.value}</span> {t.to.label}.
      </p>
    </div>
  );
}
