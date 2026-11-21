<script lang="ts">
  import copyToClipboard from "#lib/copyToClipboard.ts";
  import { markLines } from "#lib/markLines.ts";

  interface File {
    fileName: string;
    contentHtml: string;
    lineCount: number;
  }

  interface Props {
    files: File[];
    snippetEditHref?: string;
    /** Upgrade pages: 1-based lines the newer version removed, by file name. */
    removedLines?: Record<string, number[]>;
    /** Upgrade pages: 1-based lines the newer version added, by file name. */
    addedLines?: Record<string, number[]>;
    "data-testid"?: string;
  }

  const {
    files = [],
    snippetEditHref,
    removedLines,
    addedLines,
    "data-testid": dataTestId,
  }: Props = $props();

  // Snippet lines never wrap (overflow-auto / white-space: pre), so the source
  // line count fully determines the body height. Reserve the tallest file's
  // height so switching tabs never resizes the editor.
  const LINE_HEIGHT_PX = 20; // text-sm
  const BODY_PADDING_Y_PX = 24; // py-3 (12 × 2)
  const bodyMinHeight = $derived(
    files.length > 0
      ? Math.max(...files.map((f) => f.lineCount)) * LINE_HEIGHT_PX + BODY_PADDING_Y_PX
      : 0,
  );

  let codeSnippetEl: HTMLElement | undefined = $state();

  let filenameSelectedOverride: string | undefined = $state();

  let filenameSelected: string | undefined = $derived(
    filenameSelectedOverride ?? (files.length > 0 ? files[0]?.fileName : undefined),
  );

  const snippet: File | undefined = $derived(
    filenameSelected ? files.find((s) => s.fileName === filenameSelected) : undefined,
  );

  const snippetHtml = $derived(
    snippet
      ? markLines(
          markLines(snippet.contentHtml, removedLines?.[snippet.fileName], "line-removed"),
          addedLines?.[snippet.fileName],
          "line-added",
        )
      : "",
  );

  function copySnippet(): void {
    if (codeSnippetEl) {
      void copyToClipboard(codeSnippetEl.innerText);
    }
  }
</script>

<div class="flex space-x-1 items-center ml-0 overflow-x-auto" data-testid={dataTestId}>
  {#each files as file (file.fileName)}
    <button
      class={[
        "bg-[#0d1117] py-1.5 px-3 shrink-0 text-xs rounded-t inline-block transition-all duration-200 hover:opacity-100",
        filenameSelected !== file.fileName && "opacity-60",
      ]}
      onclick={() => {
        filenameSelectedOverride = file.fileName;
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
    style={`min-height: ${bodyMinHeight}px`}
  >
    {#if snippet}
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      {@html snippetHtml}
    {/if}
  </div>
  <div
    class="absolute hidden group-hover:block group-focus-within:block transition-all top-0 right-0 mt-2 mr-2"
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

<style>
  /* Upgrade pages: tint a whole line, with an edge mark so color is not the
     only cue. */
  /* The edge mark sits in the left padding, so the code keeps its column. */
  :global(.line-removed),
  :global(.line-added) {
    display: inline-block;
    min-width: calc(100% + 0.75rem);
    margin-left: -0.75rem;
    padding-left: 0.75rem;
  }
  :global(.line-removed) {
    background-color: rgb(248 81 73 / 0.15);
    box-shadow: inset 3px 0 0 rgb(248 81 73 / 0.8);
  }
  :global(.line-added) {
    background-color: rgb(63 185 80 / 0.15);
    box-shadow: inset 3px 0 0 rgb(63 185 80 / 0.8);
  }
</style>
