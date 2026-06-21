export interface File {
  fileName: string;
  contentHtml: string;
  [key: string]: unknown;
}

export interface FrameworkSnippet {
  frameworkId: string;
  snippetId: string;
  files: File[];
  playgroundURL: string;
  markdownFiles: File[];
  snippetEditHref: string;
}
