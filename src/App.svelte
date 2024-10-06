<script>
  import Router from "./Router.svelte";
  import Index from "./Index.svelte";

  const routes = [
    { path: "/", component: Index },
    { path: "/compare/:versus", component: Index },
  ];
</script>

<Router {routes} />
