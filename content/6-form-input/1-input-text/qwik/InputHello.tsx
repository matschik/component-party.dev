import { component$, useStore, $ } from "@builder.io/qwik";

const InputHello = component$(() => {
  const store = useStore({ text: "" });

  const handleChange = $((event: InputEvent) => {
    store.text = (event.target as HTMLInputElement).value;
  });

  return (
    <>
      <p>{store.text}</p>
      <input value={store.text} onInput$={handleChange} />
    </>
  );
});

export default InputHello;
