import { Login } from "@getpapillon/papicons";
import Image from "next/image";
import step1 from "@/assets/steps/Login_Step1.png";
import step2 from "@/assets/steps/Login_Step2.png";
import step3 from "@/assets/steps/Login_Step3.png";
import step4 from "@/assets/steps/Login_Step4.png";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary } from "@/i18n/server";

const mockups = [step1, step2, step3, step4];

export async function Steps() {
  const t = (await getDictionary()).home.steps;

  return (
    <section id="how-it-works" className="scroll-mt-20 px-6 py-24 lg:py-32">
      <SectionHeading
        icon={Login}
        iconColor="text-foreground/50"
        title={t.title}
        description={t.description}
      />
      <ol className="mx-auto mt-12 grid max-w-2xl gap-10 lg:mt-20 lg:max-w-6xl lg:grid-cols-4 lg:gap-x-6">
        {t.items.map((step, index) => (
          <li key={step.title} className="flex items-center gap-6 lg:flex-col lg:items-stretch">
            <FadeUp
              delay={index * 0.1}
              className="aspect-13/20 w-28 shrink-0 overflow-hidden mask-b-from-60% sm:w-36 lg:w-auto"
            >
              <Image
                src={mockups[index]}
                alt=""
                sizes="(min-width: 1024px) 270px, (min-width: 640px) 144px, 112px"
                quality={90}
                className="w-full"
              />
            </FadeUp>
            <div className="flex flex-col gap-3">
              <span aria-hidden className="text-3xl font-semibold text-primary lg:text-4xl">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-balance lg:text-2xl">{step.title}</h3>
              <p className="text-md/normal text-pretty text-foreground/60">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
