"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

type AvatarProps = {
  src: string | StaticImageData;
  className?: string;
};

export function Avatar({ src, className = "" }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const style = `rounded-full bg-foreground/10 ${className}`;

  if (failed) return <span aria-hidden className={`block ${style}`} />;

  return (
    <Image
      ref={(image) => {
        if (image?.complete && image.naturalWidth === 0) setFailed(true);
      }}
      src={src}
      alt=""
      width={48}
      height={48}
      unoptimized={typeof src === "string"}
      onError={() => setFailed(true)}
      className={`object-cover ${style}`}
    />
  );
}
