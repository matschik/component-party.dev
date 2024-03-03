export default function copyToClipboard(value) {
  const $textarea = document.createElement("textarea");
  $textarea.innerHTML = value;
  document.body.appendChild($textarea);
  $textarea.select();
  let success = false;
  try {
    document.execCommand("copy");
    success = true;
  } catch (err) {
    alert(
      "Oops, unable to copy to clipboard. Please check website permissions."
    );
  }
  $textarea.remove();
  return success;
}
