import Link from "next/link";
import { DownloadButton } from "@/components/ui/download-button";
import { HoverGroup } from "@/components/ui/hover-highlight";
import { Logo } from "@/components/ui/logo";
import { getDictionary, getLocale } from "@/i18n/server";
import { HeaderShell } from "./header-shell";
import { LanguageMenu } from "./language-menu";
import { MobileMenu } from "./mobile-menu";
import { NavEntry, navEntryStyle, navHighlightStyle, navItems } from "./nav";

export async function SiteHeader() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <HeaderShell>
      <HoverGroup
        highlightClassName={navHighlightStyle}
        className="mx-auto flex h-16 max-w-7xl items-center gap-2.5 px-4 lg:h-20 lg:px-5"
      >
        <div className="flex flex-1 items-center gap-8">
          <Link
            href={`/${locale}`}
            aria-label={dict.nav.home}
            className="shrink-0 rounded-md transition-colors group-data-light/header:text-primary"
          >
            <Logo aria-hidden className="h-6.5" />
          </Link>
          <nav aria-label={dict.nav.label} className="max-lg:hidden">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.key}>
                  <NavEntry item={item} labels={dict.nav} className={navEntryStyle} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2.5 max-lg:gap-2">
          <div className="max-lg:hidden">
            <LanguageMenu t={dict.language} triggerClassName={navEntryStyle} />
          </div>
          <DownloadButton t={dict.download} variant="header" compactOnMobile />
          <MobileMenu nav={dict.nav} language={dict.language} />
        </div>
      </HoverGroup>
    </HeaderShell>
  );
}
