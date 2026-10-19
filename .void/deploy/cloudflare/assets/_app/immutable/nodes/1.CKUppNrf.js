import {
  B as a,
  C as s,
  H as t,
  I as e,
  N as r,
  O as o,
  U as n,
  X as i,
  Y as c,
  Z as m,
  c as p,
  d as l,
  i as d,
  p as u,
  tt as f,
  v as g,
  x as h,
  z as x,
} from "../chunks/D6jlWIdj.js";
import { n as v } from "../chunks/_G9GqTeF.js";
import { n as b } from "../chunks/BpOEtbPk.js";
import { t as y } from "../chunks/yrGLdQ6D.js";
import "../chunks/OmCwqcLG.js";
var k = s('<meta name="robots" content="noindex"/>'),
  j = s(
    '<a class="rounded border border-gray-700 px-3 py-1 text-sm opacity-80 transition-all hover:bg-gray-800 hover:opacity-100"> </a>',
  ),
  w = s(
    '<div class="mt-10"><p class="mb-3 text-sm uppercase tracking-wide text-gray-500">Popular comparisons</p> <div class="flex flex-wrap justify-center gap-2"></div></div>',
  ),
  P = s(
    '<main class="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20" data-testid="error-page"><img src="/popper.svg" alt="" class="size-12 mb-6"/> <p class="text-7xl font-bold tracking-tight" data-testid="error-status"> </p> <h1 class="mt-3 text-2xl font-semibold"> </h1> <p class="mt-3 max-w-md text-gray-400"> </p> <a href="/" class="mt-8 rounded-md border border-blue-900 bg-gray-900 px-5 py-2.5 font-medium transition-all hover:bg-gray-800">Back to comparisons</a> <!></main>',
  );
function $(s, $) {
  m($, !0);
  const z = [
      ["react", "vue3"],
      ["react", "svelte5"],
      ["vue3", "svelte5"],
      ["react", "angularRenaissance"],
    ].map(([a, s]) => ({ href: b(a, s), label: `${v(a)?.title} vs ${v(s)?.title}` })),
    B = c(() => 404 === y.status),
    C = c(() => (o(B) ? "Page not found" : "Something went wrong")),
    A = c(() =>
      o(B)
        ? "This page doesn’t exist — but plenty of framework comparisons do."
        : y.error?.message || "An unexpected error occurred.",
    );
  var H = P();
  p("1j96wlh", (a) => {
    var s = k();
    (r(() => {
      x.title = `${y.status ?? ""} · Component Party`;
    }),
      h(a, s));
  });
  var I = n(a(H), 2),
    N = t(I, !0),
    O = n(I, 2),
    R = t(O, !0),
    S = n(O, 2),
    T = t(S, !0),
    U = n(S, 4),
    X = (s) => {
      var r = w(),
        i = n(a(r), 2);
      (l(
        i,
        21,
        () => z,
        (a) => a.href,
        (a, s) => {
          var r = j(),
            n = t(r, !0);
          (e(() => {
            (d(r, "href", o(s).href), g(n, o(s).label));
          }),
            h(a, r));
        },
      ),
        f(i),
        f(r),
        h(s, r));
    };
  (u(U, (a) => {
    o(B) && a(X);
  }),
    f(H),
    e(() => {
      (g(N, y.status), g(R, o(C)), g(T, o(A)));
    }),
    h(s, H),
    i());
}
export { $ as component };
