<script>
  import { onMount, onDestroy, setContext } from "svelte";
  import { writable } from "svelte/store";
  import { createRouter } from "radix3";

  let { routes = [] } = $props();

  const router = createRouter({
    routes: routes.reduce((acc, route) => {
      acc[route.path] = {
        ...route,
      };
      return acc;
    }, {}),
  });

  const currentRoute = writable({ component: null });

  function navigate(path, state) {
    state = state || {};
    const urlParsed = new URL(path, window.location.origin);
    const routePayload = router.lookup(urlParsed.pathname);

    if (routePayload) {
      if (routePayload.component.toString().startsWith("class")) {
        currentRoute.set(routePayload);
        window.history.pushState(state, "", path);
      } else if (typeof routePayload.component === "function") {
        currentRoute.set({
          ...routePayload,
          component: routePayload.component,
        });
        window.history.pushState(state, "", path);
      } else {
        console.error("Invalid route component");
      }
    } else {
      navigate("/");
    }
  }

  window.onpopstate = () => {
    navigate(window.location.href);
  };

  function handleClick(event) {
    const target = event.target.closest("a[href]");
    if (
      target &&
      target.getAttribute("href").startsWith("/") &&
      target.getAttribute("target") !== "_blank"
    ) {
      event.preventDefault();
      navigate(target.getAttribute("href"));
    }
  }

  onMount(() => {
    document.addEventListener("click", handleClick);
    navigate(window.location.href, { isInitialNavigation: true });
  });

  onDestroy(() => {
    document.removeEventListener("click", handleClick);
  });

  setContext("router", {
    currentRoute,
    navigate,
  });
</script>

{#if $currentRoute.component}
  {@render $currentRoute.component()}
{/if}
