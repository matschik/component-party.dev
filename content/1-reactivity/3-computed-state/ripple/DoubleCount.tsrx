import { track } from "ripple";

export default function DoubleCount() {
  let &[count] = track(10);
  let &[doubleCount] = track(() => count * 2);

  return <div>{doubleCount}</div>;
}
