<script lang="ts">
  import Router from "./Router.svelte";
  import Index from "./Index.svelte";
  import type { ComponentType } from "svelte";

  interface Route {
    path: string;
    component: () => ComponentType;
  }

  const routes: Route[] = [
    { path: "/", component: () => Index },
    { path: "/compare/:versus", component: () => Index },
  ];
</script>

<Router {routes} />
