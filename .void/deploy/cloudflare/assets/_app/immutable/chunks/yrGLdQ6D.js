import { payload as t } from "../entry/payload.BeGvdC57.js";
import { J as e, K as r, O as s, t as a } from "./D6jlWIdj.js";
import { a as n, o, s as i } from "./BJrQ6ZPu.js";
var u = t.base ?? "",
  c = t.assets ?? u ?? "";
function l(t) {
  0;
}
var h = /^(\[)?(\.\.\.)?([\w-]+)(?:=([\w-]+))?(\])?$/,
  f = /^\/\((?:[^)]+)\)$/;
function m(t) {
  const e = [];
  return {
    pattern:
      "/" === t || f.test(t)
        ? /^\/$/
        : new RegExp(
            `^${((r = t), r.slice(1).split("/").filter(p))
              .map((t) => {
                const r = /^\[\.\.\.([\w-]+)(?:=([\w-]+))?\]$/.exec(t);
                if (r)
                  return (
                    e.push({ name: r[1], matcher: r[2], optional: !1, rest: !0, chained: !0 }),
                    "(?:/([^]*))?"
                  );
                const s = /^\[\[([\w-]+)(?:=([\w-]+))?\]\]$/.exec(t);
                if (s)
                  return (
                    e.push({ name: s[1], matcher: s[2], optional: !0, rest: !1, chained: !0 }),
                    "(?:/([^/]+))?"
                  );
                if (!t) return;
                const a = t.split(/\[(.+?)\](?!\])/);
                return (
                  "/" +
                  a
                    .map((t, r) => {
                      if (r % 2) {
                        if (t.startsWith("x+") || t.startsWith("u+"))
                          return v(
                            ((s = t.slice(2)),
                            String.fromCodePoint(...s.split("-").map((t) => parseInt(t, 16)))),
                          );
                        const [, n, o, i, u] = h.exec(t);
                        return (
                          e.push({
                            name: i,
                            matcher: u,
                            optional: !!n,
                            rest: !!o,
                            chained: !!o && 1 === r && "" === a[0],
                          }),
                          o ? "([^]*?)" : n ? "([^/]*)?" : "([^/]+?)"
                        );
                      }
                      var s;
                      return v(t);
                    })
                    .join("")
                );
              })
              .join("")}/?$`,
          ),
    params: e,
  };
  var r;
}
function p(t) {
  return "" !== t && !/^\([^)]+\)$/.test(t);
}
function g(t, e) {
  const r = t["~standard"].validate(e);
  if ((r instanceof Promise && o(), r.issues)) return { success: !1 };
  const s = r.value;
  return (
    "string" != typeof s &&
      "number" != typeof s &&
      "boolean" != typeof s &&
      "bigint" != typeof s &&
      i(),
    { success: !0, value: s }
  );
}
function d(t, e, r) {
  const s = {},
    a = t.slice(1),
    n = a.filter((t) => void 0 !== t);
  let o = 0;
  for (let i = 0; i < e.length; i += 1) {
    const t = e[i];
    let u = a[i - o];
    if (
      (t.chained &&
        t.rest &&
        o &&
        ((u = a
          .slice(i - o, i + 1)
          .filter((t) => t)
          .join("/")),
        (o = 0)),
      void 0 === u)
    ) {
      if (!t.rest) continue;
      u = "";
    }
    const c = decodeURIComponent(u);
    if (t.matcher) {
      const e = g(r[t.matcher], c);
      if (!e.success) {
        if (t.optional && t.chained) {
          o++;
          continue;
        }
        return;
      }
      s[t.name] = e.value;
    } else s[t.name] = c;
    const l = e[i + 1],
      h = a[i + 1];
    (l && !l.rest && l.optional && h && t.chained && (o = 0),
      l || h || Object.keys(s).length !== n.length || (o = 0));
  }
  if (!o) return s;
}
var w = { "%": "%25", "/": "%2[Ff]", "?": "%3[Ff]", "#": "%23" };
function v(t) {
  return t
    .normalize()
    .split(/([%/?#])/)
    .map((t, e) =>
      e % 2
        ? w[t]
        : (function (t) {
            return t.replace(/[.*+?^${}()|[\]\\]/g, (t) => "\\" + t);
          })(t),
    )
    .join("");
}
new RegExp(
  `${/\[([ux])\+([^\]]+)\]/.source}|${/\[(\[)?(\.\.\.)?([\w-]+?)(?:=([\w-]+))?\]\]?/g.source}`,
  "g",
);
var $ = new (class {
  #t = e({});
  get data() {
    return s(this.#t);
  }
  set data(t) {
    r(this.#t, t);
  }
  #e = e(null);
  get form() {
    return s(this.#e);
  }
  set form(t) {
    r(this.#e, t);
  }
  #r = e(null);
  get error() {
    return s(this.#r);
  }
  set error(t) {
    r(this.#r, t);
  }
  #s = e({});
  get params() {
    return s(this.#s);
  }
  set params(t) {
    r(this.#s, t);
  }
  #a = e({ id: null });
  get route() {
    return s(this.#a);
  }
  set route(t) {
    r(this.#a, t);
  }
  #n = e(null);
  get shallow() {
    return s(this.#n);
  }
  set shallow(t) {
    r(this.#n, t);
  }
  #o = e({});
  get state() {
    return s(this.#o);
  }
  set state(t) {
    r(this.#o, t);
  }
  #i = e(-1);
  get status() {
    return s(this.#i);
  }
  set status(t) {
    r(this.#i, t);
  }
  #u = e(new URL("a:"));
  get url() {
    return s(this.#u);
  }
  set url(t) {
    r(this.#u, t);
  }
})();
function j(t) {
  Object.assign($, t);
}
var y = {
    get data() {
      return $.data;
    },
    get error() {
      return $.error;
    },
    get form() {
      return $.form;
    },
    get params() {
      return $.params;
    },
    get route() {
      return $.route;
    },
    get shallow() {
      return $.shallow;
    },
    get state() {
      return $.state;
    },
    get status() {
      return $.status;
    },
    get url() {
      return $.url;
    },
  },
  x = e(null);
function b(t) {
  r(x, t);
}
var k,
  R,
  O = 36e5,
  P = e(!1),
  T = {
    get current() {
      return s(P);
    },
    check: async () => (
      window.clearTimeout(k),
      s(P)
        ? Promise.resolve(!0)
        : (R ??= (async () => {
            try {
              const t = await fetch(`${c}/_app/version.json`, {
                headers: { "cache-control": "no-cache" },
              });
              if (!t.ok) return !1;
              const e = await t.json();
              return r(P, s(P) || e.version !== a);
            } catch {
              return !1;
            } finally {
              ((R = void 0), s(P) || (k = window.setTimeout(T.check, O)));
            }
          })())
    ),
  };
k = window.setTimeout(T.check, O);
export { d as a, l as c, T as i, b as n, m as o, j as r, u as s, y as t };
