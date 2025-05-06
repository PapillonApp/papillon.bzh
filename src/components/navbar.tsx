'use client'

import { usePathname } from 'next/navigation';

import Image from "next/image";
import "./navbar.css";
import Button from "@/atoms/button";
import { Download } from "lucide-react";

import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

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
            <Link href="/">
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
            <nav>
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
            />
          </div>
        </div>
      </header>
      <div className="navbar-height" />
    </>
  );
}