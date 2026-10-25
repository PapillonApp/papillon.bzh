import { ogImage } from "@/lib/og";

export { alt, contentType, generateStaticParams, size } from "@/lib/og";

export default ogImage((dict) => ({
  title: dict.association.metadataTitle,
  description: dict.association.hero.description,
}));
