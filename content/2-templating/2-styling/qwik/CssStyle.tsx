import { component$, useStyles$ } from "@builder.io/qwik";

export const App = component$(() => {
  useStyles$(`
    .title {
      color: red;
    }
    `);

  return (
    <>
      <h1 class="title">I am red</h1>
      <button style={{ "font-size": "10rem" }}>I am a button</button>
    </>
  );
});
