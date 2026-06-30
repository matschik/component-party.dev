import { track } from "ripple";

export default function Name() {
  let &[name] = track("John");

  return <h1>"Hello "{name}</h1>;
}
