import type { ComponentType } from "react";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionTitle } from "./section-title";

type Icon = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

type MoreFeaturesProps<Key extends string> = {
  t: { title: string; items: Record<Key, { title: string; description: string }> };
  icons: Record<Key, Icon>;
};

export function MoreFeatures<Key extends string>({ t, icons }: MoreFeaturesProps<Key>) {
  const keys = Object.keys(t.items) as Key[];

  return (
    <section className="px-6 py-24 lg:py-32">
      <SectionTitle title={t.title} />
      <ul className="mx-auto grid max-w-6xl gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {keys.map((key, index) => {
          const Icon: Icon = icons[key];
          return (
            <li key={key}>
              <FadeUp delay={(index % 3) * 0.05} className="flex flex-col gap-3">
                <Icon aria-hidden className="size-10 text-primary" />
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
