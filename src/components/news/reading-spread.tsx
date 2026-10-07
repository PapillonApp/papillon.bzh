import { Points } from "@/components/feature/points";

type ReadingSpreadProps = {
  items: { title: string; description: string; points: string[] }[];
};

export function ReadingSpread({ items }: ReadingSpreadProps) {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:divide-x lg:divide-foreground/10">
        {items.map((item) => (
          <article key={item.title} className="flex flex-col gap-5 lg:px-12 lg:first:pl-0 lg:last:pr-0">
            <h2 className="text-3xl font-semibold tracking-tight text-balance lg:text-5xl">{item.title}</h2>
            <p className="max-w-xl text-lg/normal text-pretty text-foreground/60">{item.description}</p>
            <Points points={item.points} className="mt-2" />
          </article>
        ))}
      </div>
    </section>
  );
}
