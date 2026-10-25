import type { ReactNode } from "react";

export function ColorCard({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`theme-dark relative flex h-full flex-col overflow-hidden rounded-3xl bg-background bg-linear-to-t p-8 ${className}`}
    >
      <span aria-hidden className="absolute -top-32 -right-32 size-80 rounded-full border border-foreground/15" />
      <span aria-hidden className="absolute -top-16 -right-16 size-48 rounded-full border border-foreground/15" />
      <div className="relative flex flex-1 flex-col justify-between gap-8">{children}</div>
    </div>
  );
}
