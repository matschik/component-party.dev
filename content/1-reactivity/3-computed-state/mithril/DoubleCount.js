import m from "mithril";

export default function DoubleCount() {
  let count = 10;
  let doubleCount = count * 2;
  return {
    view: () => m("div", doubleCount),
  };
}
