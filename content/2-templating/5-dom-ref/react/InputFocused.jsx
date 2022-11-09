import { useEffect, useRef } from "react";

export default function InputFocused() {
  const inputElement = useRef(null);

  useEffect(() => inputElement.current.focus(), []);

  return <input type="text" ref={inputElement} />;
}
