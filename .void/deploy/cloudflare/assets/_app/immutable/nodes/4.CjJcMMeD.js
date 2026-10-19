import { t as a } from "../chunks/H_PjY6_i.js";
import {
  B as s,
  C as r,
  H as e,
  I as o,
  O as t,
  P as i,
  U as l,
  X as n,
  Z as g,
  c as m,
  d as c,
  i as d,
  tt as p,
  v,
  x as f,
  z as b,
} from "../chunks/D6jlWIdj.js";
import { n as x } from "../chunks/_G9GqTeF.js";
import { n as u, t as h } from "../chunks/BzLbL_PM.js";
var y = a({ load: () => k, prerender: () => !1 }),
  k = () => (
    u(404, "Not available in production"),
    {
      items: h().map(([a, s]) => {
        const r = x(a),
          e = x(s),
          o = `${a}-vs-${s}`;
        return {
          comparison: o,
          ogUrl: `/og/${o}.png`,
          label: `${r?.title ?? a} vs ${e?.title ?? s}`,
        };
      }),
    }
  ),
  $ = r('<meta name="robots" content="noindex"/>'),
  w = r(
    '<figure class="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"><a target="_blank" rel="noreferrer"><img loading="lazy" width="1200" height="630" class="block aspect-[1200/630] w-full bg-gray-50 dark:bg-gray-900"/></a> <figcaption class="px-3 py-2 text-sm"><div class="font-medium"> </div> <code class="text-xs text-gray-500"> </code></figcaption></figure>',
  ),
  O = r(
    '<main class="mx-auto max-w-7xl p-6"><h1 class="mb-1 text-2xl font-bold">OG image gallery</h1> <p class="mb-6 text-sm text-gray-500"> </p> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"></div></main>',
  );
function j(a, r) {
  g(r, !0);
  var x = O();
  m("15tat7o", (a) => {
    var s = $();
    (i(() => {
      b.title = "OG image gallery (dev)";
    }),
      f(a, s));
  });
  var u = l(s(x), 2),
    h = e(u),
    y = l(u, 2);
  (c(
    y,
    21,
    () => r.data.items,
    (a) => a.comparison,
    (a, r) => {
      var i = w(),
        n = s(i),
        g = e(n),
        m = l(n, 2),
        c = s(m),
        b = e(c, !0),
        x = l(c, 2),
        u = e(x, !0);
      (p(m),
        p(i),
        o(() => {
          (d(n, "href", t(r).ogUrl),
            d(g, "src", t(r).ogUrl),
            d(g, "alt", `OG image for ${t(r).label}`),
            v(b, t(r).label),
            v(u, t(r).comparison));
        }),
        f(a, i));
    },
  ),
    p(y),
    p(x),
    o(() =>
      v(h, `Dev-only preview of every comparison OG image (${r.data.items.length ?? ""} pairs).`),
    ),
    f(a, x),
    n());
}
export { j as component, y as universal };
