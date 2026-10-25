import { Check } from "@getpapillon/papicons";
import Image from "next/image";
import iphoneFrame from "@/assets/features/iphone-frame.png";
import { FadeUp } from "@/components/ui/fade-up";
import { HorizontalScroll } from "@/components/ui/horizontal-scroll";
import { LazyVideo } from "@/components/ui/lazy-video";
import { getDictionary } from "@/i18n/server";
import { withBasePath } from "@/lib/base-path";

const videos = ["/features/grades.mp4", "/features/schedule.mp4", "/features/subjects.mp4"].map(withBasePath);
const themes = ["theme-grades", "theme-schedule", "theme-news"];

export async function FeatureDemos() {
  const t = (await getDictionary()).home.demos;

  return (
    <HorizontalScroll>
      {t.items.map((item, index) => (
        <div
          key={item.title}
          className={`flex flex-col items-center gap-10 px-6 lg:h-full lg:flex-row lg:justify-center lg:gap-18 ${themes[index]}`}
        >
          <FadeUp className="relative aspect-431/885 w-64 shrink-0 lg:h-3/4 lg:max-h-205 lg:w-auto">
            <div className="absolute inset-x-1/23 inset-y-1/53 overflow-hidden rounded-[14%/6.5%]">
              <LazyVideo src={videos[index]} className="size-full object-cover" />
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
        </div>
      ))}
    </HorizontalScroll>
  );
}
