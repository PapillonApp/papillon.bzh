import { getAuthor } from "@/lib/github";
import { Avatar } from "./avatar";

export async function Credits({ authors }: { authors: string[] }) {
  const people = await Promise.all(authors.map(getAuthor));

  return (
    <p className="mt-4 flex items-center gap-2.5 text-md text-foreground/60">
      <span aria-hidden className="flex">
        {people.map(({ login, avatar }) => (
          <Avatar
            key={login}
            src={avatar}
            className="-ml-2 size-6 ring-2 ring-background first:ml-0"
          />
        ))}
      </span>
      <span className="text-trim">{new Intl.ListFormat("fr").format(people.map(({ name }) => name))}</span>
    </p>
  );
}
