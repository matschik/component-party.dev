import { SITE_PUBLISHED_DATE } from "./seo";

// __BUILD_DATE__ is replaced at build time by Vite `define` (see vite.config.ts).
// Falls back to the publish date if the define is absent (e.g. unit-test context).
export const BUILD_DATE: string =
  typeof __BUILD_DATE__ === "string" ? __BUILD_DATE__ : SITE_PUBLISHED_DATE;
