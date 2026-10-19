import { payload as e } from "../entry/payload.BeGvdC57.js";
import {
  A as t,
  B as r,
  C as n,
  I as a,
  J as o,
  K as s,
  O as i,
  S as c,
  U as l,
  V as u,
  X as f,
  Y as p,
  Z as h,
  _ as d,
  g as m,
  k as y,
  l as g,
  m as w,
  n as v,
  nt as b,
  p as A,
  r as S,
  tt as $,
  v as O,
  w as k,
  x as _,
  y as E,
} from "./D6jlWIdj.js";
import { c as U, d as P, f as I, i as T, n as j, p as L, r as x, u as R } from "./BJrQ6ZPu.js";
import { a as D, c as B, i as C, n as N, o as M, r as V, s as F, t as z } from "./yrGLdQ6D.js";
import {
  a as J,
  c as Z,
  d as q,
  f as Y,
  i as G,
  l as H,
  n as K,
  o as W,
  r as X,
  s as Q,
  t as ee,
} from "./CsfbFpIp.js";
function te(e, t) {
  const r = [];
  return (
    e && r.push([...new Headers(e)].join(",")),
    t && r.push(t),
    (function (...e) {
      let t = 5381;
      for (const r of e)
        if ("string" == typeof r) {
          let e = r.length;
          for (; e;) t = (33 * t) ^ r.charCodeAt(--e);
        } else {
          if (!ArrayBuffer.isView(r)) throw new TypeError("value must be a string or TypedArray");
          {
            const e = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
            let n = e.length;
            for (; n;) t = (33 * t) ^ e[--n];
          }
        }
      return (t >>> 0).toString(36);
    })(...r)
  );
}
(new TextEncoder(), new TextDecoder());
var re = 2 ** 32 - 1,
  ne = 4294967294,
  ae = {
    "<": "\\u003C",
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  },
  oe = class extends Error {
    constructor(e, t, r, n) {
      (super(e),
        (this.name = "DevalueError"),
        (this.path = t.join("")),
        (this.value = r),
        (this.root = n));
    }
  };
function se(e) {
  return null === e || ("object" != typeof e && "function" != typeof e);
}
var ie = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ce(e) {
  const t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    null === t ||
    null === Object.getPrototypeOf(t) ||
    Object.getOwnPropertyNames(t).sort().join("\0") === ie
  );
}
function le(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function ue(e) {
  return "undefined" != typeof Buffer && Buffer.isBuffer(e);
}
function fe(e) {
  switch (e) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "\t":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return e < " " ? `\\u${e.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function pe(e) {
  let t = "",
    r = 0;
  const n = e.length;
  for (let a = 0; a < n; a += 1) {
    const n = fe(e[a]);
    n && ((t += e.slice(r, a) + n), (r = a + 1));
  }
  return `"${0 === r ? e : t + e.slice(r)}"`;
}
function he(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable,
  );
}
var de = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function me(e) {
  return de.test(e) ? "." + e : "[" + JSON.stringify(e) + "]";
}
function ye(e) {
  return !!Number.isInteger(e) && !(e < 0) && !(e > ne);
}
function ge(e) {
  if (0 === e.length) return !1;
  if (e.length > 1 && 48 === e.charCodeAt(0)) return !1;
  for (let t = 0; t < e.length; t++) {
    const r = e.charCodeAt(t);
    if (r < 48 || r > 57) return !1;
  }
  return ye(+e);
}
function we(e) {
  const t = Object.keys(e);
  return (
    (t.length = (function (e) {
      for (var t = e.length - 1; t >= 0 && !ge(e[t]); t--);
      return t + 1;
    })(t)),
    t
  );
}
var ve = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$",
  be = /[<\b\f\n\r\t\0\u2028\u2029]/g,
  Ae =
    /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function Se(e, t) {
  const r = new Map(),
    n = [],
    a = new Map();
  let o;
  function s(e) {
    if (("string" == typeof e && e.length >= 128) || "bigint" == typeof e) {
      o ??= new Map();
      let t = o.get(e);
      return (void 0 === t && ((t = Ee(e)), o.set(e, t)), t);
    }
    return Ee(e);
  }
  !(function o(i) {
    if (se(i)) {
      if ("symbol" == typeof i) throw new oe("Cannot stringify a Symbol primitive", n, i, e);
      (("string" == typeof i && i.length >= 128) || "bigint" == typeof i) &&
        r.set(i, (r.get(i) || 0) + 1);
    } else {
      if (r.has(i)) return void r.set(i, r.get(i) + 1);
      if ((r.set(i, 1), t)) {
        const e = t(i, (e) => Se(e, t));
        if ("string" == typeof e) return void a.set(i, e);
      }
      if ("function" == typeof i) throw new oe("Cannot stringify a function", n, i, e);
      switch (le(i)) {
        case "BigInt":
        case "String":
          return void o(i.valueOf());
        case "Number":
        case "Boolean":
        case "Date":
        case "RegExp":
        case "URL":
        case "URLSearchParams":
        case "ArrayBuffer":
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          return;
        case "Array":
          for (const e of we(i)) (n.push(`[${e}]`), o(i[e]), n.pop());
          break;
        case "Set":
          Array.from(i).forEach(o);
          break;
        case "Map":
          for (const [e, t] of i) (n.push(`.get(${se(e) ? s(e) : "..."})`), o(e), o(t), n.pop());
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Float16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
        case "DataView":
          return void (ue(i) || o(i.buffer));
        default:
          if (!ce(i)) throw new oe("Cannot stringify arbitrary non-POJOs", n, i, e);
          if (he(i).length > 0) throw new oe("Cannot stringify POJOs with symbolic keys", n, i, e);
          for (const t of Object.keys(i)) {
            if ("__proto__" === t)
              throw new oe("Cannot stringify objects with __proto__ keys", n, i, e);
            (n.push(me(t)), o(i[t]), n.pop());
          }
      }
    }
  })(e);
  const i = new Map(),
    c = [];
  function l(e) {
    if (i.has(e)) return i.get(e);
    if (se(e)) return Ee(e);
    if (a.has(e)) return a.get(e);
    const t = le(e);
    switch (t) {
      case "Number":
      case "String":
      case "Boolean":
      case "BigInt":
        return `Object(${l(e.valueOf())})`;
      case "RegExp":
        const { source: r, flags: n } = e;
        return n ? `new RegExp(${pe(r)},"${n}")` : `new RegExp(${pe(r)})`;
      case "Date":
        return `new Date(${e.getTime()})`;
      case "URL":
        return `new URL(${pe(e.toString())})`;
      case "URLSearchParams":
        return `new URLSearchParams(${pe(e.toString())})`;
      case "Array": {
        let t = !1,
          r = "[";
        for (let n = 0; n < e.length; n += 1)
          if ((n > 0 && (r += ","), Object.hasOwn(e, n))) r += l(e[n]);
          else if (!t) {
            const r = we(e),
              n = r.length,
              a = String(e.length).length,
              o = $e(e.length);
            if (e.length + 2 > o.length + 18 + n * (a + 2))
              return `Object.assign(${o},{${r.map((t) => `${t}:${l(e[t])}`).join(",")}})`;
            t = !0;
          }
        return r + (0 === e.length || Object.hasOwn(e, e.length - 1) ? "" : ",") + "]";
      }
      case "Set":
      case "Map":
        return `new ${t}([${Array.from(e).map(l).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Float16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        ue(e) && (e = new Uint8Array(e));
        let r = `new ${t}`;
        if (
          (i.has(e.buffer) ? (r += `(${l(e.buffer)})`) : (r += `([${Oe(t, e.buffer)}])`),
          e.byteLength !== e.buffer.byteLength)
        ) {
          const t = e.byteOffset / e.BYTES_PER_ELEMENT;
          r += `.subarray(${t},${t + e.length})`;
        }
        return r;
      }
      case "DataView": {
        let t = "new DataView";
        return (
          i.has(e.buffer)
            ? (t += `(${l(e.buffer)}`)
            : (t += `(new Uint8Array([${new Uint8Array(e.buffer)}]).buffer`),
          e.byteLength !== e.buffer.byteLength && (t += `,${e.byteOffset},${e.byteLength}`),
          t + ")"
        );
      }
      case "ArrayBuffer":
        return `new Uint8Array([${new Uint8Array(e).toString()}]).buffer`;
      case "Temporal.Duration":
      case "Temporal.Instant":
      case "Temporal.PlainDate":
      case "Temporal.PlainTime":
      case "Temporal.PlainDateTime":
      case "Temporal.PlainMonthDay":
      case "Temporal.PlainYearMonth":
      case "Temporal.ZonedDateTime":
        return `${t}.from(${pe(e.toString())})`;
      default:
        const a = Object.keys(e),
          o = a
            .map(
              (t) =>
                `${(function (e) {
                  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e) ? e : _e(JSON.stringify(e));
                })(t)}:${l(e[t])}`,
            )
            .join(",");
        return null === Object.getPrototypeOf(e)
          ? a.length > 0
            ? `{${o},__proto__:null}`
            : "{__proto__:null}"
          : `{${o}}`;
    }
  }
  (r.forEach((e, t) => {
    e > 1 && c.push([t, e]);
  }),
    c
      .sort((e, t) => t[1] - e[1])
      .forEach(([e, t]) => {
        const r = (function (e) {
          let t = "";
          do {
            ((t = ve[e % 54] + t), (e = ~~(e / 54) - 1));
          } while (e >= 0);
          return Ae.test(t) ? `${t}0` : t;
        })(i.size);
        if (se(e)) {
          const n = s(e).length;
          if (n * t <= n + (t + 1) * r.length + 25) return;
        }
        i.set(e, r);
      }));
  const u = l(e);
  if (i.size) {
    const e = [],
      t = [],
      r = [],
      n = [];
    (i.forEach((o, c) => {
      if ((e.push(o), a.has(c))) return void r.push(a.get(c));
      if (se(c)) return void r.push(s(c));
      const u = le(c);
      switch (u) {
        case "Number":
        case "String":
        case "Boolean":
        case "BigInt": {
          const e = c.valueOf();
          i.has(e) ? (r.push("{}"), n.push(`${o}=Object(${l(e)})`)) : r.push(`Object(${l(e)})`);
          break;
        }
        case "RegExp":
          const { source: e, flags: a } = c,
            s = a ? `new RegExp(${pe(e)},"${a}")` : `new RegExp(${pe(e)})`;
          r.push(s);
          break;
        case "Date":
          r.push(`new Date(${c.getTime()})`);
          break;
        case "URL":
          r.push(`new URL(${pe(c.toString())})`);
          break;
        case "URLSearchParams":
          r.push(`new URLSearchParams(${pe(c.toString())})`);
          break;
        case "Array": {
          const e = we(c);
          r.push(c.length > 32 + 2 * e.length ? $e(c.length) : `Array(${c.length})`);
          for (const r of e) t.push(`${o}[${r}]=${l(c[r])}`);
          break;
        }
        case "Set": {
          r.push("new Set");
          const e = Array.from(c).map((e) => `.add(${l(e)})`);
          e.length > 0 && t.push(o + e.join(""));
          break;
        }
        case "Map": {
          r.push("new Map");
          const e = Array.from(c).map(([e, t]) => `.set(${l(e)}, ${l(t)})`);
          e.length > 0 && t.push(o + e.join(""));
          break;
        }
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Float16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          ue(c) && (c = new Uint8Array(c));
          let e = `new ${u}`;
          if (
            (i.has(c.buffer) ? (e += `(${l(c.buffer)})`) : (e += `([${Oe(u, c.buffer)}])`),
            c.byteLength !== c.buffer.byteLength)
          ) {
            const t = c.byteOffset / c.BYTES_PER_ELEMENT;
            e += `.subarray(${t},${t + c.length})`;
          }
          (r.push("{}"), n.push(`${o}=${e}`));
          break;
        }
        case "DataView": {
          let e = "new DataView";
          (i.has(c.buffer)
            ? (e += `(${l(c.buffer)}`)
            : (e += `(new Uint8Array([${new Uint8Array(c.buffer)}]).buffer`),
            c.byteLength !== c.buffer.byteLength && (e += `,${c.byteOffset},${c.byteLength}`),
            (e += ")"),
            r.push("{}"),
            n.push(`${o}=${e}`));
          break;
        }
        case "ArrayBuffer":
          r.push(`new Uint8Array([${new Uint8Array(c)}]).buffer`);
          break;
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          r.push(`${u}.from(${pe(c.toString())})`);
          break;
        default:
          (r.push(null === Object.getPrototypeOf(c) ? "Object.create(null)" : "{}"),
            Object.keys(c).forEach((e) => {
              t.push(
                `${o}${(function (e) {
                  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e)
                    ? `.${e}`
                    : `[${_e(JSON.stringify(e))}]`;
                })(e)}=${l(c[e])}`,
              );
            }));
      }
    }),
      t.push(`return ${u}`));
    const o = [...n, ...t].join(";");
    return e.length > 65534
      ? `(function(){var[${e.join(",")}]=arguments[0];${o}}([${r.join(",")}]))`
      : `(function(${e.join(",")}){${o}}(${r.join(",")}))`;
  }
  return u;
}
function $e(e) {
  return `(function(a){a[4294967294]=0;delete a[4294967294];a.length=${e};return a}([]))`;
}
function Oe(e, t) {
  const r = new globalThis[e](t);
  return "BigInt64Array" === e || "BigUint64Array" === e
    ? Array.from(r, (e) => `${e}n`).join(",")
    : r instanceof Float32Array ||
        r instanceof Float64Array ||
        ("undefined" != typeof Float16Array && r instanceof Float16Array)
      ? Array.from(r, (e) => (Object.is(e, -0) ? "-0" : `${e}`)).join(",")
      : r.toString();
}
function ke(e) {
  return ae[e] || e;
}
function _e(e) {
  return e.replace(be, ke);
}
function Ee(e) {
  const t = typeof e;
  if ("string" === t) return pe(e);
  if (void 0 === e) return "void 0";
  if (0 === e && 1 / e < 0) return "-0";
  const r = String(e);
  return "number" === t ? r.replace(/^(-)?0\./, "$1.") : "bigint" === t ? e + "n" : r;
}
var Ue = "function" == typeof Uint8Array.fromBase64,
  Pe = "object" == typeof process && void 0 !== process.versions?.node,
  Ie = Ue
    ? function (e) {
        return new Uint8Array(e).toBase64();
      }
    : Pe
      ? function (e) {
          return Buffer.from(e).toString("base64");
        }
      : function (e) {
          const t = new Uint8Array(e);
          let r = "";
          for (let n = 0; n < t.length; n += 32768) {
            const e = t.subarray(n, n + 32768);
            r += String.fromCharCode.apply(null, e);
          }
          return btoa(r);
        },
  Te = Ue
    ? function (e) {
        return Uint8Array.fromBase64(e).buffer;
      }
    : Pe
      ? function (e) {
          return Uint8Array.from(Buffer.from(e, "base64")).buffer;
        }
      : function (e) {
          const t = atob(e),
            r = t.length,
            n = new Uint8Array(r);
          for (let a = 0; a < r; a++) n[a] = t.charCodeAt(a);
          return n.buffer;
        };
function je(e, t) {
  if (!t) return e;
  const r = {};
  for (const n of Object.keys(e)) r[n] = t[n] ?? e[n];
  return r;
}
var Le = Object.freeze({ kind: "not-plain" }),
  xe = Object.freeze({ kind: "symbol-keys" }),
  Re = {
    identify: (e) => e,
    typeOf: (e) => (null === e ? "null" : typeof e),
    toPrimitive: (e) => e,
    tagOf: (e) => le(e),
    isThenable: (e) => "function" == typeof e.then,
    toPromise: (e) => Promise.resolve(e),
    unbox: (e) => e.valueOf(),
    toISOString: (e) => (isNaN(e.getDate()) ? "" : e.toISOString()),
    toStringValue: (e) => e.toString(),
    regExpInfo: (e) => ({ source: e.source, flags: e.flags }),
    valuesOf: (e) => e,
    entriesOf: (e) => e,
    viewInfo: (e) => (
      ue(e) && (e = new Uint8Array(e)),
      {
        buffer: e.buffer,
        byteOffset: e.byteOffset,
        byteLength: e.byteLength,
        length: e.length,
        bufferByteLength: e.buffer.byteLength,
      }
    ),
    toArrayBuffer: (e) => e,
    lengthOf: (e) => e.length,
    hasOwn: (e, t) => Object.hasOwn(e, t),
    indicesOf: (e) => we(e),
    shapeOf: (e) =>
      ce(e)
        ? he(e).length > 0
          ? xe
          : {
              kind: null === Object.getPrototypeOf(e) ? "null-proto" : "plain",
              keys: Object.keys(e),
            }
        : Le,
    get: (e, t) => e[t],
  },
  De = Object.freeze(Re),
  Be = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get,
  Ce =
    "undefined" == typeof SharedArrayBuffer
      ? void 0
      : Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "byteLength").get,
  Ne = {
    fromPrimitive: (e) => e,
    fromISOString: (e) => new Date(e),
    fromStringValue: (e, t) =>
      "URL" === e
        ? new URL(t)
        : "URLSearchParams" === e
          ? new URLSearchParams(t)
          : Temporal[e.slice(9)].from(t),
    fromArrayBuffer: (e) => e,
    fromRegExpInfo: (e, t) => new RegExp(e, t),
    fromViewInfo: (e, t, r, n) => {
      try {
        Be.call(t);
      } catch (o) {
        if (!Ce) throw o;
        Ce.call(t);
      }
      const a = globalThis[e];
      return void 0 !== r ? new a(t, r, n) : new a(t);
    },
    box: (e) => Object(e),
    createArray: (e) => new Array(e),
    createSparseArray: (e) => {
      const t = [];
      return ((t[4294967294] = void 0), delete t[4294967294], (t.length = e), t);
    },
    createObject: () => ({}),
    createNullPrototypeObject: () => Object.create(null),
    createSet: () => new Set(),
    createMap: () => new Map(),
    set: (e, t, r) => {
      e[t] = r;
    },
    addValue: (e, t) => {
      e.add(t);
    },
    addEntry: (e, t, r) => {
      e.set(t, r);
    },
  },
  Me = Object.freeze(Ne);
function Ve(e, t, r) {
  return (function (e, t, r) {
    const n = je(Me, r?.operations);
    if ("number" == typeof e) return i(e, !0);
    if (!Array.isArray(e) || 0 === e.length) throw new Error("Invalid input");
    const a = e,
      o = Array(a.length);
    let s = null;
    function i(e, r = !1) {
      if (-1 === e) return n.fromPrimitive(void 0);
      if (-3 === e) return n.fromPrimitive(NaN);
      if (-4 === e) return n.fromPrimitive(1 / 0);
      if (-5 === e) return n.fromPrimitive(-1 / 0);
      if (-6 === e) return n.fromPrimitive(-0);
      if (r || "number" != typeof e) throw new Error("Invalid input");
      if (e in o) return o[e];
      if (e >= a.length) throw new Error("Invalid input");
      const c = a[e];
      if (c && "object" == typeof c)
        if (Array.isArray(c))
          if ("string" == typeof c[0]) {
            const r = c[0],
              l = t && Object.hasOwn(t, r) ? t[r] : void 0;
            if (l) {
              let t = c[1];
              if (("number" != typeof t && (t = a.push(c[1]) - 1), Object.hasOwn(o, t)))
                return (o[e] = l(o[t]));
              if (((s ??= new Set()), s.has(t))) throw new Error("Invalid circular reference");
              return (s.add(t), (o[e] = l(i(t))), s.delete(t), o[e]);
            }
            switch (r) {
              case "Date":
                o[e] = n.fromISOString(c[1]);
                break;
              case "Set":
                const t = n.createSet();
                o[e] = t;
                for (let e = 1; e < c.length; e += 1) n.addValue(t, i(c[e]));
                break;
              case "Map":
                const s = n.createMap();
                o[e] = s;
                for (let e = 1; e < c.length; e += 2) n.addEntry(s, i(c[e]), i(c[e + 1]));
                break;
              case "RegExp":
                o[e] = n.fromRegExpInfo(c[1], c[2]);
                break;
              case "Object": {
                const t = c[1];
                if ("object" == typeof a[t] && "BigInt" !== a[t][0])
                  throw new Error("Invalid input");
                o[e] = n.box(i(t));
                break;
              }
              case "BigInt":
                o[e] = n.fromPrimitive(BigInt(c[1]));
                break;
              case "null":
                const l = n.createNullPrototypeObject();
                o[e] = l;
                for (let e = 1; e < c.length; e += 2) {
                  const t = c[e];
                  if ("string" != typeof t)
                    throw new Error("Cannot parse an object with a non-string key");
                  if ("__proto__" === t)
                    throw new Error("Cannot parse an object with a `__proto__` property");
                  n.set(l, t, i(c[e + 1]));
                }
                break;
              case "Int8Array":
              case "Uint8Array":
              case "Uint8ClampedArray":
              case "Int16Array":
              case "Uint16Array":
              case "Float16Array":
              case "Int32Array":
              case "Uint32Array":
              case "Float32Array":
              case "Float64Array":
              case "BigInt64Array":
              case "BigUint64Array":
              case "DataView": {
                if ("ArrayBuffer" !== a[c[1]][0]) throw new Error("Invalid data");
                const t = i(c[1]);
                o[e] = n.fromViewInfo(r, t, c[2], c[3]);
                break;
              }
              case "ArrayBuffer": {
                const t = c[1];
                if ("string" != typeof t) throw new Error("Invalid ArrayBuffer encoding");
                o[e] = n.fromArrayBuffer(Te(t));
                break;
              }
              case "URL":
              case "URLSearchParams":
              case "Temporal.Duration":
              case "Temporal.Instant":
              case "Temporal.PlainDate":
              case "Temporal.PlainTime":
              case "Temporal.PlainDateTime":
              case "Temporal.PlainMonthDay":
              case "Temporal.PlainYearMonth":
              case "Temporal.ZonedDateTime":
                o[e] = n.fromStringValue(r, c[1]);
                break;
              default:
                throw new Error(`Unknown type ${r}`);
            }
          } else if (-7 === c[0]) {
            const t = c[1];
            if (((l = t), !Number.isInteger(l) || l < 0 || l > re))
              throw new Error("Invalid input");
            const r = n.createSparseArray(t);
            o[e] = r;
            for (let e = 2; e < c.length; e += 2) {
              const a = c[e];
              if (!ye(a) || a >= t) throw new Error("Invalid input");
              n.set(r, a, i(c[e + 1]));
            }
          } else {
            const t = n.createArray(c.length);
            o[e] = t;
            for (let e = 0; e < c.length; e += 1) {
              const r = c[e];
              -2 !== r && n.set(t, e, i(r));
            }
          }
        else {
          const t = n.createObject();
          o[e] = t;
          for (const e of Object.keys(c)) {
            if ("__proto__" === e)
              throw new Error("Cannot parse an object with a `__proto__` property");
            n.set(t, e, i(c[e]));
          }
        }
      else o[e] = n.fromPrimitive(c);
      var l;
      return o[e];
    }
    return i(0);
  })(JSON.parse(e), t, r);
}
function Fe(e, t, r) {
  const n = (function (e, t, r, n) {
    const a = je(De, n?.operations),
      o = [],
      s = new Map(),
      i = [];
    if (r) for (const p of Object.getOwnPropertyNames(r)) i.push({ key: p, fn: r[p] });
    const c = [];
    let l = 0;
    function u(r, n) {
      const f = a.typeOf(r);
      if ("undefined" === f) return -1;
      let p;
      if ("number" === f) {
        if (((p = a.toPrimitive(r)), Number.isNaN(p))) return -3;
        if (p === 1 / 0) return -4;
        if (p === -1 / 0) return -5;
        if (0 === p && 1 / p < 0) return -6;
      }
      const h = a.identify(r);
      if (s.has(h)) return s.get(h);
      ((n ??= l++), s.set(h, n));
      for (const { key: e, fn: t } of i) {
        const a = t(r);
        if (a) return ((o[n] = `["${e}",${u(a)}]`), n);
      }
      if ("function" === f) throw new oe("Cannot stringify a function", c, r, t);
      if ("symbol" === f) throw new oe("Cannot stringify a Symbol primitive", c, r, t);
      let d = "";
      if ("object" !== f) d = ze("number" === f ? p : a.toPrimitive(r));
      else if (a.isThenable(r)) {
        if (!e)
          throw new oe(
            "Cannot stringify a Promise or thenable — use stringifyAsync instead",
            c,
            r,
            t,
          );
        ((d = a.toPromise(r).then((e) => {
          const t = u(e, n);
          t < 0 && (o[n] = t);
        })),
          d.catch(() => {}));
      } else {
        const e = a.tagOf(r);
        switch (e) {
          case "Number":
          case "String":
          case "Boolean":
          case "BigInt":
            d = `["Object",${u(a.unbox(r))}]`;
            break;
          case "Date":
            d = `["Date","${a.toISOString(r)}"]`;
            break;
          case "URL":
            d = `["URL",${pe(a.toStringValue(r))}]`;
            break;
          case "URLSearchParams":
            d = `["URLSearchParams",${pe(a.toStringValue(r))}]`;
            break;
          case "RegExp":
            const { source: n, flags: o } = a.regExpInfo(r);
            d = o ? `["RegExp",${pe(n)},"${o}"]` : `["RegExp",${pe(n)}]`;
            break;
          case "Array": {
            let e = !1;
            const t = a.lengthOf(r);
            d = "[";
            for (let n = 0; n < t; n += 1)
              if ((n > 0 && (d += ","), a.hasOwn(r, n)))
                (c.push(`[${n}]`), (d += u(a.get(r, n))), c.pop());
              else if (e) d += -2;
              else {
                const n = a.indicesOf(r),
                  o = n.length,
                  s = String(t).length;
                if (3 * (t - o) > 4 + s + o * (s + 1)) {
                  d = "[-7," + t;
                  for (let e = 0; e < n.length; e++) {
                    const t = n[e];
                    (c.push(`[${t}]`), (d += "," + t + "," + u(a.get(r, t))), c.pop());
                  }
                  break;
                }
                ((e = !0), (d += -2));
              }
            d += "]";
            break;
          }
          case "Set":
            d = '["Set"';
            for (const e of a.valuesOf(r)) d += `,${u(e)}`;
            d += "]";
            break;
          case "Map":
            d = '["Map"';
            for (const [e, t] of a.entriesOf(r)) {
              const r = a.typeOf(e),
                n = "object" !== r && "function" !== r && "symbol" !== r;
              (c.push(`.get(${n ? ze(a.toPrimitive(e)) : "..."})`),
                (d += `,${u(e)},${u(t)}`),
                c.pop());
            }
            d += "]";
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Float16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            const t = a.viewInfo(r);
            ((d = '["' + e + '",' + u(t.buffer)),
              t.byteLength !== t.bufferByteLength && (d += `,${t.byteOffset},${t.length}`),
              (d += "]"));
            break;
          }
          case "DataView": {
            const t = a.viewInfo(r);
            ((d = '["' + e + '",' + u(t.buffer)),
              t.byteLength !== t.bufferByteLength && (d += `,${t.byteOffset},${t.byteLength}`),
              (d += "]"));
            break;
          }
          case "ArrayBuffer":
            d = `["ArrayBuffer","${Ie(a.toArrayBuffer(r))}"]`;
            break;
          case "Temporal.Duration":
          case "Temporal.Instant":
          case "Temporal.PlainDate":
          case "Temporal.PlainTime":
          case "Temporal.PlainDateTime":
          case "Temporal.PlainMonthDay":
          case "Temporal.PlainYearMonth":
          case "Temporal.ZonedDateTime":
            d = `["${e}",${pe(a.toStringValue(r))}]`;
            break;
          default: {
            const e = a.shapeOf(r);
            if ("not-plain" === e.kind)
              throw new oe("Cannot stringify arbitrary non-POJOs", c, r, t);
            if ("symbol-keys" === e.kind)
              throw new oe("Cannot stringify POJOs with symbolic keys", c, r, t);
            if ("null-proto" === e.kind) {
              d = '["null"';
              for (const n of e.keys) {
                if ("__proto__" === n)
                  throw new oe("Cannot stringify objects with __proto__ keys", c, r, t);
                (c.push(me(n)), (d += `,${pe(n)},${u(a.get(r, n))}`), c.pop());
              }
              d += "]";
            } else {
              d = "{";
              let n = !1;
              for (const o of e.keys) {
                if ("__proto__" === o)
                  throw new oe("Cannot stringify objects with __proto__ keys", c, r, t);
                (n && (d += ","),
                  (n = !0),
                  c.push(me(o)),
                  (d += `${pe(o)}:${u(a.get(r, o))}`),
                  c.pop());
              }
              d += "}";
            }
          }
        }
      }
      return ((o[n] = d), n);
    }
    const f = u(t);
    return f < 0 ? `${f}` : o;
  })(!1, e, t, r);
  return "string" == typeof n ? n : `[${n.join(",")}]`;
}
function ze(e) {
  const t = typeof e;
  return "string" === t
    ? pe(e)
    : void 0 === e
      ? (-1).toString()
      : 0 === e && 1 / e < 0
        ? (-6).toString()
        : "bigint" === t
          ? `["BigInt","${e}"]`
          : String(e);
}
var Je = () => {
    throw new Error("");
  },
  Ze = () => {
    throw new Error("");
  },
  qe = {},
  Ye = {};
function Ge(e, t) {
  return e.origin === t.origin ? e.href.slice(t.origin.length) : e.href;
}
Symbol("__skrao");
function He(e, t) {
  return e + "/" + t;
}
var Ke = window.fetch;
window.fetch = (e, t) => (
  "GET" !== (e instanceof Request ? e.method : t?.method || "GET") && et(e),
  Ke(e, t)
);
var We = new Map();
function Xe(e, t) {
  const r = tt(e, t);
  if (r) {
    const e = document.querySelector(r);
    if (e?.textContent) {
      e.remove();
      let { body: t, ...n } = JSON.parse(e.textContent);
      null !== e.getAttribute("data-b64") &&
        (t = (function (e) {
          const t = atob(e),
            r = new Uint8Array(t.length);
          for (let n = 0; n < t.length; n++) r[n] = t.charCodeAt(n);
          return r;
        })(t));
      const a = e.getAttribute("data-ttl");
      return (
        a && We.set(r, { body: t, init: n, ttl: 1e3 * Number(a) }),
        Promise.resolve(new Response(t, n))
      );
    }
  }
  return window.fetch(e, t);
}
function Qe(e, t, r) {
  if (We.size > 0) {
    const t = tt(e, r),
      n = t && We.get(t);
    if (n) {
      if (
        performance.now() < n.ttl &&
        ["default", "force-cache", "only-if-cached", void 0].includes(r?.cache)
      )
        return new Response(n.body, n.init);
      We.delete(t);
    }
  }
  return window.fetch(t, r);
}
function et(e) {
  const t = tt(
    (function (e) {
      return Ge(new URL(e instanceof Request ? e.url : e, location.href), location);
    })(e),
  );
  for (const r of We.keys()) r.startsWith(t) && We.delete(r);
}
function tt(e, t) {
  let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request ? e.url : e)}]`;
  if (t?.headers || t?.body) {
    const e = t.body;
    if (e && "string" != typeof e && !ArrayBuffer.isView(e)) return null;
    r += `[data-hash="${te(t.headers, e)}"]`;
  }
  return r;
}
function rt(e, t = JSON.parse) {
  try {
    return t(sessionStorage[e]);
  } catch {}
}
function nt(e, t, r = JSON.stringify) {
  const n = r(t);
  try {
    sessionStorage[e] = n;
  } catch {}
}
var at = "sveltekit:metadata",
  ot = { tap: 1, hover: 2, viewport: 3, eager: 4, false: -1 },
  st = location.origin;
function it(e) {
  if (e instanceof URL) return e;
  let t = document.baseURI;
  if (!t) {
    const e = document.getElementsByTagName("base");
    t = e.length ? e[0].href : document.URL;
  }
  return new URL(e, t);
}
function ct() {
  return { x: pageXOffset, y: pageYOffset };
}
function lt(e, t) {
  const r = e.getAttribute(`data-sveltekit-${t}`);
  return r;
}
var ut = { ...ot, "": ot.hover };
function ft(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (11 === t?.nodeType && (t = t.host), t);
}
function pt(e, t) {
  for (; e && e !== t;) {
    if ((e instanceof HTMLAnchorElement || e instanceof SVGAElement) && e.hasAttribute("href"))
      return e;
    e = ft(e);
  }
}
function ht(e, t, r) {
  let n;
  try {
    if (
      ((n = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI)),
      r && n.hash.match(/^#[^/]/))
    ) {
      const e = location.hash.split("#")[1] || "/";
      n.hash = `#${e}${n.hash}`;
    }
  } catch {}
  const a = e instanceof SVGAElement ? e.target.baseVal : e.target;
  return {
    url: n,
    external:
      !n || !!a || mt(n, t, r) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"),
    target: a,
    download: n?.origin === st && e.hasAttribute("download"),
  };
}
function dt(e) {
  let t = null,
    r = null,
    n = null,
    a = null,
    o = null,
    s = e;
  for (; s && s !== document.documentElement;)
    (null === t && (t = lt(s, "preload-code")),
      null === r && (r = lt(s, "preload-data")),
      null === n && (n = lt(s, "reload")),
      null === a && (a = lt(s, "replacestate")),
      null === o && (o = lt(s, "reset")),
      (s = ft(s)));
  function i(e) {
    switch (e) {
      case "":
      case "true":
        return !0;
      case "false":
        return !1;
      default:
        return;
    }
  }
  return {
    preload_code: ut[t ?? "false"],
    preload_data: ut[r ?? "false"],
    reload: i(n),
    replace_state: i(a),
    reset: i(o) ?? !0,
  };
}
function mt(e, t, r) {
  return e.origin !== st || !e.pathname.startsWith(t) || (!!r && e.pathname !== location.pathname);
}
function yt(e, t) {
  const r = t ? (e.hash.split("#", 3)[2] ?? "") : e.hash.slice(1);
  return r ? document.getElementById(decodeURIComponent(r)) : null;
}
function gt(e) {}
function wt(e) {
  const t = document.activeElement;
  e && (t instanceof HTMLElement || t instanceof SVGElement) && t !== document.body && t.blur();
}
var vt = !0;
function bt(e) {
  throw new Error("https://svelte.dev/e/kit/navigation_external_url");
}
function At(e) {
  throw new Error("https://svelte.dev/e/kit/navigation_route_missing");
}
function St(e) {
  throw new Error("https://svelte.dev/e/kit/redirect_loop");
}
var $t = rt("sveltekit:navigation-snapshot") ?? {},
  Ot = new Set();
function kt() {
  return new Set(Ot);
}
function _t(e) {
  0 !== Ot.size
    ? ($t[e] = Object.fromEntries(Array.from(Ot, ({ id: e, capture: t }) => [e, Je(t())])))
    : delete $t[e];
}
function Et(e, t) {
  const r = $t[e];
  for (const n of Ot)
    r && Object.hasOwn(r, n.id) ? n.restore(Ze(r[n.id])) : t?.has(n) && n.reset?.();
}
function Ut(e) {
  delete $t[e];
}
function Pt(e) {
  return e.length > 1 ? `${e.slice(0, -1).join(", ")} or ${e.at(-1)}` : e[0];
}
function It(e) {
  return function (t, r) {
    if (t)
      for (const n in t) {
        if ("_" === n[0] || e.has(n)) continue;
        const t = Tt(n, r?.slice(r.lastIndexOf(".")));
        (t.length > 0 && x({ key: n, locations: Pt(t), file: r || void 0 }),
          j({ key: n, exports: [...e.values()].join(", "), file: r || void 0 }));
      }
  };
}
function Tt(e, t = ".js") {
  const r = [];
  return (
    jt.has(e) && r.push(`+layout${t}`),
    Lt.has(e) && r.push(`+page${t}`),
    xt.has(e) && r.push(`+layout.server${t}`),
    Rt.has(e) && r.push(`+page.server${t}`),
    Dt.has(e) && r.push(`+server${t}`),
    r
  );
}
var jt = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]),
  Lt = new Set([...jt, "entries"]),
  xt = new Set([...jt]),
  Rt = new Set([...xt, "actions", "entries"]),
  Dt = new Set([
    "GET",
    "POST",
    "PATCH",
    "PUT",
    "DELETE",
    "OPTIONS",
    "HEAD",
    "QUERY",
    "fallback",
    "prerender",
    "trailingSlash",
    "config",
    "entries",
  ]);
(It(jt), It(Lt), It(xt), It(Rt), It(Dt));
function Bt() {}
var Ct = {
    spanContext: () => Nt,
    setAttribute() {
      return this;
    },
    setAttributes() {
      return this;
    },
    addEvent() {
      return this;
    },
    setStatus() {
      return this;
    },
    updateName() {
      return this;
    },
    end() {
      return this;
    },
    isRecording: () => !1,
    recordException() {
      return this;
    },
    addLink() {
      return this;
    },
    addLinks() {
      return this;
    },
  },
  Nt = { traceId: "", spanId: "", traceFlags: 0 },
  Mt = n(
    '<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>',
  ),
  Vt = n("<!> <!>", 1);
function Ft(e, t) {
  h(t, !0);
  const n = (e, r = b, a = b) => {
      const o = (e, t = b) => {
          var r = c(),
            n = u(r);
          (g(
            n,
            () => i(l),
            (e, r) => {
              r(e, {
                get error() {
                  return t();
                },
              });
            },
          ),
            _(e, r));
        },
        s = p(() => r().component),
        l = p(() => r().error),
        f = p(() => r().data);
      var h = c(),
        m = u(h);
      (E(
        m,
        {
          get failed() {
            return i(l) ? o : void 0;
          },
          get onerror() {
            return i(l) ? t.onerror : void 0;
          },
        },
        (e) => {
          var o = c(),
            l = u(o),
            p = (e) => {
              var o = c(),
                l = u(o);
              (g(
                l,
                () => i(s),
                (e, o) => {
                  S(
                    o(e, {
                      get data() {
                        return i(f);
                      },
                      get form() {
                        return t.form;
                      },
                      get params() {
                        return t.page.params;
                      },
                      children: (e, t) => {
                        n(
                          e,
                          () => r().child,
                          () => a() + 1,
                        );
                      },
                      $$slots: { default: !0 },
                    }),
                    (e) => (d()[a()] = e),
                    () => d()?.[a()],
                  );
                },
              ),
                _(e, o));
            },
            h = (e) => {
              var r = c(),
                n = u(r);
              (g(
                n,
                () => i(s),
                (e, r) => {
                  S(
                    r(e, {
                      get data() {
                        return i(f);
                      },
                      get form() {
                        return t.form;
                      },
                      get params() {
                        return t.page.params;
                      },
                      get error() {
                        return t.error;
                      },
                    }),
                    (e) => (d()[a()] = e),
                    () => d()?.[a()],
                  );
                },
              ),
                _(e, r));
            };
          (A(l, (e) => {
            r().child ? e(p) : e(h, -1);
          }),
            _(e, o));
        },
      ),
        _(e, h));
    },
    d = v(t, "components", 7);
  let m = o(!1),
    y = o(!1),
    U = o("");
  (function (e, t) {
    w(
      () => (
        e.add(t),
        () => {
          e.delete(t);
        }
      ),
    );
  })(br, () => {
    i(m) ? (s(y, !0), s(U, document.title || "untitled page", !0)) : s(m, !0);
  });
  var P = Vt(),
    I = u(P);
  n(
    I,
    () => t.tree,
    () => 0,
  );
  var T = l(I, 2),
    j = (e) => {
      var t = Mt(),
        n = r(t),
        o = (e) => {
          var t = k();
          (a(() => O(t, i(U))), _(e, t));
        };
      (A(n, (e) => {
        i(y) && e(o);
      }),
        $(t),
        _(e, t));
    };
  (A(T, (e) => {
    i(m) && e(j);
  }),
    _(e, P),
    f());
}
var zt = class {
    #e;
    get form() {
      return i(this.#e);
    }
    set form(e) {
      s(this.#e, e);
    }
    #t;
    get error() {
      return i(this.#t);
    }
    set error(e) {
      s(this.#t, e);
    }
    page;
    components = [];
    tree;
    onerror;
    constructor({ page: e, tree: t, form: r, error: n, onerror: a = Bt }) {
      ((this.page = e), (this.tree = t), (this.onerror = a), (this.#e = o(r)), (this.#t = o(n)));
    }
  },
  Jt = class {
    component;
    error;
    #r = o({});
    get data() {
      return i(this.#r);
    }
    set data(e) {
      s(this.#r, e);
    }
    #n = o();
    get child() {
      return i(this.#n);
    }
    set child(e) {
      s(this.#n, e);
    }
    constructor(e, t) {
      ((this.component = e), (this.error = t));
    }
  };
var Zt,
  qt,
  Yt,
  Gt,
  Ht,
  Kt,
  Wt,
  Xt = new Set(["icon", "shortcut icon", "apple-touch-icon"]),
  Qt = new Set(),
  er = rt("sveltekit:history-info") ?? {},
  tr = rt("sveltekit:snapshot") ?? {};
function rr(e) {
  er[e].scroll = ct();
}
function nr(e, t) {
  er[e] = { ...er[e], resetIndex: t.resetIndex };
}
function ar(e, t) {
  Ut(e);
  let r = e + 1;
  for (; er[r];) (delete er[r], Ut(r), (r += 1));
  for (r = t + 1; tr[r];) (delete tr[r], (r += 1));
}
function or(e, t = !1) {
  return (t ? location.replace(e.href) : (location.href = e.href), new Promise(Bt));
}
async function sr() {
  try {
    if ("serviceWorker" in navigator) {
      const e = await navigator.serviceWorker.getRegistration(F || "/");
      e && (await e.update());
    }
  } catch {}
}
var ir = {},
  cr = {},
  lr = [],
  ur = null;
function fr() {
  (ur?.fork?.then((e) => e?.discard()), (ur = null), (rn = { element: void 0, href: void 0 }));
}
var pr,
  hr,
  dr,
  mr,
  yr,
  gr = new Map(),
  wr = new Set(),
  vr = new Set(),
  br = new Set(),
  Ar = { branch: [], error: null, url: null, nav: null },
  Sr = !1,
  $r = !1,
  Or = !1,
  kr = !1,
  _r = null,
  Er = !1,
  Ur = !1;
function Pr(e = history.state) {
  return e?.[at];
}
var Ir = new Set(),
  Tr = new Map(),
  jr = new Map();
function Lr(t, r, n) {
  return (async function (t, r, n) {
    0;
    if (e.data) {
      const { q: t = {}, p: r = {}, l: n = {}, f: a = {} } = e.data;
      for (const e in t) ir[e] = t[e];
      for (const e in n) ir[e] = n[e];
      for (const e in a) ir[e] = a[e];
      for (const e in r) cr[e] = r[e];
    }
    document.URL !== location.href && (location.href = location.href);
    ((Wt = t),
      (function (e) {
        const t = Object.entries(e);
        t.length > 0;
        const r = (t) => {
          for (const n of Object.keys(e)) {
            const a = e[n].encode(t);
            if (a) return `app.decode('${n}', ${Se(a, r)})`;
          }
        };
        ((qe = Object.fromEntries(t.map(([e, t]) => [e, t.encode]))),
          (Ye = Object.fromEntries(t.map(([e, t]) => [e, t.decode]))),
          (Je = (e) => Fe(e, qe)),
          (Ze = (e) => Ve(e, Ye)));
      })(Wt.hooks.transport ?? {}),
      await t.hooks.init?.(),
      (qt = (function ({ nodes: e, server_loads: t, dictionary: r, matchers: n }) {
        const a = new Set(t);
        return Object.entries(r).map(([t, [r, a, i]]) => {
          const { pattern: c, params: l } = M(t),
            u = {
              id: t,
              exec: (e) => {
                const t = c.exec(e);
                if (t) return D(t, l, n);
              },
              errors: [1, ...(i || [])].map((t) => e[t]),
              layouts: [0, ...(a || [])].map(s),
              leaf: o(r),
            };
          return (
            (u.errors.length = u.layouts.length = Math.max(u.errors.length, u.layouts.length)), u
          );
        });
        function o(t) {
          const r = t < 0;
          return (r && (t = ~t), [r, e[t]]);
        }
        function s(t) {
          return void 0 === t ? t : [a.has(t), e[t]];
        }
      })(t)),
      (Ht = document.documentElement),
      (Kt = r),
      (Yt = t.nodes[0]),
      (Gt = t.nodes[1]));
    const [a] = await Promise.all([Yt(), Gt()]),
      o = new Jt(a.component, void 0);
    Zt = new zt({ page: z, tree: o, form: void 0, error: void 0, onerror: (e, t) => Qt.add(t) });
    const s = Pr();
    ((pr = s?.historyIndex ?? 0),
      (hr = s?.navigationIndex ?? 0),
      (dr = s?.resetIndex ?? 0),
      pr ||
        ((pr = hr = dr = Date.now()),
        history.replaceState(
          {
            ...history.state,
            [at]: {
              historyIndex: pr,
              navigationIndex: hr,
              state: Je({}),
              persistState: !1,
              resetIndex: pr,
            },
          },
          "",
        )));
    nr(pr, Pr());
    const i = er[pr]?.scroll;
    function c() {
      i && ((history.scrollRestoration = "manual"), scrollTo(i.x, i.y));
    }
    n
      ? (c(),
        await (async function (
          e,
          {
            status: t,
            error: r,
            node_ids: n,
            params: a,
            route: o,
            server_route: s,
            data: i,
            form: c,
          },
        ) {
          Sr = !0;
          const l = new URL(location.href);
          let u, f;
          (({ params: a = {}, route: o = { id: null } } = (await Hr(l, !1)) || {}),
            (u = qt.find(({ id: e }) => e === o.id)));
          let p = !0;
          try {
            const e = n.map(async (t, r) => {
                const n = i[r];
                var s;
                return (
                  n?.uses &&
                    (n.uses =
                      ((s = n.uses),
                      {
                        dependencies: new Set(s?.dependencies ?? []),
                        params: new Set(s?.params ?? []),
                        parent: !!s?.parent,
                        route: !!s?.route,
                        url: !!s?.url,
                        search_params: new Set(s?.search_params ?? []),
                      })),
                  zr({
                    loader: Wt.nodes[t],
                    url: l,
                    params: a,
                    route: o,
                    parent: async () => {
                      const t = {};
                      for (let n = 0; n < r; n += 1) Object.assign(t, (await e[n]).data);
                      return t;
                    },
                    server_data_node: Zr(n),
                  })
                );
              }),
              s = await Promise.all(e);
            if (u) {
              const e = u.layouts;
              for (let t = 0; t < e.length; t++) e[t] || s.splice(t, 0, void 0);
            }
            f = await Fr({
              url: l,
              params: a,
              branch: s,
              status: t,
              error: r,
              errors: u?.errors,
              form: c,
              route: u ?? null,
            });
          } catch (r) {
            if (r instanceof Q) return await or(new URL(r.location, location.href));
            ((f = await Gr({
              error: await nn(r, { url: l, params: a, route: o }),
              url: l,
              route: o,
            })),
              (e.textContent = ""),
              (p = !1));
          }
          if (!f) return;
          if (f.props.page) {
            const e = Pr();
            f.props.page.state = e?.persistState ? Ze(e.state) : {};
          }
          await Vr(f, e, p);
        })(Kt, n))
      : (await Xr({
          type: "enter",
          url: it(Wt.hash ? cn(new URL(location.href)) : location.href),
          replace_state: !0,
          state: s?.persistState ? Ze(s.state) : {},
          persist_state: s?.persistState ?? !1,
        }),
        c());
    !(function () {
      ((history.scrollRestoration = "manual"),
        addEventListener("beforeunload", (e) => {
          let t = !1;
          if ((Br(), !kr)) {
            const e = sn(Ar, void 0, null, "leave"),
              r = {
                ...e.navigation,
                cancel: () => {
                  ((t = !0), e.reject(new Error("navigation cancelled")));
                },
              };
            wr.forEach((e) => e(r));
          }
          t && (e.preventDefault(), (e.returnValue = ""));
        }),
        addEventListener("visibilitychange", () => {
          "hidden" === document.visibilityState ? Br() : C.check();
        }),
        addEventListener("focus", () => {
          C.check();
        }),
        navigator.connection?.saveData ||
          (function () {
            let e, t, r;
            function n() {
              (clearTimeout(e),
                t?.removeEventListener("mousemove", a),
                t?.removeEventListener("mouseleave", n),
                (t = void 0));
            }
            function a() {
              (clearTimeout(e),
                (e = setTimeout(() => {
                  t && i(t, ot.hover);
                }, 20)));
            }
            function o(e) {
              if (e.defaultPrevented) return;
              const t = pt(e.composedPath()[0], Ht);
              t && i(t, ot.tap);
            }
            (Ht.addEventListener("mouseover", (e) => {
              if (!(e.target instanceof Element)) return;
              const r = pt(e.target, Ht);
              if (!r || r === t) return;
              (n(), (t = r));
              const o = dt(r);
              (o.preload_code < ot.hover && o.preload_data < ot.hover) ||
                (r.addEventListener("mousemove", a),
                r.addEventListener("mouseleave", n, { once: !0 }),
                a());
            }),
              Ht.addEventListener("mousedown", o),
              Ht.addEventListener("touchstart", o, { passive: !0 }));
            const s = new IntersectionObserver(
              (e) => {
                for (const t of e)
                  t.isIntersecting && (Mr(new URL(t.target.href)), s.unobserve(t.target));
              },
              { threshold: 0 },
            );
            async function i(e, t) {
              const n = e === rn.element && e?.href === rn.href && t >= r;
              if (!e || n) return;
              const { url: a, external: o, download: s } = ht(e, F, Wt.hash);
              if (o || s) return;
              const i = dt(e),
                c = a && Kr(Ar.url) === Kr(a);
              if (!i.reload && !c)
                if (t <= i.preload_data) {
                  ((rn = { element: e, href: e.href }), (r = ot.tap));
                  const t = await Hr(a, !1);
                  if (!t) return;
                  Nr(t).catch(Bt);
                } else t <= i.preload_code && ((rn = { element: e, href: e.href }), (r = t), Mr(a));
            }
            function c() {
              s.disconnect();
              for (const e of Ht.querySelectorAll("a")) {
                const { url: t, external: r, download: n } = ht(e, F, Wt.hash);
                if (r || n) continue;
                const a = dt(e);
                a.reload ||
                  (a.preload_code === ot.viewport && s.observe(e),
                  a.preload_code === ot.eager && Mr(t));
              }
            }
            (br.add(c), c());
          })());
      (Ht.addEventListener("click", async (t) => {
        if (t.button) return;
        if (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
        if (t.defaultPrevented) return;
        const r = pt(t.composedPath()[0], Ht);
        if (!r) return;
        const { url: n, external: a, target: o, download: s } = ht(r, F, Wt.hash);
        if (!n) return;
        if ("_parent" === o || "_top" === o) {
          if (window.parent !== window) return;
        } else if (o && "_self" !== o) return;
        const i = dt(r);
        if (
          !(r instanceof SVGAElement) &&
          n.protocol !== location.protocol &&
          "https:" !== n.protocol &&
          "http:" !== n.protocol
        )
          return;
        if (s) return;
        const [c, l] = (Wt.hash ? n.hash.replace(/^#/, "") : n.href).split("#"),
          u = c === G(location);
        if (a || (i.reload && (!u || !l)))
          return void (Wr({ url: n, type: "link", event: t }) ? (kr = !0) : t.preventDefault());
        if (void 0 !== l && u) {
          const [, a] = Ar.url.href.split("#");
          if (a === l) {
            if (
              (t.preventDefault(),
              "" === l || ("top" === l && null === r.ownerDocument.getElementById("top")))
            )
              scrollTo({ top: 0 });
            else {
              const e = r.ownerDocument.getElementById(decodeURIComponent(l));
              e && (e.scrollIntoView(), e.focus());
            }
            return;
          }
          if (
            ((_r = { ...Pr(), resetIndex: dr + (i.reset ? 1 : 0) }), rr(pr), e(n), !i.replace_state)
          )
            return;
          _r = null;
        }
        (t.preventDefault(),
          await new Promise((e) => {
            (requestAnimationFrame(() => {
              setTimeout(e, 0);
            }),
              setTimeout(e, 100));
          }));
        const f = n.href !== location.href;
        await Cr(n, {
          type: "link",
          reset: i.reset,
          replace: i.replace_state ?? !f,
          refreshAll: !f,
          event: t,
        });
      }),
        Ht.addEventListener("submit", (e) => {
          if (e.defaultPrevented) return;
          const t = HTMLFormElement.prototype.cloneNode.call(e.target),
            r = e.submitter;
          if ("_blank" === (r?.formTarget || t.target)) return;
          if ("get" !== (r?.formMethod || t.method)) return;
          const n = new URL((r?.hasAttribute("formaction") && r?.formAction) || t.action);
          if (mt(n, F, !1)) return;
          const a = e.target,
            o = dt(a);
          if (o.reload) return;
          (e.preventDefault(), e.stopPropagation());
          const s = new FormData(a, r);
          ((n.search = new URLSearchParams(s).toString()),
            Xr({
              type: "form",
              url: n,
              reset: o.reset,
              replace_state: o.replace_state ?? n.href === location.href,
              event: e,
            }));
        }),
        addEventListener("popstate", async (t) => {
          const r = Pr(t.state);
          if (r?.historyIndex) {
            const n = r.historyIndex,
              a = er[pr];
            if (n === pr) return;
            mr = yr = {};
            const o = n - pr,
              s = r.resetIndex,
              i = s !== (a?.resetIndex ?? dr),
              c = er[n]?.scroll,
              l = Ze(r.state),
              u = new URL(r.pageUrl ?? location.href),
              f = r.navigationIndex,
              p =
                !(!Ar.url || !(location.href + Ar.url.href).includes("#")) &&
                G(location) === G(Ar.url),
              h = f === hr && ((Er && (void 0 === r.pageUrl || r.pageUrl === location.href)) || p),
              d = r.pageUrl ? new URL(location.href) : null,
              m = pr,
              y = hr,
              g = dr;
            (rr(m), h || Rr(y), _t(m), (pr = n), (hr = f), (dr = s));
            const w = mr,
              v = d ? await Hr(d, !1) : void 0;
            if (mr !== w) return;
            const b = d
              ? { params: v?.params ?? null, route: v ? { id: v.route.id } : null, url: d }
              : null;
            if (h)
              return (
                wt(i),
                V({ state: l, shallow: b }),
                e(u),
                i && c && scrollTo(c.x, c.y),
                Et(pr, kt()),
                (kr = !1),
                void N(null)
              );
            await Xr({
              type: "popstate",
              url: u,
              reset: i,
              popped: { state: l, scroll: c, delta: o, shallow: b },
              block: () => {
                ((pr = m), (hr = y), (dr = g), history.go(-o));
              },
              nav_token: w,
              event: t,
            });
          } else _r || (e(new URL(location.href)), Wt.hash && location.reload());
        }),
        addEventListener("hashchange", () => {
          if (_r) {
            const e = _r;
            ((_r = null),
              (dr = e.resetIndex),
              history.replaceState(
                { ...history.state, [at]: { ...e, historyIndex: ++pr, navigationIndex: hr } },
                "",
                location.href,
              ),
              nr(pr, e));
          }
        }));
      for (const t of document.querySelectorAll("link")) Xt.has(t.rel) && (t.href = t.href);
      function e(e) {
        ((Ar.url = e), V({ url: e }));
      }
      addEventListener("pageshow", (e) => {
        if (e.persisted) {
          N(null);
          const e = er[pr]?.scroll;
          e && scrollTo(e.x, e.y);
        }
      });
    })();
  })(t, r, n);
}
function* xr(e) {
  for (const [t, r] of e) for (const [e, n] of r) yield [He(t, e), n];
}
(B(async (e) => {
  "string" == typeof e && (e = new URL(e, location.href));
  const t = await Hr(e, !1);
  return t ? { id: t.route.id, params: t.params } : null;
}),
  Promise.resolve());
function Rr(e) {
  Zt.components.some((e) => e?.snapshot) &&
    (tr[e] = Zt.components.map((e) => e?.snapshot?.capture()));
}
function Dr(e) {
  tr[e]?.forEach((e, t) => {
    Zt.components[t]?.snapshot?.restore(e);
  });
}
function Br() {
  (rr(pr),
    nt("sveltekit:history-info", er),
    Rr(hr),
    nt("sveltekit:snapshot", tr),
    _t(pr),
    nt("sveltekit:navigation-snapshot", $t));
}
async function Cr(e, r = {}, n = 0, a = {}, o) {
  let s, i;
  (r.refreshAll && fr(),
    await Xr({
      type: r.type ?? "goto",
      url: it(e),
      reset: r.reset,
      replace_state: r.replace,
      state: r.state,
      persist_state: r.persistState,
      event: r.event,
      action_result: r.action_result,
      redirect_count: n,
      nav_token: a,
      intent: o,
      accept: () => {
        if (r.refreshAll) {
          ((Ur = !0), (s = new Set()));
          for (const [e, t] of xr(Tr)) (t.resource?.reset(), s.add(e));
          i = new Set();
          for (const [e] of xr(jr)) i.add(e);
        }
        r.invalidate && r.invalidate.forEach(on);
      },
    }),
    r.refreshAll &&
      t()
        .then(t)
        .then(() => {
          for (const [e, { resource: t }] of xr(Tr)) s?.has(e) && t.start();
          for (const [e, { resource: t }] of xr(jr)) i?.has(e) && t.reconnect();
        }));
}
async function Nr(e) {
  if (e.id !== ur?.id) {
    fr();
    const t = {};
    (Ir.add(t),
      (ur = {
        id: e.id,
        token: t,
        promise: qr({ ...e, preload: t }).finally(() => {
          Ir.delete(t);
        }),
        fork: null,
      }).promise.catch(fr));
  }
  return ur.promise;
}
async function Mr(e) {
  const t = (await Hr(e, !1))?.route;
  t &&
    (await (async function (e) {
      await Promise.all([...e.layouts, e.leaf].filter(Boolean).map(([, e]) => e()));
    })(t));
}
async function Vr(e, t, r) {
  const n = { params: Ar.params, route: { id: Ar.route?.id ?? null }, url: new URL(location.href) };
  if (
    ((Ar = { ...e.state, nav: n }),
    ln(e),
    (r ? m : d)(Ft, {
      target: t,
      props: Zt,
      transformError: async (e) => {
        const t = await nn(e, Ar.nav);
        return (V({ error: t, status: t.status }), t);
      },
    }),
    await Promise.resolve(),
    r)
  ) {
    const e = {
      from: null,
      to: { ...n, scroll: er[pr]?.scroll ?? ct() },
      willUnload: !1,
      type: "enter",
      shallow: !1,
      complete: Promise.resolve(),
    };
    br.forEach((t) => t(e));
  }
  (Dr(hr), Et(pr), ($r = !0));
}
async function Fr({
  url: e,
  params: t,
  branch: r,
  errors: n,
  status: a,
  error: o,
  route: s,
  form: i,
}) {
  let c = "never";
  if (!F || (e.pathname !== F && e.pathname !== F + "/"))
    for (const y of r) void 0 !== y?.slash && (c = y.slash);
  else c = "always";
  ((e.pathname = X(e.pathname, c)), (e.search = e.search));
  const l = {
    type: "loaded",
    state: { url: e, params: t, branch: r, error: o, route: s },
    props: { page: { ...z }, tree: {} },
  };
  (o && (l.props.error = o), void 0 !== i && (l.props.form = i));
  let u = {},
    f = !z;
  const p =
    n &&
    (await (function (e, t, r) {
      const n = [void 0];
      let a = -1;
      for (let o = 1; o < e.length; o += 1) {
        if (!e[o]) continue;
        let s = o - 1;
        for (; s > a + 1 && null == t[s];) s -= 1;
        a = s;
        const i = t[s];
        n.push(null == i ? void 0 : r(i)?.catch(() => {}));
      }
      return Promise.all(n);
    })(r, n, (e) => e().then((e) => e.component)));
  let h = l.props.tree,
    d = 1,
    m = Zt.tree;
  for (let y = 0; y < r.length; y += 1) {
    const e = r[y],
      t = Ar.branch[y];
    if (
      e &&
      (f || !m || e?.data !== t?.data
        ? ((h.data = { ...u, ...e.data }), (f = !0))
        : (h.data = m.data),
      (u = h.data),
      y < r.length - 1)
    ) {
      let e = y + 1;
      for (; e < r.length && !r[e];) e += 1;
      const t = r[e];
      t && ((h = h.child = new Jt(t.node.component, p?.[d++])), (m = m?.child));
    }
  }
  return (
    (!Ar.url || e.href !== Ar.url.href || Ar.error !== o || (void 0 !== i && i !== z.form) || f) &&
      (l.props.page = {
        error: o,
        params: t,
        route: { id: s?.id ?? null },
        state: {},
        shallow: null,
        status: a ?? o?.status ?? 200,
        url: new URL(e),
        form: i ?? null,
        data: u,
      }),
    l
  );
}
async function zr({ loader: e, parent: t, url: r, params: n, route: a, server_data_node: o }) {
  let s = null,
    i = !0;
  const c = {
      dependencies: new Set(),
      params: new Set(),
      parent: !1,
      route: !1,
      url: !1,
      search_params: new Set(),
    },
    l = await e();
  if (l.universal?.load) {
    function u(...e) {
      for (const t of e) {
        0;
        const { href: e } = new URL(t, r);
        c.dependencies.add(e);
      }
    }
    const f = {
      tracing: { enabled: !1, root: Ct, current: Ct },
      route: new Proxy(a, { get: (e, t) => (i && (c.route = !0), e[t]) }),
      params: new Proxy(n, { get: (e, t) => (i && c.params.add(t), e[t]) }),
      data: o?.data ?? null,
      url: K(
        r,
        () => {
          i && (c.url = !0);
        },
        (e) => {
          i && c.search_params.add(e);
        },
        Wt.hash,
      ),
      async fetch(e, t) {
        e instanceof Request &&
          (t = {
            body: "GET" === e.method || "HEAD" === e.method ? void 0 : await e.blob(),
            cache: e.cache,
            credentials: e.credentials,
            headers: [...e.headers].length > 0 ? e?.headers : void 0,
            integrity: e.integrity,
            keepalive: e.keepalive,
            method: e.method,
            mode: e.mode,
            redirect: e.redirect,
            referrer: e.referrer,
            referrerPolicy: e.referrerPolicy,
            signal: e.signal,
            ...t,
          });
        const { resolved: n, promise: a } = Jr(e, t, r);
        return (i && u(n.href), a);
      },
      setHeaders: Bt,
      depends: u,
      parent: () => (i && (c.parent = !0), t()),
      untrack(e) {
        i = !1;
        try {
          return e();
        } finally {
          i = !0;
        }
      },
    };
    s = (await l.universal.load.call(null, f)) ?? null;
  }
  return {
    node: l,
    loader: e,
    server: o,
    universal: l.universal?.load ? { type: "data", data: s, uses: c } : null,
    data: s ?? o?.data ?? null,
    slash: l.universal?.trailingSlash ?? o?.slash,
  };
}
function Jr(e, t, r) {
  const n = new URL(e instanceof Request ? e.url : e, r),
    a = Ge(n, r);
  return { resolved: n, promise: $r ? Qe(a, n.href, t) : Xe(a, t) };
}
function Zr(e, t) {
  return "data" === e?.type ? e : "skip" === e?.type ? (t ?? null) : null;
}
async function qr({
  id: e,
  invalidating: t,
  url: r,
  params: n,
  route: a,
  preload: o,
  action_result: s,
}) {
  if (!s && ur?.id === e) return (Ir.delete(ur.token), ur.promise);
  const { errors: i, layouts: c, leaf: l } = a,
    u = [...c, l],
    f = u.length - 1,
    p = "error" === s?.type;
  (i.forEach((e) => e?.().catch(Bt)), u.forEach((e) => e?.[1]().catch(Bt)));
  const h = !!Ar.url && e !== Kr(Ar.url),
    d = !Ar.route || a.id !== Ar.route.id,
    m = (function (e, t) {
      if (!e) return new Set(t.searchParams.keys());
      const r = new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
      for (const n of r) {
        const a = e.searchParams.getAll(n).sort(),
          o = t.searchParams.getAll(n).sort();
        a.length === o.length && a.every((e, t) => e === o[t]) && r.delete(n);
      }
      return r;
    })(Ar.url, r);
  let y = !1;
  const g = u.map(async (e, t) => {
    if (!e || (p && t === f)) return;
    const o = Ar.branch[t];
    return e[1] !== o?.loader ||
      (function (e, t, r, n, a, o) {
        if (Ur) return !0;
        if (!a) return !1;
        if (a.parent && e) return !0;
        if (a.route && t) return !0;
        if (a.url && r) return !0;
        for (const s of a.search_params) if (n.has(s)) return !0;
        for (const s of a.params) if (o[s] !== Ar.params[s]) return !0;
        for (const s of a.dependencies) if (lr.some((e) => e(new URL(s)))) return !0;
        return !1;
      })(y, d, h, m, o.universal?.uses, n)
      ? ((y = !0),
        zr({
          loader: e[1],
          url: r,
          params: n,
          route: a,
          parent: async () => {
            const e = {};
            for (let r = 0; r < t; r += 1) Object.assign(e, (await g[r])?.data);
            return e;
          },
          server_data_node: Zr(e[0] ? { type: "skip" } : null, e[0] ? o?.server : void 0),
        }))
      : o;
  });
  for (const b of g) b.catch(Bt);
  const w = [];
  for (let b = 0; b < u.length; b += 1)
    if (u[b])
      try {
        w.push(await g[b]);
      } catch (v) {
        if (v instanceof Q) return { type: "redirect", status: v.status, location: v.location };
        if (o && Ir.has(o)) throw await nn(v, { params: n, url: r, route: { id: a.id } });
        let e;
        if (v instanceof W) e = await nn(v, { params: n, url: r, route: { id: a.id } });
        else {
          if (await C.check()) return (await sr(), await or(r));
          e = await nn(v, { params: n, url: r, route: { id: a.id } });
        }
        return Yr({ i: b, branch: w, errors: i, error: e, url: r, params: n, route: a });
      }
    else w.push(void 0);
  return "error" === s?.type
    ? Yr({
        i: u.length,
        branch: w,
        errors: i,
        error: s.error,
        status: s.status,
        url: r,
        params: n,
        route: a,
      })
    : Fr({
        url: r,
        params: n,
        branch: w,
        errors: i,
        error: null,
        route: a,
        status: s?.status,
        form: "success" === s?.type || "failure" === s?.type ? (s.data ?? null) : t ? void 0 : null,
      });
}
async function Yr({
  i: e,
  branch: t,
  errors: r,
  error: n,
  status: a,
  url: o,
  params: s,
  route: i,
}) {
  const c = await (async function (e, t, r) {
    for (const { error: n, idx: a } of (function* (e, t, r) {
      for (; e--;) {
        const n = r[e];
        if (null != n) {
          let r = e;
          for (; !t[r];) r -= 1;
          yield { error: n, idx: r + 1 };
        }
      }
    })(e, t, r))
      try {
        return t
          .slice(0, a)
          .concat({ node: await n(), loader: n, data: {}, server: null, universal: null });
      } catch {
        continue;
      }
  })(e, t, r);
  return c
    ? Fr({ url: o, params: s, branch: c, errors: r, error: n, status: a, route: i })
    : tn(o, { id: i.id }, n);
}
async function Gr({ error: e, url: t, route: r }) {
  const n = {};
  try {
    return Fr({
      url: t,
      params: n,
      branch: [
        await zr({
          loader: Yt,
          url: t,
          params: n,
          route: r,
          parent: () => Promise.resolve({}),
          server_data_node: Zr(null),
        }),
        { node: await Gt(), loader: Gt, universal: null, server: null, data: null },
      ],
      error: e,
      errors: [],
      route: null,
    });
  } catch (e) {
    if (e instanceof Q) return void (await Cr(new URL(e.location, location.href)));
    const a = await Wt.get_error_template(),
      o = await nn(e, { url: t, params: n, route: r }),
      s = String(o?.message ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;"),
      i = a({ status: o.status, message: s }),
      c = new DOMParser().parseFromString(i, "text/html");
    throw (
      document.documentElement.replaceChild(document.adoptNode(c.head), document.head),
      document.documentElement.replaceChild(document.adoptNode(c.body), document.body),
      e
    );
  }
}
async function Hr(e, t) {
  if (e && !mt(e, F, Wt.hash)) {
    const r = await (async function (e) {
      const t = e.href;
      if (gr.has(t)) return gr.get(t);
      let r;
      try {
        const n = (async () => {
          let t =
            (await Wt.hooks.reroute({
              url: new URL(e),
              fetch: async (t, r) => Jr(t, r, e).promise,
            })) ?? e;
          if ("string" == typeof t) {
            const r = new URL(e);
            (Wt.hash ? (r.hash = t) : (r.pathname = t), (t = r));
          }
          return t;
        })();
        (gr.set(t, n), (r = await n));
      } catch (n) {
        return void gr.delete(t);
      }
      return r;
    })(e);
    if (!r) return;
    const n = (function (e) {
      return (
        ee(Wt.hash ? e.hash.replace(/^#/, "").replace(/[?#].+/, "") : e.pathname.slice(F.length)) ||
        "/"
      );
    })(r);
    for (const a of qt) {
      const r = a.exec(n);
      if (r) return { id: Kr(e), invalidating: t, route: a, params: r, url: e };
    }
  }
}
function Kr(e) {
  return (Wt.hash ? e.hash.replace(/^#/, "") : e.pathname) + e.search;
}
function Wr({
  url: e,
  type: t,
  intent: r,
  delta: n,
  event: a,
  scroll: o,
  shallow: s = !1,
  target: i,
}) {
  let c = !1;
  const l = sn(Ar, r, e, t, o ?? null, s, i);
  ("popstate" === l.navigation.type && void 0 !== n && (l.navigation.delta = n),
    void 0 !== a && (l.navigation.event = a));
  const u = {
    ...l.navigation,
    cancel: () => {
      ((c = !0), l.reject(new Error("navigation cancelled")));
    },
  };
  return (kr || wr.forEach((e) => e(u)), c ? null : l);
}
async function Xr({
  type: e,
  url: t,
  popped: r,
  reset: n = !0,
  replace_state: a,
  state: o = {},
  persist_state: s = !1,
  redirect_count: i = 0,
  nav_token: c = {},
  accept: l = Bt,
  block: u = Bt,
  event: f,
  intent: p,
  action_result: h,
}) {
  const d = mr,
    m = yr;
  ((mr = yr = c), (p ??= await Hr(t, !1)));
  const g =
    "enter" === e
      ? sn(Ar, p, t, e)
      : Wr({
          url: t,
          type: e,
          delta: r?.delta,
          intent: p,
          scroll: r?.scroll,
          shallow: !!r?.shallow,
          target: r?.shallow ?? void 0,
          event: f,
        });
  if (!g) return (u(), mr === c && (mr = d), void (yr === c && (yr = m)));
  const w = pr,
    v = hr,
    b = kt();
  (l(), (kr = !0), $r && "enter" !== g.navigation.type && N(g.navigation));
  let A = p && (await qr({ ...p, action_result: h }));
  if (!A) {
    const e = mt(t, F, Wt.hash),
      r = e && !1;
    if (e && !r) return await or(t, a);
    A = await tn(
      t,
      { id: null },
      await nn(
        new Z(
          404,
          "Not Found",
          `Not found: ${t.pathname}${r ? " (did you forget the hash?)" : ""}`,
        ),
        { url: t, params: {}, route: { id: null } },
      ),
      a,
    );
  }
  if (((t = p?.url || t), mr !== c)) return void g.reject(new Error("navigation aborted"));
  if (!A) return;
  if ("redirect" === A.type) {
    if (i < 20)
      return (
        ur?.id === p?.id && fr(),
        await Xr({
          type: e,
          url: new URL(A.location, t),
          popped: r,
          reset: n,
          replace_state: a,
          state: o,
          persist_state: s,
          redirect_count: i + 1,
          nav_token: c,
        }),
        void g.fulfil(void 0)
      );
    if (
      ((A = await Gr({
        error: await nn(
          P(() => St(t.href)),
          { url: t, params: {}, route: { id: null } },
        ),
        url: t,
        route: { id: null },
      })),
      !A)
    )
      return;
  } else if (A.props.page.status >= 400 && (await C.check())) return (await sr(), await or(t, a));
  if (
    ((lr.length = 0),
    (Ur = !1),
    (Or = !0),
    r || (rr(w), Rr(v), a ? Ut(w) : _t(w)),
    A.props.page.url.pathname !== t.pathname && (t.pathname = A.props.page.url.pathname),
    r)
  )
    o = r.state;
  else {
    const r = Je(o);
    o = Ze(r);
    const i = a ? 0 : 1;
    "enter" !== e && n && (dr += 1);
    const c = {
      [at]: {
        historyIndex: (pr += i),
        navigationIndex: (hr += i),
        state: r,
        persistState: s,
        resetIndex: dr,
      },
    };
    ((a ? history.replaceState : history.pushState).call(history, c, "", t),
      nr(pr, c[at]),
      a || ar(pr, hr));
  }
  const S = p && ur?.id === p.id ? ur.fork : null;
  let $;
  if (
    (ur?.fork && !S ? fr() : ((ur = null), (rn = { element: void 0, href: void 0 })),
    (A.props.page.state = o),
    (A.props.page.shallow = r?.shallow ?? null),
    $r)
  ) {
    await Qr(g.navigation);
    const e = r?.shallow
      ? { params: A.state.params, route: { id: A.state.route?.id ?? null }, url: A.state.url }
      : g.navigation.to;
    ((Ar = { ...A.state, nav: { params: e.params, route: e.route, url: e.url } }),
      A.props.page && (A.props.page.url = t),
      wt(n));
    const a = S && (await S);
    if (a) {
      $ = a.commit();
      for (const e of Qt) e();
      Qt.clear();
    } else
      (ln(A),
        ($ = y().then(() => {
          for (const e of Qt) e();
          Qt.clear();
        })));
    Er = !0;
  } else await Vr(A, Kt, !1);
  (await en(g, c, t, r?.scroll, n, $)) &&
    ("popstate" === e && Dr(hr), Et(pr, b), N(null), (Or = !1));
}
async function Qr(e) {
  const t = (await Promise.all(Array.from(vr, (t) => t(e)))).filter((e) => "function" == typeof e);
  if (t.length > 0) {
    function r() {
      t.forEach((e) => br.delete(e));
    }
    (t.push(r), t.forEach((e) => br.add(e)));
  }
}
async function en(e, t, r, n, a, o) {
  return (
    await o,
    mr !== t
      ? (e.reject(new Error("navigation aborted")), !1)
      : ((function (e, t, r) {
          if (t && vt)
            if (r) scrollTo(r.x, r.y);
            else {
              const t = yt(e, !1);
              t ? t.scrollIntoView() : scrollTo(0, 0);
            }
          vt = !0;
        })(r, a, n),
        a &&
          document.activeElement === document.body &&
          (function (e) {
            const t = window.parent === window || document.hasFocus(),
              r = document.querySelector("[autofocus]");
            if (r) t && r.focus();
            else {
              t &&
                (function (e) {
                  const t = e.getAttribute("tabindex");
                  (e.setAttribute("tabindex", "-1"),
                    e.focus({ preventScroll: !0, focusVisible: !1 }),
                    null !== t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex"));
                })(yt(e, !1) ?? document.body);
              const r = getSelection();
              if (r && "None" !== r.type) {
                const e = [];
                for (let t = 0; t < r.rangeCount; t += 1) e.push(r.getRangeAt(t));
                setTimeout(() => {
                  if (r.rangeCount === e.length) {
                    for (let t = 0; t < r.rangeCount; t += 1) {
                      const n = e[t],
                        a = r.getRangeAt(t);
                      if (
                        n.commonAncestorContainer !== a.commonAncestorContainer ||
                        n.startContainer !== a.startContainer ||
                        n.endContainer !== a.endContainer ||
                        n.startOffset !== a.startOffset ||
                        n.endOffset !== a.endOffset
                      )
                        return;
                    }
                    r.removeAllRanges();
                  }
                });
              }
            }
          })(r),
        (kr = !1),
        e.fulfil(void 0),
        e.navigation.to && (e.navigation.to.scroll = ct()),
        br.forEach((t) => t(e.navigation)),
        !0)
  );
}
async function tn(e, t, r, n) {
  return e.origin !== st || e.pathname !== location.pathname || Sr
    ? await or(e, n)
    : await Gr({ error: r, url: e, route: t });
}
var rn = { element: void 0, href: void 0 };
async function nn(e, t) {
  if (e instanceof J) return e.body;
  let r;
  r =
    e instanceof W
      ? { kind: "app", error: e.body }
      : e instanceof Z
        ? { kind: "framework", error: { status: e.status, message: e.text } }
        : { kind: "unknown", error: e };
  const n = "unknown" === r.kind ? { status: 500, message: "Internal Error" } : r.error,
    a = { ...r, event: t };
  const o = await Wt.hooks.handleError(a);
  return { ...n, ...o };
}
async function an(e, t = {}) {
  const r = t.replace ?? t.replaceState ?? !1,
    n = await (async function (e) {
      const t = new URL(it(e));
      t.origin !== st && bt(String(e));
      const r = await Hr(t, !1);
      return (r || At(String(e)), r);
    })(e);
  return t.shallow
    ? (async function (e, t, { replace: r, persist_state: n, reset: a }, o) {
        const s = e.url,
          i = kt();
        0;
        const c = "goto" === o ? Wr({ url: s, type: "goto", intent: e, shallow: !0 }) : void 0;
        if (!c && "goto" === o) return;
        const l = {};
        c && ((mr = yr = l), (kr = !0), N(c.navigation), (Or = !0));
        r ? Ut(pr) : (rr(pr), _t(pr));
        a && (dr += 1);
        const u = Je(t);
        t = Ze(u);
        const f = {
          [at]: {
            historyIndex: (pr += r ? 0 : 1),
            navigationIndex: hr,
            pageUrl: z.url.href,
            state: u,
            persistState: n,
            resetIndex: dr,
          },
        };
        ((r ? history.replaceState : history.pushState).call(history, f, "", s),
          nr(pr, f[at]),
          r || ((Er = !0), ar(pr, hr)));
        c && (await Qr(c.navigation));
        if (
          (wt(a),
          V({
            state: t,
            shallow: { params: e?.params ?? null, route: e ? { id: e.route.id } : null, url: s },
          }),
          c && !(await en(c, l, s, null, a, y())))
        )
          return;
        (Et(pr, i), c && (N(null), (Or = !1)));
      })(
        n,
        t.state ?? {},
        { replace: r, persist_state: t.persistState ?? !1, reset: t.reset ?? !1 },
        "goto",
      )
    : Cr(n.url, { ...t, replace: r, refreshAll: t.refreshAll ?? t.invalidateAll }, 0, {}, n);
}
function on(e) {
  if ("function" == typeof e) lr.push(e);
  else {
    const { href: t } = new URL(e, location.href);
    lr.push((e) => e.href === t);
  }
}
function sn(e, t, r, n, a = null, o = !1, s) {
  let i, c;
  const l = new Promise((e, t) => {
    ((i = e), (c = t));
  });
  return (
    l.catch(Bt),
    {
      navigation: {
        from: { params: e.params, route: { id: e.route?.id ?? null }, url: e.url, scroll: ct() },
        to: r && {
          params: s ? s.params : (t?.params ?? null),
          route: { id: s ? (s.route?.id ?? null) : (t?.route?.id ?? null) },
          url: s?.url ?? r,
          scroll: a,
        },
        willUnload: !o && !t,
        type: n,
        shallow: o,
        complete: l,
      },
      fulfil: i,
      reject: c,
    }
  );
}
function cn(e) {
  const t = new URL(e);
  return ((t.hash = decodeURIComponent(e.hash)), t);
}
function ln(e) {
  (V(e.props.page),
    (Zt.tree.data = e.props.tree.data),
    (Zt.tree.child = e.props.tree.child),
    "form" in e.props && (Zt.form = e.props.form),
    "error" in e.props && (Zt.error = e.props.error));
}
export { Lr as n, gt as r, an as t };
