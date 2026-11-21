<script lang="ts">
  import Comparison from "#lib/components/Comparison.svelte";
  import { frameworkVersions } from "#frameworks";
  import { BASE_URL, canonicalComparisonPath, createComparisonPath } from "#lib/frameworkUrl.ts";
  import { techArticleJsonLd } from "#lib/seo.ts";
  import { BUILD_DATE } from "#lib/buildDate.ts";
  let { data } = $props();
  const canonical = $derived(
    `${BASE_URL}${createComparisonPath(data.frameworkIds[0], data.frameworkIds[1])}`,
  );
  const ogImage = $derived(`${BASE_URL}/og/${data.frameworkIds[0]}-vs-${data.frameworkIds[1]}.png`);
  const upgradeCounts = $derived.by(() => {
    if (!data.upgrade) return undefined;
    const diffs = Object.values(data.upgrade.diffs);
    return { changed: diffs.filter((d) => d.changed).length, total: diffs.length };
  });
  const heading = $derived(
    data.upgrade
      ? `Upgrade from ${data.titleA} to ${data.titleB}`
      : `${data.titleA} vs ${data.titleB}`,
  );
  const title = $derived(
    data.upgrade
      ? `${data.titleA} to ${data.titleB} - Component Party`
      : `${data.titleA} vs ${data.titleB} - Component Party`,
  );
  const description = $derived(
    upgradeCounts
      ? `Upgrade from ${data.titleA} to ${data.titleB}: the same components before and after, with every changed line marked. ${upgradeCounts.changed} of ${upgradeCounts.total} examples change.`
      : `Compare ${data.titleA} vs ${data.titleB} frameworks side-by-side. See syntax differences, features, and code examples for ${data.titleA} and ${data.titleB}.`,
  );
  // Every other comparison of each framework of this page, as plain links, so
  // crawlers reach all prerendered pairs from any of them.
  const related = $derived(
    data.frameworkIds.map((id, i) => {
      const title = i === 0 ? data.titleA : data.titleB;
      return {
        title,
        links: frameworkVersions
          .filter((other) => !data.frameworkIds.includes(other.id))
          .map((other) => ({
            name: `${title} vs ${other.title}`,
            url: canonicalComparisonPath(id, other.id),
          })),
      };
    }),
  );
  const articleLd = $derived(
    techArticleJsonLd({
      titleA: data.titleA,
      titleB: data.titleB,
      headline: data.upgrade
        ? `Upgrade from ${data.titleA} to ${data.titleB} - before and after code`
        : undefined,
      description,
      url: canonical,
      image: ogImage,
      buildDate: BUILD_DATE,
    }),
  );
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <meta property="og:url" content={canonical} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={ogImage} />
  {@html `<script type="application/ld+json">${JSON.stringify(articleLd)}<\/script>`}
</svelte:head>

<Comparison
  initialFrameworkIds={data.frameworkIds}
  initialSnippets={data.initialSnippets}
  persist={false}
  upgradeDiffs={data.upgrade?.diffs}
>
  {#snippet intro()}
    <header class="px-6 md:px-14 lg:px-20 mb-12 max-w-3xl">
      <h1 class="text-3xl font-bold">{heading}</h1>
      {#if upgradeCounts}
        <p class="mt-3 text-gray-300">
          The same components before and after: {data.titleA} on the left, {data.titleB} on the right.
          {upgradeCounts.changed} of {upgradeCounts.total} examples change; removed lines are marked in
          red, added lines in green.
        </p>
        {#if data.upgrade?.migrationGuideURL}
          <p class="mt-3">
            <a
              href={data.upgrade.migrationGuideURL}
              target="_blank"
              rel="noreferrer"
              class="underline underline-offset-4 hover:text-white text-gray-300"
            >
              Official {data.titleB} migration guide
            </a>
          </p>
        {/if}
      {:else}
        <p class="mt-3 text-gray-300">
          {data.titleA} and {data.titleB} side by side: the same components written in both frameworks,
          from reactivity and templating to lifecycle, composition and forms.
        </p>
      {/if}
    </header>
  {/snippet}
  {#snippet outro()}
    <nav class="px-6 md:px-14 lg:px-20 mt-24 space-y-8" aria-label="Related comparisons">
      {#each related as group (group.title)}
        <section>
          <h2 class="text-xl font-bold">More {group.title} comparisons</h2>
          <ul class="mt-3 flex flex-wrap gap-2">
            {#each group.links as link (link.url)}
              <li>
                <a
                  href={link.url}
                  class="inline-flex items-center rounded border border-gray-700 px-3 py-1 text-sm hover:bg-gray-800"
                >
                  {link.name}
                </a>
              </li>
            {/each}
          </ul>
        </section>
      {/each}
    </nav>
  {/snippet}
</Comparison>
