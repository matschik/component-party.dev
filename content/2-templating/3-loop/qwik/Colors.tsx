import { component$ } from "@builder.io/qwik";

export const Colors = component$(() => {
  const colors = ["red", "green", "blue"];
  return (
    <ul>
      {colors.map((color) => (
        <li key={color}>{color}</li>
      ))}
    </ul>
  );
});
