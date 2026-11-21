import { describe, it, expect } from "vitest";
import { markLines } from "./markLines";

const html =
  '<pre><code><span class="line">a</span>\n<span class="line">b</span>\n<span class="line">c</span></code></pre>';

describe("markLines", () => {
  it("adds the class to the listed 1-based lines only", () => {
    expect(markLines(html, [1, 3], "added")).toBe(
      '<pre><code><span class="line added">a</span>\n<span class="line">b</span>\n<span class="line added">c</span></code></pre>',
    );
  });

  it("returns the HTML unchanged without lines", () => {
    expect(markLines(html, undefined, "added")).toBe(html);
    expect(markLines(html, [], "added")).toBe(html);
  });
});
