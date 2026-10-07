import { ExternalLink } from "@getpapillon/papicons";
import Image from "next/image";
import team from "@/assets/team/PapillonTeam.png";
import { Logo } from "@/components/ui/logo";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { getDictionary, getLocale } from "@/i18n/server";
import { externalProps, type LinkKey, linkedinUrl, linkHrefs, localizeHref } from "@/lib/links";

type Columns = Dictionary["footer"]["columns"];

export async function SiteFooter() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.footer;
  const columns = Object.keys(t.columns) as (keyof Columns)[];

  return (
    <footer className="overflow-hidden bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-6">
        <section className="grid items-center gap-10 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <Image
            src={team}
            alt={t.team.photoAlt}
            sizes="(min-width: 1024px) 600px, 90vw"
            className="w-full -rotate-2"
          />
          <div className="flex flex-col items-start gap-5">
            <h2 className="text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              {t.team.title}
            </h2>
            <p className="text-lg/normal text-pretty text-white/70">{t.team.description}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={localizeHref(linkHrefs.team, locale)}
                className="flex h-10 items-center rounded-full bg-white px-5 text-md font-semibold text-primary-dark transition hover:bg-white/85 active:scale-97"
              >
                <span className="text-trim">{t.team.about}</span>
              </a>
              <a
                href={linkedinUrl}
                {...externalProps}
                className="flex h-10 items-center gap-1.5 rounded-full border border-white/30 px-5 text-md font-medium transition hover:bg-white/10 active:scale-97"
              >
                <span className="text-trim">{t.team.linkedin}</span>
                <ExternalLink aria-hidden className="size-5 text-white/60" />
              </a>
            </div>
          </div>
        </section>

        <div className="grid gap-12 border-t border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-6">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Logo aria-label="Papillon" role="img" className="h-7 w-auto self-start" />
            <div className="flex flex-col gap-1 text-md">
              <span className="font-semibold">{t.association}</span>
              <span className="max-w-xs text-white/60">{t.copyright}</span>
            </div>
          </div>
          {columns.map((column) => (
            <nav key={column} aria-label={t.columns[column].title} className="flex flex-col gap-4">
              <h2 className="text-md font-semibold">{t.columns[column].title}</h2>
              <ul className="flex flex-col gap-3">
                {Object.entries(t.columns[column].links).map(([key, label]) => {
                  const href = localizeHref(linkHrefs[key as LinkKey], locale);
                  return (
                    <li key={key}>
                      <a
                        href={href}
                        {...(href.startsWith("http") ? externalProps : {})}
                        className="text-md text-white/70 transition-colors hover:text-white"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div aria-hidden className="aspect-119/13 overflow-hidden">
          <Logo className="h-auto w-full text-primary" />
        </div>
      </div>
    </footer>
  );
}
