export function mustUseAngularHighlighter(fileContent: string): boolean;

export function highlightAngularComponent(
  fileContent: string,
  fileExt: string,
): Promise<string>;
