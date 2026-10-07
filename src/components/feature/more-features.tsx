import type { ComponentType } from "react";

type Icon = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

type MoreFeaturesProps<Key extends string> = {
  t: { title: string; items: Record<Key, { title: string; description: string }> };
  icons: Record<Key, Icon>;
};

export function MoreFeatures<Key extends string>({ t, icons }: MoreFeaturesProps<Key>) {
  const keys = Object.keys(t.items) as Key[];

  return (
    <section className="px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3 lg:gap-20">
        <h2 className="text-3xl font-semibold tracking-tight text-balance lg:text-4xl">{t.title}</h2>
        <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:col-span-2">
          {keys.map((key) => {
            const Icon: Icon = icons[key];
            return (
              <li key={key} className="flex gap-4 border-t border-foreground/10 pt-6">
                <Icon aria-hidden className="size-6 shrink-0 text-primary" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-semibold tracking-tight">{t.items[key].title}</h3>
                  <p className="text-md/normal text-pretty text-foreground/60">
                    {t.items[key].description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
