import Image from "next/image";

type PhoneShotProps = {
  src: string;
  alt: string;
  caption?: string;
  show?: "top" | "bottom";
};

export function PhoneShot({ src, alt, caption, show = "top" }: PhoneShotProps) {
  const bottom = show === "bottom";
  return (
    <figure className="mt-8">
      <div className={`overflow-hidden rounded-2xl bg-surface px-6 ${bottom ? "pb-10" : "pt-10"}`}>
        <div
          className={`mx-auto flex aspect-2/3 w-1/2 flex-col overflow-hidden shadow-xl ring-1 ring-foreground/10 ${bottom ? "justify-end rounded-b-4xl" : "rounded-t-4xl"}`}
        >
          <Image src={src} alt={alt} width={990} height={2032} sizes="336px" className="w-full shrink-0" />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-foreground/60">{caption}</figcaption>
      )}
    </figure>
  );
}
