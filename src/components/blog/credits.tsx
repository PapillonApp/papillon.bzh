import Image from "next/image";
import { getGithubName } from "@/lib/github";

export async function Credits({ authors }: { authors: string[] }) {
  const names = await Promise.all(authors.map(getGithubName));

  return (
    <p className="mt-4 flex items-center gap-2.5 text-md text-foreground/60">
      <span aria-hidden className="flex">
        {authors.map((login) => (
          <Image
            key={login}
            src={`https://github.com/${login}.png?size=48`}
            alt=""
            width={24}
            height={24}
            unoptimized
            className="-ml-2 size-6 rounded-full bg-surface ring-2 ring-background first:ml-0"
          />
        ))}
      </span>
      <span className="text-trim">{new Intl.ListFormat("fr").format(names)}</span>
    </p>
  );
}
