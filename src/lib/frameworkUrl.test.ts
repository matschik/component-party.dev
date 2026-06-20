import { describe, expect, it } from "vite-plus/test";
import { FRAMEWORK_SEPARATOR } from "../constants.ts";

// Mirrors the framework-comparison URL encoding used to build comparison links.
const createFrameworkUrl = (frameworks: string[]) =>
  `/?f=${frameworks.join(FRAMEWORK_SEPARATOR)}`;

const parseFrameworksFromUrl = (query: string) =>
  query.replace(/^\/\?f=/, "").split(FRAMEWORK_SEPARATOR);

describe("framework comparison url", () => {
  it("encodes a list of frameworks with the separator", () => {
    expect(createFrameworkUrl(["react", "vue3"])).toBe("/?f=react-vue3");
  });

  it("round-trips through encode/parse", () => {
    const frameworks = ["react", "vue3", "svelte5"];
    expect(parseFrameworksFromUrl(createFrameworkUrl(frameworks))).toEqual(
      frameworks,
    );
  });
});
