import Image, { type StaticImageData } from "next/image";

type ScreenProps = {
  image: StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function Screen({ image, alt, className = "w-64 lg:w-80", priority }: ScreenProps) {
  return (
    <Image
      src={image}
      alt={alt}
      sizes="(min-width: 1024px) 320px, 256px"
      preload={priority}
      className={`h-auto drop-shadow-xl/15 ${className}`}
    />
  );
}
