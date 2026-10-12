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
import { HeroScreens } from "@/components/feature/hero-screens";
import { LargeScreen } from "@/components/feature/large-screen";
import { SectionTitle } from "@/components/feature/section-title";
import { Tiles } from "@/components/feature/tiles";
import { getDictionary, getLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.featurePages.schedule;

  return pageMetadata({
    locale,
    path: "/schedule",
    title: t.metadataTitle,
    description: t.metadataDescription,
  });
}

export default async function SchedulePage() {
  const t = (await getDictionary()).featurePages.schedule;
  const { day } = t.highlights;

  return (
    <FeaturePage
      t={t}
      themeClassName="theme-schedule"
      icon={Calendar}
      heroVisual={
        <HeroScreens
          front={{ image: list, alt: t.hero.imageAlt }}
          back={{ image: detail, alt: "" }}
        />
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
        <SectionTitle title={day.title} description={day.description} />
        <Tiles
          items={[
            { image: views, t: t.highlights.views },
            { image: calendar, t: t.highlights.calendar },
            { image: detail, t: t.highlights.detail },
          ]}
        />
      </section>
      <LargeScreen t={t.largeScreen} image={ipad} />
      <div data-dark-section className="theme-dark bg-background">
        <section className="px-6 py-24 lg:py-32">
          <SectionTitle title={t.beyond.title} description={t.beyond.description} />
          <Tiles
            items={[
              { image: liveActivity, t: t.highlights.live, showBottom: true },
              { image: widget, t: t.highlights.widget },
            ]}
          />
        </section>
      </div>
    </FeaturePage>
  );
}
