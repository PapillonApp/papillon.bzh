import type { Metadata } from "next";
import { SN_Pro } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { UiSounds } from "@/components/layout/ui-sounds";
import { JsonLd } from "@/components/ui/json-ld";
import { locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/server";
import { linkHrefs } from "@/lib/links";
import { organizationId, pageMetadata, siteUrl } from "@/lib/seo";
import "../globals.css";

const snPro = SN_Pro({
  variable: "--font-sn-pro",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return {
    metadataBase: new URL(siteUrl),
    applicationName: "Papillon",
    twitter: { card: "summary_large_image", site: "@thepapillonapp" },
    itunes: { appId: "6477761165" },
    ...pageMetadata({
      locale,
      path: "",
      title: dict.metadata.title,
      description: dict.metadata.description,
    }),
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${snPro.variable} antialiased motion-safe:scroll-smooth`}
    >
      <body className="min-h-dvh font-sans selection:bg-primary/25">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": organizationId,
                name: "Papillon",
                url: siteUrl,
                logo: `${siteUrl}/icon.png`,
                sameAs: [
                  linkHrefs.github,
                  linkHrefs.x,
                  linkHrefs.instagram,
                  linkHrefs.tiktok,
                  linkHrefs.youtube,
                  linkHrefs.linkedin,
                ],
              },
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                name: "Papillon",
                url: siteUrl,
                description: dict.metadata.description,
                inLanguage: locale,
                publisher: { "@id": organizationId },
              },
            ],
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <UiSounds />
      </body>
    </html>
  );
}
