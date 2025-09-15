import { createHighlighter } from "shiki";
import MarkdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";
import componentPartyShikiTheme from "./componentPartyShikiTheme.js";

const highlighter = await createHighlighter({
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
    ripple: "jsx",
  },
});

const md = MarkdownIt({
  html: true,
});

md.use(
  await Shiki({
    theme: componentPartyShikiTheme,
  })
);

export async function codeToHighlightCodeHtml(code, lang) {
  const html = await highlighter.codeToHtml(code, {
    lang,
    theme: componentPartyShikiTheme,
  });

  return html;
}

export async function markdownToHighlightedHtml(markdownText) {
  const html = md.render(markdownText);
  return html;
}
