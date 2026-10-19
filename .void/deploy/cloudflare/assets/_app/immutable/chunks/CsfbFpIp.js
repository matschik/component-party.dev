import { f as t, l as s, u as e } from "./BJrQ6ZPu.js";
function n(t) {
  0;
}
function r(t) {
  0;
}
function a(t) {
  0;
}
function o(t) {
  0;
}
var i = class {
    constructor(t) {
      ((this.status = t.status), (this.body = t));
    }
    toString() {
      return JSON.stringify(this.body);
    }
  },
  c = class extends i {},
  u = class {
    constructor(t, s) {
      try {
        new Headers({ location: s });
      } catch {
        throw new Error(
          `Invalid redirect location ${JSON.stringify(s)}: this string contains characters that cannot be used in HTTP headers`,
        );
      }
      ((this.status = t), (this.location = s));
    }
  },
  f = class extends Error {
    constructor(t, s, e) {
      (super(e), (this.status = t), (this.text = s));
    }
  };
new URL("a://");
function h(t, s) {
  return "/" === t || "ignore" === s
    ? t
    : "never" === s
      ? t.endsWith("/")
        ? t.slice(0, -1)
        : t
      : "always" !== s || t.endsWith("/")
        ? t
        : t + "/";
}
function l(t) {
  return t.split("%25").map(decodeURI).join("%25");
}
function d({ href: t }) {
  return t.split("#")[0];
}
function g(t, s, e, n = !1) {
  const r = new URL(t);
  Object.defineProperty(r, "searchParams", {
    value: new Proxy(r.searchParams, {
      get(t, n) {
        if ("get" === n || "getAll" === n || "has" === n) return (s, ...r) => (e(s), t[n](s, ...r));
        s();
        const r = Reflect.get(t, n);
        return "function" == typeof r ? r.bind(t) : r;
      },
    }),
    enumerable: !0,
    configurable: !0,
  });
  const a = ["href", "pathname", "search", "toString", "toJSON"];
  n && a.push("hash");
  for (const o of a)
    Object.defineProperty(r, o, { get: () => (s(), t[o]), enumerable: !0, configurable: !0 });
  return r;
}
export {
  c as a,
  f as c,
  a as d,
  o as f,
  d as i,
  n as l,
  g as n,
  i as o,
  h as r,
  u as s,
  l as t,
  r as u,
};
