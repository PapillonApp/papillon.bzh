import { ogImage } from "@/lib/og";

export { alt, contentType, generateStaticParams, size } from "@/lib/og";

export default ogImage(
  (dict) => ({
    title: dict.featurePages.homework.metadataTitle,
    description: dict.featurePages.homework.metadataDescription,
  }),
  { screen: "homework/list.webp", color: "feature-homework" },
);
