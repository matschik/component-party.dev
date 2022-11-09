import { component$, useStore, $ } from "@builder.io/qwik";

export const colors = [
  { id: 1, text: "red" },
  { id: 2, text: "blue" },
  { id: 3, text: "green" },
  { id: 4, text: "gray", isDisabled: true },
];

const ColorSelect = component$(() => {
  const store = useStore({ selectedColorId: 2 });

  const handleChange = $((event: Event) => {
    store.selectedColorId = Number((event.target as HTMLInputElement).value);
  });

  return (
    <select value={store.selectedColorId} onChange$={handleChange}>
      {colors.map((color) => (
        <option value={color.id} disabled={color.isDisabled}>
          {color.text}
        </option>
      ))}
    </select>
  );
});

export default ColorSelect;
