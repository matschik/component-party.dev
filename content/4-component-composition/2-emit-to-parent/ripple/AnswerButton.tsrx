interface AnswerButtonProps {
  onYes: () => void;
  onNo: () => void;
}

export function AnswerButton(&{ onYes, onNo }: AnswerButtonProps) {
  return <>
    <button onClick={onYes}>"YES"</button>
    <button onClick={onNo}>"NO"</button>
  </>;
}
