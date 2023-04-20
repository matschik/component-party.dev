import "./style.css";
import m from "mithril";

export default function CssStyle() {
  return {
    view: () =>
      m(
        "div",
        m("h1.title", "I am red"),
        m("button", { style: { fontSize: "10rem" } }, "I am a button")
      ),
  };
}
