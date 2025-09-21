<script lang="ts">
  import copyToClipboard from "../lib/copyToClipboard.ts";

  interface File {
    fileName: string;
    contentHtml: string;
  }

  interface Props {
    files: File[];
    snippetEditHref?: string;
    "data-testid"?: string;
  }

  const {
    files = [],
    snippetEditHref,
    "data-testid": dataTestId,
  }: Props = $props();

  let codeSnippetEl: HTMLElement | undefined = $state();

  let filenameSelected: string | undefined = $state(
    files.length > 0 ? files[0]?.fileName : undefined,
  );

  const snippet: File | undefined = $derived(
    filenameSelected
      ? files.find((s) => s.fileName === filenameSelected)
      : undefined,
  );

  function copySnippet(): void {
    if (codeSnippetEl) {
      copyToClipboard(codeSnippetEl.innerText);
    }
  }
</script>

<div
  class="flex space-x-1 items-center ml-0 overflow-x-auto"
  data-testid={dataTestId}
>
  {#each files as file (file.fileName)}
    <button
      class={[
        "bg-[#0d1117] py-1.5 px-3 flex-shrink-0 text-xs rounded-t inline-block transition-all duration-200 hover:opacity-100",
        filenameSelected !== file.fileName && "opacity-60",
      ]}
      onclick={() => {
        filenameSelected = file.fileName;
      }}
    >
      {file.fileName}
    </button>
  {/each}
</div>

<div class="relative group">
  <div
    bind:this={codeSnippetEl}
    class="bg-[#0d1117] px-4 py-3 text-sm overflow-auto rounded-b rounded-tr"
  >
    {#if snippet}
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      {@html snippet.contentHtml}
    {/if}
  </div>
  <div
    class="absolute hidden group-hover:block transition-all top-0 right-0 mt-2 mr-2"
  >
    <div class="flex items-center space-x-3">
      <a
        href={snippetEditHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Edit on Github"
        class="bg-[#0d1117] rounded border opacity-60 hover:opacity-90 transition-all duration-200 p-1 flex items-center justify-center"
      >
        <span class="iconify ph--pencil size-4" aria-hidden="true"></span>
      </a>
      <button
        class="bg-[#0d1117] rounded border opacity-60 hover:opacity-90 transition-all duration-200 p-1 flex items-center justify-center"
        title="Copy to clipboard"
        aria-label="Copy to clipboard"
        onclick={copySnippet}
      >
        <span class="iconify ph--clipboard size-4" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</div>
