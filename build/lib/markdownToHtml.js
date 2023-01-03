import withShiki from "@stefanprobst/remark-shiki";
import fromMarkdown from "remark-parse";
import * as shiki from "shiki";
import { unified } from "unified";
import toHast from "remark-rehype";
import withHtmlInMarkdown from "rehype-raw";
import toHtml from "rehype-stringify";
import componentPartyShikiTheme from "./componentPartyShikiTheme.js";

export default async function markdownToHtml(code) {
  async function createProcessor() {
    const highlighter = await shiki.getHighlighter({
      theme: componentPartyShikiTheme,
    });

    const processor = unified()
      .use(fromMarkdown)
      .use(withShiki, { highlighter })
      .use(toHast, { allowDangerousHtml: true })
      .use(withHtmlInMarkdown)
      .use(toHtml);

    return processor;
  }

  const processor = await createProcessor();
  const vfile = await processor.process(code);
  return String(vfile);
}
