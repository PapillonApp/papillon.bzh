import Image from "next/image";
import appIcon from "@/assets/app-icon.png";
import { teamAuthor } from "@/lib/blog";
import { getAuthor } from "@/lib/github";
import { externalProps } from "@/lib/links";
import { Avatar } from "./avatar";

type AuthorProps = {
  login: string;
  teamName: string;
  link?: boolean;
  avatar?: boolean;
};

export async function Author({ login, teamName, link = false, avatar = true }: AuthorProps) {
  const author = login === teamAuthor ? undefined : await getAuthor(login);
  const content = (
    <>
      {avatar &&
        (author ? (
          <Avatar src={author.avatar} className="size-6" />
        ) : (
          <Image src={appIcon} alt="" width={48} height={48} className="size-6" />
        ))}
      <span className="text-trim">{author?.name ?? teamName}</span>
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
