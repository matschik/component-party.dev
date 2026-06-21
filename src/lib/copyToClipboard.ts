export default async function copyToClipboard(value: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      // Permission denied or unavailable (e.g. non-secure context) — fall back.
    }
  }

  return legacyCopy(value);
}

function legacyCopy(value: string): boolean {
  const textarea = document.createElement("textarea");
  // Use .value, not .innerHTML: assigning to innerHTML reparses the string as
  // HTML, so any "<...>" sequence (JSX, TS generics) is interpreted as a tag and
  // dropped from the copied text — corrupting nearly every code snippet.
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  let success = false;
  try {
    success = document.execCommand("copy");
  } catch {
    success = false;
  }

  textarea.remove();
  return success;
}
