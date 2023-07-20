import m from "mithril";

export default function Counter() {
  let count = 0;
  const incrementCount = () => (count = count + 1);
  return {
    view: () =>
      m(
        "div",
        m("p", `Counter: ${count}`),
        m("button", { onclick: incrementCount }, "+1")
      ),
  };
}
