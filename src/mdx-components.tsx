import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import type { ReactNode } from "react";
import { Callout } from "@/components/blog/callout";
import { Credits } from "@/components/blog/credits";
import { Label } from "@/components/blog/label";
import { PhoneShot } from "@/components/blog/phone-shot";
import { Photos } from "@/components/blog/photos";
import { withBasePath } from "@/lib/base-path";
import { externalProps } from "@/lib/links";

function Highlight({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded-md bg-primary/12 box-decoration-clone px-1.5 py-0.5 font-medium text-primary-dark">
      {children}
    </mark>
  );
}

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
      href={href.startsWith("/") ? withBasePath(href) : href}
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
      className="mt-5 list-decimal pl-6 text-lg/relaxed text-foreground/75 marker:text-foreground/60 [&>li+li]:mt-2"
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
  code: (props) =>
    "data-language" in props ? (
      <code {...props} />
    ) : (
      <code className="rounded-md bg-surface px-1.5 py-0.5 font-mono text-md" {...props} />
    ),
  figure: (props) =>
    "data-rehype-pretty-code-figure" in props ? (
      <figure className="mt-6 overflow-hidden rounded-2xl bg-code text-white" {...props} />
    ) : (
      <figure {...props} />
    ),
  figcaption: (props) =>
    "data-rehype-pretty-code-title" in props ? (
      <figcaption
        className="border-b border-white/10 px-5 py-3 font-mono text-sm text-white/60"
        {...props}
      />
    ) : (
      <figcaption {...props} />
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
  PhoneShot,
  Photos,
  Highlight,
  Label,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
