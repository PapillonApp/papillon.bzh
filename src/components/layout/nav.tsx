import { Chevron } from "@/components/ui/chevron";
import type { Dictionary } from "@/i18n/dictionaries/fr";

export const navEntryStyle = "flex h-9 items-center gap-1.5 rounded-full px-3 text-md";
export const navHighlightStyle = "rounded-full bg-current/10";

type NavItem = {
  key: "features" | "about" | "developers" | "blog";
  href?: string;
};

// TODO: items without href will open their dropdown once menus are designed.
export const navItems: NavItem[] = [
  { key: "features" },
  { key: "about" },
  { key: "developers" },
  { key: "blog", href: "#" },
];

type NavEntryProps = {
  item: NavItem;
  labels: Dictionary["nav"];
  className: string;
};

export function NavEntry({ item, labels, className }: NavEntryProps) {
  if (item.href) {
    return (
      <a href={item.href} data-hover-item className={className}>
        <span className="text-trim">{labels[item.key]}</span>
      </a>
    );
  }

  return (
    <button type="button" data-hover-item className={className}>
      <span className="text-trim">{labels[item.key]}</span>
      <Chevron className="text-current/30" />
    </button>
  );
}
