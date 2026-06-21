import { describe, it, expect } from "vitest";
import { createComparisonPath, parseComparison } from "./frameworkUrl";

describe("frameworkUrl", () => {
  it("builds a canonical comparison path", () => {
    expect(createComparisonPath("react", "vue3")).toBe("/compare/react-vs-vue3/");
  });
  it("parses a valid comparison param to canonical ids", () => {
    expect(parseComparison("react-vs-vue3")).toEqual(["react", "vue3"]);
  });
  it("maps a name alias to the latest stable id", () => {
    expect(parseComparison("react-vs-vue")).toEqual(["react", "vue3"]);
  });
  it("returns null for an unknown framework", () => {
    expect(parseComparison("react-vs-nope")).toBeNull();
  });
  it("returns null when not exactly two parts", () => {
    expect(parseComparison("react")).toBeNull();
    expect(parseComparison("a-vs-b-vs-c")).toBeNull();
  });
});
