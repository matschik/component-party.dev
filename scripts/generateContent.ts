import generateContent from "../build/lib/generateContent.ts";
import { disposeHighlighter } from "../build/lib/highlighter.ts";

async function main() {
  try {
    await generateContent();
  } finally {
    await disposeHighlighter();
  }
}

main();
