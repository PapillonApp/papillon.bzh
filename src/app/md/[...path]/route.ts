import { getMarkdown, getMarkdownPaths } from "@/lib/markdown";

export async function generateStaticParams() {
  return (await getMarkdownPaths()).map((url) => ({ path: url.slice(1).split("/") }));
}

export async function GET(_request: Request, { params }: RouteContext<"/md/[...path]">) {
  const markdown = await getMarkdown(params.then(({ path }) => path.join("/")));
  if (markdown === undefined) return new Response(null, { status: 404 });

  return new Response(markdown, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
