import { track } from "ripple";

export default function Name() {
  let &[name] = track("John");
  name = "Jane";

  return <h1>"Hello "{name}</h1>;
}
