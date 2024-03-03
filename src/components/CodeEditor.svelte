<script>
  import c from "classnames";
  import { notifications } from "@veljs/svelte/NotificationCenter.svelte";
  import { ClipboardDocumentIcon } from "heroiconsvelte/24/outline";
  import copyToClipboard from "../lib/copyToClipboard.js";

  export let files = [];

  let codeSnippetEl;

  let filenameSelected = files.length > 0 && files[0]?.fileName;
  $: snippet =
    filenameSelected && files.find((s) => s.fileName === filenameSelected);

  function copySnippet() {
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
      class={c(
        "bg-[#0d1117] py-1.5 px-3 font-medium flex-shrink-0 text-xs rounded-t inline-block",
        filenameSelected !== file.fileName && "opacity-60"
      )}
      on:click={() => {
        filenameSelected = file.fileName;
      }}
    >
      {file.fileName}
    </button>
  {/each}
</div>

<div class="relative group">
  <div bind:this={codeSnippetEl} class="bg-[#0d1117]">
    {@html snippet.contentHtml}
  </div>
  <div
    class="absolute hidden group-hover:block transition-all top-0 right-0 mt-2 mr-2"
  >
    <div class="flex items-center space-x-3">
      <button
        class="px-1.5 bg-[#0d1117] py-1 rounded border opacity-60 hover:opacity-90"
        title="Copy to clipboard"
        aria-label="Copy to clipboard"
        on:click={copySnippet}
      >
        <ClipboardDocumentIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
</div>
