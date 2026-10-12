import { ArrowRight } from "@getpapillon/papicons";
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
    <section className="mt-16 lg:mt-20">
      <h2 className="text-xl font-semibold tracking-tight">{t.title}</h2>
      <p className="mt-2 text-md text-pretty text-foreground/60">{t.description}</p>

      <ul className="mt-6 divide-y divide-foreground/10 border-y border-foreground/10">
        {links.map(({ key, href }) => (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-5 py-4"
            >
              <span className="text-md font-medium transition-colors duration-150 group-hover:text-primary">
                {t[key]}
              </span>
              <ArrowRight
                aria-hidden
                className="size-5 shrink-0 text-foreground/30 transition duration-150 group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
