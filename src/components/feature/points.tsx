import { Check } from "@getpapillon/papicons";

export function Points({ points, className = "" }: { points: string[]; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {points.map((point) => (
        <li key={point} className="flex items-start gap-3 text-md font-medium text-pretty">
          <Check aria-hidden className="size-5 shrink-0 text-primary" />
          {point}
        </li>
      ))}
    </ul>
  );
}
