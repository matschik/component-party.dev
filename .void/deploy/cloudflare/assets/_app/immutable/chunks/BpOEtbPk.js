import { n } from "./_G9GqTeF.js";
var t = "https://component-party.dev",
  r = "-vs-";
function o(t) {
  const o = t.split(r);
  if (2 !== o.length) return null;
  const s = n(o[0]),
    i = n(o[1]);
  return s && i ? [s.id, i.id] : null;
}
function s(n, t) {
  return `/compare/${n}${r}${t}/`;
}
function i(n) {
  return `/?f=${n.join("-")}`;
}
export { o as i, s as n, i as r, t };
