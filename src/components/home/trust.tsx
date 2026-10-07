import { ExternalLink, Ghost, Heart, Lock } from "@getpapillon/papicons";
import Image from "next/image";
import type { ReactNode } from "react";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { getDictionary } from "@/i18n/server";
import { type Contributor, getContributors, githubRepoUrl } from "@/lib/github";

type Trust = Dictionary["home"]["trust"];
type PillarKey = keyof Trust["pillars"];

const visibleAvatars = 8;

export async function Trust() {
  const [dict, contributors] = await Promise.all([getDictionary(), getContributors()]);
  const t = dict.home.trust;

  const pillars: { key: PillarKey; proof: ReactNode }[] = [
    { key: "openSource", proof: <ContributorsProof t={t} contributors={contributors} /> },
    { key: "privacy", proof: <Ghost aria-hidden className="size-12 text-foreground/50" /> },
    { key: "security", proof: <Lock aria-hidden className="size-12 text-foreground/50" /> },
  ];

  return (
    <section className="px-4 py-24 lg:px-5 lg:py-32">
      <SectionHeading
        icon={Heart}
        iconColor="text-pink-500"
        title={t.title}
        description={t.description}
      />
      <ul className="mx-auto mt-12 grid max-w-6xl gap-14 md:grid-cols-3 md:gap-0 md:divide-x md:divide-foreground/10 lg:mt-20">
        {pillars.map(({ key, proof }, index) => (
          <li key={key} className="md:px-8 lg:px-10">
            <FadeUp delay={index * 0.08} className="flex h-full flex-col gap-8">
              <div className="flex min-h-20 items-end">{proof}</div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold tracking-tight text-balance">
                  {t.pillars[key].title}
                </h3>
                <p className="text-md/normal text-pretty text-foreground/60">
                  {t.pillars[key].description}
                </p>
              </div>
            </FadeUp>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ContributorsProof({ t, contributors }: { t: Trust; contributors: Contributor[] }) {
  const label = contributors.length
    ? t.contributors.replace("{count}", String(contributors.length))
    : t.github;

  return (
    <a
      href={`${githubRepoUrl}/graphs/contributors`}
      target="_blank"
      rel="noreferrer"
      className="flex w-fit flex-col gap-3 rounded-xl transition-opacity hover:opacity-80"
    >
      {contributors.length > 0 && (
        <span aria-hidden className="flex">
          {contributors.slice(0, visibleAvatars).map((contributor) => (
            <Image
              key={contributor.login}
              src={`${contributor.avatarUrl}&s=80`}
              alt=""
              width={40}
              height={40}
              unoptimized
              className="-ml-2.5 size-10 rounded-full bg-surface ring-2 ring-background first:ml-0"
            />
          ))}
        </span>
      )}
      <span className="flex items-center gap-1.5 text-md font-medium">
        <span className="text-trim">{label}</span>
        <ExternalLink aria-hidden className="size-5 text-foreground/50" />
      </span>
    </a>
  );
}
