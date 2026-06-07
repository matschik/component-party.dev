import { bindValue, track } from "ripple";

const colors = [
  { id: 1, text: "red" },
  { id: 2, text: "blue" },
  { id: 3, text: "green" },
  { id: 4, text: "gray", isDisabled: true },
];

export default function ColorSelect() {
  let &[selectedColorId, selectedColorIdTracked] = track(2);

  return <select ref={bindValue(selectedColorIdTracked)}>
    for (const color of colors; key color.id) {
      <option value={color.id} disabled={color.isDisabled}>
        {color.text}
      </option>
    }
  </select>;
}
