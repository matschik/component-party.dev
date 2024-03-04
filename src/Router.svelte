<script>
  import { onMount, onDestroy, setContext } from "svelte";
  import { writable } from "svelte/store";
  import { createRouter } from "radix3";

  export let routes = [];

  const router = createRouter({
    routes: routes.reduce((acc, route) => {
      acc[route.path] = {
        ...route,
      };
      return acc;
    }, {}),
  });

  const currentRoute = writable({ component: null });

  function navigate(path) {
    const routePayload = router.lookup(path);
    if (routePayload) {
      if (routePayload.component.toString().startsWith("class")) {
        currentRoute.set(routePayload);
        window.history.pushState({}, "", path);
      } else if (typeof routePayload.component === "function") {
        routePayload.component().then((module) => {
          currentRoute.set({ ...routePayload, component: module.default });
          window.history.pushState({}, "", path);
        });
      } else {
        console.error("Invalid route component");
      }
    } else {
      navigate("/");
    }
  }

  window.onpopstate = () => {
    navigate(window.location.pathname);
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
    navigate(window.location.pathname);
  });

  onDestroy(() => {
    document.removeEventListener("click", handleClick);
  });

  setContext("router", {
    currentRoute,
    navigate,
  });
</script>

<svelte:component this={$currentRoute.component} />
