import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

export const App = component$(() => {
  const store = useStore({
    time: new Date().toLocaleTimeString(),
  });

  useClientEffect$(() => {
    const timer = setInterval(() => {
      store.time = new Date().toLocaleTimeString();
    }, 1000);

    return () => clearInterval(timer);
  });

  return <p>Current time: {store.time}</p>;
});
