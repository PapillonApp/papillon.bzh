import { ogImage } from "@/lib/og";

export { alt, contentType, generateStaticParams, size } from "@/lib/og";

export default ogImage(
  (dict) => ({
    title: dict.featurePages.grades.metadataTitle,
    description: dict.featurePages.grades.metadataDescription,
  }),
  { screen: "grades/overview.webp", color: "feature-grades" },
);
