import { t as e } from "../chunks/H_PjY6_i.js";
import {
  C as t,
  I as a,
  P as r,
  U as n,
  V as s,
  X as o,
  Z as i,
  c as p,
  i as m,
  u as c,
  x as l,
  z as d,
} from "../chunks/D6jlWIdj.js";
import { t as f } from "../chunks/BpOEtbPk.js";
import { a as g, i as u, r as y, t as k } from "../chunks/BC5lwRWa.js";
var w = e({ load: () => h, prerender: () => !0 }),
  h = async () => {
    const e = ["react", "svelte5"],
      t = await Promise.all(e.map(async (e) => [e, (await g[e]()).default]));
    return { frameworkIds: e, initialSnippets: Object.fromEntries(t) };
  },
  S = t(
    '<meta name="description" content="Compare JavaScript frameworks side-by-side: React, Vue, Angular, Svelte, Solid.js, and more. See syntax differences, features, and code examples for web development frameworks."/> <link rel="canonical"/> <meta property="og:url"/> <meta property="og:title" content="Component Party"/> <meta property="og:image"/> <meta property="og:image:width" content="1200"/> <meta property="og:image:height" content="630"/> <meta property="twitter:image"/> <!>',
    1,
  );
function j(e, t) {
  i(t, !0);
  const g = y(k);
  (p("1uha8ag", (e) => {
    var t = S(),
      o = n(s(t), 2),
      i = n(o, 2),
      p = n(i, 4),
      u = n(p, 6),
      y = n(u, 2);
    (c(y, () => `<script type="application/ld+json">${JSON.stringify(g)}<\/script>`),
      a(() => {
        (m(o, "href", `${f}/`),
          m(i, "content", `${f}/`),
          m(p, "content", `${f}/banner2.png`),
          m(u, "content", `${f}/banner2.png`));
      }),
      r(() => {
        d.title = "Component Party";
      }),
      l(e, t));
  }),
    u(e, {
      get initialFrameworkIds() {
        return t.data.frameworkIds;
      },
      get initialSnippets() {
        return t.data.initialSnippets;
      },
      persist: !0,
    }),
    o());
}
export { j as component, w as universal };
