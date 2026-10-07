import { PapillonApp } from "@getpapillon/papicons";

const modules =
  "M0 0.5h7m3 0h1m5 0h5m2 0h2m1 0h7M0 1.5h1m5 0h1m2 0h1m1 0h1m1 0h1m1 0h2m1 0h3m2 0h1m2 0h1m5 0h1M0 2.5h1m1 0h3m1 0h1m2 0h1m3 0h1m1 0h1m3 0h1m3 0h1m2 0h1m1 0h3m1 0h1M0 3.5h1m1 0h3m1 0h1m2 0h1m2 0h1m1 0h3m2 0h1m2 0h3m1 0h1m1 0h3m1 0h1M0 4.5h1m1 0h3m1 0h1m1 0h5m2 0h4m1 0h2m1 0h1m2 0h1m1 0h3m1 0h1M0 5.5h1m5 0h1m2 0h1m3 0h1m1 0h2m3 0h2m4 0h1m5 0h1M0 6.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M8 7.5h1m4 0h4m1 0h2m2 0h3M2 8.5h2m2 0h8m1 0h1m3 0h3m3 0h2m1 0h1M0 9.5h1m3 0h1m2 0h2m3 0h2m3 0h4m2 0h4m2 0h1m2 0h1M2 10.5h1m2 0h3m1 0h1m1 0h2m1 0h2m1 0h1m2 0h4m2 0h1m3 0h3M0 11.5h1m1 0h1m1 0h1m2 0h1m1 0h3m1 0h2m1 0h1m1 0h1m1 0h3m2 0h1m1 0h3m2 0h1M3 12.5h1m1 0h2m1 0h1m1 0h1m1 0h1m6 0h1m1 0h5m1 0h2m2 0h1M1 13.5h1m1 0h1m5 0h1m1 0h2m1 0h2m2 0h1m1 0h2m2 0h1m2 0h1M2 14.5h3m1 0h2m1 0h2m1 0h3m3 0h2m1 0h1m3 0h1m2 0h3M1 15.5h1m1 0h2m2 0h1m2 0h5m3 0h2m1 0h2m1 0h1m1 0h1m1 0h3M0 16.5h1m1 0h5m1 0h2m1 0h2m2 0h1m1 0h2m2 0h1m1 0h4m1 0h3m1 0h1M5 17.5h1m2 0h2m1 0h2m3 0h1m1 0h2m1 0h3m2 0h3m1 0h1m1 0h1M2 18.5h3m1 0h2m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h2m2 0h4m1 0h2M0 19.5h2m5 0h1m3 0h1m1 0h3m2 0h3m4 0h1m1 0h2m2 0h1M0 20.5h3m1 0h7m2 0h1m1 0h1m3 0h3m5 0h1m1 0h2m1 0h1M0 21.5h6m3 0h1m1 0h3m1 0h3m3 0h1m1 0h1m2 0h1m2 0h1m2 0h1M2 22.5h1m1 0h1m1 0h1m3 0h2m5 0h3m2 0h3m1 0h1m1 0h1m1 0h3M1 23.5h5m1 0h2m1 0h1m1 0h1m2 0h3m4 0h1m2 0h1m1 0h1m3 0h1M0 24.5h1m1 0h2m1 0h2m4 0h3m1 0h1m1 0h4m1 0h1m1 0h5m2 0h2M8 25.5h1m3 0h1m1 0h1m4 0h2m2 0h2m3 0h1m1 0h1M0 26.5h7m1 0h4m1 0h3m1 0h2m3 0h3m1 0h1m1 0h1m1 0h1M0 27.5h1m5 0h1m2 0h2m3 0h2m1 0h3m1 0h4m3 0h1m1 0h3M0 28.5h1m1 0h3m1 0h1m3 0h1m4 0h2m1 0h3m2 0h9M0 29.5h1m1 0h3m1 0h1m1 0h3m2 0h2m1 0h2m6 0h1m2 0h1m1 0h4M0 30.5h1m1 0h3m1 0h1m1 0h3m1 0h3m4 0h4m2 0h2M0 31.5h1m5 0h1m2 0h1m1 0h1m2 0h1m3 0h1m3 0h1m1 0h1m1 0h1m5 0h1M0 32.5h7m5 0h1m4 0h3m2 0h2m3 0h2m1 0h1";

export function QrCode({ label, className }: { label: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg role="img" aria-label={label} viewBox="0 0 33 33" shapeRendering="crispEdges" className="size-full">
        <path stroke="currentColor" d={modules} />
      </svg>
      <span className="absolute inset-0 m-auto flex size-1/4 items-center justify-center rounded-lg bg-white text-primary">
        <PapillonApp aria-hidden className="size-4/5" />
      </span>
    </div>
  );
}
