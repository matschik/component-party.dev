import { t as e } from "./Ck0A4US8.js";
import {
  $ as t,
  B as i,
  C as s,
  D as r,
  E as a,
  F as n,
  G as o,
  H as p,
  I as l,
  J as c,
  K as d,
  L as u,
  M as m,
  O as f,
  Q as v,
  R as h,
  S as g,
  T as y,
  U as b,
  V as x,
  W as w,
  X as I,
  Y as _,
  Z as D,
  a as k,
  b as N,
  d as E,
  i as z,
  j,
  m as A,
  n as O,
  o as S,
  p as $,
  q as P,
  r as L,
  s as R,
  tt as C,
  u as T,
  v as V,
  x as M,
} from "./D6jlWIdj.js";
import { t as q } from "./BzeQ7qyJ.js";
import { n as W, t as H } from "./_G9GqTeF.js";
import { t as B } from "./yrGLdQ6D.js";
import "./OmCwqcLG.js";
import { t as F } from "./kZMSSyyE.js";
var U = {
    svelte5: () => e(() => import("./DOB2IG7S.js"), [], import.meta.url),
    react: () => e(() => import("./DjiN3OoC.js"), [], import.meta.url),
    vue3: () => e(() => import("./DzcgDKnZ.js"), [], import.meta.url),
    angularRenaissance: () => e(() => import("./Bg_Aa1Gp.js"), [], import.meta.url),
    angularClassic: () => e(() => import("./Bjo1mrU0.js"), [], import.meta.url),
    lit: () => e(() => import("./GttJ7QYE.js"), [], import.meta.url),
    emberPolaris: () => e(() => import("./D2nKcmPC.js"), [], import.meta.url),
    emberOctane: () => e(() => import("./BHK7fHvG.js"), [], import.meta.url),
    solid: () => e(() => import("./Bin0IC5O.js"), [], import.meta.url),
    svelte4: () => e(() => import("./KPbSG-4M.js"), [], import.meta.url),
    vue2: () => e(() => import("./mwf4Kfnj.js"), [], import.meta.url),
    alpine: () => e(() => import("./DW-EQ_qj.js"), [], import.meta.url),
    mithril: () => e(() => import("./C6rgabnM.js"), [], import.meta.url),
    aurelia2: () => e(() => import("./C2O_wjmv.js"), [], import.meta.url),
    qwik: () => e(() => import("./DDRv7D67.js"), [], import.meta.url),
    marko: () => e(() => import("./CG3W_Z7O.js"), [], import.meta.url),
    aurelia1: () => e(() => import("./fEy2jgIM.js"), [], import.meta.url),
    ripple: () => e(() => import("./D3MNEAuU.js"), [], import.meta.url),
  },
  J = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"],
  G = ["difference", "intersection", "symmetricDifference", "union"],
  Y = !1,
  K = class e extends Set {
    #e = new Map();
    #t = c(0);
    #i = c(0);
    #s = m || -1;
    constructor(e) {
      if ((super(), e)) {
        for (var t of e) super.add(t);
        this.#i.v = super.size;
      }
      Y || this.#r();
    }
    #a(e) {
      return m === this.#s ? c(e) : P(e);
    }
    #r() {
      Y = !0;
      var t = e.prototype,
        i = Set.prototype;
      for (const e of J)
        t[e] = function (...t) {
          return (f(this.#t), i[e].apply(this, t));
        };
      for (const s of G)
        t[s] = function (...t) {
          f(this.#t);
          var r = i[s].apply(this, t);
          return new e(r);
        };
    }
    has(e) {
      var t = super.has(e),
        i = this.#e,
        s = i.get(e);
      if (void 0 === s) {
        if (!t) return (f(this.#t), !1);
        ((s = this.#a(!0)), i.set(e, s));
      }
      return (f(s), t);
    }
    add(e) {
      return (super.has(e) || (super.add(e), d(this.#i, super.size), o(this.#t)), this);
    }
    delete(e) {
      var t = super.delete(e),
        i = this.#e,
        s = i.get(e);
      return (
        void 0 !== s && (i.delete(e), d(s, !1)), t && (d(this.#i, super.size), o(this.#t)), t
      );
    }
    clear() {
      if (0 !== super.size) {
        super.clear();
        var e = this.#e;
        for (var t of e.values()) d(t, !1);
        (e.clear(), d(this.#i, 0), o(this.#t));
      }
    }
    keys() {
      return this.values();
    }
    values() {
      return (f(this.#t), super.values());
    }
    entries() {
      return (f(this.#t), super.entries());
    }
    [Symbol.iterator]() {
      return this.keys();
    }
    get size() {
      return f(this.#i);
    }
  },
  Q = class extends Map {
    #e = new Map();
    #t = c(0);
    #i = c(0);
    #s = m || -1;
    constructor(e) {
      if ((super(), e)) {
        for (var [t, i] of e) super.set(t, i);
        this.#i.v = super.size;
      }
    }
    #a(e) {
      return m === this.#s ? c(e) : P(e);
    }
    has(e) {
      var t = this.#e,
        i = t.get(e);
      if (void 0 === i) {
        if (!super.has(e)) return (f(this.#t), !1);
        ((i = this.#a(0)), t.set(e, i));
      }
      return (f(i), !0);
    }
    forEach(e, t) {
      (this.#n(), super.forEach(e, t));
    }
    get(e) {
      var t = this.#e,
        i = t.get(e);
      if (void 0 === i) {
        if (!super.has(e)) return void f(this.#t);
        ((i = this.#a(0)), t.set(e, i));
      }
      return (f(i), super.get(e));
    }
    getOrInsert(e, t) {
      return (super.has(e) || this.set(e, t), this.get(e));
    }
    getOrInsertComputed(e, t) {
      return (super.has(e) || this.set(e, t(e)), this.get(e));
    }
    set(e, t) {
      var i = this.#e,
        s = i.get(e),
        r = super.get(e),
        a = super.set(e, t),
        n = this.#t;
      if (void 0 === s) ((s = this.#a(0)), i.set(e, s), d(this.#i, super.size), o(n));
      else if (r !== t) {
        o(s);
        var p = null === n.reactions ? null : new Set(n.reactions);
        (null !== p && s.reactions?.every((e) => p.has(e))) || o(n);
      }
      return a;
    }
    delete(e) {
      var t = this.#e,
        i = t.get(e),
        s = super.delete(e);
      return (
        void 0 !== i && (t.delete(e), d(i, -1)), s && (d(this.#i, super.size), o(this.#t)), s
      );
    }
    clear() {
      if (0 !== super.size) {
        super.clear();
        var e = this.#e;
        for (var t of (d(this.#i, 0), e.values())) d(t, -1);
        (o(this.#t), e.clear());
      }
    }
    #n() {
      f(this.#t);
      var e = this.#e;
      if (this.#i.v !== e.size)
        for (var t of super.keys())
          if (!e.has(t)) {
            var i = this.#a(0);
            (0, e.set(t, i));
          }
      for ([, i] of this.#e) f(i);
    }
    keys() {
      return (f(this.#t), super.keys());
    }
    values() {
      return (this.#n(), super.values());
    }
    entries() {
      return (this.#n(), super.entries());
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return (f(this.#i), super.size);
    }
  },
  X = s('<img class="shrink-0"/>'),
  Z = s(
    '<div class="flex items-center space-x-1.5"><!> <span class="shrink-0 inline-block"> </span></div>',
  );
function ee(e, t) {
  D(t, !0);
  let s = O(t, "size", 3, 20);
  const r = _(() => W(t.id));
  var a = Z(),
    n = i(a),
    o = (e) => {
      var t = X();
      (l(() => {
        (z(t, "src", "/" + f(r).img),
          z(t, "width", s()),
          z(t, "height", s()),
          z(t, "alt", `logo of ${f(r).title}`));
      }),
        M(e, t));
    };
  $(n, (e) => {
    f(r)?.img && e(o);
  });
  var c = b(n, 2),
    d = p(c, !0);
  (C(a), l(() => V(d, f(r)?.title || t.id)), M(e, a), I());
}
var te = [
    { sectionId: "reactivity", sectionDirName: "1-reactivity", title: "Reactivity" },
    { sectionId: "templating", sectionDirName: "2-templating", title: "Templating" },
    { sectionId: "lifecycle", sectionDirName: "3-lifecycle", title: "Lifecycle" },
    {
      sectionId: "component-composition",
      sectionDirName: "4-component-composition",
      title: "Component composition",
    },
    { sectionId: "form-input", sectionDirName: "6-form-input", title: "Form input" },
    { sectionId: "webapp-features", sectionDirName: "7-webapp-features", title: "Webapp features" },
  ],
  ie = [
    {
      sectionId: "reactivity",
      snippetId: "declare-state",
      snippetDirName: "1-declare-state",
      sectionDirName: "1-reactivity",
      title: "Declare state",
    },
    {
      sectionId: "reactivity",
      snippetId: "update-state",
      snippetDirName: "2-update-state",
      sectionDirName: "1-reactivity",
      title: "Update state",
    },
    {
      sectionId: "reactivity",
      snippetId: "computed-state",
      snippetDirName: "3-computed-state",
      sectionDirName: "1-reactivity",
      title: "Computed state",
    },
    {
      sectionId: "templating",
      snippetId: "minimal-template",
      snippetDirName: "1-minimal-template",
      sectionDirName: "2-templating",
      title: "Minimal template",
    },
    {
      sectionId: "templating",
      snippetId: "styling",
      snippetDirName: "2-styling",
      sectionDirName: "2-templating",
      title: "Styling",
    },
    {
      sectionId: "templating",
      snippetId: "loop",
      snippetDirName: "3-loop",
      sectionDirName: "2-templating",
      title: "Loop",
    },
    {
      sectionId: "templating",
      snippetId: "event-click",
      snippetDirName: "4-event-click",
      sectionDirName: "2-templating",
      title: "Event click",
    },
    {
      sectionId: "templating",
      snippetId: "dom-ref",
      snippetDirName: "5-dom-ref",
      sectionDirName: "2-templating",
      title: "Dom ref",
    },
    {
      sectionId: "templating",
      snippetId: "conditional",
      snippetDirName: "6-conditional",
      sectionDirName: "2-templating",
      title: "Conditional",
    },
    {
      sectionId: "lifecycle",
      snippetId: "on-mount",
      snippetDirName: "1-on-mount",
      sectionDirName: "3-lifecycle",
      title: "On mount",
    },
    {
      sectionId: "lifecycle",
      snippetId: "on-unmount",
      snippetDirName: "2-on-unmount",
      sectionDirName: "3-lifecycle",
      title: "On unmount",
    },
    {
      sectionId: "component-composition",
      snippetId: "props",
      snippetDirName: "1-props",
      sectionDirName: "4-component-composition",
      title: "Props",
    },
    {
      sectionId: "component-composition",
      snippetId: "emit-to-parent",
      snippetDirName: "2-emit-to-parent",
      sectionDirName: "4-component-composition",
      title: "Emit to parent",
    },
    {
      sectionId: "component-composition",
      snippetId: "slot",
      snippetDirName: "3-slot",
      sectionDirName: "4-component-composition",
      title: "Slot",
    },
    {
      sectionId: "component-composition",
      snippetId: "slot-fallback",
      snippetDirName: "4-slot-fallback",
      sectionDirName: "4-component-composition",
      title: "Slot fallback",
    },
    {
      sectionId: "component-composition",
      snippetId: "context",
      snippetDirName: "5-context",
      sectionDirName: "4-component-composition",
      title: "Context",
    },
    {
      sectionId: "form-input",
      snippetId: "input-text",
      snippetDirName: "1-input-text",
      sectionDirName: "6-form-input",
      title: "Input text",
    },
    {
      sectionId: "form-input",
      snippetId: "checkbox",
      snippetDirName: "2-checkbox",
      sectionDirName: "6-form-input",
      title: "Checkbox",
    },
    {
      sectionId: "form-input",
      snippetId: "radio",
      snippetDirName: "3-radio",
      sectionDirName: "6-form-input",
      title: "Radio",
    },
    {
      sectionId: "form-input",
      snippetId: "select",
      snippetDirName: "4-select",
      sectionDirName: "6-form-input",
      title: "Select",
    },
    {
      sectionId: "webapp-features",
      snippetId: "render-app",
      snippetDirName: "1-render-app",
      sectionDirName: "7-webapp-features",
      title: "Render app",
    },
    {
      sectionId: "webapp-features",
      snippetId: "fetch-data",
      snippetDirName: "2-fetch-data",
      sectionDirName: "7-webapp-features",
      title: "Fetch data",
    },
  ];
async function se(e) {
  if (navigator.clipboard?.writeText)
    try {
      return (await navigator.clipboard.writeText(e), !0);
    } catch {}
  return (function (e) {
    const t = document.createElement("textarea");
    ((t.value = e),
      (t.style.position = "fixed"),
      (t.style.opacity = "0"),
      document.body.appendChild(t),
      t.select());
    let i = !1;
    try {
      i = document.execCommand("copy");
    } catch {
      i = !1;
    }
    return (t.remove(), i);
  })(e);
}
var re = s("<button> </button>"),
  ae = s(
    '<div class="flex space-x-1 items-center ml-0 overflow-x-auto"></div> <div class="relative group"><div class="bg-[#0d1117] px-4 py-3 text-sm overflow-auto rounded-b rounded-tr"><!></div> <div class="absolute hidden group-hover:block group-focus-within:block transition-all top-0 right-0 mt-2 mr-2"><div class="flex items-center space-x-3"><a target="_blank" rel="noreferrer" aria-label="Edit on Github" class="bg-[#0d1117] rounded border opacity-60 hover:opacity-90 transition-all duration-200 p-1 flex items-center justify-center"><span class="iconify ph--pencil size-4" aria-hidden="true"></span></a> <button class="bg-[#0d1117] rounded border opacity-60 hover:opacity-90 transition-all duration-200 p-1 flex items-center justify-center" title="Copy to clipboard" aria-label="Copy to clipboard"><span class="iconify ph--clipboard size-4" aria-hidden="true"></span></button></div></div></div>',
    1,
  );
y(["click"]);
var ne = "undefined" != typeof window ? window : void 0;
("undefined" != typeof window && window.document,
  "undefined" != typeof window && window.navigator,
  "undefined" != typeof window && window.location);
new (class {
  #o;
  #p;
  constructor(e = {}) {
    const { window: t = ne, document: i = t?.document } = e;
    void 0 !== t &&
      ((this.#o = i),
      (this.#p = N((e) => {
        const i = r(t, "focusin", e),
          s = r(t, "focusout", e);
        return () => {
          (i(), s());
        };
      })));
  }
  get current() {
    return (
      this.#p?.(),
      this.#o
        ? (function (e) {
            let t = e.activeElement;
            for (; t?.shadowRoot;) {
              const e = t.shadowRoot.activeElement;
              if (e === t) break;
              t = e;
            }
            return t;
          })(this.#o)
        : null
    );
  }
})();
function oe(e, t, i, s = {}) {
  const { lazy: r = !1 } = s;
  let a = !r,
    n = Array.isArray(e) ? [] : void 0;
  !(function (e, t) {
    switch (e) {
      case "post":
        u(t);
        break;
      case "pre":
        h(t);
    }
  })(t, () => {
    const t = Array.isArray(e) ? e.map((e) => e()) : e();
    if (!a) return ((a = !0), void (n = t));
    const s = j(() => i(t, n));
    return ((n = t), s);
  });
}
function pe(e, t, i) {
  oe(e, "post", t, i);
}
pe.pre = function (e, t, i) {
  oe(e, "pre", t, i);
};
var le = function (e, t, i) {
  var s = null,
    r = null,
    a = i && i.leading,
    n = i && i.trailing;
  null == a && (a = !0);
  null == n && (n = !a);
  1 == a && (n = !1);
  var o = function () {
      s && (clearTimeout(s), (s = null));
    },
    p = function () {
      var i = a && !s,
        o = this,
        p = arguments;
      if (
        ((r = function () {
          return e.apply(o, p);
        }),
        s ||
          (s = setTimeout(function () {
            if (((s = null), n)) return r();
          }, t)),
        i)
      )
        return ((i = !1), r());
    };
  return (
    (p.cancel = o),
    (p.flush = function () {
      var e = r;
      (o(), e && e());
    }),
    p
  );
};
var ce = s("<li><button> </button></li>"),
  de = s("<li><button> </button> <ul></ul></li>"),
  ue = s(
    '<aside class="no-scroll hidden lg:block sticky shrink-0 w-[240px] overflow-y-auto top-0 pr-8 max-h-screen border-r border-gray-700"><nav class="w-full text-base py-2 pl-4 pb-20"><ul class="space-y-6"></ul></nav></aside>',
  );
function me(e, t) {
  D(t, !0);
  let s = c("");
  function r(e) {
    const t = document.getElementById(e);
    t && (window.history.pushState(null, "", `#${e}`), t.scrollIntoView({ block: "start" }));
  }
  A(function () {
    function e() {
      const e = document.querySelectorAll("[data-snippet-id]");
      if (window.scrollY <= 0) return void d(s, e[0]?.getAttribute("data-snippet-id") ?? "", !0);
      const t = (function (e) {
        let t = 0,
          i = null,
          s = null;
        for (const r of e) {
          const e = r.getBoundingClientRect(),
            a = Math.min(e.right, window.innerWidth) - Math.max(e.left, 0),
            n = Math.min(e.bottom, window.innerHeight) - Math.max(e.top, 0);
          if (a > 0 && n > 0) {
            const o = a * n;
            (e.top >= 0 &&
              e.left >= 0 &&
              e.bottom <= window.innerHeight &&
              e.right <= window.innerWidth &&
              !s &&
              (s = r),
              o > t && ((t = o), (i = r)));
          }
        }
        return s || i;
      })(e);
      t ? d(s, t.getAttribute("data-snippet-id") ?? "", !0) : d(s, "");
    }
    const t = le(e, 100);
    return (
      document.addEventListener("scroll", t, { passive: !0 }),
      e(),
      () => {
        document.removeEventListener("scroll", t);
      }
    );
  });
  var n = ue(),
    o = i(n),
    u = i(o);
  (E(
    u,
    21,
    () => te,
    (e) => e.sectionId,
    (e, t) => {
      var n = de(),
        o = i(n),
        c = p(o, !0),
        d = b(o, 2);
      (E(
        d,
        21,
        () => ie.filter((e) => e.sectionId === f(t).sectionId),
        (e) => e.snippetId,
        (e, n) => {
          const o = _(() => f(t).sectionId + "." + f(n).snippetId);
          var c = ce(),
            d = i(c),
            u = p(d, !0);
          (C(c),
            l(() => {
              (S(
                d,
                1,
                R([
                  "inline-block w-full py-1.5 px-4 text-white font-medium hover:bg-gray-800 rounded hover:opacity-100 transition-opacity text-left",
                  f(o) === f(s) ? "bg-gray-800 opacity-70" : "opacity-50",
                ]),
              ),
                V(u, f(n).title));
            }),
            a("click", d, () => r(f(o))),
            M(e, c));
        },
      ),
        C(d),
        C(n),
        l(
          (e) => {
            (S(o, 1, e), V(c, f(t).title));
          },
          [
            () =>
              R([
                "inline-block w-full py-1.5 px-4 text-white font-semibold opacity-90 hover:opacity-100 hover:bg-gray-800 rounded transition-opacity text-left",
                { "bg-gray-800": f(s) && f(s).startsWith(f(t).sectionId) },
              ]),
          ],
        ),
        a("click", o, () => r(f(t).sectionId)),
        M(e, n));
    },
  ),
    C(u),
    C(o),
    C(n),
    M(e, n),
    I());
}
y(["click"]);
var fe = s("<button><!></button>"),
  ve = s(
    '<button title="show more frameworks" class="opacity-70 text-sm shrink-0 rounded border border-gray-700 px-3 py-1 border-opacity-50 bg-gray-900 hover:bg-gray-800 transition-all mr-2 flex items-center justify-center" data-testid="show-more-frameworks-button" aria-label="show more frameworks"><span class="iconify ph--dots-three size-4" aria-hidden="true"></span></button>',
  ),
  he = s(
    '<section class="space-y-4" data-testid="empty-state" aria-labelledby="empty-state-heading"><div class="flex justify-center"><span class="iconify ph--arrow-up size-6 animate-bounce" aria-hidden="true"></span></div> <div class="flex justify-center"><h1 id="empty-state-heading" class="sr-only">Select Frameworks to Compare</h1> <p class="text-lg opacity-80 flex items-center text-center space-x-3" data-testid="empty-state-message"><img src="/popper.svg" alt="Component Party logo" class="size-6"/> <span>Please select a framework to view framework\'s snippets</span> <img src="/popper.svg" alt="Component Party logo" class="size-6"/></p></div></section>',
  ),
  ge = s(
    '<a target="_blank" rel="noreferrer" class="opacity-50 hover:opacity-100 bg-gray-800 hover:bg-gray-700 py-1 px-2 rounded transition-all flex items-center gap-x-2"><span class="iconify ph--play size-4" aria-hidden="true"></span></a>',
  ),
  ye = s('<div class="flex items-center space-x-3"><!></div>'),
  be = s(
    '<div class="bg-gray-800 text-white rounded-md mx-auto"><div class="text-center py-8 px-4 sm:px-6"><div><span class="block text-2xl tracking-tight font-bold" data-testid="missing-snippet-title">Missing snippet</span> <span class="block text-lg mt-1 font-semibold space-x-1" data-testid="missing-snippet-message"><span>Help us to improve Component Party</span> <img src="/popper.svg" alt="logo" class="size-5 m-0 inline-block"/></span></div> <div class="mt-6 flex justify-center"><div class="inline-flex rounded-md shadow"><a class="inline-flex space-x-2 items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#161b22] hover:bg-[#161b22]/80 no-underline"><span>Contribute on Github</span> <span class="iconify simple-icons--github size-5" aria-hidden="true"></span></a></div></div></div></div>',
  ),
  xe = s(
    '<div role="status"><div class="w-75px h-23px bg-[#0d1117] py-3 px-4 rounded-t"><div class="h-2.5 rounded-full bg-gray-700 w-10 animate-pulse"></div></div> <div class="w-full h-40 bg-[#0d1117] px-4 py-7"><div class="max-w-sm animate-pulse"><div class="h-3.5 rounded-full bg-gray-700 w-48 mb-4"></div> <div class="h-3.5 rounded-full bg-gray-700 max-w-[360px] mb-2.5"></div> <div class="h-3.5 rounded-full bg-gray-700 mb-4"></div> <div class="h-3.5 rounded-full bg-gray-700 max-w-[330px] mb-2.5"></div> <span class="sr-only" data-testid="loading-text">Loading...</span></div></div></div>',
  ),
  we = s('<p class="text-orange-500">Error loading snippets. Please reload the page.</p>'),
  Ie = s(
    '<div><div class="flex justify-between items-center space-x-3"><h4 class="m-0"><!></h4> <!></div> <div class="mt-2"><!></div></div>',
  ),
  _e = s(
    '<div class="snippet-cv svelte-qq9oyz"><h3 class="header-anchor sticky py-2 top-[2.94rem] z-10 bg-[var(--bg-color)] font-semibold text-xl svelte-qq9oyz"> <a aria-hidden="true" tabindex="-1" class="svelte-qq9oyz">#</a></h3> <div class="grid grid-cols-1 xl:grid-cols-2 gap-y-4 xl:gap-y-8 gap-x-10 mt-2"></div></div>',
  ),
  De = s(
    '<div class="px-6 md:px-14 lg:px-20 max-w-full"><h2 class="header-anchor text-2xl font-bold svelte-qq9oyz"> <a aria-hidden="true" tabindex="-1" class="svelte-qq9oyz">#</a></h2> <div class="space-y-8 mt-2"></div></div>',
  ),
  ke = s('<div class="space-y-20"></div>'),
  Ne = s(
    '<div class="flex border-b border-gray-700"><!> <div class="pb-8 w-10 grow"><div class="flex px-6 lg:px-20 py-2 sticky top-0 z-20 w-full backdrop-blur bg-gray-900/80 border-b border-gray-700 whitespace-nowrap overflow-x-auto" data-testid="framework-selection-bar" role="group" aria-label="Select frameworks to compare"><!> <!></div> <main class="relative pt-6"><div><!></div></main></div></div>',
  );
function Ee(e, t) {
  D(t, !0);
  let s = O(t, "persist", 3, !0);
  const r = H.slice(9),
    n = q("framework_display", []);
  function o(e) {
    const t = [],
      i = new Set();
    for (const s of e) {
      const e = W(s);
      e && !i.has(e.id) && (i.add(e.id), t.push(e.id));
    }
    return t;
  }
  const u = new K(j(() => t.initialFrameworkIds)),
    m = new Q(Object.entries(j(() => t.initialSnippets))),
    v = _(() => [...u]),
    h = _(() => f(v).map((e) => W(e)));
  let y = c(2);
  function w(e) {
    const t = f(v).map((t) => m.get(t)?.find((t) => t.snippetId === e));
    if (t.every((e) => !e)) return 600;
    return (
      52 +
      Math.ceil(t.length / f(y)) *
        (Math.max(
          0,
          ...t.map((e) => {
            return (
              (t = e?.files), t?.length ? 20 * Math.max(...t.map((e) => e.lineCount)) + 24 + 64 : 0
            );
            var t;
          }),
        ) +
          32)
    );
  }
  A(() => {
    const e = window.matchMedia("(min-width: 1280px)"),
      t = () => {
        d(y, e.matches ? 2 : 1, !0);
      };
    return (
      t(),
      e.addEventListener("change", t),
      () => {
        e.removeEventListener("change", t);
      }
    );
  });
  const N = _(() => {
    const e = B.url.searchParams.get("f");
    return "string" == typeof e ? o(e.split("-")) : [];
  });
  async function P() {
    const e = new URL(B.url.href);
    (0 === u.size ? e.searchParams.delete("f") : e.searchParams.set("f", f(v).join("-")),
      e.toString() !== B.url.toString() && (await F(e, { replace: !0, reset: !1 })));
  }
  (pe(
    [() => f(N)],
    () => {
      !(function (e) {
        u.clear();
        for (const t of e) u.add(t);
        P();
      })(f(N));
    },
    { lazy: !0 },
  ),
    A(() => {
      if (f(N).length > 0) {
        u.clear();
        for (const e of f(N)) u.add(e);
      } else if (s()) {
        const e = o(n.getJSON());
        if (e.length > 0) {
          u.clear();
          for (const t of e) u.add(t);
          P();
        }
      }
    }));
  let J = new K(),
    G = new K();
  pe([() => u.entries()], () => {
    for (const e of f(v))
      if (!m.has(e)) {
        const t = U[e];
        if (!t) {
          G.add(e);
          continue;
        }
        (G.delete(e),
          J.add(e),
          t()
            .then(({ default: t }) => {
              m.set(e, t);
            })
            .catch(() => {
              G.add(e);
            })
            .finally(() => {
              J.delete(e);
            }));
      }
    0 === u.size && F("/", { replace: !0, reset: !1 });
  });
  let Y = c(!1);
  const X = _(() => r.filter(({ id: e }) => !u.has(e))),
    Z = _(() => H.filter(({ id: e }) => e && !u.has(e))),
    ne = _(() =>
      [
        ...f(h).filter((e) => e),
        ...f(Z).filter((e) => e && !f(X).find((t) => t.id === e.id)),
        ...(f(Y) ? f(X) : []),
      ].filter((e) => !!e),
    );
  var oe = Ne(),
    le = i(oe);
  me(le, {});
  var ce = b(le, 2),
    de = i(ce),
    ue = i(de);
  E(
    ue,
    17,
    () => f(ne),
    (e) => e.id,
    (e, t) => {
      var r = g(),
        o = x(r),
        p = (e) => {
          var r = fe();
          (ee(i(r), {
            get id() {
              return f(t).id;
            },
            size: 16,
          }),
            C(r),
            l(
              (e, i, s) => {
                (z(r, "title", e),
                  S(r, 1, i),
                  z(r, "data-testid", `framework-button-${f(t).id}`),
                  z(r, "aria-pressed", s));
              },
              [
                () => (u.has(f(t).id) ? `Hide ${f(t).title}` : `Display ${f(t).title}`),
                () =>
                  R([
                    "text-sm shrink-0 rounded border px-3 py-1 bg-gray-900 hover:bg-gray-800 transition-all mr-2",
                    u.has(f(t).id)
                      ? "border-blue-900"
                      : "opacity-70 border-opacity-50 border-gray-700",
                  ]),
                () => u.has(f(t).id),
              ],
            ),
            a("click", r, () => {
              var e;
              ((e = f(t).id),
                u.has(e) ? u.delete(e) : u.add(e),
                s() && (0 === f(v).length ? n.remove() : n.setJSON(f(v))),
                P());
            }),
            M(e, r));
        };
      ($(o, (e) => {
        f(t) && e(p);
      }),
        M(e, r));
    },
  );
  var Ee = b(ue, 2),
    ze = (e) => {
      var t = ve();
      (a("click", t, () => {
        d(Y, !f(Y));
      }),
        M(e, t));
    };
  ($(Ee, (e) => {
    f(X).length > 0 && !f(Y) && e(ze);
  }),
    C(de));
  var je = b(de, 2),
    Ae = i(je),
    Oe = i(Ae),
    Se = (e) => {
      var t = he();
      M(e, t);
    },
    $e = (e) => {
      var t = ke();
      (E(
        t,
        21,
        () => te,
        (e) => e.sectionId,
        (e, t) => {
          var s = De(),
            r = i(s),
            n = i(r),
            o = b(n);
          C(r);
          var u = b(r, 2);
          (E(
            u,
            21,
            () => ie.filter((e) => e.sectionId === f(t).sectionId),
            (e) => e.snippetId,
            (e, s) => {
              const r = _(() => f(t).sectionId + "." + f(s).snippetId);
              var n = _e(),
                o = i(n),
                u = i(o),
                h = b(u);
              C(o);
              var y = b(o, 2);
              (E(
                y,
                20,
                () => f(v),
                (e) => e,
                (e, t) => {
                  const r = _(() => W(t)),
                    n = _(() => m.get(t)?.find((e) => e.snippetId === f(s).snippetId)),
                    o = _(() => J.has(t)),
                    u = _(() => G.has(t));
                  var v = g(),
                    h = x(v),
                    y = (e) => {
                      var m = Ie(),
                        v = i(m),
                        h = i(v);
                      (ee(i(h), {
                        get id() {
                          return f(r).id;
                        },
                      }),
                        C(h));
                      var y = b(h, 2),
                        w = (e) => {
                          var a = ye(),
                            o = i(a),
                            p = (e) => {
                              var i = ge();
                              (l(() => {
                                (z(i, "href", f(n).playgroundURL),
                                  z(i, "title", `Open playground for ${f(r).title}`),
                                  z(i, "aria-label", `Open playground for ${f(r).title}`),
                                  z(i, "data-testid", `playground-button-${t}-${f(s).snippetId}`));
                              }),
                                M(e, i));
                            };
                          ($(o, (e) => {
                            f(n).playgroundURL && e(p);
                          }),
                            C(a),
                            M(e, a));
                        };
                      ($(y, (e) => {
                        f(n) && e(w);
                      }),
                        C(v));
                      var N = b(v, 2),
                        j = i(N),
                        A = (e) => {
                          var r = g(),
                            o = x(r),
                            u = (e) => {
                              {
                                let r = _(() => `code-editor-${t}-${f(s).snippetId}`);
                                !(function (e, t) {
                                  D(t, !0);
                                  const s = O(t, "files", 19, () => []),
                                    r = _(() =>
                                      s().length > 0
                                        ? 20 * Math.max(...s().map((e) => e.lineCount)) + 24
                                        : 0,
                                    );
                                  let n = c(void 0),
                                    o = c(void 0),
                                    u = _(
                                      () => f(o) ?? (s().length > 0 ? s()[0]?.fileName : void 0),
                                    );
                                  const m = _(() =>
                                    f(u) ? s().find((e) => e.fileName === f(u)) : void 0,
                                  );
                                  var v = ae(),
                                    h = x(v);
                                  (E(
                                    h,
                                    21,
                                    s,
                                    (e) => e.fileName,
                                    (e, t) => {
                                      var i = re(),
                                        s = p(i, !0);
                                      (l(() => {
                                        (S(
                                          i,
                                          1,
                                          R([
                                            "bg-[#0d1117] py-1.5 px-3 shrink-0 text-xs rounded-t inline-block transition-all duration-200 hover:opacity-100",
                                            f(u) !== f(t).fileName && "opacity-60",
                                          ]),
                                        ),
                                          V(s, f(t).fileName));
                                      }),
                                        a("click", i, () => {
                                          d(o, f(t).fileName, !0);
                                        }),
                                        M(e, i));
                                    },
                                  ),
                                    C(h));
                                  var y = b(h, 2),
                                    w = i(y),
                                    N = i(w),
                                    j = (e) => {
                                      var t = g(),
                                        i = x(t);
                                      (T(i, () => f(m).contentHtml), M(e, t));
                                    };
                                  ($(N, (e) => {
                                    f(m) && e(j);
                                  }),
                                    C(w),
                                    L(
                                      w,
                                      (e) => d(n, e),
                                      () => f(n),
                                    ));
                                  var A = b(w, 2),
                                    P = i(A),
                                    q = i(P),
                                    W = b(q, 2);
                                  (C(P),
                                    C(A),
                                    C(y),
                                    l(() => {
                                      (z(h, "data-testid", t["data-testid"]),
                                        k(w, `min-height: ${f(r)}px`),
                                        z(q, "href", t.snippetEditHref));
                                    }),
                                    a("click", W, function () {
                                      f(n) && se(f(n).innerText);
                                    }),
                                    M(e, v),
                                    I());
                                })(e, {
                                  get files() {
                                    return f(n).files;
                                  },
                                  get snippetEditHref() {
                                    return f(n).snippetEditHref;
                                  },
                                  get "data-testid"() {
                                    return f(r);
                                  },
                                });
                              }
                            },
                            m = (e) => {
                              var r = be(),
                                a = i(r),
                                o = b(i(a), 2),
                                c = i(o),
                                d = p(c);
                              (C(o),
                                C(a),
                                C(r),
                                l(() => {
                                  (z(r, "data-testid", `missing-snippet-${t}-${f(s).snippetId}`),
                                    z(d, "href", f(n).snippetEditHref),
                                    z(d, "data-testid", `contribute-link-${t}-${f(s).snippetId}`));
                                }),
                                M(e, r));
                            };
                          ($(o, (e) => {
                            f(n).files.length > 0 ? e(u) : e(m, -1);
                          }),
                            M(e, r));
                        },
                        P = (e) => {
                          var i = xe();
                          (l(() => z(i, "data-testid", `loading-snippet-${t}-${f(s).snippetId}`)),
                            M(e, i));
                        },
                        q = (e) => {
                          var i = we();
                          (l(() => z(i, "data-testid", `error-snippet-${t}-${f(s).snippetId}`)),
                            M(e, i));
                        };
                      ($(j, (e) => {
                        f(n) ? e(A) : f(o) ? e(P, 1) : f(u) && e(q, 2);
                      }),
                        C(N),
                        C(m),
                        l(() => {
                          (z(m, "data-testid", `framework-snippet-${t}-${f(s).snippetId}`),
                            z(h, "data-testid", `framework-title-${t}-${f(s).snippetId}`));
                        }),
                        M(e, m));
                    };
                  ($(h, (e) => {
                    f(r) && e(y);
                  }),
                    M(e, v));
                },
              ),
                C(y),
                C(n),
                l(
                  (e) => {
                    (k(n, e),
                      z(n, "id", f(r)),
                      z(n, "data-snippet-id", f(r)),
                      z(n, "data-testid", `snippet-${f(r)}`),
                      z(o, "data-testid", `snippet-title-${f(r)}`),
                      V(u, `${f(s).title ?? ""} `),
                      z(h, "href", "#" + f(r)));
                  },
                  [() => `contain-intrinsic-size: auto ${w(f(s).snippetId)}px`],
                ),
                M(e, n));
            },
          ),
            C(u),
            C(s),
            l(() => {
              (z(r, "id", f(t).sectionId),
                z(r, "data-testid", `section-${f(t).sectionId}`),
                V(n, `${f(t).title ?? ""} `),
                z(o, "href", "#" + f(t).sectionId));
            }),
            M(e, s));
        },
      ),
        C(t),
        M(e, t));
    };
  ($(Oe, (e) => {
    0 === u.size ? e(Se) : e($e, -1);
  }),
    C(Ae),
    C(je),
    C(ce),
    C(oe),
    l((e) => z(de, "data-framework-id-selected-list", e), [() => f(v).join(",")]),
    M(e, oe),
    I());
}
y(["click"]);
var ze = "2024-01-01",
  je = {
    "@type": "Organization",
    name: "Component Party",
    url: "https://component-party.dev",
    logo: { "@type": "ImageObject", url: "https://component-party.dev/popper.svg" },
  };
function Ae(e) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Component Party",
    description:
      "Compare JavaScript frameworks side-by-side: React, Vue, Angular, Svelte, Solid.js, and more. See syntax differences, features, and code examples for web development frameworks.",
    url: "https://component-party.dev/",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: je,
    publisher: je,
    inLanguage: "en-US",
    isAccessibleForFree: !0,
    datePublished: ze,
    dateModified: e,
  };
}
function Oe(e) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${e.titleA} vs ${e.titleB} - side-by-side code comparison`,
    description: e.description,
    url: e.url,
    image: e.image,
    inLanguage: "en-US",
    datePublished: ze,
    dateModified: e.buildDate,
    author: je,
    publisher: je,
    about: [
      {
        "@type": "SoftwareApplication",
        name: e.titleA,
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
      },
      {
        "@type": "SoftwareApplication",
        name: e.titleB,
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
      },
    ],
  };
}
var Se = "2026-10-19";
export { U as a, Ee as i, Oe as n, Ae as r, Se as t };
