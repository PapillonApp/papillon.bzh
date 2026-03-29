import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  themeColor: "#29947A",
};

export const metadata: Metadata = {
  title: "Papillon - Votre vie scolaire, avec de la magie en plus",
  description: "Papillon est une alternative libre et open source aux applications de vie scolaire traditionnelles. Conçue, dévelopée et maintenue avec soin par des étudiants.",
  itunes: {
    appId: "6477761165"
  },
  openGraph: {
    title: "Papillon - Votre vie scolaire, avec de la magie en plus",
    description: "Papillon est une alternative libre et open source aux applications de vie scolaire traditionnelles. Conçue, dévelopée et maintenue avec soin par des étudiants.",
    url: "https://papillon.bzh",
    siteName: "Papillon",
    images: [
      {
        url: "/og-image.jpg",
        width: 1280,
        height: 720,
        alt: "Papillon - Votre vie scolaire, avec de la magie en plus",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  metadataBase: new URL("https://papillon.bzh"),
  twitter: {
    card: "summary_large_image",
    title: "Papillon - Votre vie scolaire, avec de la magie en plus",
    description: "Papillon est une alternative libre et open source aux applications de vie scolaire traditionnelles. Conçue, dévelopée et maintenue avec soin par des étudiants.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.macpaw.com" />
        <link rel="stylesheet" href="https://fonts.macpaw.com/css?family=FixelText:300;400;500;600;700;800" />
      </head>
      {children}
    </html>
  );
}
