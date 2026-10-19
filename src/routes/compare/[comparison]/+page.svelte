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
  const title = $derived(`${data.titleA} vs ${data.titleB} - Component Party`);
  const description = $derived(
    `Compare ${data.titleA} vs ${data.titleB} frameworks side-by-side. See syntax differences, features, and code examples for ${data.titleA} and ${data.titleB}.`,
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
>
  {#snippet intro()}
    <header class="px-6 md:px-14 lg:px-20 mb-12 max-w-3xl">
      <h1 class="text-3xl font-bold">{data.titleA} vs {data.titleB}</h1>
      <p class="mt-3 text-gray-300">
        {data.titleA} and {data.titleB} side by side: the same components written in both frameworks,
        from reactivity and templating to lifecycle, composition and forms.
      </p>
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
