import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  illustration?: ReactNode;
  className?: string;
  tint?: string;
};

export function FeatureCard({
  title,
  description,
  illustration,
  className = "",
  tint = "",
}: FeatureCardProps) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl bg-background outline-foreground/10 outline shadow-2xl/10 text-foreground ${className}`}
    >
      <div className={`relative min-h-48 flex-1 bg-linear-to-b to-transparent lg:min-h-52 ${tint}`}>{illustration}</div>
      <div className="flex flex-col gap-1 px-6 pb-6 lg:px-6 lg:pb-6">
        <h3 className="text-xl font-bold tracking-tight text-balance">{title}</h3>
        <p className="text-md/normal text-foreground/60">{description}</p>
      </div>
    </article>
  );
}
