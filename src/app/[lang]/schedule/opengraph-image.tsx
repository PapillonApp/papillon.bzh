import { ogImage } from "@/lib/og";

export { alt, contentType, generateStaticParams, size } from "@/lib/og";

export default ogImage(
  (dict) => ({
    title: dict.featurePages.schedule.metadataTitle,
    description: dict.featurePages.schedule.metadataDescription,
  }),
  { screen: "schedule/list.webp", color: "feature-schedule" },
);
