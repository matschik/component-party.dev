<script lang="ts">
  import { notifications } from "./NotificationCenter.svelte";
  import copyToClipboard from "../lib/copyToClipboard.ts";

  interface File {
    fileName: string;
    contentHtml: string;
  }

  interface Props {
    files: File[];
    snippetEditHref?: string;
  }

  const { files = [], snippetEditHref }: Props = $props();

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
      notifications.show({
        title: "Snippet copied to clipboard",
      });
    }
  }
</script>

<div class="flex space-x-1 items-center ml-0 overflow-x-auto">
  {#each files as file (file.fileName)}
    <button
      class={[
        "bg-[#0d1117] py-1.5 px-3 flex-shrink-0 text-xs rounded-t inline-block",
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
    class="bg-[#0d1117] px-4 py-3 text-sm overflow-auto"
  >
    {#if snippet}
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
        class="px-1.5 bg-[#0d1117] py-1 rounded border opacity-60 hover:opacity-90"
      >
        <div class="i-heroicons:pencil size-4"></div>
      </a>
      <button
        class="px-1.5 bg-[#0d1117] py-1 rounded border opacity-60 hover:opacity-90"
        title="Copy to clipboard"
        aria-label="Copy to clipboard"
        onclick={copySnippet}
      >
        <div class="i-heroicons:clipboard-document size-4"></div>
      </button>
    </div>
  </div>
</div>
