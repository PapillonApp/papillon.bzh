import Image, { type StaticImageData } from "next/image";
import eventPhoto from "@/assets/association/event.webp";
import remotePhoto from "@/assets/association/value-2-b.webp";
import { FadeUp } from "@/components/ui/fade-up";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { ChapterHeading } from "./chapter-heading";
import { TeamAtlas } from "./team-atlas";

type TeamDict = Dictionary["association"]["team"];

export function Team({ t }: { t: TeamDict }) {
  const photos: { image: StaticImageData; caption: string }[] = [
    { image: remotePhoto, caption: t.remote },
    { image: eventPhoto, caption: t.together },
  ];

  return (
    <section id="team" className="scroll-mt-20 px-6 py-24 lg:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:gap-16">
        <FadeUp>
          <ChapterHeading title={t.title} description={t.description} />
        </FadeUp>

        <TeamAtlas members={t.members} />

        <div className="grid gap-4 sm:grid-cols-2">
          {photos.map(({ image, caption }, index) => (
            <FadeUp key={caption} delay={index * 0.08}>
              <figure className="flex flex-col gap-3">
                <Image
                  src={image}
                  alt=""
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="aspect-4/3 w-full rounded-3xl object-cover"
                />
                <figcaption className="text-md text-pretty text-foreground/60">{caption}</figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
