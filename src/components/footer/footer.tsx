import Image from "next/image";
import "./footer.css";

export default function Footer() {
  const links = [
    {
      title: "Ressources",
      links: [
        {
          title: "Documentation",
          href: "https://docs.papillon.bzh",
        },
        {
          title: "Confidentialité",
          href: "https://docs.papillon.bzh/privacy-policy",
        }
      ]
    },
    {
      title: "Nous retrouver",
      links: [
        {
          title: "X (ex. Twitter)",
          href: "https://x.com/thepapillonapp",
        },
        {
          title: "Instagram",
          href: "https://instagram.com/thepapillonapp",
        },
        {
          title: "TikTok",
          href: "https://tiktok.com/@thepapillonapp",
        },
        {
          title: "YouTube",
          href: "https://youtube.com/@thepapillonapp",
        },
        {
          title: "Linkedin",
          href: "https://www.linkedin.com/company/getpapillonapp",
        }
      ]
    },
    {
      title: "Communauté",
      links: [
        {
          title: "GitHub",
          href: "https://github.com/PapillonApp",
        },
        {
          title: "Discord",
          href: "https://discord.gg/wVKWBRTbfh",
        }
      ]
    }
  ]

  return (
    <footer>
      <div className="width">
        <div className="footer-sections">
            <div className="footer-section footer-branding">
              <Image
                width={119}
                height={26}
                alt="Papillon"
                src="./logotype.svg"
                className="footer-logo"
              />
              <p className="copyright">© {new Date().getFullYear()} Association Papillon & contributeurs. Tous droits réservés.</p>
              </div>
          {links.map((section) => (
            <div key={section.title} className="footer-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}