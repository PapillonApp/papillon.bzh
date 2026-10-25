import type { ReactNode } from "react";

type ChapterHeadingProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function ChapterHeading({ title, description, children }: ChapterHeadingProps) {
  return (
    <div className="flex max-w-2xl flex-col gap-4">
      <h2 className="text-4xl font-semibold tracking-tight text-balance lg:text-5xl">
        <Highlight text={title} />
      </h2>
      {description && <p className="text-xl/normal text-pretty text-foreground/70">{description}</p>}
      {children}
    </div>
  );
}

function Highlight({ text }: { text: string }) {
  return text.split(/\*(.+?)\*/).map((part, index) =>
    index % 2 ? (
      <mark
        key={index}
        className="-mx-1 box-decoration-clone bg-transparent bg-linear-to-t from-primary/35 from-40% to-transparent to-40% px-1 text-inherit"
      >
        {part}
      </mark>
    ) : (
      part
    ),
  );
}
