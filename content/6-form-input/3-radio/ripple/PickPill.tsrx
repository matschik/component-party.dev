import { bindGroup, track } from "ripple";

export default function PickPill() {
  let &[picked, pickedTracked] = track("red");

  return <>
    <div>"Picked: "{picked}</div>

    <input
      id="blue-pill"
      type="radio"
      value="blue"
      ref={bindGroup(pickedTracked)}
    />
    <label for="blue-pill">"Blue pill"</label>

    <input
      id="red-pill"
      type="radio"
      value="red"
      ref={bindGroup(pickedTracked)}
    />
    <label for="red-pill">"Red pill"</label>
  </>;
}
