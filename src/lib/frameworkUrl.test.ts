import { describe, it, expect } from "vitest";
import {
  createComparisonPath,
  parseComparison,
  createSearchParamUrl,
  BASE_URL,
} from "./frameworkUrl";

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
  it("builds a search param URL from framework ids", () => {
    expect(createSearchParamUrl(["react", "vue3"])).toBe("/?f=react-vue3");
  });
  it("exports the correct base URL", () => {
    expect(BASE_URL).toBe("https://component-party.dev");
  });
});
