import { cacheLife } from "next/cache";

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
