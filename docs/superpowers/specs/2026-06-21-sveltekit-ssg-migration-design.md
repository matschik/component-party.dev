# Design — Migration SvelteKit + SSG (prerender)

**Date:** 2026-06-21
**Statut:** Validé (design), spec en revue
**Branche:** `feat/sveltekit-ssg-migration`
**Finding adressé:** C1 (corpus invisible dans le HTML statique) — débloque E1/E2/E3/F27/F28/F29 et F24 (sv-router).

## 1. Contexte & objectif

`component-party.dev` est aujourd'hui une SPA Svelte 5 100 % client (`mount()` dans `src/main.ts`, `sv-router` avec une route `/`). Le HTML servi ne contient qu'un `<div id="app">` vide : aucun des 587 snippets, aucun titre de section, aucune comparaison « X vs Y » n'est dans le document. Or la valeur SEO du site **est** ce corpus comparé.

**Objectif :** migrer vers **SvelteKit + prerender (SSG)** pour que le contenu soit présent dans le HTML statique, **à iso-fonctionnalité** (aucune nouvelle feature produit). Le SEO se débloque mécaniquement par le prerender.

**Non-objectifs (hors périmètre de cette migration) :** vue diff, recherche Aside, thème clair/sombre, images OG générées, JSON-LD, pages long-tail par snippet. Ces features viendront après, sur la base SSG.

## 2. Décisions actées (Q&A de cadrage)

| Décision         | Choix                                                                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Toolchain        | **On garde Vite+.** SvelteKit tourne sur Vite+ (confirmé : doc VoidZero + projet de référence `codenames`).                                         |
| Modèle d'URL     | Paires `/compare/a-vs-b` prérendues ; sélections 3+ frameworks restent côté client via `?f=` sur `/`.                                               |
| Périmètre        | Migration à **iso-fonctionnalité**.                                                                                                                 |
| Adapter          | **`@sveltejs/adapter-static`**, prerender global. Sortie 100 % statique, déployable tel quel sur Cloudflare Pages.                                  |
| Paires ordonnées | **153 paires non-ordonnées prérendues + canonical** ; `_redirects` mappe l'inverse (`vue3-vs-react` → `react-vs-vue3`). Évite le duplicate content. |

## 3. Architecture cible

### 3.1 Build & config

- **Dépendances ajoutées :** `@sveltejs/kit@^2`, `@sveltejs/adapter-static`, (déjà présents : `@sveltejs/vite-plugin-svelte`, `svelte`, `svelte-check`, `tailwindcss`, `vite-plus`).
- **`vite.config.ts`** : `defineConfig` de `vite-plus` ; `plugins: [pluginGenerateFrameworkContent(), tailwindcss(), sveltekit()]`. On **conserve** le plugin de génération de contenu (`build/generateContentVitePlugin.ts`) et les blocs `lint`/`fmt`/`staged`/`test` actuels. On retire `svelte()`/`svelteInspector()`/`generateHtmlPagesPlugin()`/`optimizeDeps`/`resolve.alias` (SvelteKit gère le bundling Svelte ; l'alias `@frameworks` passe dans `kit.alias`).
- **`svelte.config.js`** : `preprocess: vitePreprocess()`, `kit: { adapter: adapterStatic({ fallback: undefined }), alias: { '@frameworks': './frameworks' }, prerender: { handleHttpError: 'fail', handleMissingId: 'fail' } }`. `fallback: undefined` car tout est prérendu (pas de mode SPA) ; `handleHttpError: 'fail'` fait échouer le build si une entrée prérendue casse (filet de sécurité).
- **`package.json`** : scripts alignés sur le pattern Vite+/SvelteKit (`build: vp build`, `preview: vp preview`, `check: svelte-kit sync && svelte-check`, `prepare: vp config && svelte-kit sync`). Les scripts `build:content`/`build:sitemap`/`build:progress` restent (utilitaires).

### 3.2 Arborescence des routes (remplace sv-router)

```
src/
  app.html                         → shell SvelteKit (remplace index.html ; head statique de base + favicon/fonts)
  app.css                          → inchangé (déplacé si besoin)
  routes/
    +layout.ts                     → export const prerender = true ; export const trailingSlash = 'always'
    +layout.svelte                 → <Header/> {@render children()} <Footer/>
    +page.ts                       → (home) prerender = true
    +page.svelte                   → <Comparison initialFrameworkIds={DEFAULT_FRAMEWORKS} /> + gestion ?f= client (3+)
    compare/[comparison]/
      +page.ts                     → prerender = true ; entries() = 153 paires ; load() parse "a-vs-b" → 2 ids
      +page.svelte                 → <Comparison initialFrameworkIds={data.frameworkIds} /> + <svelte:head> meta/canonical
    sitemap.xml/
      +server.ts                   → GET prerendu ; XML depuis frameworks.ts (/, /compare/a-vs-b)
  lib/
    components/                    → Header, Aside, CodeEditor, FrameworkLabel, GithubStarButton, Comparison, Footer (extraits)
    constants.ts, frameworkUrl.ts, copyToClipboard.ts, createLocaleStorage.ts
  generatedContent/                → INCHANGÉ (généré par le plugin contenu)
```

### 3.3 Réutilisation du code (cœur du travail)

- Extraire la logique de l'actuel `src/Index.svelte` dans **`src/lib/components/Comparison.svelte`**, paramétré par une prop `initialFrameworkIds: string[]` : barre de sélection, sections, `CodeEditor`, chargement dynamique par framework (`snippetsImporterByFrameworkId`), normalisation des tokens (helper M1 déjà en place sur `main`), gestion `?f=`/localStorage.
- `+page.svelte` (home) et `compare/[comparison]/+page.svelte` rendent tous deux `<Comparison>` → **zéro duplication de logique**.
- `Header`/`Aside`/`CodeEditor`/`FrameworkLabel`/`GithubStarButton`/`TransitionWithClass` : déplacés sous `src/lib/components/`, sinon inchangés. Les liens `href="/"` et internes deviennent des liens SvelteKit (navigation client native).

### 3.4 Mapping du paramètre `[comparison]`

- Format : `react-vs-vue3`. `+page.ts` `load()` split sur `-vs-`, normalise via `matchFrameworkId` → `{ frameworkIds: [idA, idB] }`. Si invalide → `error(404)`.
- `entries()` génère les 153 combinaisons non-ordonnées à partir de `frameworks.ts` (ordre canonique = ordre du tableau `frameworks`).
- Redirection de l'inverse : entrée `_redirects` `/compare/:b-vs-:a → /compare/:a-vs-:b 301` n'étant pas exprimable en wildcard simple, on **génère** la liste des 153 redirections inverses dans `_redirects` au build (réutilise la logique existante de génération `_redirects`).

### 3.5 SEO

- `<svelte:head>` par route (title, description, OG, Twitter, **canonical auto-référente**) → **figé dans le HTML statique** par le prerenderer. Résout C1, et E2/F28 pour les paires sans code « meta » dédié.
- `sitemap.xml` : endpoint prerendu listant `/` + les 153 `/compare/a-vs-b` (vraies URLs 200). Résout E1/E3/F29. Remplace `scripts/generateSitemap.ts`.
- JSON-LD (F27) : hors périmètre (le bloc statique existant de `index.html` est porté tel quel dans `app.html` ou retiré ; pas d'enrichissement par page ici).

## 4. Suppressions

`src/main.ts` (mount), `src/App.svelte`, `src/router.ts`, `src/Index.svelte` (logique migrée vers `Comparison.svelte`), `index.html` + `build/template/footer.html` (→ `app.html` + `Footer.svelte`), `generateHtmlPagesPlugin` & templating Eta dans `vite.config.ts`, `scripts/generateSitemap.ts` (→ endpoint). Dépendances potentiellement retirables : `sv-router`, `eta`, `html-minifier-terser` (si plus utilisées après migration — à vérifier).

## 5. Séquencement (chaque étape doit build/compiler)

1. **Bootstrap SvelteKit** : installer kit + adapter-static, créer `svelte.config.js`, `src/app.html`, adapter `vite.config.ts` (garder le plugin contenu), `src/routes/+layout.*` + `+page.svelte` minimal. App vide qui boote et build. **Valider tôt la compat adapter-static sous Vite+.**
2. **Parité home** : extraire `Comparison.svelte` depuis `Index.svelte`, déplacer les composants sous `src/lib/components/`, layout Header/Footer. `/` rend la comparaison par défaut + `?f=` client. Parité visuelle/fonctionnelle avec l'actuel.
3. **Route paires** : `compare/[comparison]/+page.{ts,svelte}`, `entries()` (153), `load()` parse + 404, `<svelte:head>` meta/canonical. Prerender des paires.
4. **Sitemap + nettoyage** : endpoint `sitemap.xml`, génération `_redirects` (inverse→canonique), suppression de l'ancien shell/plugins/scripts obsolètes.
5. **Tests** : adapter les e2e Playwright (routes réelles), ajouter l'assertion prerender, garder l'unit `frameworkUrl`.

## 6. Tests

- **e2e Playwright** : naviguer vers `/compare/react-vs-vue3` (au lieu de `?f=react-vue3`), vérifier sélection + colonnes ; conserver les tests existants (toggle, erreur de chargement — glob déjà corrigé sur `main`) adaptés au routing.
- **Test prerender (preuve de C1)** : après build, asserter que `dist/compare/react-vs-vue3/index.html` **contient du code de snippet prérendu** (ex. un token reconnaissable du contenu React et Vue), pas seulement un `<div>` vide.
- **Unit** : `frameworkUrl` (parse/encode + `-vs-`), `matchFrameworkId`. Vitest via Vite+ (`vp test`), exécuté en CI (étape ajoutée sur `main`).
- **Build smoke** : `vp build` complet ne casse pas ; mesurer le temps (cf. risque 7b).

## 7. Risques & mitigations

- **(a) Compat `adapter-static` sous Vite+** : inconnue principale. Mitigation : valider dès l'étape 1 avec une app vide ; le projet `codenames` prouve SvelteKit+Vite+ (avec adapter-cloudflare) — l'adapter-static est plus simple, mais à confirmer.
- **(b) Temps de build des 153 pages prérendues** : chaque page importe le contenu de 2 frameworks. Mitigation : mesurer ; si trop lent, réduire d'abord à un sous-ensemble de paires populaires (les autres en 404/fallback) puis élargir. `log()` clair du nombre de pages générées.
- **(c) `{@html}` pendant le prerender SSR** : le contenu est pré-colorié au build (HTML statique), donc rendu serveur sans exécution de code utilisateur — sûr.
- **(d) `?f=` + prerender** : le prerender ignore les query strings ; `/` est prérendu à l'état par défaut, l'hydratation client lit `?f=`. Pas de SSR requis pour les sélections arbitraires.
- **(e) Liens externes / assets** : favicon, fonts (woff2), `popper.svg`, `banner2.png` → déplacés sous `static/` (convention SvelteKit) ; vérifier les chemins.

## 8. Critères de réussite

1. `vp build` produit un site statique où `dist/compare/<paire>/index.html` contient le code des deux frameworks (C1 résolu).
2. Parité fonctionnelle avec l'app actuelle : sélection, toggle, `?f=` (3+), bonus frameworks, états loading/error/missing, playground, copier.
3. `sitemap.xml` liste `/` + 153 `/compare/a-vs-b` en URLs 200 ; canonical correcte par page.
4. e2e verts ; test prerender vert ; `svelte-check` 0 erreur ; lint vert.
5. Vite+ conservé (pas de retour à Vite standard).
