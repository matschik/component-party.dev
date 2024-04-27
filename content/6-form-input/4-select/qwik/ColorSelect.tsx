import { component$, useSignal } from "@builder.io/qwik";

export const colors = [
  { id: 1, text: "red" },
  { id: 2, text: "blue" },
  { id: 3, text: "green" },
  { id: 4, text: "gray", isDisabled: true },
];

const ColorSelect = component$(() => {
  const selectedColorId = useSignal("2");

  return (
    <select bind:value={selectedColorId}>
      {colors.map((color) => (
        <option
          key={color.id}
          value={color.id}
          disabled={color.isDisabled}
          selected={`${color.id}` === selectedColorId.value}
        >
          {color.text}
        </option>
      ))}
    </select>
  );
});

export default ColorSelect;
