import m from "mithril";
import AnswerButton from "./AnswerButton.js";

export default function App() {
  let canCome = true;
  const onAnswerNo = () => (canCome = false);
  const onAnswerYes = () => (canCome = true);

  return {
    view: () =>
      m(
        "",
        m("p", "Are you happy?"),
        m("p", { style: { fontSize: 50 } }, canCome ? "😀" : "😥"),
        m(AnswerButton, { onYes: onAnswerYes, onNo: onAnswerNo })
      ),
  };
}
