import type { Metadata } from "next";
import { SN_Pro } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/server";
import "../globals.css";

const snPro = SN_Pro({
  variable: "--font-sn-pro",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();

  return {
    metadataBase: new URL("https://papillon.bzh"),
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  return (
    <html
      lang={await getLocale()}
      className={`${snPro.variable} antialiased motion-safe:scroll-smooth`}
    >
      <body className="min-h-dvh font-sans selection:bg-primary/25">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
