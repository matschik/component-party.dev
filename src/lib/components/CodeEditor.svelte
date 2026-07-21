<script lang="ts">
  import copyToClipboard from "$lib/copyToClipboard";

  interface File {
    fileName: string;
    contentHtml: string;
    lineCount: number;
  }

  interface Props {
    files: File[];
    snippetEditHref?: string;
    "data-testid"?: string;
  }

  const { files = [], snippetEditHref, "data-testid": dataTestId }: Props = $props();

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
  let copyFeedback: "idle" | "success" | "failure" = $state("idle");
  let copyAttempt = 0;
  let feedbackTimeout: ReturnType<typeof setTimeout> | undefined;

  let filenameSelected: string | undefined = $derived(
    filenameSelectedOverride ?? (files.length > 0 ? files[0]?.fileName : undefined),
  );

  const snippet: File | undefined = $derived(
    filenameSelected ? files.find((s) => s.fileName === filenameSelected) : undefined,
  );

  function resetCopyFeedback(): void {
    copyFeedback = "idle";
    if (feedbackTimeout) {
      clearTimeout(feedbackTimeout);
      feedbackTimeout = undefined;
    }
  }

  function selectFile(fileName: string): void {
    copyAttempt += 1;
    resetCopyFeedback();
    filenameSelectedOverride = fileName;
  }

  async function copySnippet(): Promise<void> {
    const source = codeSnippetEl?.innerText;
    if (!source) return;

    const attempt = ++copyAttempt;
    const copied = await copyToClipboard(source);

    // A copy attempt that started on another tab must not update this tab's feedback.
    if (attempt !== copyAttempt) return;

    copyFeedback = copied ? "success" : "failure";
    feedbackTimeout = setTimeout(() => {
      if (attempt === copyAttempt) resetCopyFeedback();
    }, 2_000);
  }
</script>

<div data-testid={dataTestId}>
  <div
    class="flex space-x-1 items-center ml-0 overflow-x-auto"
    role="tablist"
    aria-label="Snippet files"
  >
    {#each files as file (file.fileName)}
      <button
        class={[
          "bg-[#0d1117] py-1.5 px-3 shrink-0 text-xs rounded-t inline-block transition-all duration-200 hover:opacity-100",
          filenameSelected !== file.fileName && "opacity-60",
        ]}
        data-testid="code-file-tab"
        role="tab"
        aria-selected={filenameSelected === file.fileName}
        onclick={() => selectFile(file.fileName)}
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
      data-testid="code-content"
    >
      {#if snippet}
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html snippet.contentHtml}
      {/if}
    </div>
    <div
      class="absolute opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity top-0 right-0 mt-2 mr-2"
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
          title={copyFeedback === "success" ? "Copied" : "Copy to clipboard"}
          aria-label={copyFeedback === "success"
            ? "Copied"
            : copyFeedback === "failure"
              ? "Copy failed"
              : "Copy to clipboard"}
          aria-describedby="copy-feedback"
          data-testid="copy-code"
          onclick={copySnippet}
        >
          <span class="iconify ph--clipboard size-4" aria-hidden="true"></span>
        </button>
        <span id="copy-feedback" class="sr-only" role="status" aria-live="polite">
          {copyFeedback === "success" ? "Copied" : copyFeedback === "failure" ? "Copy failed" : ""}
        </span>
      </div>
    </div>
  </div>
</div>
