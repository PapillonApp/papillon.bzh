import { ChevronDown } from "@getpapillon/papicons";

export function Chevron({ className = "" }: { className?: string }) {
  return <ChevronDown aria-hidden className={`size-3.5 shrink-0 ${className}`} />;
}
