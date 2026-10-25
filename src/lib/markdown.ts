import { readFile } from "node:fs/promises";
import path from "node:path";
import { storeUrls } from "@/components/download/store-badges";
import { teamMembers } from "@/content/team";
import { hasLocale, type Locale, localeNames, locales } from "@/i18n/config";
import en from "@/i18n/dictionaries/en";
import fr, { type Dictionary } from "@/i18n/dictionaries/fr";
import { formatPostDate, getPost, getPosts, postDir, postLocale, teamAuthor } from "@/lib/blog";
import { contactEmail, discordUrl, type LinkKey, linkHrefs } from "@/lib/links";
import { markdownPath, siteUrl } from "@/lib/seo";

type Card = { title: string; description: string };
type Page = { title: string; description: string; body: string };
type FeatureKey = "grades" | "schedule" | "homework" | "news";

const dictionaries: Record<Locale, Dictionary> = { fr, en };

const markdownUrl = (locale: Locale, path: string) => siteUrl + markdownPath(locale, path);

const heading = (level: number, text: string) => `${"#".repeat(level)} ${text}`;
const list = (items: string[]) => items.map((item) => `- ${item}`).join("\n");
const link = (text: string, href: string) => `[${text}](${href})`;
const join = (...blocks: (string | false | undefined)[]) => blocks.filter(Boolean).join("\n\n");
const cards = (items: Record<string, Card>) =>
  list(Object.values(items).map(({ title, description }) => `**${title}.** ${description}`));
const faq = (t: { title: string; description: string; items: { question: string; answer: string }[] }) =>
  join(
    heading(2, t.title),
    t.description,
    ...t.items.map(({ question, answer }) => join(heading(3, question), answer)),
  );
const stores = (d: Dictionary) =>
  join(
    heading(2, d.download.label),
    list([
      link(d.download.stores.appStore, storeUrls.appStore),
      link(d.download.stores.googlePlay, storeUrls.googlePlay),
      link(d.download.stores.github, storeUrls.github),
    ]),
  );

function home(d: Dictionary): Page {
  const t = d.home;
  const devices = Object.keys(t.devices.details) as (keyof typeof t.devices.details)[];

  return {
    title: d.metadata.title,
    description: d.metadata.description,
    body: join(
      heading(1, d.metadata.title),
      t.hero.description,
      heading(2, t.features.title),
      t.features.description,
      cards(t.features.cards),
      heading(2, t.devices.title),
      t.devices.description,
      list(devices.map((key) => `**${t.devices.names[key]}.** ${t.devices.details[key]}`)),
      ...t.demos.items.map((item) => join(heading(2, item.title), item.description, list(item.checks))),
      heading(2, t.steps.title),
      t.steps.description,
      t.steps.items.map((step, index) => `${index + 1}. **${step.title}.** ${step.description}`).join("\n"),
      heading(2, t.trust.title),
      t.trust.description,
      cards(t.trust.pillars),
      heading(2, t.adoption.title),
      t.adoption.description,
      list(Object.values(t.adoption.stats).map(({ value, label }) => `**${value}** ${label}`)),
      faq(t.faq),
      stores(d),
    ),
  };
}

function feature(d: Dictionary, key: FeatureKey): Page {
  const t = d.featurePages[key];
  const intro = "tour" in t ? t.tour : "beyond" in t ? t.beyond : undefined;
  const highlights = Object.values<Card & { points: string[] }>(t.highlights);

  return {
    title: t.metadataTitle,
    description: t.metadataDescription,
    body: join(
      heading(1, t.hero.title),
      t.hero.description,
      intro && join(heading(2, intro.title), intro.description),
      ...highlights.map((item) => join(heading(3, item.title), item.description, list(item.points))),
      "largeScreen" in t && join(heading(2, t.largeScreen.title), t.largeScreen.description),
      heading(2, t.more.title),
      cards(t.more.items),
      faq(t.faq),
      heading(2, t.cta.title),
      t.cta.description,
      stores(d),
    ),
  };
}

function download(d: Dictionary): Page {
  const t = d.downloadPage;
  const platforms = { apple: storeUrls.appStore, android: storeUrls.googlePlay, mac: storeUrls.appStore };

  return {
    title: t.metadataTitle,
    description: t.hero.description,
    body: join(
      heading(1, t.hero.title),
      t.hero.description,
      heading(2, t.platforms.title),
      t.platforms.description,
      list(
        Object.entries(platforms).map(([key, href]) => {
          const item = t.platforms.items[key as keyof typeof platforms];
          return `**${item.name}.** ${item.description} ${link(item.cta, href)}`;
        }),
      ),
      heading(2, t.beta.title),
      t.beta.description,
      list([link(t.beta.testFlight, storeUrls.testFlight), link(t.beta.googlePlay, storeUrls.googlePlay)]),
    ),
  };
}

function association(d: Dictionary, locale: Locale): Page {
  const t = d.association;
  const next = t.next.cards;

  return {
    title: t.metadataTitle,
    description: t.hero.description,
    body: join(
      heading(1, t.hero.title),
      t.hero.description,
      heading(2, t.origin.title),
      t.origin.description,
      link(t.origin.link, markdownUrl(locale, "/story")),
      heading(2, t.today.title.replaceAll("*", "")),
      t.today.description,
      list(Object.values(t.today.facts).map(({ value, label }) => `**${value}** ${label}`)),
      heading(2, t.team.title),
      t.team.description,
      list(
        teamMembers.map(({ key, name, city }) => {
          const member = t.team.members[key];
          return `**${name}** (${city}), ${member.role}, ${member.school}. ${member.description}`;
        }),
      ),
      heading(2, t.commitments.title),
      cards(t.commitments.items),
      heading(2, t.next.title),
      t.next.description,
      list([
        `**${next.support.title}.** ${next.support.description} ${link(next.support.cta, `mailto:${contactEmail}`)} · ${link(next.support.secondary, linkHrefs.donate)}`,
        `**${next.contribute.title}.** ${next.contribute.description} ${link(next.contribute.cta, linkHrefs.github)} · ${link(next.contribute.secondary, discordUrl)}`,
      ]),
      t.next.privacy,
    ),
  };
}

function story(d: Dictionary): Page {
  const t = d.story;
  const vince = teamMembers[0];

  return {
    title: t.metadataTitle,
    description: t.hero.description,
    body: join(
      heading(1, t.hero.title),
      t.hero.description,
      ...t.eras.map((era) => join(heading(2, `${era.date} · ${era.title}`), era.text)),
      heading(2, t.milestone.label),
      `${t.milestone.from.value} ${t.milestone.from.label} → ${t.milestone.to.value} ${t.milestone.to.label}`,
      heading(2, t.today),
      `> ${t.vinceQuote}\n>\n> ${vince.name}`,
      heading(2, t.vision.title),
      t.vision.description,
      t.cta.description,
    ),
  };
}

function links(d: Dictionary): Page {
  const t = d.linksPage;

  return {
    title: t.metadataTitle,
    description: t.description,
    body: join(
      heading(1, t.title),
      t.description,
      ...Object.values<{ title: string; links: Record<string, Card> }>(t.groups).map((group) =>
        join(
          heading(2, group.title),
          list(
            Object.entries(group.links).map(
              ([key, item]) => `${link(item.title, linkHrefs[key as LinkKey])} · ${item.description}`,
            ),
          ),
        ),
      ),
    ),
  };
}

async function blog(d: Dictionary, locale: Locale): Promise<Page> {
  const posts = await getPosts(locale);

  return {
    title: d.blog.metadataTitle,
    description: d.blog.description,
    body: join(
      heading(1, d.blog.title),
      d.blog.description,
      list(
        posts.map(
          (post) =>
            `${link(post.title, markdownUrl(locale, `/blog/${post.slug}`))} · ${formatPostDate(post.date, locale)} · ${post.description ?? ""}`,
        ),
      ),
    ),
  };
}

export const pages: Record<string, (d: Dictionary, locale: Locale) => Page | Promise<Page>> = {
  "": home,
  "/grades": (d) => feature(d, "grades"),
  "/schedule": (d) => feature(d, "schedule"),
  "/homework": (d) => feature(d, "homework"),
  "/news": (d) => feature(d, "news"),
  "/download": download,
  "/association": association,
  "/story": story,
  "/blog": blog,
  "/links": links,
};

function postImages(tag: string) {
  const sources = [...tag.matchAll(/src[:=]\s*"([^"]*)"/g)];
  const alts = [...tag.matchAll(/alt[:=]\s*"([^"]*)"/g)];
  return sources.map(([, src], index) => `![${alts[index]?.[1] ?? ""}](${src})`).join("\n\n");
}

function mdxToMarkdown(source: string) {
  return source
    .replace(/^---\n[\s\S]*?\n---\n/, "")
    .split(/(^```[\s\S]*?^```)/m)
    .map((part, index) =>
      index % 2
        ? part
        : part
            .replace(/<(?:PhoneShot|Photos)\b[\s\S]*?\/>/g, postImages)
            .replace(/<Credits\b[\s\S]*?\/>/g, "")
            .replace(/<(Highlight|Label)\b[^>]*>([\s\S]*?)<\/\1>/g, "$2")
            .replaceAll("](/", `](${siteUrl}/`)
            .replace(/\n{3,}/g, "\n\n"),
    )
    .join("")
    .trim();
}

async function post(d: Dictionary, locale: Locale, slug: string) {
  const post = await getPost(slug, locale);
  if (!post) return;

  const file = path.join(postDir, post.lang === postLocale ? "" : post.lang, post.file);
  const author = post.author === teamAuthor ? d.blog.team : post.author;
  const meta = [formatPostDate(post.date, locale), author, d.blog.categories[post.category]];
  if (post.lang !== postLocale) meta.push(d.blog.translatedByAi);

  return join(
    heading(1, post.title),
    post.description && `> ${post.description}`,
    meta.join(" · "),
    post.summary && join(heading(2, d.blog.summary), post.summary),
    mdxToMarkdown(await readFile(file, "utf8")),
  );
}

export async function getMarkdownPaths() {
  return (
    await Promise.all(
      locales.map(async (locale) => [
        ...Object.keys(pages).map((path) => markdownPath(locale, path)),
        ...(await getPosts(locale)).map(({ slug }) => markdownPath(locale, `/blog/${slug}`)),
      ]),
    )
  ).flat();
}

export async function getMarkdown(url: Promise<string>) {
  "use cache";

  const match = (await url).match(/^\/?([^/]+)(\/.*)?\.md$/);
  const locale = match?.[1];
  if (!hasLocale(locale)) return;

  const route = match?.[2] === "/index" ? "" : (match?.[2] ?? "");
  const d = dictionaries[locale];
  const slug = route.match(/^\/blog\/([^/]+)$/)?.[1];
  if (slug) return post(d, locale, slug);

  return pages[route] && (await pages[route](d, locale)).body;
}

export async function getLlmsTxt() {
  "use cache";

  const sections = await Promise.all(
    locales.map(async (locale) => {
      const d = dictionaries[locale];
      const entries = await Promise.all(
        Object.entries(pages).map(async ([route, page]) => {
          const { title, description } = await page(d, locale);
          return `${link(title, markdownUrl(locale, route))}: ${description}`;
        }),
      );
      const posts = (await getPosts(locale)).map(
        (post) => `${link(post.title, markdownUrl(locale, `/blog/${post.slug}`))}: ${post.description ?? ""}`,
      );

      return join(
        heading(2, localeNames[locale]),
        list(entries),
        heading(2, `${localeNames[locale]} · ${d.blog.title}`),
        list(posts),
      );
    }),
  );

  return `${join(heading(1, fr.linksPage.title), `> ${fr.metadata.description}`, fr.home.features.description, ...sections)}\n`;
}
