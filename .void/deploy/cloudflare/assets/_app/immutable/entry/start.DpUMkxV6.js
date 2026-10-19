const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "../chunks/Cv-yfnGi.js",
      "../chunks/kZMSSyyE.js",
      "./payload.BeGvdC57.js",
      "../chunks/D6jlWIdj.js",
      "../chunks/BJrQ6ZPu.js",
      "../chunks/yrGLdQ6D.js",
      "../chunks/CsfbFpIp.js",
    ]),
) => i.map((i) => d[i]);
import { set_payload as t } from "./payload.BeGvdC57.js";
import { t as r } from "../chunks/Ck0A4US8.js";
var a;
function n(n) {
  (t(n),
    (a ??= r(
      () => import("../chunks/Cv-yfnGi.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
      import.meta.url,
    )));
}
async function o(...t) {
  return (await a).start(...t);
}
async function s(...t) {
  return (await a).load_css(...t);
}
export { n as init, s as load_css, o as start };
