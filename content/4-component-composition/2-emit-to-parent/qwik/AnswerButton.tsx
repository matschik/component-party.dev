import { component$, PropFunction } from "@builder.io/qwik";

type Props = {
  onYes$: PropFunction<() => void>;
  onNo$: PropFunction<() => void>;
};

const AnswerButton = component$((props: Props) => {
  return (
    <>
      <button onClick$={props.onYes$}>YES</button>

      <button onClick$={props.onNo$}>NO</button>
    </>
  );
});

export default AnswerButton;
