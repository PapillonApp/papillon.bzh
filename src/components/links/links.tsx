import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  ChevronRight,
  Download,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

import Discord from "@/icons/Discord";
import TikTok from "@/icons/TikTok";
import XLogo from "@/icons/XLogo";

import "./links.css";

const socialLinks = [
  {
    title: "Discord",
    description: "Rejoins la communauté",
    href: "https://discord.gg/wVKWBRTbfh",
    icon: <Discord />,
  },
  {
    title: "X (ex. Twitter)",
    description: "@thepapillonapp",
    href: "https://x.com/thepapillonapp",
    icon: <XLogo />,
  },
  {
    title: "TikTok",
    description: "@thepapillonapp",
    href: "https://tiktok.com/@thepapillonapp",
    icon: <TikTok />,
  },
  {
    title: "YouTube",
    description: "@thepapillonapp",
    href: "https://youtube.com/@thepapillonapp",
    icon: <Youtube />,
  },
  {
    title: "LinkedIn",
    description: "Papillon",
    href: "https://www.linkedin.com/company/getpapillonapp",
    icon: <Linkedin />,
  },
  {
    title: "GitHub",
    description: "Le code, ouvert à tous",
    href: "https://github.com/PapillonApp",
    icon: <Github />,
  },
  {
    title: "Soutenir le projet",
    description: "Un coup de pouce sur Ko-fi",
    href: "https://ko-fi.com/thepapillonapp",
    icon: <Heart />,
  },
];

export default function Links() {
  return (
    <div className="linksPage">
      <div className="linksCard">
        <Image
          src="/appicon-glass.png"
          alt="Papillon"
          width={96}
          height={96}
          className="linksAvatar"
          priority
        />
        <h1 className="linksTitle">Papillon</h1>
        <p className="linksSubtitle">
          L&apos;appli scolaire qui simplifie la vie des élèves. Retrouve-nous partout ci-dessous.
        </p>

        <Link href="/download" className="linkRow primary">
          <span className="linkIcon">
            <Download size={20} strokeWidth={2.5} />
          </span>
          <span className="linkText">
            <span className="linkLabel">Télécharger l&apos;application</span>
            <span className="linkDescription">iOS, Android & versions bêta</span>
          </span>
          <ChevronRight className="linkArrow" size={20} />
        </Link>

        <a
          href="https://instagram.com/thepapillonapp"
          target="_blank"
          rel="noopener noreferrer"
          className="linkRow instagram"
        >
          <span className="linkIcon">
            <Instagram size={20} strokeWidth={2.5} />
          </span>
          <span className="linkText">
            <span className="linkLabel">Instagram</span>
            <span className="linkDescription">@thepapillonapp</span>
          </span>
          <ChevronRight className="linkArrow" size={20} />
        </a>

        <a
          href="https://docs.papillon.bzh"
          target="_blank"
          rel="noopener noreferrer"
          className="linkRow"
        >
          <span className="linkIcon">
            <BookOpen size={20} strokeWidth={2.5} />
          </span>
          <span className="linkText">
            <span className="linkLabel">Documentation</span>
            <span className="linkDescription">Guides & aide</span>
          </span>
          <ChevronRight className="linkArrow" size={20} />
        </a>

        <div className="linksList">
          {socialLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="linkRow"
            >
              <span className="linkIcon">{link.icon}</span>
              <span className="linkText">
                <span className="linkLabel">{link.title}</span>
                <span className="linkDescription">{link.description}</span>
              </span>
              <ChevronRight className="linkArrow" size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
