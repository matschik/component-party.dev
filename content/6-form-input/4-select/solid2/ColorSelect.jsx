import { createSignal, For } from "solid-js";

const colors = [
  { id: 1, text: "red" },
  { id: 2, text: "blue" },
  { id: 3, text: "green" },
  { id: 4, text: "gray", isDisabled: true },
];

export default function ColorSelect() {
  const [selectedColorId, setSelectedColorId] = createSignal(2);

  function handleChange(event) {
    setSelectedColorId(event.target.value);
  }

  return (
    <select value={selectedColorId()} onChange={handleChange}>
      <For each={colors}>
        {(color) => (
          <option value={color.id} disabled={color.isDisabled}>
            {color.text}
          </option>
        )}
      </For>
    </select>
  );
}
