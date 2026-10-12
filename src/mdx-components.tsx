import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { Callout } from "@/components/blog/callout";
import { Credits } from "@/components/blog/credits";
import { externalProps } from "@/lib/links";

const components = {
  h2: (props) => (
    <h2 className="mt-14 text-2xl font-semibold tracking-tight text-balance" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-10 text-xl font-semibold tracking-tight text-balance" {...props} />
  ),
  p: (props) => <p className="mt-5 text-lg/relaxed text-pretty text-foreground/75" {...props} />,
  a: ({ href = "", ...props }) => (
    <a
      href={href}
      {...(href.startsWith("http") ? externalProps : {})}
      className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
  ul: (props) => (
    <ul
      className="mt-5 list-disc pl-6 text-lg/relaxed text-foreground/75 marker:text-foreground/30 [&>li+li]:mt-2"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-5 list-decimal pl-6 text-lg/relaxed text-foreground/75 marker:text-foreground/40 [&>li+li]:mt-2"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1 [&>p]:mt-0" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-8 border-l-2 border-primary pl-5 [&>:first-child]:mt-0 [&_p]:text-xl/snug [&_p]:text-foreground"
      {...props}
    />
  ),
  hr: () => <hr className="my-14 border-foreground/10" />,
  code: (props) => <code className="rounded-md bg-surface px-1.5 py-0.5 font-mono text-md" {...props} />,
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-2xl bg-surface p-5 text-sm/relaxed [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-sm"
      {...props}
    />
  ),
  img: ({ src, alt = "" }) => (
    <Image
      src={src as string}
      alt={alt}
      width={1600}
      height={900}
      sizes="(min-width: 768px) 672px, 100vw"
      className="mt-8 block h-auto w-full rounded-2xl bg-surface"
    />
  ),
  table: (props) => (
    <div className="mt-8 overflow-x-auto">
      <table
        className="w-full text-left text-md [&_td]:border-b [&_td]:border-foreground/10 [&_td]:py-3 [&_td]:pr-4 [&_td]:text-foreground/75 [&_th]:border-b [&_th]:border-foreground/20 [&_th]:py-3 [&_th]:pr-4 [&_th]:font-semibold"
        {...props}
      />
    </div>
  ),
  Callout,
  Credits,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
