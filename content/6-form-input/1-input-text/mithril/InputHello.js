import m from "mithril";

export default function InputHello() {
  let text = "Hello world";
  const handleChange = ({ target: { value } }) => (text = value);

  return {
    view: () =>
      m("", m("p", text), m("input", { value: text, onchange: handleChange })),
  };
}
