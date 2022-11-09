import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

export const App = component$(() => {
  const store = useStore({
    pageTitle: "",
  });

  useClientEffect$(() => {
    store.pageTitle = document.title;
  });

  return <p>Page title: {store.pageTitle}</p>;
});
