import Image, { type StaticImageData } from "next/image";

type PlaceholderShotProps = {
  image: StaticImageData;
  prefix: string;
  label: string;
  className?: string;
  sizes?: string;
};

export function PlaceholderShot({ image, prefix, label, className = "", sizes = "(min-width: 1024px) 360px, 70vw" }: PlaceholderShotProps) {
  return (
    <figure className={`relative isolate ${className}`}>
      <Image src={image} alt="" sizes={sizes} className="h-auto w-full brightness-30 grayscale" />
      <figcaption className="absolute inset-x-3 top-1/2 -translate-y-1/2 rounded-xl border border-dashed border-white/40 bg-black/80 px-3 py-2.5 text-center text-sm/snug text-white">
        <span className="block font-semibold">{prefix}</span>
        <span className="text-white/80">{label}</span>
      </figcaption>
    </figure>
  );
}
