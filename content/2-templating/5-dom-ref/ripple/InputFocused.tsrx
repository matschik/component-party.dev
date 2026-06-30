export default function InputFocused() {
  function autofocus(element) {
    element.focus();
  }

  return <input ref={autofocus} />;
}
