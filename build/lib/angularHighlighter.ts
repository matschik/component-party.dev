export function mustUseAngularHighlighter(fileContent: string): boolean {
  return fileContent.includes("@angular/core") && fileContent.includes("template");
}
