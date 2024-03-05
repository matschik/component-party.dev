import { component$, useVisibleTask$, useStore } from "@builder.io/qwik";

export const App = component$(() => {
  const store = useStore({
    time: new Date().toLocaleTimeString(),
  });

  useVisibleTask$(() => {
    const timer = setInterval(() => {
      store.time = new Date().toLocaleTimeString();
    }, 1000);

    return () => clearInterval(timer);
  });

  return <p>Current time: {store.time}</p>;
});
