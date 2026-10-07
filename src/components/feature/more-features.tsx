import { Sparkles } from "@getpapillon/papicons";
import type { ComponentType } from "react";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeading } from "@/components/ui/section-heading";

type Icon = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

type MoreFeaturesProps<Key extends string> = {
  t: { title: string; description: string; items: Record<Key, { title: string; description: string }> };
  icons: Record<Key, Icon>;
};

export function MoreFeatures<Key extends string>({ t, icons }: MoreFeaturesProps<Key>) {
  const keys = Object.keys(t.items) as Key[];

  return (
    <section className="px-6 py-24 lg:py-32">
      <SectionHeading
        icon={Sparkles}
        iconColor="text-foreground/50"
        title={t.title}
        description={t.description}
      />
      <ul className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {keys.map((key, index) => {
          const Icon: Icon = icons[key];
          return (
            <li key={key}>
              <FadeUp
                delay={(index % 3) * 0.08}
                className="flex h-full flex-col gap-3 rounded-3xl bg-surface p-6"
              >
                <Icon aria-hidden className="mb-2 size-8 text-primary" />
                <h3 className="text-xl font-semibold tracking-tight">{t.items[key].title}</h3>
                <p className="text-md/normal text-pretty text-foreground/60">
                  {t.items[key].description}
                </p>
              </FadeUp>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
