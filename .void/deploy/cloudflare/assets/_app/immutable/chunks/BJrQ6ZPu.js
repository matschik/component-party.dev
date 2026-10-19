var t = "font-weight: bold",
  e = "font-weight: normal";
function r(t, e, r) {
  const n = new Error(`${t}\n${e}\nhttps://svelte.dev/e/kit/${t}`);
  throw ((n.name = "SvelteKit error"), Error.captureStackTrace?.(n, r), n);
}
function n(t) {
  try {
    t();
  } catch (e) {
    return e;
  }
}
function o(t) {
  throw new Error("https://svelte.dev/e/kit/invalid_error_status");
}
function s(t) {
  throw new Error("https://svelte.dev/e/kit/invalid_export");
}
function a(t) {
  throw new Error("https://svelte.dev/e/kit/invalid_export_location");
}
function i(t) {
  throw new Error("https://svelte.dev/e/kit/load_invalid_response");
}
function h(t) {
  throw new Error("https://svelte.dev/e/kit/match_in_service_worker");
}
function v(t) {
  throw new Error("https://svelte.dev/e/kit/param_matcher_async");
}
function l(t) {
  throw new Error("https://svelte.dev/e/kit/param_matcher_result_invalid");
}
function c(t) {
  throw new Error("https://svelte.dev/e/kit/router_hash_page_options");
}
function w(t) {
  throw new Error("https://svelte.dev/e/kit/url_hash_unavailable");
}
export {
  h as a,
  c,
  n as d,
  e as f,
  i,
  w as l,
  s as n,
  v as o,
  r as p,
  a as r,
  l as s,
  o as t,
  t as u,
};
