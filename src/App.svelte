<script lang="ts">
  import Router from "./Router.svelte";
  import Index from "./Index.svelte";

  interface Route {
    path: string;
    component: unknown;
  }

  const routes: Route[] = [
    { path: "/", component: Index },
    { path: "/compare/:versus", component: Index },
  ];
</script>

<Router {routes} />
