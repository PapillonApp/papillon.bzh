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
import { getDictionary } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = (await getDictionary()).featurePages.schedule;

  return { title: t.metadataTitle, description: t.metadataDescription };
}

export default async function SchedulePage() {
  const t = (await getDictionary()).featurePages.schedule;

  return (
    <FeaturePage
      t={t}
      icon={Calendar}
      heroImages={{ front: list, back: liveActivity }}
      highlights={[
        { key: "day", image: list },
        { key: "views", image: views },
        { key: "calendar", image: calendar },
        { key: "detail", image: detail },
        { key: "live", image: liveActivity },
        { key: "widget", image: widget },
      ]}
      moreIcons={{
        home: Home,
        offline: GlobeCross,
        ical: Calendar,
        devices: Grid,
        personal: Palette,
        private: Lock,
      }}
      largeScreenImage={ipad}
      ctaImage={home}
    />
  );
}
