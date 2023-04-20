import m from "mithril";

export default function Name() {
  let name = "John";
  name = "Jane";
  return {
    view: () => m("h1", `Hello ${name}`),
  };
}
