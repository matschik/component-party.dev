interface AnswerButtonProps {
  onYes: () => void;
  onNo: () => void;
}

export default function AnswerButton({ onYes, onNo }: AnswerButtonProps) {
  return (
    <div>
      <button onClick={onYes}>Yes</button>
      <button onClick={onNo}>No</button>
    </div>
  );
}
