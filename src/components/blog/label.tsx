import {
  Apple,
  Clock,
  Gears,
  Grid,
  Lock,
  Phone,
  Search,
  Sparkles,
} from "@getpapillon/papicons";
import type { ReactNode } from "react";

const icons = { apple: Apple, clock: Clock, gears: Gears, grid: Grid, lock: Lock, phone: Phone, search: Search, sparkles: Sparkles };

const colors = {
  red: "text-red-800",
  green: "text-emerald-800",
  purple: "text-purple-800",
  blue: "text-blue-800",
  orange: "text-orange-800",
};

type LabelProps = {
  icon: keyof typeof icons;
  color: keyof typeof colors;
  children: ReactNode;
};

export function Label({ icon, color, children }: LabelProps) {
  const Icon = icons[icon];
  return (
    <span className={`inline-flex items-center gap-1.5 align-bottom font-semibold ${colors[color]}`}>
      <Icon aria-hidden className="size-5 shrink-0" />
      {children}
    </span>
  );
}
