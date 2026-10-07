import { Home } from "@getpapillon/papicons";
import { RunawayButterfly } from "@/components/not-found/runaway-butterfly";
import { DownloadButton } from "@/components/ui/download-button";
import { getDictionary, getLocale } from "@/i18n/server";

export default async function NotFound() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.notFound;

  return (
    <main className="relative isolate overflow-x-clip px-4 pt-36 pb-24 lg:px-5 lg:pt-44 lg:pb-32">
      <title>{t.metadataTitle}</title>
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-118 left-1/2 h-238 w-428 -translate-x-1/2 bg-radial from-primary/30 via-primary/6 via-40% to-transparent to-65%" />
      </div>

      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
        <div className="flex items-center gap-2 text-9xl font-semibold tracking-tighter select-none lg:gap-4">
          <span aria-hidden>4</span>
          <RunawayButterfly />
          <span aria-hidden>4</span>
        </div>
        <p className="mt-6 rounded-full bg-primary/10 px-3 py-1.5 text-md font-medium text-primary">
          <span className="text-trim">{t.label}</span>
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance lg:text-5xl">{t.title}</h1>
        <p className="max-w-xl text-lg/normal text-pretty text-foreground/60">{t.description}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a
            href={`/${locale}`}
            className="flex h-10 items-center gap-1.5 rounded-full border border-foreground/15 px-4 text-md font-medium text-foreground/60 transition hover:border-foreground/30 hover:text-foreground/80 active:scale-97"
          >
            <Home aria-hidden className="size-6" />
            <span className="text-trim">{t.home}</span>
          </a>
          <DownloadButton t={dict.download} variant="primary" />
        </div>
        <p className="mt-6 text-sm text-foreground/40">{t.hint}</p>
      </div>
    </main>
  );
}
