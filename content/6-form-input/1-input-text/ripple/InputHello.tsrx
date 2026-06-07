import { bindValue, track } from "ripple";

export default function InputHello() {
  let &[text, textTracked] = track("Hello world");

  return <>
    <p>{text}</p>
    <input ref={bindValue(textTracked)} />
  </>;
}
