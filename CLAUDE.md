@AGENTS.md

# papillon.bzh

Site vitrine de Papillon. Next.js 16 (App Router, Cache Components, typed routes), Tailwind CSS 4, Motion, bun.

## Structure

- `src/app/[lang]/` : uniquement les pages et layouts (routing). Une nouvelle page = `src/app/[lang]/<route>/page.tsx`.
- `src/components/layout/` : éléments communs à toutes les pages (header, menus).
- `src/components/<page>/` : sections propres à une page (ex. `home/hero.tsx`).
- `src/components/ui/` : composants réutilisables (boutons, chevron, `Dropdown` pour tous les menus déroulants).
- `src/i18n/` : config des langues, dictionnaires, `getDictionary()` / `getLocale()` côté serveur.
- `src/assets/` : images et SVG importés statiquement.

## Tailles et valeurs : pas de valeurs en dur

- N'utilise pas de valeurs arbitraires Tailwind en pixels, em ou rem (`text-[15px]`, `w-[652px]`, `rounded-[30px]`, `top-[-473px]`...).
- Utilise l'échelle Tailwind : spacing numérique (`w-163`, `-top-118`, `size-17`), tailles nommées (`text-sm`, `max-w-7xl`, `rounded-full`), fractions (`w-11/12`, `translate-x-1/7`).
- Arrondis les valeurs Figma à l'étape d'échelle la plus proche et regroupe les tailles voisines sur une même valeur. Quelques pixels d'écart avec le Figma sont acceptables, la cohérence prime.
- Si une taille revient et n'existe pas dans l'échelle, personnalise le token dans `@theme` (`src/app/globals.css`) au lieu d'écrire une valeur arbitraire.
- Tokens actuels : couleurs `primary` (#29947a), `primary-dark`, `background`, `foreground`, `surface` (fond des cartes) ; `text-md` = 16px (items de nav, boutons), `text-lg` = 17px (paragraphes), `text-5xl` = 52px (titre hero) ; graisses `font-book` / `normal` / `medium` / `semibold` calées sur les styles Figma de SN Pro.
- Évite `filter: blur()` sur de très grands éléments (halos) : certains navigateurs l'abandonnent et affichent un bloc plein. Utilise des dégradés `bg-radial`.
- Les icônes Papicons se dimensionnent en classe (`className="size-5"`), pas avec la prop `size`.

## Thème

- Site en thème clair (`bg-background`, `text-foreground`). Ne jamais écrire une couleur en hex dans un composant : passer par les tokens de `@theme`.
- Un hero sombre en tête de page porte `data-dark-hero` : la page démarre en noir et son fond (`bg-page`) passe au blanc sur les premiers pixels de scroll. Seul le texte du hero suit cette transition (`text-page-foreground`) ; le reste de la page garde `text-foreground`.
- La navbar est transparente et blanche tant qu'on est en haut d'une page à hero sombre, puis bascule en clair (switch, pas de transition liée au scroll) après quelques pixels de scroll (`data-light` sur le `<header>`, styles via `group-data-light/header:`).
- Section sombre au milieu de la page : l'envelopper dans `<div data-dark-section className="theme-dark bg-background">`. `theme-dark` inverse localement les tokens (`background`, `foreground`, `surface`) ; utiliser `foreground/xx` plutôt que `black/xx` ou `white/xx` pour que tout suive. La navbar passe automatiquement en sombre (fond conservé) au-dessus d'une `data-dark-section`.
- Pour que les éléments de la navbar s'adaptent aux deux états, préférer `currentColor` (`hover:bg-current/10`, `text-current/30`).
- Survol des items de navigation et de menus : envelopper la liste dans `HoverGroup` (`src/components/ui/hover-highlight.tsx`, avec `highlightClassName`) et marquer chaque item avec `data-hover-item`. Une seule surbrillance Motion par groupe glisse d'un item à l'autre (souris uniquement).
- Tous les éléments cliquables ont `cursor: pointer` (règle globale pour les `button` dans `globals.css`).

## Serveur de dev

- Ne jamais arrêter le serveur de dev de l'utilisateur : pas de `pkill`/`kill` sur `next`, `next-server` ou `bun`, pas de `preview_stop` sur un serveur qu'on n'a pas lancé soi-même.
- Pour une vérification, lancer son propre serveur sur un autre port et n'arrêter que celui-là, par son PID.

## Conventions

- Icônes : uniquement `@getpapillon/papicons`, jamais Lucide ou autre.
- Animations : Motion (`motion/react`), pas de keyframes CSS. Easing commun `easeOutPapillon` (`src/lib/motion.ts`). Respecter `useReducedMotion`.
- i18n : aucun texte en dur dans les composants. Tout passe par `src/i18n/dictionaries/` (`fr.ts` est la référence typée, `en.ts` doit la satisfaire). Les composants serveur appellent `getDictionary()`, les composants client reçoivent leurs textes en props.
- Liens internes : toujours préfixés par la langue (`/${locale}/...`).
- Pas de commentaires sauf nécessité réelle. Code lisible et découpé en composants.
