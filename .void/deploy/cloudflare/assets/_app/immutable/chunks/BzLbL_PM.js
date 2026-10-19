import { t } from "./_G9GqTeF.js";
import { t as o } from "./BJrQ6ZPu.js";
import { o as s, u as r } from "./CsfbFpIp.js";
new TextEncoder();
function e(t, o, r) {
  throw (
    void 0 !== o && "string" != typeof o && ({ message: o, ...r } = o),
    new s({ ...r, status: t, message: o ?? `Error: ${t}` })
  );
}
function n() {
  const o = t.map((t) => t.id),
    s = [];
  for (let t = 0; t < o.length; t++) for (let r = t + 1; r < o.length; r++) s.push([o[t], o[r]]);
  return s;
}
export { e as n, n as t };
