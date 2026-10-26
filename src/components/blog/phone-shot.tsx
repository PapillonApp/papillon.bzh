import Image from "next/image";
import { withBasePath } from "@/lib/base-path";

type PhoneShotProps = {
  src: string;
  alt: string;
  caption?: string;
  show?: "top" | "bottom";
  device?: "iphone" | "duo";
};

const corners = {
  iphone: { top: "rounded-t-2xl sm:rounded-t-4xl", bottom: "rounded-b-2xl sm:rounded-b-4xl" },
  duo: {
    top: "rounded-tl-lg rounded-tr-2xl sm:rounded-tr-4xl",
    bottom: "rounded-bl-lg rounded-br-2xl sm:rounded-br-4xl",
  },
};

export function PhoneShot({ src, alt, caption, show = "top", device = "iphone" }: PhoneShotProps) {
  const bottom = show === "bottom";
  return (
    <figure className="mt-8">
      <div className={`overflow-hidden rounded-2xl bg-surface px-6 ${bottom ? "pb-10" : "pt-10"}`}>
        <div
          className={`mx-auto flex aspect-2/3 w-1/2 flex-col overflow-hidden shadow-xl ring-1 ring-foreground/10 ${bottom ? `justify-end ${corners[device].bottom}` : corners[device].top}`}
        >
          <Image src={withBasePath(src)} alt={alt} width={990} height={2032} sizes="336px" className="w-full shrink-0" />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-foreground/60">{caption}</figcaption>
      )}
    </figure>
  );
}
