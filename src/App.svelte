<script>
  import { Router } from "svelte-router-spa";
  import Index from "./Index.svelte";
  const routes = [
    {
      name: "/",
      component: Index,
    },
    { name: "/compare/:versus", component: Index },
    {
      name: "404",
      path: "404",
      component: Index,
    },
  ];
</script>

<Router {routes} />
