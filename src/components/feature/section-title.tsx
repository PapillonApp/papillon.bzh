import { FadeUp } from "@/components/ui/fade-up";

export function SectionTitle({ title, description }: { title: string; description?: string }) {
  return (
    <FadeUp className="mx-auto mb-10 flex max-w-6xl flex-col gap-4 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-md text-lg/normal text-pretty text-foreground/60">{description}</p>
      )}
    </FadeUp>
  );
}
