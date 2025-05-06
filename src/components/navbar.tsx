'use client'

import { usePathname } from 'next/navigation';

import { AnimatePresence, motion } from "motion/react"

import Image from "next/image";
import "./navbar.css";
import Button from "@/atoms/button";
import { Download, Menu, X } from "lucide-react";

import Link from "next/link";
import React from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const routes = [
    {
      title: "Le projet Papillon",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Soutenir le projet",
      href: "/donate",
      className: ["support"],
    },
  ]

  return (
    <>
      <header className="navbar">
        <div className="width">
          <div className="nav-part nav-left">
            <Link href="/" style={{ height: 28 }}>
              <Image
                width={129}
                height={28}
                alt="Papillon"
                src="./logotype.svg"
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
                      href={route.href}
                      className={
                      (pathname === route.href
                        ? "active" : "")
                        + " " + route.className?.join(" ")
                    }
                    >
                      {route.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="nav-part nav-right">
            <Button
              icon={<Download />}
              value="Télécharger l'appli"
              color="primary"
              href="download"
              className='download-nav'
            />

            <button
              onClick={() => toggleMobileNav()}
              className={"mobile-nav-button" + (mobileNavOpen ? " open" : "")}
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
                          (pathname === route.href
                            ? "active" : "")
                            + " " + route.className?.join(" ")
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

      <div className="navbar-height" />
    </>
  );
}