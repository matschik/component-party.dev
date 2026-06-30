import { track } from "ripple";

import { AnswerButton } from "./AnswerButton.tsrx";

export function App() {
  let &[isHappy] = track(true);

  function onAnswerNo() {
    isHappy = false;
  }

  function onAnswerYes() {
    isHappy = true;
  }

  return <>
    <p>"Are you happy?"</p>
    <AnswerButton onYes={onAnswerYes} onNo={onAnswerNo} />
    <p style={{ fontSize: "50px" }}>{isHappy ? "😀" : "😥"}</p>
  </>;
}
