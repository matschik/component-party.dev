import { useState, useMemo } from "react";

export default function DoubleCount() {
  const [count] = useState(10);
  const doubleCount = useMemo(() => count * 2, [count]);

  return <div>{doubleCount}</div>;
}
