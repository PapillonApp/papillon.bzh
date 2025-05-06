import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Papillon - L’application pensée pour l’école d’aujourd’hui & de demain",
  description: "L’application pensée pour l’école d’aujourd’hui & de demain",
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
