export default function AnswerButton(props) {
  return (
    <>
      <button onClick={() => props.onYes()}>YES</button>
      <button onClick={() => props.onNo()}>NO</button>
    </>
  );
}
