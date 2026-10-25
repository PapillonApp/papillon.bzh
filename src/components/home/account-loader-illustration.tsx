import { Spinner } from "@/components/ui/spinner";

type AccountLoaderIllustrationProps = {
  title: string;
  description: string;
};

export function AccountLoaderIllustration({ title, description }: AccountLoaderIllustrationProps) {
  return (
    <>
      <div className="absolute inset-0 bg-linear-to-b from-swatch-pink/25 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-8 text-center">
        <Spinner className="mb-5 size-16 text-swatch-pink" />
        <p className="text-2xl font-bold tracking-tight">{title}</p>
        <p className="max-w-xs text-md/normal font-medium text-foreground/60">{description}</p>
      </div>
    </>
  );
}
