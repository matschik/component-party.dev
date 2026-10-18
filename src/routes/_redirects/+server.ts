import { buildRedirectLines } from "../../../build/redirects.ts";

// Cloudflare reads `_redirects` at the root of the static output. A prerendered
// route puts it there: SvelteKit 3 no longer keeps files a Vite plugin writes
// into the client build directory.
export const prerender = true;

export function GET() {
  return new Response(buildRedirectLines().join("\n") + "\n", {
    headers: { "Content-Type": "text/plain" },
  });
}
