import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { locales } from "@/i18n/config";
import en from "@/i18n/dictionaries/en";
import fr, { type Dictionary } from "@/i18n/dictionaries/fr";

export const alt = "Papillon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type OgText = { title: string; description: string };
type OgOptions = { screen?: string; color?: string };

async function assetUrl(file: string) {
  const png = await sharp(path.join(process.cwd(), "src/assets", file))
    .resize({ width: 760 })
    .png()
    .toBuffer();
  return `data:image/png;base64,${png.toString("base64")}`;
}

async function themeColor(token: string) {
  const css = await readFile(path.join(process.cwd(), "src/app/globals.css"), "utf8");
  return css.match(new RegExp(`--color-${token}: (#[0-9a-f]{6})`))?.[1] ?? "#29947a";
}

async function fonts() {
  const weights = { normal: 400, semibold: 600 } as const;
  return Promise.all(
    Object.entries(weights).map(async ([file, weight]) => ({
      name: "SN Pro",
      weight,
      data: await readFile(path.join(process.cwd(), `src/assets/fonts/sn-pro-${file}.ttf`)),
    })),
  );
}

function tint(hex: string, alpha: number) {
  const [r, g, b] = [1, 3, 5].map((i) => Number.parseInt(hex.slice(i, i + 2), 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function ogImage(
  pick: (dict: Dictionary) => OgText,
  { screen = "devices/Devices-iPhone.webp", color: token = "primary" }: OgOptions = {},
) {
  return async function Image({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = lang === "en" ? en : fr;
    const { title, description } = pick(dict);
    const { stats } = dict.home.adoption;
    const proof = dict.downloadPage.hero.rating
      .replace("{rating}", stats.rating.value)
      .replace("{downloads}", stats.downloads.value);
    const [icon, screenshot, color, snPro] = await Promise.all([
      assetUrl("app-icon.png"),
      assetUrl(screen),
      themeColor(token),
      fonts(),
    ]);

    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#ffffff",
          backgroundImage: [
            `radial-gradient(circle at 85% 15%, ${tint(color, 0.45)}, ${tint(color, 0)} 60%)`,
            `radial-gradient(circle at 0% 100%, ${tint(color, 0.25)}, ${tint(color, 0)} 55%)`,
            `linear-gradient(135deg, #ffffff, ${tint(color, 0.1)})`,
          ].join(", "),
          color: "#111111",
          fontFamily: "SN Pro",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 24,
            width: 700,
            paddingLeft: 72,
          }}
        >
          <img src={icon} width={72} height={72} alt="" />
          <div style={{ fontSize: 54, fontWeight: 600, lineHeight: 1.1, letterSpacing: -1 }}>
            {title.replace(/ – Papillon$/, "")}
          </div>
          <div style={{ fontSize: 25, lineHeight: 1.35, color: "rgba(17, 17, 17, 0.6)" }}>
            {description}
          </div>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: 8,
              marginTop: 8,
              padding: "10px 22px",
              borderRadius: 999,
              background: "#ffffff",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
              <path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95z" />
            </svg>
            {proof}
          </div>
        </div>
        <img
          src={screenshot}
          width={380}
          height={780}
          alt=""
          style={{ position: "absolute", right: 72, top: 64, objectFit: "contain" }}
        />
      </div>,
      { ...size, fonts: snPro },
    );
  };
}
