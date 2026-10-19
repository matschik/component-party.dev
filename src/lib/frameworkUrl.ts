import { frameworkVersions, matchFrameworkId } from "#frameworks";
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

/**
 * The prerendered page of a pair: ids resolved to concrete versions, then
 * ordered as in `frameworkVersions`, like `canonicalPairs()`. Links must use
 * this form; any other order or alias only reaches the page through a 301.
 */
export function canonicalComparisonPath(idA: string, idB: string): string {
  const order = (id: string) => {
    const version = matchFrameworkId(id);
    if (!version) throw new Error(`Unknown framework id: ${id}`);
    return { id: version.id, index: frameworkVersions.indexOf(version) };
  };
  const [a, b] = [order(idA), order(idB)].sort((x, y) => x.index - y.index);
  return createComparisonPath(a.id, b.id);
}

export function createSearchParamUrl(ids: string[]): string {
  return `/?${FRAMEWORK_IDS_FROM_URL_KEY}=${ids.join(FRAMEWORK_SEPARATOR)}`;
}
