import {
  createHighlighter,
  type HighlighterGeneric,
  type BundledLanguage,
  type BundledTheme,
} from "shiki";
import MarkdownIt from "markdown-it";
import { fromHighlighter } from "@shikijs/markdown-it/core";
import { componentPartyShikiTheme } from "./componentPartyShikiTheme.ts";

// Singleton instances
let highlighter: HighlighterGeneric<BundledLanguage, BundledTheme> | null =
  null;
let md: MarkdownIt | null = null;
let highlighterPromise: Promise<
  HighlighterGeneric<BundledLanguage, BundledTheme>
> | null = null;

async function getHighlighter(): Promise<
  HighlighterGeneric<BundledLanguage, BundledTheme>
> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [componentPartyShikiTheme],
      langs: [
        "javascript",
        "svelte",
        "html",
        "hbs",
        "gjs",
        "tsx",
        "jsx",
        "vue",
        "marko",
      ],
      langAlias: {
        ripple: "jsx", // until ripple is supported by shiki
      },
    });
  }

  if (!highlighter) {
    highlighter = await highlighterPromise;
  }

  return highlighter;
}

async function getMarkdownIt(): Promise<MarkdownIt> {
  if (!md) {
    md = MarkdownIt({
      html: true,
    });

    const highlighterInstance = await getHighlighter();
    md.use(
      fromHighlighter(highlighterInstance, {
        theme: componentPartyShikiTheme,
      }),
    );
  }
  return md;
}

export async function codeToHighlightCodeHtml(
  code: string,
  lang: string,
): Promise<string> {
  const highlighterInstance = await getHighlighter();
  const html = await highlighterInstance.codeToHtml(code, {
    lang,
    theme: componentPartyShikiTheme.name,
  });

  return html;
}

export async function markdownToHighlightedHtml(
  markdownText: string,
): Promise<string> {
  const mdInstance = await getMarkdownIt();
  const html = mdInstance.render(markdownText);
  return html;
}

// Function to dispose of instances when no longer needed
export async function disposeHighlighter(): Promise<void> {
  if (highlighter) {
    await highlighter.dispose();
    highlighter = null;
  }
  highlighterPromise = null;
  md = null;
}
