/**
 * Add a class to some lines of Shiki's HTML, where each line is a
 * `<span class="line">`. Line numbers are 1-based. Works on a string, so the
 * prerendered page already carries the classes.
 */
export function markLines(
  html: string,
  lineNumbers: number[] | undefined,
  className: string,
): string {
  if (!lineNumbers?.length) return html;
  const marked = new Set(lineNumbers);
  let lineNumber = 0;
  return html.replace(/<span class="line">/g, (match) => {
    lineNumber++;
    return marked.has(lineNumber) ? `<span class="line ${className}">` : match;
  });
}
