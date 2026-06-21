<script lang="ts">
  import { frameworks } from "@frameworks";
  import type { Framework } from "@frameworks";

  interface Props {
    id: string;
    size?: number;
  }

  let { id, size = 20 }: Props = $props();

  const framework: Framework | undefined = $derived(frameworks.find((f) => f.id === id));

  // Framework logos ship with the site (static/ -> /framework/*.svg), so serve
  // them from the site itself in every environment. (Previously prod loaded them
  // from raw.githubusercontent .../public/, which broke when public/ -> static/.)
  const baseURL = "/";
</script>

<div class="flex items-center space-x-1.5">
  {#if framework?.img}
    <img
      src={baseURL + framework.img}
      width={size}
      height={size}
      class="shrink-0"
      alt={`logo of ${framework.title}`}
    />
  {/if}
  <span class="shrink-0 inline-block">{framework?.title || id}</span>
</div>
