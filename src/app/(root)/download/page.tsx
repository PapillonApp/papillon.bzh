import Hero from "@/components/download/hero/hero";

import "./page.css";
import Download from "@/components/download/download/download";

export default function Home() {
  return (
    <div className="app donatePage">
      <Hero />
      <Download />
    </div>
  );
}
