import type { ComponentType } from "react";

type SectionHeadingProps = {
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  iconColor: string;
  title: string;
  description: string;
};

export function SectionHeading({ icon: Icon, iconColor, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
      <Icon aria-hidden className={`mb-2 size-12 ${iconColor}`} />
      <h2 className="text-2xl font-semibold tracking-tight text-balance lg:text-4xl">{title}</h2>
      <p className="max-w-2xl text-lg/normal text-pretty text-foreground/60">{description}</p>
    </div>
  );
}
