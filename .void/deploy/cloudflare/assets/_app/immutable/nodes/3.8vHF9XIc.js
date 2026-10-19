import { t } from "../chunks/H_PjY6_i.js";
import {
  C as a,
  I as e,
  N as r,
  O as s,
  U as i,
  V as o,
  X as n,
  Y as p,
  Z as m,
  c,
  i as d,
  u as l,
  x as f,
  z as k,
} from "../chunks/D6jlWIdj.js";
import { n as g } from "../chunks/_G9GqTeF.js";
import { i as u, n as w, t as y } from "../chunks/BpOEtbPk.js";
import { a as $, i as h, n as j, t as I } from "../chunks/BC5lwRWa.js";
import { n as v, t as A } from "../chunks/BzLbL_PM.js";
var B = t({ entries: () => S, load: () => x, prerender: () => !0 }),
  S = () => A().map(([t, a]) => ({ comparison: `${t}-vs-${a}` })),
  x = async ({ params: t }) => {
    const a = u(t.comparison);
    a || v(404, "Unknown framework comparison");
    const [e, r] = a;
    `/compare/${t.comparison}/` !== w(e, r) && v(404, "Non-canonical comparison");
    const s = g(e),
      i = g(r),
      o = await Promise.all([e, r].map(async (t) => [t, (await $[t]()).default]));
    return {
      frameworkIds: [e, r],
      titleA: s.title,
      titleB: i.title,
      initialSnippets: Object.fromEntries(o),
    };
  },
  b = a(
    '<meta name="description"/> <link rel="canonical"/> <meta property="og:url"/> <meta property="og:title"/> <meta property="og:description"/> <meta property="og:image"/> <meta property="og:image:width" content="1200"/> <meta property="og:image:height" content="630"/> <meta property="twitter:title"/> <meta property="twitter:description"/> <meta property="twitter:image"/> <!>',
    1,
  );
function C(t, a) {
  m(a, !0);
  const g = p(() => `${y}${w(a.data.frameworkIds[0], a.data.frameworkIds[1])}`),
    u = p(() => `${y}/og/${a.data.frameworkIds[0]}-vs-${a.data.frameworkIds[1]}.png`),
    $ = p(() => `${a.data.titleA} vs ${a.data.titleB} - Component Party`),
    v = p(
      () =>
        `Compare ${a.data.titleA} vs ${a.data.titleB} frameworks side-by-side. See syntax differences, features, and code examples for ${a.data.titleA} and ${a.data.titleB}.`,
    ),
    A = p(() =>
      j({
        titleA: a.data.titleA,
        titleB: a.data.titleB,
        description: s(v),
        url: s(g),
        image: s(u),
        buildDate: I,
      }),
    );
  (c("h8r7as", (t) => {
    var a = b(),
      n = o(a),
      p = i(n, 2),
      m = i(p, 2),
      c = i(m, 2),
      w = i(c, 2),
      y = i(w, 2),
      h = i(y, 6),
      j = i(h, 2),
      I = i(j, 2),
      B = i(I, 2);
    (l(B, () => `<script type="application/ld+json">${JSON.stringify(s(A))}<\/script>`),
      e(() => {
        (d(n, "content", s(v)),
          d(p, "href", s(g)),
          d(m, "content", s(g)),
          d(c, "content", s($)),
          d(w, "content", s(v)),
          d(y, "content", s(u)),
          d(h, "content", s($)),
          d(j, "content", s(v)),
          d(I, "content", s(u)));
      }),
      r(() => {
        k.title = s($) ?? "";
      }),
      f(t, a));
  }),
    h(t, {
      get initialFrameworkIds() {
        return a.data.frameworkIds;
      },
      get initialSnippets() {
        return a.data.initialSnippets;
      },
      persist: !1,
    }),
    n());
}
export { C as component, B as universal };
