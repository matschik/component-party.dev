import { describe, it, expect } from "vitest";
import { renderComparisonOgPng } from "./renderOgImage";

describe("renderComparisonOgPng", () => {
  it("renders a PNG buffer for a comparison", async () => {
    const png = await renderComparisonOgPng({
      titleA: "React",
      titleB: "Svelte 5",
      imgA: "framework/react.svg",
      imgB: "framework/svelte.svg",
    });
    // PNG magic number: 89 50 4E 47
    expect(png[0]).toBe(0x89);
    expect(png[1]).toBe(0x50);
    expect(png[2]).toBe(0x4e);
    expect(png[3]).toBe(0x47);
    expect(png.length).toBeGreaterThan(1000);
  });
});
