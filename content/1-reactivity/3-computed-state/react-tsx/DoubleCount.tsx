import { useState } from "react";

export default function DoubleCount() {
  const [count] = useState<number>(1);
  const double = count * 2;

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
    </div>
  );
}
