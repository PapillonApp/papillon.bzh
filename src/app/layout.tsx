import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Papillon - L’application pensée pour l’école d’aujourd’hui & de demain",
  description: "L’application pensée pour l’école d’aujourd’hui & de demain",
  openGraph: {
    title: "Papillon - L’application pensée pour l’école d’aujourd’hui & de demain",
    description: "L’application pensée pour l’école d’aujourd’hui & de demain",
    url: "https://getpapillon.app",
    siteName: "Papillon",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Papillon - L’application pensée pour l’école d’aujourd’hui & de demain",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Papillon - L’application pensée pour l’école d’aujourd’hui & de demain",
    description: "L’application pensée pour l’école d’aujourd’hui & de demain",
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
      <body>
        <Navbar />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
