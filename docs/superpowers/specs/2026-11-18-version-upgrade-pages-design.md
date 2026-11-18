# Version upgrade pages: read as before and after

## Problem

Six comparison pages put 2 versions of the same framework side by side. Today
they read like any other comparison: the newer version comes first (left), the
title is "Solid 2 vs Solid 1", and nothing says which examples changed. A
reader who upgrades wants the old code on the left, the new code on the right,
and the changes made visible.

| Pair                          | Canonical URL today                              | Examples | Identical in both |
| ----------------------------- | ------------------------------------------------ | -------- | ----------------- |
| Svelte 4 → Svelte 5           | `/compare/svelte5-vs-svelte4/`                   | 22       | 3                 |
| Vue 2 → Vue 3                 | `/compare/vue3-vs-vue2/`                         | 22       | 1                 |
| Angular → Angular Renaissance | `/compare/angularRenaissance-vs-angularClassic/` | 22       | 0                 |
| Ember Octane → Ember Polaris  | `/compare/emberPolaris-vs-emberOctane/`          | 21       | 0                 |
| Solid 1 → Solid 2             | `/compare/solid2-vs-solid1/`                     | 22       | 14                |
| Aurelia 1 → Aurelia 2         | `/compare/aurelia2-vs-aurelia1/`                 | 20       | 0                 |

"Identical" counts examples whose files are byte for byte the same.

## Design

An _upgrade pair_ is 2 versions of the same family (`frameworks` in
`frameworks.ts`). The page of an upgrade pair changes in 5 ways. Every other
comparison page stays as it is.

1. **Old on the left, new on the right.** The canonical URL of an upgrade
   pair becomes `/compare/<older>-vs-<newer>/`, older by `releaseDate`
   (`/compare/solid1-vs-solid2/`). The current URLs 301 to the new ones, and
   their OG images keep rendering (same mechanism as the retired `solid` id).
   The column order, the framework bar and the OG image follow the same order.
2. **Upgrade framing.** The title becomes "Solid 1 to Solid 2", the H1
   "Upgrade from Solid 1 to Solid 2". The intro says how many examples change
   ("8 of 22 examples change") and links the official migration guide, from a
   new optional `migrationGuideURL` on the newer version. The meta description
   follows.
3. **Changed or unchanged, per example.** Each example shows a "Changed" or
   "Unchanged" label next to its title. An unchanged example shows its code
   once, full width, with "Same code in Solid 1 and Solid 2", instead of 2
   identical columns. The side menu marks unchanged examples in a dimmer
   color.
4. **Line changes.** In a changed example, removed lines get a red tint in the
   left column and added lines a green tint in the right column, from a line
   diff of the 2 files (files paired by name, else by position). Colors meet
   WCAG AA contrast on the code background. No animation, no hover effect.
5. **Footer.** The "Comparing Legacy version & Current Version" group lists
   all 6 upgrade pairs in old-to-new order, Ember included (Polaris is the
   current stable, so the "Upcoming" group goes away).

The home page comparison (`/?f=…`) keeps the order the reader chose and gets
none of this.

## Out of scope

- Rewriting examples or writing migration prose per example.
- Diff inside a line (word level).
- Pairs of different families.

## Global Constraints

- The diff and the labels come from the build (`generateContent`), never from
  the client, so prerendered HTML already carries them.
- The footer stays below the first screen at 390x844 and 1440x900.
- Every old URL keeps answering: a 301 for pages, a 200 for OG images.

## Tasks

### Task 1: Upgrade pair order and URLs

- Files: `frameworks.ts`, `src/lib/frameworkUrl.ts`, `src/lib/comparisonPairs.ts`,
  `build/redirects.ts`, OG route, their tests.
- Produces: `isUpgradePair(a, b)` and the old-to-new canonical order; 301s and
  OG images for the previous URLs.
- Proves: each of the 6 previous URLs 301s to the old-to-new page; no canonical
  page redirects to itself; previous OG URLs answer 200.

### Task 2: Build-time diff of upgrade pairs

- Files: `build/lib/generateContent.ts`, a new generated module, its test.
- Produces: for each upgrade pair and example, `changed` and the removed and
  added line numbers per file.
- Proves: Solid 1 to Solid 2 reports 8 changed of 22; `update-state` marks the
  `setName` and `onSettled` lines.

### Task 3: Upgrade page layout

- Files: `src/routes/compare/[comparison]/+page.*`, `Comparison.svelte`, the
  menu component, `src/lib/footerNavigation.ts`.
- Consumes: Task 1 order, Task 2 diff, `migrationGuideURL`.
- Proves: captures at 390x844 and 1440x900 of a changed and an unchanged
  example on the Solid and Svelte pages, read back; footer position measured.
