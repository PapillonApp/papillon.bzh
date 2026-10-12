import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { locales } from "@/i18n/config";
import en from "@/i18n/dictionaries/en";
import fr from "@/i18n/dictionaries/fr";

export const alt = "Papillon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = lang === "en" ? en : fr;
  const icon = await readFile(path.join(process.cwd(), "src/assets/app-icon.png"), "base64");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 40,
        padding: 96,
        background: "#29947a",
        color: "#ffffff",
      }}
    >
      <img src={`data:image/png;base64,${icon}`} width={160} height={160} alt="" />
      <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>{dict.metadata.title}</div>
      <div style={{ fontSize: 34, opacity: 0.85, lineHeight: 1.3 }}>{dict.metadata.description}</div>
    </div>,
    size,
  );
}
