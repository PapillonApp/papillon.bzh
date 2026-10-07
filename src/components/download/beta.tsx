import { ArrowRight } from "@getpapillon/papicons";
import { FadeUp } from "@/components/ui/fade-up";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { storeUrls } from "./store-badges";

type BetaProps = {
  t: Dictionary["downloadPage"]["beta"];
};

export function Beta({ t }: BetaProps) {
  const links = [
    { key: "testFlight", href: storeUrls.testFlight },
    { key: "googlePlay", href: storeUrls.googlePlay },
  ] as const;

  return (
    <section className="px-6 pb-24 lg:pb-32">
      <FadeUp className="mx-auto flex max-w-6xl flex-col items-center gap-4 rounded-3xl border border-foreground/10 px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">{t.title}</h2>
        <p className="max-w-xl text-lg/normal text-pretty text-foreground/60">{t.description}</p>
        <ul className="mt-3 flex flex-wrap justify-center gap-3">
          {links.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 items-center gap-1.5 rounded-full bg-primary/10 px-4 text-md font-medium text-primary transition hover:bg-primary/15 active:scale-97"
              >
                <span className="text-trim">{t[key]}</span>
                <ArrowRight aria-hidden className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </FadeUp>
    </section>
  );
}
