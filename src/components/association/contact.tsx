import { Code, PiggyBank } from "@getpapillon/papicons";
import { FadeUp } from "@/components/ui/fade-up";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { contactEmail, discordUrl, externalProps, linkHrefs } from "@/lib/links";
import { ChapterHeading } from "./chapter-heading";

type NextDict = Dictionary["association"]["next"];
type CardKey = keyof NextDict["cards"];

export function Contact({ t }: { t: NextDict }) {
  const { cards } = t;
  const items: { key: CardKey; icon: typeof Code; primary: string; secondary: string }[] = [
    {
      key: "support",
      icon: PiggyBank,
      primary: `mailto:${contactEmail}?subject=${encodeURIComponent(cards.support.subject)}`,
      secondary: linkHrefs.donate,
    },
    { key: "contribute", icon: Code, primary: linkHrefs.github, secondary: discordUrl },
  ];

  return (
    <section
      id="contact"
      data-curved
      className="theme-primary relative mt-16 scroll-mt-20 overflow-x-clip bg-background px-6 pt-8 pb-24 before:absolute before:-inset-x-1/2 before:bottom-full before:h-16 before:rounded-t-[50%_100%] before:bg-background lg:mt-32 lg:pt-12 lg:pb-32 lg:before:h-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-24">
        <FadeUp>
          <ChapterHeading title={t.title} description={t.description}>
            <p className="mt-4 text-md text-foreground/80">
              <a href={linkHrefs.privacy} {...externalProps} className="underline underline-offset-4 hover:text-foreground">
                {t.privacy}
              </a>
            </p>
          </ChapterHeading>
        </FadeUp>
        <ul className="flex flex-col gap-4">
          {items.map(({ key, icon: Icon, primary, secondary }, index) => (
            <li key={key}>
              <FadeUp delay={index * 0.08}>
                <div className="flex flex-col gap-5 rounded-3xl bg-surface p-8">
                  <Icon aria-hidden className="size-8" />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold tracking-tight">{cards[key].title}</h3>
                    <p className="text-md/normal text-pretty text-foreground/80">{cards[key].description}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <CardLink href={primary} primary>
                      {cards[key].cta}
                    </CardLink>
                    <CardLink href={secondary}>{cards[key].secondary}</CardLink>
                  </div>
                </div>
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CardLink({ href, primary, children }: { href: string; primary?: boolean; children: string }) {
  return (
    <a
      href={href}
      {...(href.startsWith("http") ? externalProps : {})}
      className={`flex h-10 items-center rounded-full px-4 text-md font-medium transition active:scale-97 ${
        primary
          ? "bg-foreground font-semibold text-background hover:bg-foreground/90"
          : "border border-foreground/30 text-foreground/80 hover:border-foreground/60 hover:text-foreground"
      }`}
    >
      <span className="text-trim">{children}</span>
    </a>
  );
}
