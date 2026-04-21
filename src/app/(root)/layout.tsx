import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

import SmoothScrolling from "@/components/smooth-scrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar />
    <main>
      <SmoothScrolling>
        {children}
      </SmoothScrolling>
    </main>
    <Footer />
    </>
  );
}
