import { useState } from "react";

export default function InputHello() {
  const [text, setText] = useState("Hello world");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <p>{text}</p>
      <input value={text} onChange={handleChange} />
    </>
  );
}
