// Génère dans `out/` les variantes `<image>.w<largeur>q<qualité>.webp` que demande `src/lib/image-loader.ts`.
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import sharp from "sharp";
import nextConfig from "../next.config";

const outDir = process.argv[2] ?? "out";
const { deviceSizes = imageConfigDefault.deviceSizes, imageSizes = imageConfigDefault.imageSizes } =
  nextConfig.images ?? {};
const widths = [...new Set([...deviceSizes, ...imageSizes])];
const qualities = nextConfig.images?.qualities ?? [75];

const files = (await readdir(outDir, { recursive: true }))
  .filter((file) => /\.(jpe?g|png|webp)$/i.test(file) && !/\.w\d+q\d+\.webp$/.test(file))
  .map((file) => join(outDir, file));

for (const file of files) {
  const base = file.replace(/\.\w+$/, "");
  await Promise.all(
    widths.flatMap((width) =>
      qualities.map((quality) =>
        sharp(file)
          .resize({ width, withoutEnlargement: true })
          .webp({ quality })
          .toFile(`${base}.w${width}q${quality}.webp`),
      ),
    ),
  );
}

console.log(`${files.length} images × ${widths.length * qualities.length} variantes`);
