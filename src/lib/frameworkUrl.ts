import { matchFrameworkId } from "@frameworks";
import { FRAMEWORK_SEPARATOR, FRAMEWORK_IDS_FROM_URL_KEY } from "./constants";

export const BASE_URL = "https://component-party.dev";
const COMPARISON_SEPARATOR = "-vs-";

export function parseComparison(param: string): [string, string] | null {
  const parts = param.split(COMPARISON_SEPARATOR);
  if (parts.length !== 2) return null;
  const a = matchFrameworkId(parts[0]);
  const b = matchFrameworkId(parts[1]);
  if (!a || !b) return null;
  return [a.id, b.id];
}

export function createComparisonPath(idA: string, idB: string): string {
  return `/compare/${idA}${COMPARISON_SEPARATOR}${idB}/`;
}

export function createSearchParamUrl(ids: string[]): string {
  return `/?${FRAMEWORK_IDS_FROM_URL_KEY}=${ids.join(FRAMEWORK_SEPARATOR)}`;
}
