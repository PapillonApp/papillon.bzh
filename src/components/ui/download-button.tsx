import { PapillonApp } from "@getpapillon/papicons";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { Chevron } from "./chevron";

const variants = {
  header: {
    root: "h-9 bg-white text-primary-dark group-data-light/header:bg-primary group-data-light/header:text-white",
    main: "py-1.5",
    icon: "size-5",
    toggle: "border-current/30 pl-2.5 pr-3 group-data-light/header:border-current/40",
  },
  primary: {
    root: "h-10 bg-primary text-white",
    main: "py-2",
    icon: "size-6",
    toggle: "border-current/40 pl-3 pr-4",
  },
};

type DownloadButtonProps = {
  t: Dictionary["download"];
  variant: keyof typeof variants;
  compactOnMobile?: boolean;
};

export function DownloadButton({ t, variant, compactOnMobile = false }: DownloadButtonProps) {
  const style = variants[variant];

  return (
    <div
      className={`flex shrink-0 items-stretch rounded-full text-md font-semibold transition-colors ${style.root}`}
    >
      <a
        href="#"
        className={`flex items-center gap-1.5 rounded-l-full px-3 transition-[background-color] hover:bg-current/10 ${style.main} ${compactOnMobile ? "max-sm:rounded-r-full" : ""}`}
      >
        <PapillonApp aria-hidden className={style.icon} />
        {compactOnMobile ? (
          <>
            <span className="text-trim whitespace-nowrap sm:hidden">{t.shortLabel}</span>
            <span className="text-trim whitespace-nowrap max-sm:hidden">{t.label}</span>
          </>
        ) : (
          <span className="text-trim whitespace-nowrap">{t.label}</span>
        )}
      </a>
      <button
        type="button"
        aria-label={t.moreOptions}
        className={`flex items-center rounded-r-full border-l transition-[background-color] hover:bg-current/10 ${style.toggle} ${compactOnMobile ? "max-sm:hidden" : ""}`}
      >
        <Chevron />
      </button>
    </div>
  );
}
