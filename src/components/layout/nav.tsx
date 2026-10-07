import {
  Butterfly,
  Calendar,
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

type NavItem = { key: MenuKey; href?: never } | { key: "blog"; href: string };

export const navItems: NavItem[] = [
  { key: "features" },
  { key: "about" },
  { key: "developers" },
  { key: "blog", href: "#" },
];

const menuIcons: Record<MenuLinkKey, typeof Grades> = {
  grades: Grades,
  schedule: Calendar,
  homework: Tasks,
  news: Newspaper,
  team: Butterfly,
  docs: Paper,
  github: Code,
};

type NavEntryProps = {
  item: NavItem;
  labels: Dictionary["nav"];
  locale: string;
  className: string;
};

export function NavEntry({ item, labels, locale, className }: NavEntryProps) {
  if (item.href !== undefined) {
    return (
      <a href={item.href} data-hover-item className={className}>
        <span className="text-trim">{labels[item.key]}</span>
      </a>
    );
  }

  return (
    <details className="group/details">
      <summary className={`list-none [&::-webkit-details-marker]:hidden ${className}`}>
        <span className="text-trim">{labels[item.key]}</span>
        <Chevron className="text-current/30 transition-transform group-open/details:rotate-180" />
      </summary>
      <div className="py-3">
        <MenuLinks links={labels.menus[item.key]} locale={locale} />
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
        const Icon = menuIcons[key];
        const href = localizeHref(linkHrefs[key], locale);
        return (
          <li key={key}>
            <a
              href={href}
              {...(href.startsWith("http") ? externalProps : {})}
              data-hover-item
              className="flex items-center gap-4 rounded-2xl p-3"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-transparent">
                <Icon aria-hidden className="size-6 text-foreground/70" />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-md font-medium">{title}</span>
                <span className="text-md text-foreground/60">{description}</span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
