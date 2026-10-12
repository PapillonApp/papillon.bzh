import { getAuthor } from "@/lib/github";
import { externalProps } from "@/lib/links";
import { Avatar } from "./avatar";

type AuthorProps = {
  login: string;
  link?: boolean;
};

export async function Author({ login, link = false }: AuthorProps) {
  const { name, avatar } = await getAuthor(login);
  const content = (
    <>
      <Avatar src={avatar} className="size-6" />
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
