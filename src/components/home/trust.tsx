import { ExternalLink, Ghost, Heart, Lock } from "@getpapillon/papicons";
import Image from "next/image";
import type { ReactNode } from "react";
import { ColorCard } from "@/components/ui/color-card";
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

  const pillars: { key: PillarKey; proof: ReactNode; className: string }[] = [
    {
      key: "openSource",
      proof: <ContributorsProof t={t} contributors={contributors} />,
      className: "from-feature-news to-feature-news/30",
    },
    {
      key: "privacy",
      proof: <Ghost aria-hidden className="size-12 text-foreground/80" />,
      className: "from-swatch-purple to-swatch-purple/30",
    },
    {
      key: "security",
      proof: <Lock aria-hidden className="size-12 text-foreground/80" />,
      className: "from-feature-schedule to-feature-schedule/30",
    },
  ];

  return (
    <section className="px-6 py-24 lg:py-32">
      <SectionHeading
        icon={Heart}
        iconColor="text-pink-500"
        title={t.title}
        description={t.description}
      />
      <ul className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-3 lg:mt-20">
        {pillars.map(({ key, proof, className }, index) => (
          <li key={key}>
            <FadeUp delay={index * 0.08} className="h-full">
              <ColorCard className={`min-h-100 ${className}`}>
                <div className="flex min-h-20 items-start">{proof}</div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl font-bold tracking-tight text-balance">
                    {t.pillars[key].title}
                  </h3>
                  <p className="text-md/normal text-pretty text-foreground/80">
                    {t.pillars[key].description}
                  </p>
                </div>
              </ColorCard>
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
        <ExternalLink aria-hidden className="size-5 text-foreground/60" />
      </span>
    </a>
  );
}
