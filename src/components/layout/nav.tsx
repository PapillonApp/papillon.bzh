import {
  ArrowRightUp,
  Butterfly,
  Calendar,
  Clock,
  Code,
  Grades,
  Newspaper,
  Paper,
  Tasks,
} from "@getpapillon/papicons";
import { Chevron } from "@/components/ui/chevron";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { externalProps, linkHrefs, localizeHref } from "@/lib/links";

export const navEntryStyle = "flex h-9 items-center gap-1.5 rounded-full px-3 text-md";
export const navHighlightStyle = "rounded-full bg-current/10";

type Menus = Dictionary["nav"]["menus"];
export type MenuKey = keyof Menus;
type MenuLinkKey = { [Key in MenuKey]: keyof Menus[Key] }[MenuKey];

export const navItems: MenuKey[] = ["features", "about", "developers"];

export const menuIcons: Record<MenuLinkKey, { Icon: typeof Grades; color: string }> = {
  grades: { Icon: Grades, color: "text-feature-grades" },
  schedule: { Icon: Calendar, color: "text-feature-schedule" },
  homework: { Icon: Tasks, color: "text-feature-homework" },
  news: { Icon: Newspaper, color: "text-feature-news" },
  team: { Icon: Butterfly, color: "text-primary" },
  story: { Icon: Clock, color: "text-primary" },
  docs: { Icon: Paper, color: "text-foreground/60" },
  github: { Icon: Code, color: "text-foreground/60" },
};

type NavEntryProps = {
  item: MenuKey;
  labels: Dictionary["nav"];
  locale: string;
  className: string;
};

export function NavEntry({ item, labels, locale, className }: NavEntryProps) {
  return (
    <details className="group/details">
      <summary className={`list-none [&::-webkit-details-marker]:hidden ${className}`}>
        <span className="text-trim">{labels[item]}</span>
        <Chevron className="text-current/30 transition-transform group-open/details:rotate-180" />
      </summary>
      <div className="py-3">
        <MenuLinks links={labels.menus[item]} locale={locale} />
      </div>
    </details>
  );
}

type MenuLinksProps = {
  links: Menus[MenuKey];
  locale: string;
};

export function MenuLinks({ links, locale }: MenuLinksProps) {
  const entries = Object.entries(links) as [MenuLinkKey, { title: string; description: string }][];

  return (
    <ul>
      {entries.map(([key, { title, description }]) => {
        const { Icon, color } = menuIcons[key];
        const href = localizeHref(linkHrefs[key], locale);
        const external = href.startsWith("http");
        return (
          <li key={key}>
            <a
              href={href}
              {...(external ? externalProps : {})}
              data-hover-item
              className="flex gap-3 rounded-2xl px-3 py-2.5"
            >
              <Icon aria-hidden className={`size-5 shrink-0 ${color}`} />
              <span className="flex flex-col gap-2 pt-1">
                <span className="flex items-center gap-1">
                  <span className="text-trim text-md font-medium">{title}</span>
                  {external && <ArrowRightUp aria-hidden className="-my-1 size-3.5 text-foreground/30" />}
                </span>
                <span className="text-sm text-pretty text-foreground/55">{description}</span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
