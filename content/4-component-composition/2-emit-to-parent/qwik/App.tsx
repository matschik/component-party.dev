import { $, component$, useStore } from "@builder.io/qwik";
import AnswerButton from "./AnswerButton";

const App = component$(() => {
  const store = useStore({
    canCome: true,
  });

  const onAnswerNo = $(() => {
    store.canCome = false;
  });

  const onAnswerYes = $(() => {
    store.canCome = true;
  });

  return (
    <>
      <p>Are you happy?</p>
      <AnswerButton onYes$={onAnswerYes} onNo$={onAnswerNo} />
      <p style={{ fontSize: 50 }}>{store.canCome ? "ðŸ˜€" : "ðŸ˜¥"}</p>
    </>
  );
});

export default App;
