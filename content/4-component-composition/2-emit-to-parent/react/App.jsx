import { useState } from "react";
import AnswerButton from "./AnswerButton.jsx";

export default function App() {
  const [canCome, setCanCome] = useState(true);

  function onAnswerNo() {
    setCanCome(false);
  }

  function onAnswerYes() {
    setCanCome(true);
  }

  return (
    <>
      <p>Are you happy?</p>
      <AnswerButton onYes={onAnswerYes} onNo={onAnswerNo} />
      <p style={{ fontSize: 50 }}>{canCome ? "😀" : "😥"}</p>
    </>
  );
}
