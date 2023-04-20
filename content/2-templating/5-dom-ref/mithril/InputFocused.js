import m from "mithril";

export default function InputFocused() {
  let value = "";
  return {
    view: () =>
      m("input", {
        oncreate: ({ dom }) => dom.focus(),
        type: "text",
        value,
        oninput: (e) => (value = e.target.value),
      }),
  };
}
