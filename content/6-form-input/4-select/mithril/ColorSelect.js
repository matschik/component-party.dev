import m from "mithril";
const colors = [
  { id: 1, text: "red" },
  { id: 2, text: "blue" },
  { id: 3, text: "green" },
  { id: 4, text: "gray", isDisabled: true },
];

export default function ColorSelect() {
  let selectedColorId = 2;

  const handleSelect = ({ target: { value } }) => (selectedColorId = value);

  return {
    view: () =>
      m(
        "select",
        { value: selectedColorId, onchange: handleSelect },
        colors.map(({ id, text, isDisabled }) =>
          m("option", { key: id, id, disabled: isDisabled, value: id }, text)
        )
      ),
  };
}
