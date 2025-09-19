import { createHighlighter } from "shiki";
import MarkdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";
import componentPartyShikiTheme from "./componentPartyShikiTheme.js";

// Singleton instances
let highlighter = null;
let md = null;

async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      theme: componentPartyShikiTheme,
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
  return highlighter;
}

async function getMarkdownIt() {
  if (!md) {
    md = MarkdownIt({
      html: true,
    });

    md.use(
      await Shiki({
        theme: componentPartyShikiTheme,
      }),
    );
  }
  return md;
}

export async function codeToHighlightCodeHtml(code, lang) {
  const highlighterInstance = await getHighlighter();
  const html = await highlighterInstance.codeToHtml(code, {
    lang,
    theme: componentPartyShikiTheme,
  });

  return html;
}

export async function markdownToHighlightedHtml(markdownText) {
  const mdInstance = await getMarkdownIt();
  const html = mdInstance.render(markdownText);
  return html;
}

// Function to dispose of instances when no longer needed
export async function disposeHighlighter() {
  if (highlighter) {
    await highlighter.dispose();
    highlighter = null;
  }
  md = null;
}
