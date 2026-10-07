import {
  Coefficient,
  GlobeCross,
  GraduationHat,
  Grades,
  Home,
  Lock,
  Palette,
} from "@getpapillon/papicons";
import type { Metadata } from "next";
import ipad from "@/assets/grades/ipad.webp";
import evolution from "@/assets/grades/evolution.webp";
import influence from "@/assets/grades/influence.webp";
import methods from "@/assets/grades/methods.webp";
import overview from "@/assets/grades/overview.webp";
import periods from "@/assets/grades/periods.webp";
import subjects from "@/assets/grades/subjects.webp";
import { FeaturePage } from "@/components/feature/feature-page";
import { LargeScreen } from "@/components/feature/large-screen";
import { Screen } from "@/components/feature/screen";
import { ScreenRow } from "@/components/feature/screen-row";
import { AnnotatedScreen } from "@/components/grades/annotated-screen";
import { getDictionary } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = (await getDictionary()).featurePages.grades;

  return { title: t.metadataTitle, description: t.metadataDescription };
}

export default async function GradesPage() {
  const t = (await getDictionary()).featurePages.grades;
  const { detail, influence: impact } = t.highlights;

  return (
    <FeaturePage
      t={t}
      themeClassName="theme-grades"
      icon={Grades}
      heroLayout="split"
      heroVisual={
        <div className="relative h-120 w-80 mask-b-from-70% lg:h-150 lg:w-112">
          <Screen
            image={evolution}
            alt=""
            className="absolute top-14 right-8 w-56 rotate-3 lg:w-72"
          />
          <Screen
            image={overview}
            alt={t.hero.imageAlt}
            priority
            className="absolute top-0 left-0 w-64 lg:w-80"
          />
        </div>
      }
      moreIcons={{
        offline: GlobeCross,
        home: Home,
        scale: Coefficient,
        skills: GraduationHat,
        personal: Palette,
        private: Lock,
      }}
      ctaImage={overview}
    >
      <AnnotatedScreen
        t={{ title: detail.title, description: impact.description, imageAlt: impact.imageAlt }}
        image={influence}
        callouts={[
          { text: detail.points[2], side: "left", top: "32%" },
          { text: detail.points[0], side: "right", top: "32%" },
          { text: detail.points[1], side: "left", top: "53%" },
          { text: impact.points[0], side: "right", top: "71%" },
        ]}
      />
      <section className="px-6 py-24 lg:py-32">
        <ScreenRow
          staggered
          items={[
            { image: evolution, t: t.highlights.evolution },
            { image: methods, t: t.highlights.methods },
            { image: periods, t: t.highlights.periods },
            { image: subjects, t: t.highlights.subjects },
          ]}
        />
      </section>
      <LargeScreen t={t.largeScreen} image={ipad} />
    </FeaturePage>
  );
}
