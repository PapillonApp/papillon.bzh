import { Check } from "@getpapillon/papicons";
import Image from "next/image";
import iphoneFrame from "@/assets/features/iphone-frame.png";
import { FadeUp } from "@/components/ui/fade-up";
import { getDictionary } from "@/i18n/server";

const videos = ["/features/grades.mp4", "/features/schedule.mp4", "/features/subjects.mp4"];

export async function FeatureDemos() {
  const t = (await getDictionary()).home.demos;

  return (
    <section className="px-4 py-24 lg:px-5 lg:py-32">
      <ul className="mx-auto flex max-w-5xl flex-col gap-24 lg:gap-32">
        {t.items.map((item, index) => (
          <li
            key={item.title}
            className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-18 lg:even:flex-row-reverse"
          >
            <FadeUp className="relative aspect-431/885 w-64 shrink-0 lg:w-100">
              <div className="absolute inset-x-1/23 inset-y-1/53 overflow-hidden rounded-[14%/6.5%]">
                <video
                  src={videos[index]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden
                  className="size-full object-cover"
                />
              </div>
              <Image
                src={iphoneFrame}
                alt=""
                sizes="(min-width: 1024px) 400px, 256px"
                className="absolute inset-0 size-full"
              />
            </FadeUp>
            <div className="flex max-w-md flex-col gap-4">
              <p className="text-sm font-semibold tracking-wide text-primary uppercase">{item.overtitle}</p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance lg:text-4xl">{item.title}</h2>
              <p className="text-lg/normal text-pretty text-foreground/60">{item.description}</p>
              <ul className="mt-2 flex flex-col gap-3">
                {item.checks.map((check) => (
                  <li key={check} className="flex items-center gap-3 text-md font-medium">
                    <Check aria-hidden className="size-5 shrink-0 text-primary" />
                    {check}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
