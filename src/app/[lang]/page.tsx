import { storeUrls } from "@/components/download/store-badges";
import { Adoption } from "@/components/home/adoption";
import { Devices } from "@/components/home/devices";
import { Faq } from "@/components/home/faq";
import { FeatureDemos } from "@/components/home/feature-demos";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { Steps } from "@/components/home/steps";
import { Trust } from "@/components/home/trust";
import { JsonLd } from "@/components/ui/json-ld";
import { getDictionary, getLocale } from "@/i18n/server";
import { linkHrefs } from "@/lib/links";
import { siteUrl } from "@/lib/seo";

export default async function HomePage() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${siteUrl}/#organization`,
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
              "@type": "MobileApplication",
              name: "Papillon",
              description: dict.metadata.description,
              url: `${siteUrl}/${locale}`,
              operatingSystem: "iOS, iPadOS, macOS, Android",
              applicationCategory: "EducationalApplication",
              inLanguage: locale,
              offers: { "@type": "Offer", price: 0, priceCurrency: "EUR" },
              downloadUrl: [storeUrls.appStore, storeUrls.googlePlay],
              publisher: { "@id": `${siteUrl}/#organization` },
            },
          ],
        }}
      />
      <Hero
        t={dict.home.hero}
        download={dict.download}
        stats={dict.home.adoption.stats}
        compatible={dict.featurePages.compatible}
      />
      <Features />
      <Devices />
      <FeatureDemos />
      <Steps />
      <div data-dark-section className="theme-dark my-12 bg-background py-12 lg:my-20 lg:py-20">
        <Trust />
        <Adoption />
      </div>
      <Faq t={dict.home.faq} />
    </main>
  );
}
