export function codeToHighlightCodeHtml(
  code: string,
  language: string,
): Promise<string>;

export function markdownToHighlightedHtml(markdown: string): Promise<string>;

export function disposeHighlighter(): Promise<void>;
