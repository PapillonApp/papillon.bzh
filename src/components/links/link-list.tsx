import { withBasePath } from "@/lib/base-path";
import { Heart, Paper } from "@getpapillon/papicons";
import type { ComponentType } from "react";
import { QrCode } from "@/components/download/qr-code";
import { StoreBadges } from "@/components/download/store-badges";
import {
  DiscordLogo,
  GitHubLogo,
  InstagramLogo,
  LinkedInLogo,
  TikTokLogo,
  XLogo,
  YouTubeLogo,
} from "@/components/ui/brand-logos";
import { FadeUp } from "@/components/ui/fade-up";
import { HoverGroup } from "@/components/ui/hover-highlight";
import { Logo } from "@/components/ui/logo";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { externalProps, linkHrefs } from "@/lib/links";

type Groups = Dictionary["linksPage"]["groups"];
type GroupKey = keyof Groups;
type GroupLinkKey = { [Group in GroupKey]: keyof Groups[Group]["links"] }[GroupKey];

const icons: Record<GroupLinkKey, ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  discord: DiscordLogo,
  instagram: InstagramLogo,
  tiktok: TikTokLogo,
  x: XLogo,
  youtube: YouTubeLogo,
  linkedin: LinkedInLogo,
  docs: Paper,
  github: GitHubLogo,
  donate: Heart,
};

type LinkListProps = {
  t: Dictionary["linksPage"];
  download: Dictionary["downloadPage"];
  locale: Locale;
};

export function LinkList({ t, download, locale }: LinkListProps) {
  const groups = Object.keys(t.groups) as GroupKey[];

  return (
    <section className="px-7 pt-32 pb-24 lg:px-5 lg:pt-44 lg:pb-32">
      <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-5 lg:gap-20">
        <FadeUp className="flex flex-col items-start gap-6 lg:sticky lg:top-32 lg:col-span-2 lg:self-start">
          <h1>
            <Logo role="img" aria-label={t.title} className="h-10 w-auto text-primary lg:h-12" />
          </h1>
          <p className="text-xl/snug text-pretty text-foreground/70">{t.description}</p>
          <div className="mt-2 flex flex-col items-start gap-4">
            <StoreBadges t={download.stores} locale={locale} className="justify-start" />
            <a
              href={withBasePath(`/${locale}/download`)}
              className="text-md font-medium text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary"
            >
              {t.otherOptions}
            </a>
          </div>
          <div className="mt-6 flex items-center gap-5 border-t border-foreground/10 pt-8 max-lg:hidden">
            <QrCode label={download.hero.qrAlt} className="size-24 shrink-0" />
            <div className="flex flex-col gap-1.5">
              <p className="text-md font-semibold">{download.hero.qrTitle}</p>
              <p className="text-sm/snug text-foreground/60">{download.hero.qrDescription}</p>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="flex flex-col gap-12 lg:col-span-3">
          {groups.map((group) => (
            <LinkGroup key={group} {...t.groups[group]} />
          ))}
        </FadeUp>
      </div>
    </section>
  );
}

type LinkGroupProps = {
  title: string;
  links: Partial<Record<GroupLinkKey, { title: string; description: string }>>;
};

function LinkGroup({ title, links }: LinkGroupProps) {
  const entries = Object.entries(links) as [GroupLinkKey, { title: string; description: string }][];

  return (
    <nav aria-label={title}>
      <h2 className="border-b border-foreground/10 pb-3 text-md font-semibold text-foreground/60">
        {title}
      </h2>
      <HoverGroup highlightClassName="rounded-2xl bg-foreground/5">
        <ul className="-mx-3 mt-2">
          {entries.map(([key, link]) => {
            const Icon = icons[key];
            return (
              <li key={key}>
                <a
                  href={linkHrefs[key]}
                  {...externalProps}
                  data-hover-item
                  className="flex items-center gap-4 rounded-2xl px-3 py-4"
                >
                  <Icon aria-hidden className="size-6 shrink-0 text-foreground/70" />
                  <span className="text-xl font-medium">{link.title}</span>
                  <span className="ml-auto truncate text-md text-foreground/60">
                    {link.description}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </HoverGroup>
    </nav>
  );
}
