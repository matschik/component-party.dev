import { useEffect, useRef } from "react";

export default function InputIndeterminate() {
  const inputElement = useRef(null);

  useEffect(() => inputElement.current.indeterminate = true, []);

  return <input type="checkbox" ref={inputElement} />;
}
