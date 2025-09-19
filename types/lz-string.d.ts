declare module "@matschik/lz-string" {
  export function compressToURL(str: string): string;
  export function compressToBase64(str: string): string;
  export function decompressFromURL(str: string): string;
  export function decompressFromBase64(str: string): string;
}
