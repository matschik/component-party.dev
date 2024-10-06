<script>
  import FRAMEWORKS from "../../frameworks.mjs";

  let { id, size = 20 } = $props();

  const framework = $derived(FRAMEWORKS.find((f) => f.id === id));

  const baseURL = import.meta.env.DEV
    ? "/"
    : "https://raw.githubusercontent.com/matschik/component-party/main/public/";
</script>

<div class="flex items-center space-x-1">
  {#if framework?.img}
    <img
      src={baseURL + framework.img}
      width={size}
      height={size}
      class="inline mr-[5px] mb-0 mt-0"
      alt={`logo of ${framework.title}`}
    />
  {/if}
  <span class="flex-shrink-0">{framework.title}</span>
</div>
