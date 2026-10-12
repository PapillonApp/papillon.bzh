import Image from "next/image";
import { getGithubName } from "@/lib/github";
import { externalProps } from "@/lib/links";

type AuthorProps = {
  login: string;
  link?: boolean;
};

export async function Author({ login, link = false }: AuthorProps) {
  const name = await getGithubName(login);
  const content = (
    <>
      <Image
        src={`https://github.com/${login}.png?size=64`}
        alt=""
        width={24}
        height={24}
        unoptimized
        className="size-6 rounded-full bg-surface"
      />
      <span className="text-trim">{name}</span>
    </>
  );

  if (!link) return <span className="flex items-center gap-2">{content}</span>;

  return (
    <a
      href={`https://github.com/${login}`}
      {...externalProps}
      className="flex items-center gap-2 transition-colors hover:text-foreground"
    >
      {content}
    </a>
  );
}
