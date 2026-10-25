import { ogImage } from "@/lib/og";

export { alt, contentType, generateStaticParams, size } from "@/lib/og";

export default ogImage(
  (dict) => ({
    title: dict.featurePages.news.metadataTitle,
    description: dict.featurePages.news.metadataDescription,
  }),
  { screen: "news/list.webp", color: "feature-news" },
);
