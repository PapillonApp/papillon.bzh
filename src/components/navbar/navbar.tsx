'use client'

import { usePathname } from 'next/navigation';

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react"

import Image from "next/image";
import "./navbar.css";
import Button from "@/atoms/button/button";
import { Download, Menu, X } from "lucide-react";

import Link from "next/link";
import React from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  const [scrollValue, setScrollValue] = React.useState(scrollY.get());

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollValue(latest);
  })

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const [width, setWidth] = React.useState<number>(1000);
  React.useLayoutEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once to set the initial width
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // --- DARK NAVBAR LOGIC ---
  const [isDark, setIsDark] = React.useState(false);
  React.useEffect(() => {
    const navbar = document.querySelector('header.navbar');
    const sentinels = Array.from(document.querySelectorAll('.navbar-dark-sentinel'));
    if (!navbar || sentinels.length === 0) return;
    let intersectingCount = 0;
    const observer = new window.IntersectionObserver(
      (entries) => {
        intersectingCount = entries.filter(e => e.isIntersecting).length;
        setIsDark(intersectingCount > 0);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    sentinels.forEach(sentinel => observer.observe(sentinel));
    return () => observer.disconnect();
  }, []);

  const routes = [
    {
      title: "L'application",
      href: "/#",
    },
    {
      title: "Association",
      href: "/association",
    },
    {
      title: "Documentation",
      href: "https://docs.papillon.bzh",
      external: true,
    },
    {
      title: "Soutenir le projet",
      href: "https://ko-fi.com/thepapillonapp",
      className: ["support"],
      external: true,
    },
  ];

  return (
    <>
      <header className={`navbar${scrollValue > 0 ? ' scrolled' : ''}${isDark ? ' dark' : ''}`}>
        <div className="width">
          <div className="nav-part nav-left">
            <Link href="/" style={{ height: 28 }}>
              <Image
                width={119}
                height={26}
                alt="Papillon"
                src={!isDark ? "./logotype.svg" : "./logotype_dark.svg"}
                priority
              />
            </Link>
          </div>
          <div className="nav-part nav-main">
            <nav className="desktop-nav">
              <ul>
                {routes.map((route) => (
                  <li
                    key={route.title}
                  >
                    <Link
                      href={pathname === route.href ? "#" : route.href}
                      className={
                        (pathname === route.href.replace("#", "") ? "active" : "") + " " + route.className?.join(" ")
                      }
                      target={route.external ? "_blank" : "_self"}
                    >
                      {route.title}

                      {route.external && " ↗"}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="nav-part nav-right">
            <Button
              icon={<Download />}
              value={width > 500 ? "Télécharger l'appli" : "Télécharger"}
              color="primary"
              href="download"
              className='download-nav'
            />

            <button
              onClick={() => toggleMobileNav()}
              className={"mobile-nav-button" + (mobileNavOpen ? " open" : "")}
              aria-label="Menu"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
              aria-haspopup="true"
              type="button"
              title="Menu"
              data-state={mobileNavOpen ? "open" : "closed"}
              data-state-closed={mobileNavOpen ? "closed" : "open"}
              data-state-open={mobileNavOpen ? "open" : "closed"}
            >
              {mobileNavOpen ? (
                <X />
              ) : (
                <Menu />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            className={`mobile-nav ${mobileNavOpen ? "open" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="mobile-nav-content"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="mobile-nav-nav">
                <ul>
                  {routes.map((route) => (
                    <li
                      key={route.title}
                    >
                      <Link
                        href={route.href}
                        className={
                          (pathname === route.href ? "active" : "") + " " + route.className?.join(" ")
                        }
                      >
                        {route.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}