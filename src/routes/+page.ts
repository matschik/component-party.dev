import snippetsImporterByFrameworkId from "$generated/framework/index.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = async () => {
  const frameworkIds = ["react", "svelte5"];
  const pairs = await Promise.all(
    frameworkIds.map(
      async (id) => [id, (await snippetsImporterByFrameworkId[id]()).default] as const,
    ),
  );
  return { frameworkIds, initialSnippets: Object.fromEntries(pairs) };
};
