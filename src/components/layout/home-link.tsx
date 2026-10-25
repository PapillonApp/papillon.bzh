"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type HomeLinkProps = {
  href: Route;
  label: string;
  className: string;
  children: ReactNode;
};

export function HomeLink({ href, label, className, children }: HomeLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      aria-label={label}
      data-sound="home"
      onClick={(event) => {
        if (pathname !== href) return;
        event.preventDefault();
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
