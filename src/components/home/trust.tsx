import { Code, ExternalLink, Ghost, Heart, Lock } from "@getpapillon/papicons";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary } from "@/i18n/server";

const githubUrl = "https://github.com/PapillonApp/Papillon";

const pillars = [
  { key: "openSource", Icon: Code },
  { key: "privacy", Icon: Ghost },
  { key: "security", Icon: Lock },
] as const;

export async function Trust() {
  const t = (await getDictionary()).home.trust;

  return (
    <section className="px-4 py-24 lg:px-5 lg:py-32">
      <SectionHeading
        icon={Heart}
        iconColor="text-pink-500"
        title={t.title}
        description={t.description}
      />
      <ul className="mx-auto mt-12 grid max-w-6xl divide-y divide-black/5 rounded-2xl bg-surface md:grid-cols-3 md:divide-x md:divide-y-0 lg:mt-20">
        {pillars.map(({ key, Icon }) => (
          <li key={key} className="flex flex-col gap-6 p-6 lg:p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary-dark">
              <Icon aria-hidden className="size-6" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold tracking-tight">{t.pillars[key].title}</h3>
              <p className="text-md/normal text-pretty text-foreground/60">
                {t.pillars[key].description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex h-10 items-center gap-1.5 rounded-full border border-current/20 px-4 text-md font-medium transition-colors hover:bg-current/5"
        >
          <span className="text-trim">{t.github}</span>
          <ExternalLink aria-hidden className="size-5 text-current/60" />
        </a>
      </div>
    </section>
  );
}
