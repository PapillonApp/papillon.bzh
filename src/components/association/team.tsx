import { ExternalLink, User } from "@getpapillon/papicons";
import Image from "next/image";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeading } from "@/components/ui/section-heading";
import { teamMembers } from "@/content/team";
import type { Dictionary } from "@/i18n/dictionaries/fr";

type TeamDict = Dictionary["association"]["team"];

export function Team({ t }: { t: TeamDict }) {
  return (
    <section id="team" className="scroll-mt-20 px-6 py-24 lg:py-32">
      <SectionHeading
        icon={User}
        iconColor="text-primary"
        title={t.title}
        description={t.description}
      />
      <ul className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <li key={member.key}>
            <FadeUp delay={(index % 3) * 0.08} className="h-full">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col gap-5 rounded-3xl bg-surface p-6 transition hover:bg-foreground/5 active:scale-98"
              >
                <div className="flex items-start justify-between">
                  <Image
                    src={member.photo}
                    alt=""
                    sizes="64px"
                    className="size-16 rounded-full object-cover"
                  />
                  <ExternalLink
                    aria-hidden
                    className="size-5 text-foreground/30 transition-colors group-hover:text-foreground/60"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-semibold tracking-tight">{member.name}</h3>
                  <p className="text-md font-medium text-primary">{t.members[member.key].role}</p>
                  <p className="text-md/normal text-pretty text-foreground/60">
                    {t.members[member.key].description}
                  </p>
                </div>
              </a>
            </FadeUp>
          </li>
        ))}
      </ul>
    </section>
  );
}
