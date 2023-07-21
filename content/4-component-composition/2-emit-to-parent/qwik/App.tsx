import { $, component$, useStore } from "@builder.io/qwik";
import AnswerButton from "./AnswerButton";

const App = component$(() => {
  const store = useStore({
    isHappy: true,
  });

  const onAnswerNo = $(() => {
    store.isHappy = false;
  });

  const onAnswerYes = $(() => {
    store.isHappy = true;
  });

  return (
    <>
      <p>Are you happy?</p>
      <AnswerButton onYes$={onAnswerYes} onNo$={onAnswerNo} />
      <p style={{ fontSize: 50 }}>{store.isHappy ? "ðŸ˜€" : "ðŸ˜¥"}</p>
    </>
  );
});

export default App;
