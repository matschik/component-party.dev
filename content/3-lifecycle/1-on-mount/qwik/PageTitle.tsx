import { component$, useVisibleTask$, useStore } from "@builder.io/qwik";

export const App = component$(() => {
  const store = useStore({
    pageTitle: "",
  });

  useVisibleTask$(() => {
    store.pageTitle = document.title;
  });

  return <p>Page title: {store.pageTitle}</p>;
});
