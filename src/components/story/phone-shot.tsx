import Image, { type StaticImageData } from "next/image";

export type Shot = { image: StaticImageData; framed?: boolean };

type PhoneShotProps = {
  shot: Shot;
  alt: string;
  className?: string;
};

export function PhoneShot({ shot, alt, className = "" }: PhoneShotProps) {
  if (shot.framed) {
    return <Image src={shot.image} alt={alt} sizes="(min-width: 1024px) 288px, 60vw" className={`h-auto ${className}`} />;
  }
  return (
    <div className={`overflow-hidden rounded-3xl shadow-xl outline-1 -outline-offset-1 outline-foreground/10 ${className}`}>
      <Image src={shot.image} alt={alt} sizes="(min-width: 1024px) 288px, 60vw" className="h-auto w-full" />
    </div>
  );
}
