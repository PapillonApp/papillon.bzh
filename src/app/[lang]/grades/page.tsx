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
import detail from "@/assets/grades/detail.webp";
import evolution from "@/assets/grades/evolution.webp";
import influence from "@/assets/grades/influence.webp";
import methods from "@/assets/grades/methods.webp";
import overview from "@/assets/grades/overview.webp";
import periods from "@/assets/grades/periods.webp";
import subjects from "@/assets/grades/subjects.webp";
import { FeaturePage } from "@/components/feature/feature-page";
import { getDictionary } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = (await getDictionary()).featurePages.grades;

  return { title: t.metadataTitle, description: t.metadataDescription };
}

export default async function GradesPage() {
  const t = (await getDictionary()).featurePages.grades;

  return (
    <FeaturePage
      t={t}
      icon={Grades}
      heroImages={{ front: overview, back: subjects }}
      highlights={[
        { key: "evolution", image: evolution },
        { key: "methods", image: methods },
        { key: "detail", image: detail },
        { key: "influence", image: influence },
        { key: "periods", image: periods },
        { key: "subjects", image: subjects },
      ]}
      moreIcons={{
        offline: GlobeCross,
        home: Home,
        scale: Coefficient,
        skills: GraduationHat,
        personal: Palette,
        private: Lock,
      }}
      largeScreenImage={ipad}
      ctaImage={overview}
    />
  );
}
