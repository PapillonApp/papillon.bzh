import { Calendar, GlobeCross, Grid, Home, Lock, Palette } from "@getpapillon/papicons";
import type { Metadata } from "next";
import calendar from "@/assets/schedule/calendar.webp";
import detail from "@/assets/schedule/detail.webp";
import home from "@/assets/schedule/home.webp";
import ipad from "@/assets/schedule/ipad.webp";
import list from "@/assets/schedule/list.webp";
import liveActivity from "@/assets/schedule/live-activity.webp";
import views from "@/assets/schedule/views.webp";
import widget from "@/assets/schedule/widget.webp";
import { FeaturePage } from "@/components/feature/feature-page";
import { LargeScreen } from "@/components/feature/large-screen";
import { Points } from "@/components/feature/points";
import { Screen } from "@/components/feature/screen";
import { ScreenRow } from "@/components/feature/screen-row";
import { BeyondApp } from "@/components/schedule/beyond-app";
import { getDictionary } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = (await getDictionary()).featurePages.schedule;

  return { title: t.metadataTitle, description: t.metadataDescription };
}

export default async function SchedulePage() {
  const t = (await getDictionary()).featurePages.schedule;
  const { day } = t.highlights;

  return (
    <FeaturePage
      t={t}
      themeClassName="theme-schedule"
      icon={Calendar}
      heroLayout="split"
      heroVisual={
        <div className="h-120 mask-b-from-70% lg:h-150">
          <Screen image={list} alt={t.hero.imageAlt} priority className="w-64 lg:w-80" />
        </div>
      }
      moreIcons={{
        home: Home,
        offline: GlobeCross,
        ical: Calendar,
        devices: Grid,
        personal: Palette,
        private: Lock,
      }}
      ctaImage={home}
    >
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto mb-16 grid max-w-6xl gap-8 lg:mb-24 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-3xl font-semibold tracking-tight text-balance lg:text-5xl">{day.title}</h2>
          <div className="flex flex-col gap-6 lg:pt-3">
            <p className="text-lg/normal text-pretty text-foreground/60">{day.description}</p>
            <Points points={day.points} />
          </div>
        </div>
        <ScreenRow
          items={[
            { image: views, t: t.highlights.views },
            { image: calendar, t: t.highlights.calendar },
            { image: detail, t: t.highlights.detail },
          ]}
        />
      </section>
      <LargeScreen t={t.largeScreen} image={ipad} />
      <BeyondApp
        live={{ t: t.highlights.live, image: liveActivity }}
        widget={{ t: t.highlights.widget, image: widget }}
      />
    </FeaturePage>
  );
}
