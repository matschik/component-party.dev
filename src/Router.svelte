<script lang="ts">
  import { onMount, onDestroy, setContext } from "svelte";
  import { writable, type Writable } from "svelte/store";
  import { createRouter } from "radix3";
  import type { ComponentType } from "svelte";

  interface Route {
    path: string;
    component: any;
  }

  interface RoutePayload extends Route {
    params?: Record<string, string>;
  }

  interface RouterContext {
    currentRoute: Writable<RoutePayload>;
    navigate: (path: string, state?: any) => void;
  }

  let { routes = [] }: { routes: Route[] } = $props();

  const router = createRouter({
    routes: routes.reduce((acc: Record<string, Route>, route) => {
      acc[route.path] = {
        ...route,
      };
      return acc;
    }, {}),
  });

  const currentRoute = writable<RoutePayload>({
    path: "",
    component: null as any,
  });

  function navigate(path: string, state?: any): void {
    state = state || {};
    const urlParsed = new URL(path, window.location.origin);
    const routePayload = router.lookup(urlParsed.pathname);

    if (routePayload) {
      if (routePayload.component.toString().startsWith("class")) {
        currentRoute.set(routePayload as RoutePayload);
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

  window.onpopstate = (): void => {
    navigate(window.location.href);
  };

  function handleClick(event: Event): void {
    const target = (event.target as Element).closest(
      "a[href]",
    ) as HTMLAnchorElement | null;
    if (
      target &&
      target.getAttribute("href")?.startsWith("/") &&
      target.getAttribute("target") !== "_blank"
    ) {
      event.preventDefault();
      const href = target.getAttribute("href");
      if (href) {
        navigate(href);
      }
    }
  }

  onMount(() => {
    document.addEventListener("click", handleClick);
    navigate(window.location.href, { isInitialNavigation: true });
  });

  onDestroy(() => {
    document.removeEventListener("click", handleClick);
  });

  setContext<RouterContext>("router", {
    currentRoute,
    navigate,
  });
</script>

{#if $currentRoute.component}
  {@render $currentRoute.component()}
{/if}
