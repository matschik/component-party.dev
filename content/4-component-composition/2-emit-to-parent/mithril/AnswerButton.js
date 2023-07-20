import m from "mithril";
export const AnswerButton = ({ attrs: { onYes, onNo } }) => ({
  view: () =>
    m(
      "div",
      m("button", { onclick: onYes }, "YES"),
      m("button", { onclick: onNo }, "NO")
    ),
});
