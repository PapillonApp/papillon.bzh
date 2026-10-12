import { Info } from "@getpapillon/papicons";
import type { ReactNode } from "react";

export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="mt-8 flex gap-3 rounded-2xl bg-primary/8 p-5 text-primary-dark">
      <Info aria-hidden className="mt-1 size-5 shrink-0 text-primary" />
      <div className="[&>:first-child]:mt-0 [&_p]:text-primary-dark">{children}</div>
    </aside>
  );
}
