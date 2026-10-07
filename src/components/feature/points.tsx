export function Points({ points, className = "" }: { points: string[]; className?: string }) {
  return (
    <ul className={`flex flex-col divide-y divide-foreground/10 border-y border-foreground/10 ${className}`}>
      {points.map((point) => (
        <li key={point} className="py-3 text-md font-medium text-pretty">
          {point}
        </li>
      ))}
    </ul>
  );
}
