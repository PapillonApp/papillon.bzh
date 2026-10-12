"use client";

import { Check, Paper } from "@getpapillon/papicons";
import { type ComponentProps, useEffect, useRef, useState } from "react";

export type CodeBlockLabels = { copyCode: string; copied: string };

type CodeBlockProps = ComponentProps<"pre"> & { labels: CodeBlockLabels };

const copiedDuration = 1500;

export function CodeBlock({ labels, ...props }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), copiedDuration);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    await navigator.clipboard.writeText(preRef.current?.textContent ?? "");
    setCopied(true);
  };

  return (
    <div className="relative">
      <pre
        ref={preRef}
        {...props}
        className="overflow-x-auto py-4 font-mono text-sm/relaxed [&_[data-highlighted-line]]:border-l-2 [&_[data-highlighted-line]]:border-primary [&_[data-highlighted-line]]:bg-white/8 [&_[data-highlighted-line]]:pl-4.5 [&_[data-line]]:pr-14 [&_[data-line]]:pl-5 [&>code]:grid"
      />
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? labels.copied : labels.copyCode}
        className="absolute top-2.5 right-2.5 flex size-8 items-center justify-center rounded-lg bg-code text-white/50 transition hover:bg-white/10 hover:text-white active:scale-95"
      >
        {copied ? <Check aria-hidden className="size-4" /> : <Paper aria-hidden className="size-4" />}
      </button>
    </div>
  );
}
