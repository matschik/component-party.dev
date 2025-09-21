#!/usr/bin/env node

import generateContent from "../build/lib/generateContent.ts";

const args = process.argv.slice(2);
const noCache = args.includes("--no-cache") || args.includes("--force");

console.log(`Generating content${noCache ? " (no cache)" : ""}...`);

try {
  await generateContent({ noCache });
  console.log("Content generation completed successfully!");
} catch (error) {
  console.error("Error generating content:", error);
  process.exit(1);
}
