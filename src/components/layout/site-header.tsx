import type { Route } from "next";
import { DownloadButton } from "@/components/ui/download-button";
import { HoverGroup } from "@/components/ui/hover-highlight";
import { Logo } from "@/components/ui/logo";
import { getDictionary, getLocale } from "@/i18n/server";
import { DesktopNav } from "./desktop-nav";
import { HeaderShell } from "./header-shell";
import { HomeLink } from "./home-link";
import { LanguageMenu } from "./language-menu";
import { MobileMenu } from "./mobile-menu";
import { navEntryStyle, navHighlightStyle } from "./nav";

export async function SiteHeader() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <HeaderShell>
      <HoverGroup
        highlightClassName={navHighlightStyle}
        className="mx-auto flex h-16 max-w-7xl items-center gap-2.5 px-6 lg:h-20"
      >
        <div className="flex flex-1 items-center gap-8">
          <HomeLink
            href={`/${locale}` as Route}
            label={dict.nav.home}
            className="shrink-0 rounded-md transition-[color,opacity,scale] duration-300 hover:opacity-75 active:scale-95 active:duration-150 group-data-light/header:text-primary"
          >
            <Logo aria-hidden className="h-6.5" />
          </HomeLink>
          <DesktopNav labels={dict.nav} locale={locale} />
        </div>
        <div className="flex items-center gap-2.5 max-lg:gap-2">
          <div className="max-lg:hidden">
            <LanguageMenu t={dict.language} triggerClassName={navEntryStyle} />
          </div>
          <DownloadButton t={dict.download} variant="header" compactOnMobile />
          <MobileMenu nav={dict.nav} language={dict.language} locale={locale} />
        </div>
      </HoverGroup>
    </HeaderShell>
  );
}
