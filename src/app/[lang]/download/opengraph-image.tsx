import { ogImage } from "@/lib/og";

export { alt, contentType, generateStaticParams, size } from "@/lib/og";

export default ogImage((dict) => ({
  title: dict.downloadPage.metadataTitle,
  description: dict.downloadPage.metadataDescription,
}));
