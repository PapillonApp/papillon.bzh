import Image from "next/image";
import { withBasePath } from "@/lib/base-path";

type Photo = { src: string; alt: string };

export function Photos({ images }: { images: Photo[] }) {
  const pair = images.length > 1;
  return (
    <div className={`mt-8 grid gap-3 ${pair ? "grid-cols-2" : ""}`}>
      {images.map((image) => (
        <div
          key={image.src}
          className={`relative overflow-hidden rounded-2xl bg-surface ${pair ? "aspect-3/4" : "aspect-4/3"}`}
        >
          <Image
            src={withBasePath(image.src)}
            alt={image.alt}
            fill
            sizes={pair ? "(min-width: 768px) 336px, 50vw" : "(min-width: 768px) 672px, 100vw"}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
