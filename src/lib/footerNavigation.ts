import { matchFrameworkId } from "#frameworks";
import { canonicalComparisonPath } from "./frameworkUrl.ts";

type FooterLink = { name: string; url: string };

// Each link points at the prerendered comparison page, so crawlers reach it
// through a plain link. Its label follows the page's own order.
const pair = (idA: string, idB: string): FooterLink => {
  const url = canonicalComparisonPath(idA, idB);
  const [a, b] = url
    .replace(/^\/compare\/|\/$/g, "")
    .split("-vs-")
    .map((id) => matchFrameworkId(id)!.title);
  return { name: `${a} vs ${b}`, url };
};

export const footerNavigation: { title: string; links: FooterLink[] }[] = [
  {
    title: "Most Popular Frameworks",
    links: [
      pair("react", "vue3"),
      pair("react", "angularRenaissance"),
      pair("vue3", "angularRenaissance"),
      pair("react", "emberPolaris"),
      pair("vue3", "emberPolaris"),
    ],
  },
  {
    title: "Popular frameworks vs Rising frameworks",
    links: [
      pair("react", "svelte5"),
      pair("react", "solid"),
      pair("vue3", "svelte5"),
      pair("vue3", "solid"),
      pair("angularRenaissance", "svelte5"),
      pair("angularRenaissance", "solid"),
    ],
  },
  {
    title: "Comparing Legacy version & Current Version",
    links: [
      pair("svelte4", "svelte5"),
      pair("vue2", "vue3"),
      pair("angularClassic", "angularRenaissance"),
      pair("aurelia1", "aurelia2"),
    ],
  },
  {
    title: "Comparing Current Version & Upcoming Version",
    links: [pair("emberOctane", "emberPolaris")],
  },
];
