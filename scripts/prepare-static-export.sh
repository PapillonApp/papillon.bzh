#!/usr/bin/env bash
# Adapte le projet à `output: "export"` (GitHub Pages) : à lancer en CI uniquement, sur une copie jetable.
set -euo pipefail

rm -rf src/proxy.ts src/app/robots.ts src/app/sitemap.ts "src/app/[lang]/[...rest]"

grep -rlE '"use cache";|cacheLife\(' src | xargs sed -i -E '/^\s*"use cache";$/d; /^\s*cacheLife\(.*\);$/d; /^import \{ cacheLife \} from "next\/cache";$/d'

# Les route handlers doivent être forcés en statique pour l’export.
for route in $(find src/app \( -name route.ts -o -name manifest.ts \)); do echo 'export const dynamic = "force-static";' >> "$route"; done
