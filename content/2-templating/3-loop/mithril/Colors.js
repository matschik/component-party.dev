import m from "mithril";

export default function Colors() {
  const colors = ["red", "green", "blue"];
  return {
    view: () =>
      m(
        "ul",
        colors.map((color, idx) => m("li", { key: idx }, color))
      ),
  };
}
