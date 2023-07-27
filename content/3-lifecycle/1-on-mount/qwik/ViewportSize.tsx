import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

export const App = component$(() => {
  const store = useStore({
    viewportSize: "",
  });

  useClientEffect$(() => {
    store.viewportSize = `${window.innerWidth} × ${window.innerHeight}`;
  });

  return <p>Viewport size: {store.viewportSize}</p>;
});
