# Design — OG images per comparison + per-page JSON-LD

**Date:** 2026-06-21
**Statut:** Validé (design), spec en revue
**Branche:** `feat/og-images-jsonld`
**Findings adressés:** F27 (JSON-LD générique périmé) + l'item "images OG par comparaison" de la roadmap SEO-croissance (Vague 3 de [AUDIT.md](../../../AUDIT.md)). Construit sur la base SSG livrée (SvelteKit + adapter-static + 153 pages `/compare/<a>-vs-<b>/`).

## 1. Contexte & objectif

Le site est désormais prérendu (SvelteKit + adapter-static). Chaque page `/compare/<a>-vs-<b>/` a un `<title>`/description/canonical propres mais partage l'image sociale globale `banner2.png` et n'a pas de données structurées spécifiques ; le seul JSON-LD est un `WebApplication` global figé dans le layout, avec des **dates 2024 en dur** et un `ItemList` de 4 frameworks (F27).

**Objectif :** (1) générer une **image Open Graph par comparaison** (carte 1200×630) au build, et (2) émettre un **JSON-LD adapté au type de page** (WebApplication sur la home, TechArticle sur chaque page compare) avec des dates non périmées. But : meilleur CTR au partage + données structurées correctes.

**Non-objectifs :** image OG pour la home (garde `banner2.png`), couleurs/branding par framework (carte sombre uniforme), pages long-tail par snippet, JSON-LD pour d'autres types.

## 2. Décisions actées (Q&A de cadrage)

| Décision                   | Choix                                                                                                                                     |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Layout carte OG            | Logos des 2 frameworks de part et d'autre d'un « vs », titres dessous, branding `🎉 Component Party` en bas. Fond `#111827`, texte blanc. |
| Génération                 | `satori` (→ SVG) + `@resvg/resvg-js` (→ PNG), via un endpoint SvelteKit prérendu.                                                         |
| Police satori              | **Mona Sans TTF** (Regular + Bold), commitée sous `build/og/fonts/` (build-only). Fallback Inter.                                         |
| JSON-LD                    | `WebApplication` (home) + `TechArticle` (compare), sortis du layout global.                                                               |
| ItemList du WebApplication | **Retirée** (périmée, maintenance nulle).                                                                                                 |
| Dates JSON-LD              | `dateModified` = date de build ; `datePublished` = constante `SITE_PUBLISHED_DATE`.                                                       |
| Portée                     | 153 paires canoniques (= scope prerender).                                                                                                |

## 3. Architecture cible

### 3.1 Dépendances

- Ajout dev : `satori`, `@resvg/resvg-js`. `@resvg/resvg-js` est un binaire natif (prébuilds) → l'ajouter à `pnpm.onlyBuiltDependencies` si l'install l'exige.
- Asset build-only : `build/og/fonts/Mona-Sans-Regular.ttf` et `build/og/fonts/Mona-Sans-Bold.ttf` (OFL, depuis le repo officiel `github/mona-sans`), commitées dans le repo (pas de fetch réseau au build).

### 3.2 Génération de la carte OG

- **Module** `build/og/renderOgImage.ts` :
  - `renderComparisonOgPng(opts: { titleA: string; titleB: string; logoA: string; logoB: string }): Promise<Uint8Array>`
  - `logoA`/`logoB` = chemins des SVG (`static/framework/<x>.svg`) ; le module les lit, les encode en `data:image/svg+xml;base64,…` et les place via des nœuds `img` satori.
  - Construit l'arbre d'éléments satori en **objets natifs** (`{ type, props: { style, children } }`) — pas de dépendance JSX/satori-html.
  - Charge les 2 TTF une seule fois (cache module-level), les passe à `satori({ fonts: [...] })`.
  - satori → SVG string → `new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } })` → `.render().asPng()` → `Uint8Array`.
  - Dimensions 1200×630.
- **Layout de la carte** (objets satori) : conteneur flex column, fond `#111827`, padding ; rangée centrale flex row `[logo A] vs [logo B]` (logos ~180px, « vs » gris `#6b7280`) ; rangée titres `React` / `Vue 3` (Bold, ~64px, blanc) alignés sous chaque logo ; pied `🎉 Component Party` (gris clair, ~32px). (L'emoji 🎉 peut nécessiter un fallback : si satori ne rend pas l'emoji sans police emoji, utiliser le logo `popper.svg` inliné à la place du caractère — l'implémenteur choisit selon le rendu.)

### 3.3 Endpoint OG prérendu

- **Route** `src/routes/og/[comparison].png/+server.ts` :
  - `export const prerender = true`
  - `export const entries = () => canonicalPairs().map(([a, b]) => ({ comparison: \`${a}-vs-${b}\` }))`
  - `GET({ params })` : `parseComparison(params.comparison)` → 404 si invalide ; sinon résout les 2 frameworks (`matchFrameworkId`), lit leurs `img`, appelle `renderComparisonOgPng`, renvoie `new Response(png, { headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=604800' } })`.
  - Sortie prerender : `dist/og/react-vs-vue3.png`.
  - Si le pattern de route `[comparison].png` ne matche pas en SvelteKit, fallback : `src/routes/og/[comparison]/image.png/+server.ts` (URL `/og/<x>/image.png`) — l'implémenteur valide le routing tôt.

### 3.4 Câblage OG dans la page compare

- `src/routes/compare/[comparison]/+page.svelte` `<svelte:head>` ajoute :
  - `<meta property="og:image" content={\`${BASE_URL}/og/${a}-vs-${b}.png\`} />`
  - `<meta property="twitter:image" content={...même URL...} />`
  - (width/height/twitter:card sont déjà globaux dans `app.html` ; on ne surcharge que l'URL d'image.)

### 3.5 JSON-LD par page

- **`src/lib/seo.ts`** devient une fabrique :
  - `export const SITE_PUBLISHED_DATE = "2024-01-01"` (date de création fixe).
  - `export function webApplicationJsonLd(buildDate: string)` → l'objet WebApplication actuel **sans** `mainEntity`/`ItemList`, avec `datePublished: SITE_PUBLISHED_DATE`, `dateModified: buildDate`.
  - `export function techArticleJsonLd(opts: { titleA; titleB; description; url; image; buildDate }) ` → `{ "@context":"https://schema.org", "@type":"TechArticle", headline: "<A> vs <B> - side-by-side code comparison", description, url, image, datePublished: SITE_PUBLISHED_DATE, dateModified: buildDate, inLanguage:"en-US", author/publisher: Component Party (Organization, logo popper.svg), about: [ {"@type":"SoftwareApplication", name: titleA}, {"@type":"SoftwareApplication", name: titleB} ] }`.
  - `buildDate` : injecté au build via une constante générée. Source : `new Date().toISOString().slice(0,10)` n'est pas autorisé dans certains contextes ; utiliser `import.meta.env` ou une valeur passée par `load()`. **Décision** : exposer la date de build via une variable d'environnement Vite `import.meta.env.VITE_BUILD_DATE` définie dans `vite.config.ts` (`define` ou `process.env`), avec fallback `SITE_PUBLISHED_DATE` si absente. Les `load()`/composants lisent cette valeur.
- **`+layout.svelte`** : retirer le bloc `{@html WEBAPP_JSONLD}` global.
- **Home `+page.svelte`** : injecter `webApplicationJsonLd(buildDate)` via `{@html}` (échappé `<\/script>`).
- **Compare `+page.svelte`** : injecter `techArticleJsonLd({...})` via `{@html}` (échappé), avec `image` = l'URL OG de la paire.

### 3.6 Date de build

- Dans `vite.config.ts`, ajouter `define: { "import.meta.env.VITE_BUILD_DATE": JSON.stringify(<date>) }`. La date provient de `process.env.BUILD_DATE` si fournie, sinon calculée à la config-load (autorisé dans vite.config Node context). Helper `src/lib/buildDate.ts` : `export const BUILD_DATE = import.meta.env.VITE_BUILD_DATE ?? SITE_PUBLISHED_DATE`.

## 4. Tests

- **Endpoint OG (après build)** : `dist/og/react-vs-vue3.png` existe, commence par la signature PNG (`0x89 P N G`), taille > 1 Ko. (Vitest lisant `dist/`.)
- **Câblage OG** : `dist/compare/react-vs-vue3/index.html` contient `og:image` = `https://component-party.dev/og/react-vs-vue3.png` et `twitter:image` idem.
- **JSON-LD compare** : `dist/compare/react-vs-vue3/index.html` contient `"@type":"TechArticle"` et `"dateModified"`, et **ne contient pas** `2024-12-01` (l'ancienne date périmée) ; contient les 2 noms de frameworks dans `about`.
- **JSON-LD home** : `dist/index.html` contient `"@type":"WebApplication"` et **pas** d'`ItemList`.
- **Unit** : `renderComparisonOgPng` retourne un buffer commençant par la signature PNG (test ciblé, 1 paire).
- Tous via `pnpm run test:unit` (le glob `test/**` est déjà inclus). e2e inchangés.

## 5. Risques & mitigations

- **(a) Police TTF** : satori échoue sans TTF valide. Mitigation : commiter Mona Sans TTF (Regular+Bold) ; valider tôt qu'un PNG se génère pour 1 paire avant de câbler les 153.
- **(b) `@resvg/resvg-js` natif** : install peut nécessiter `onlyBuiltDependencies` / réseau. Mitigation : ajouter à la liste ; si l'environnement bloque l'install, reporter BLOCKED (pas de contournement).
- **(c) Logos SVG dans satori** : support SVG via `<img>` data-URI peut varier. Mitigation : valider le rendu d'un logo tôt ; si un SVG ne rend pas, fallback = pastille colorée + initiale, ou rasteriser le SVG en amont.
- **(d) Temps de build** : +10-25s pour 153 PNG. Acceptable ; `log` du compte. La police chargée une fois.
- **(e) Emoji 🎉 dans satori** : peut ne pas rendre sans police emoji. Mitigation : utiliser `popper.svg` inliné au lieu du caractère.
- **(f) Route `[comparison].png`** : valider le matching SvelteKit tôt ; fallback `/og/[comparison]/image.png`.

## 6. Critères de réussite

1. `pnpm run build` produit 153 `dist/og/<a>-vs-b.png` valides (signature PNG).
2. Chaque page compare référence sa propre image OG (og:image + twitter:image) et un `TechArticle` JSON-LD daté du build.
3. La home porte un `WebApplication` sans ItemList, daté du build ; plus aucune date `2024-12-01` périmée nulle part.
4. `svelte-check` 0 erreur ; `test:unit` (incl. nouveaux tests OG/JSON-LD) vert ; build OK.
5. Aucune régression : pages compare/home rendent toujours le code (shiki), canonical/meta intacts.
