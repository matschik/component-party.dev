import m from "mithril";

export default function Name() {
  let name = "John";

  return {
    view: () => m("h1", `Hello ${name}`),
  };
}
