import { cacheLife } from "next/cache";
import type { StaticImageData } from "next/image";
import { teamMembers } from "@/content/team";

export const githubRepoUrl = "https://github.com/PapillonApp/Papillon";

export type Contributor = { login: string; avatarUrl: string };

export async function getContributors(): Promise<Contributor[]> {
  "use cache";
  cacheLife("days");

  try {
    const response = await fetch(
      "https://api.github.com/repos/PapillonApp/Papillon/contributors?per_page=100",
      { headers: { Accept: "application/vnd.github+json" } },
    );
    if (!response.ok) return [];
    const contributors: { login: string; avatar_url: string; type: string }[] =
      await response.json();
    return contributors
      .filter((contributor) => contributor.type === "User")
      .map((contributor) => ({ login: contributor.login, avatarUrl: contributor.avatar_url }));
  } catch {
    return [];
  }
}

export type Author = { login: string; name: string; avatar: string | StaticImageData };

export async function getAuthor(login: string): Promise<Author> {
  const member = teamMembers.find((teamMember) => teamMember.github === login);
  if (member) return { login, name: member.name, avatar: member.photo };

  const avatar = `https://github.com/${login}.png?size=64`;
  try {
    return { login, name: await fetchGithubName(login), avatar };
  } catch {
    return { login, name: login, avatar };
  }
}

async function fetchGithubName(login: string): Promise<string> {
  "use cache";
  cacheLife("days");

  const response = await fetch(`https://api.github.com/users/${encodeURIComponent(login)}`, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!response.ok) throw new Error(`GitHub user ${login}: ${response.status}`);
  const user: { name: string | null } = await response.json();
  return user.name || login;
}
