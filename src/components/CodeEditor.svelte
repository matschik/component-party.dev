<script>
  import c from "classnames";
  export let files = [];
  export let editHref = "";

  let codeSnippetEl;

  let filenameSelected = files[0]?.fileName;
  $: snippet = files.find((s) => s.fileName === filenameSelected);

  function copyToClipboard(value) {
    const $textarea = document.createElement("textarea");
    $textarea.innerHTML = value;
    document.body.appendChild($textarea);
    $textarea.select();
    let success = false;
    try {
      document.execCommand("copy");
      success = true;
    } catch (err) {
      alert(
        "Oops, unable to copy to clipboard. Please check website permissions."
      );
    }
    $textarea.remove();
    return success;
  }

  function copySnippet() {
    if (codeSnippetEl) {
      copyToClipboard(codeSnippetEl.innerText);
    }
  }
</script>

<div class="flex space-x-1 items-center ml-0 overflow-x-auto">
  {#each files as file}
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
  <div bind:this={codeSnippetEl} class="text-[1.2rem] bg-[#0d1117]">
    {@html snippet.content}
  </div>
  <div
    class="absolute hidden group-hover:block transition-all top-0 right-0 mt-2 mr-2"
  >
    <div class="flex items-center space-x-3">
      <a href={editHref} target="_blank" rel="noreferrer">
        <button
          class="px-1.5 bg-[#0d1117] py-1 rounded border opacity-60 hover:opacity-90"
          title="Edit on Github"
          aria-label="Edit on Github"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
      </a>
      <button
        class="px-1.5 bg-[#0d1117] py-1 rounded border opacity-60 hover:opacity-90"
        title="Copy to clipboard"
        aria-label="Copy to clipboard"
        on:click={copySnippet}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>
    </div>
  </div>
</div>

<!-- <div>
  {#each snippets as snippet}
    <div x-show={`filenameSelected === '${file.fileName}'`}>
      <CodeViewer
        path={file.path}
        editHref={`https://github.com/matschik/component-party/tree/main/${sectionRelativePath}/${section.dirName}/${framework.id}/${file.fileName}`}
      />
    </div>
  {/each}
</div> -->
