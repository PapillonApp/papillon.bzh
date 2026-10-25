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
import { organizationId, siteUrl } from "@/lib/seo";

export default async function HomePage() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <main className="overflow-x-clip">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          name: "Papillon",
          description: dict.metadata.description,
          url: `${siteUrl}/${locale}`,
          operatingSystem: "iOS, iPadOS, macOS, Android",
          applicationCategory: "EducationalApplication",
          inLanguage: locale,
          offers: { "@type": "Offer", price: 0, priceCurrency: "EUR" },
          downloadUrl: [storeUrls.appStore, storeUrls.googlePlay],
          publisher: { "@id": organizationId },
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
      <div
        data-dark-section
        className="theme-night relative my-12 py-16 before:absolute before:-inset-x-1/2 before:top-0 before:h-16 before:rounded-t-[50%_100%] before:bg-background after:absolute after:-inset-x-1/2 after:bottom-0 after:h-16 after:rounded-b-[50%_100%] after:bg-background lg:my-20 lg:py-32 lg:before:h-32 lg:after:h-32"
      >
        <div className="bg-background">
          <Trust />
          <Adoption />
        </div>
      </div>
      <Faq t={dict.home.faq} />
    </main>
  );
}
