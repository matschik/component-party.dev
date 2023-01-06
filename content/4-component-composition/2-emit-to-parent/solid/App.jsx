import { createSignal } from "solid-js";
import AnswerButton from "./AnswerButton.jsx";

export default function App() {
  const [canCome, setCanCome] = createSignal(true);

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
      <p style={{ "font-size": "50px" }}>{canCome() ? "😀" : "😥"}</p>
    </>
  );
}
