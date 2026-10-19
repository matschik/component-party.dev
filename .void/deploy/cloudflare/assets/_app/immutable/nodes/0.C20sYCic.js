import { t as e } from "../chunks/H_PjY6_i.js";
import {
  B as a,
  C as s,
  E as r,
  H as t,
  I as l,
  J as n,
  K as i,
  L as c,
  O as o,
  T as v,
  U as u,
  V as m,
  X as d,
  Z as p,
  d as g,
  et as h,
  f,
  h as x,
  i as b,
  p as y,
  tt as k,
  v as w,
  x as A,
} from "../chunks/D6jlWIdj.js";
import { t as R } from "../chunks/BzeQ7qyJ.js";
import { r as S } from "../chunks/BpOEtbPk.js";
var V = e({ prerender: () => !0, trailingSlash: () => C }),
  C = "always";
h();
var j = s('<span class="iconify ph--spinner animate-spin size-4 mx-1" aria-hidden="true"></span>'),
  P = s("<span> </span>"),
  z = s(
    '<div class="hidden h-full items-center justify-center px-3 sm:flex border-[#373b43] sm:border-l"><!></div>',
  ),
  E = s(
    '<a class="bg-[#21262d] text-white border border-[#373b43] py-1 rounded flex items-center text-sm shadow-inner hover:opacity-90" target="_blank"><span class="flex items-center px-3 sm:space-x-2"><span class="iconify simple-icons--github size-[1.3rem] sm:size-[1.1rem]" aria-hidden="true"></span> <span class="hidden sm:inline">Star</span></span> <!></a>',
  );
function O(e, s) {
  p(s, !0);
  const v = "matschik/component-party.dev",
    m = R("github-star-count-v2", { value: "0", fetchedAt: 0 });
  let g = n("0"),
    h = n(!1);
  function f(e) {
    return /^[\d,.]+\s*[kMGTPEZY]?$/i.test(e.trim());
  }
  c(() => {
    (async function () {
      const e = m.getJSON();
      if (!(e && f(e.value) && (i(g, e.value, !0), e.fetchedAt > Date.now() - 3e5))) {
        i(h, !0);
        try {
          const e = await fetch(`https://img.shields.io/github/stars/${v}.json`, {
            headers: { Accept: "application/json" },
          })
            .finally(() => {
              i(h, !1);
            })
            .then((e) => e.json());
          e.message &&
            f(e.message) &&
            (i(g, e.message, !0), m.setJSON({ value: o(g), fetchedAt: Date.now() }));
        } catch (a) {}
      }
    })();
  });
  var x = E();
  (b(x, "href", `https://github.com/${v}`), b(x, "aria-label", `Star ${v} on GitHub`));
  var S = u(a(x), 2),
    V = (e) => {
      var s = z(),
        r = a(s),
        n = (e) => {
          var a = j();
          A(e, a);
        },
        i = (e) => {
          var a = P(),
            s = t(a, !0);
          (l(() => w(s, o(g))), A(e, a));
        };
      (y(r, (e) => {
        o(h) && "0" === o(g) ? e(n) : e(i, -1);
      }),
        k(s),
        A(e, s));
    };
  (y(S, (e) => {
    (o(h) || "0" !== o(g)) && e(V);
  }),
    k(x),
    r("click", x, function () {
      m.remove();
    }),
    A(e, x),
    d());
}
v(["click"]);
var J = s(
  '<header class="backdrop-blur bg-gray-900/80 border-b border-gray-700"><div class="px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center py-3"><a class="font-semibold text-lg flex items-center space-x-3" href="/"><img src="/popper.svg" alt="logo" class="size-5"/> <h1>Component Party</h1></a> <div class="flex items-center space-x-4"><!></div></div></div></header>',
);
var $ = (e) => S(e),
  G = [
    {
      title: "Most Popular Frameworks",
      links: [
        { name: "React vs Vue", url: $(["react", "vue3"]) },
        { name: "React vs Angular", url: $(["react", "angularRenaissance"]) },
        { name: "Vue vs React", url: $(["vue3", "react"]) },
        { name: "Vue vs Angular", url: $(["vue3", "angularRenaissance"]) },
        { name: "Angular vs React", url: $(["angularRenaissance", "react"]) },
        { name: "Angular vs Vue", url: $(["angularRenaissance", "vue3"]) },
        { name: "Ember vs React", url: $(["emberPolaris", "react"]) },
        { name: "Ember vs Vue", url: $(["emberPolaris", "vue3"]) },
      ],
    },
    {
      title: "Popular frameworks vs Rising frameworks",
      links: [
        { name: "React vs Svelte", url: $(["react", "svelte5"]) },
        { name: "React vs Solid", url: $(["react", "solid"]) },
        { name: "Vue vs Svelte", url: $(["vue3", "svelte5"]) },
        { name: "Vue vs Solid", url: $(["vue3", "solid"]) },
        { name: "Angular vs Svelte", url: $(["angularRenaissance", "svelte5"]) },
        { name: "Angular vs Solid", url: $(["angularRenaissance", "solid"]) },
      ],
    },
    {
      title: "Comparing Legacy version & Current Version",
      links: [
        { name: "Svelte 4 vs Svelte 5", url: $(["svelte4", "svelte5"]) },
        { name: "Vue 2 vs Vue 3", url: $(["vue2", "vue3"]) },
        { name: "Angular vs Angular Renaissance", url: $(["angular", "angularRenaissance"]) },
        { name: "Aurelia 1 vs Aurelia 2", url: $(["aurelia1", "aurelia2"]) },
      ],
    },
    {
      title: "Comparing Current Version & Upcoming Version",
      links: [{ name: "Ember Octane vs Ember Polaris", url: $(["emberOctane", "emberPolaris"]) }],
    },
  ],
  H = s('<li><a class="text-sm leading-6 text-gray-300 hover:text-white"> </a></li>'),
  M = s(
    '<div class="md:grid md:gap-8"><div><h3 class="text-sm font-semibold leading-6 text-white"> </h3> <nav><ul role="list" class="mt-2 space-y-2"></ul></nav></div></div>',
  ),
  B = s(
    '<footer class="bg-gray-900"><h2 class="sr-only">Footer</h2> <div class="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pt-24 lg:px-8"><div class="xl:grid xl:grid-cols-3 xl:gap-8"><div class="space-y-8"><a class="font-semibold text-xl flex items-center space-x-3" href="/"><img src="/popper.svg" alt="logo" class="size-7"/> <span>Component party</span></a> <p class="text-gray-300">Web component JavaScript frameworks overview by their syntax and features</p> <div class="flex space-x-6"><a href="https://github.com/matschik/component-party.dev" class="text-gray-500 hover:text-gray-400"><span class="sr-only">GitHub</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></a></div></div> <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"></div></div></div></footer>',
  );
var D = s("<!> <!> <!>", 1);
function F(e, s) {
  var r = D(),
    n = m(r);
  !(function (e) {
    var s = J(),
      r = a(s),
      t = a(r),
      l = u(a(t), 2);
    (O(a(l), {}), k(l), k(t), k(r), k(s), A(e, s));
  })(n);
  var i = u(n, 2);
  (x(i, () => s.children),
    (function (e) {
      var s = B(),
        r = u(a(s), 2),
        n = a(r),
        i = u(a(n), 2);
      (g(
        i,
        5,
        () => G,
        f,
        (e, s) => {
          var r = M(),
            n = a(r),
            i = a(n),
            c = t(i, !0),
            v = u(i, 2),
            m = a(v);
          (g(
            m,
            5,
            () => o(s).links,
            f,
            (e, s) => {
              var r = H(),
                n = a(r),
                i = t(n, !0);
              (k(r),
                l(() => {
                  (b(n, "href", o(s).url), w(i, o(s).name));
                }),
                A(e, r));
            },
          ),
            k(m),
            k(v),
            k(n),
            k(r),
            l(() => {
              (w(c, o(s).title), b(v, "aria-label", o(s).title));
            }),
            A(e, r));
        },
      ),
        k(i),
        k(n),
        k(r),
        k(s),
        A(e, s));
    })(u(i, 2)),
    A(e, r));
}
export { F as component, V as universal };
