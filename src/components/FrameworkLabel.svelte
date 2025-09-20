<script lang="ts">
  import FRAMEWORKS from "../../frameworks";
  import type { Framework } from "../../frameworks";

  interface Props {
    id: string;
    size?: number;
  }

  let { id, size = 20 }: Props = $props();

  const framework: Framework | undefined = $derived(
    FRAMEWORKS.find((f) => f.id === id),
  );

  const baseURL: string = import.meta.env.DEV
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
  <span class="flex-shrink-0">{framework?.title || id}</span>
</div>
