import { payload as e } from "../entry/payload.BeGvdC57.js";
"undefined" != typeof window && ((window.__svelte ??= {}).v ??= new Set()).add("5");
var t = {},
  n = Symbol("uninitialized"),
  r = (Symbol("filename"), "http://www.w3.org/1999/xhtml"),
  i = Array.isArray,
  s = Array.prototype.indexOf,
  f = Array.prototype.includes,
  o = Array.from,
  l = Object.keys,
  a = Object.defineProperty,
  u = Object.getOwnPropertyDescriptor,
  c = Object.getOwnPropertyDescriptors,
  d = Object.prototype,
  h = Array.prototype,
  v = Object.getPrototypeOf,
  p = Object.isExtensible,
  _ = () => {};
function g() {
  var e, t;
  return {
    promise: new Promise((n, r) => {
      ((e = n), (t = r));
    }),
    resolve: e,
    reject: t,
  };
}
var y = 1024,
  m = 2048,
  b = 4096,
  w = 8192,
  k = 32768,
  x = 1 << 25,
  S = 65536,
  T = 1 << 19,
  j = 1 << 25,
  E = 1 << 21,
  M = 1 << 23,
  A = Symbol("$state"),
  O = Symbol("component"),
  $ = Symbol("legacy props"),
  P = Symbol(""),
  N = Symbol("proxy path"),
  q = Symbol("attributes"),
  L = Symbol("class"),
  C = Symbol("style"),
  z = Symbol("text"),
  D =
    (Symbol("hmr anchor"),
    new (class extends Error {
      name = "StaleReactionError";
      message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
    })()),
  R = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml");
function H(e) {
  0;
}
var F,
  W = !1;
function B(e) {
  W = e;
}
function V(e) {
  if (null === e) throw (H(), t);
  return (F = e);
}
function I() {
  return V(bt(F));
}
function J(e) {
  if (W) {
    if (null !== bt(F)) throw (H(), t);
    F = e;
  }
}
function K(e = !0) {
  for (var t = 0, n = F; ;) {
    if (8 === n.nodeType) {
      var r = n.data;
      if ("]" === r) {
        if (0 === t) return n;
        t -= 1;
      } else ("[" === r || "[!" === r || ("[" === r[0] && !isNaN(Number(r.slice(1))))) && (t += 1);
    }
    var i = bt(n);
    (e && n.remove(), (n = i));
  }
}
function U(e) {
  if (!e || 8 !== e.nodeType) throw (H(), t);
  return e.data;
}
function G(e) {
  return e === this.v;
}
function Q(e) {
  return (
    (t = e),
    (n = this.v),
    !(t != t ? n == n : t !== n || (null !== t && "object" == typeof t) || "function" == typeof t)
  );
  var t, n;
}
function X(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
var Y = !1;
function Z() {
  Y = !0;
}
function ee(e, t) {
  return ((e.label = t), te(e.v, t), e);
}
function te(e, t) {
  return (e?.[N]?.(t), e);
}
function ne(e) {
  return "symbol" == typeof e
    ? `Symbol(${e.description})`
    : "function" == typeof e
      ? "<function>"
      : "object" == typeof e && e
        ? "<object>"
        : String(e);
}
var re = null;
function ie(e) {
  re = e;
}
function se(e, t = !1, n) {
  re = {
    p: re,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: fn,
    l: Y && !t ? { s: null, u: null, $: [] } : null,
  };
}
function fe(e) {
  var t = re,
    n = t.e;
  if (null !== n) for (var r of ((t.e = null), n)) qt(r);
  return (void 0 !== e && (t.x = e), (t.i = !0), (re = t.p), oe(e));
}
function oe(e = {}) {
  return (a(e, O, { value: !0 }), e);
}
function le() {
  return !Y || (null !== re && null === re.l);
}
var ae = [];
function ue() {
  var e = ae;
  ((ae = []),
    (function (e) {
      for (var t = 0; t < e.length; t++) e[t]();
    })(e));
}
function ce(e) {
  if (0 === ae.length && !Ce) {
    var t = ae;
    queueMicrotask(() => {
      t === ae && ue();
    });
  }
  ae.push(e);
}
function de() {
  for (; ae.length > 0;) ue();
}
var he = -7169;
function ve(e, t) {
  e.f = (e.f & he) | t;
}
function pe(e) {
  512 & e.f || null === e.deps ? ve(e, y) : ve(e, b);
}
function _e(e, t, n) {
  (2048 & e.f ? t.add(e) : 4096 & e.f && n.add(e), ve(e, y));
}
function ge(e) {
  var t = nn,
    n = fn;
  (sn(null), on(null));
  try {
    return e();
  } finally {
    (sn(t), on(n));
  }
}
function ye(e, t, n, r) {
  const i = le() ? we : Te;
  var s = e.filter((e) => !e.settled),
    f = t.map(i);
  if (0 !== n.length || 0 !== s.length) {
    var o = fn,
      l = (function () {
        var e = fn,
          t = nn,
          n = re,
          r = Pe;
        return function (i = !0) {
          (on(e), sn(t), ie(n), !i || 16384 & e.f || (r?.activate(), r?.apply()));
        };
      })(),
      a =
        1 === s.length ? s[0].promise : s.length > 1 ? Promise.all(s.map((e) => e.promise)) : null,
      u = be();
    0 !== n.length
      ? a
        ? a.then(() => {
            16384 & o.f ? u() : (l(), d(), me());
          })
        : d()
      : a.then(() => c([])).finally(u);
  } else r(f);
  function c(e) {
    if (!(16384 & o.f)) {
      l();
      try {
        r([...f, ...e]);
      } catch (t) {
        At(t, o);
      }
      me();
    }
  }
  function d() {
    Promise.all(n.map((e) => xe(e)))
      .then(c)
      .catch((e) => At(e, o))
      .finally(u);
  }
}
function me(e = !0) {
  (on(null), sn(null), ie(null), e && Pe?.deactivate());
}
function be() {
  var e = fn,
    t = e.b,
    n = Pe,
    r = !!t?.is_rendered();
  return (
    t?.update_pending_count(1, n),
    n.increment(r, e),
    () => {
      (t?.update_pending_count(-1, n), n.decrement(r, e));
    }
  );
}
function we(e) {
  null !== fn && (fn.f |= T);
  const t = {
    ctx: re,
    deps: null,
    effects: null,
    equals: G,
    f: 2050,
    fn: e,
    reactions: null,
    rv: 0,
    v: n,
    wv: 0,
    parent: fn,
    ac: null,
  };
  return t;
}
var ke = Symbol("obsolete");
function xe(e, t, r) {
  let i = fn;
  null === i &&
    (function () {
      throw new Error("https://svelte.dev/e/async_derived_orphan");
    })();
  var s = void 0,
    f = tt(n);
  var o = !nn,
    l = new Set();
  return (
    (function (e) {
      $t(4718592, e);
    })(() => {
      var t = fn;
      var n = g();
      s = n.promise;
      try {
        Promise.resolve(e())
          .then(n.resolve, (e) => {
            e !== D && n.reject(e);
          })
          .finally(me);
      } catch (c) {
        (n.reject(c), me());
      }
      var r = Pe;
      if (o) {
        if (32768 & t.f) var a = be();
        if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(ke);
        else for (const e of l.values()) e.reject(ke);
        (l.add(n), r.async_deriveds.set(t, n));
      }
      const u = (e, t = void 0) => {
        (a?.(),
          l.delete(n),
          t !== ke &&
            (r.activate(),
            t ? ((f.f |= M), ot(f, t)) : (8388608 & f.f && (f.f ^= M), ot(f, e)),
            r.deactivate()));
      };
      n.promise.then(u, (e) => u(null, e || "unknown"));
    }),
    (function (e) {
      const t = $t(8, null);
      (ve(t, y), (t.teardown = e));
    })(() => {
      for (const e of l) e.reject(ke);
    }),
    new Promise((e) => {
      !(function t(n) {
        function r() {
          n === s ? e(f) : t(s);
        }
        n.then(r, r);
      })(s);
    })
  );
}
function Se(e) {
  const t = we(e);
  return (an(t), t);
}
function Te(e) {
  const t = we(e);
  return ((t.equals = Q), t);
}
function je(e) {
  var t = e.effects;
  if (null !== t) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) It(t[n]);
  }
}
function Ee(e) {
  var t,
    r = fn,
    i = e.parent;
  if (!en && null !== i && e.v !== n && 24576 & i.f) return e.v;
  on(i);
  try {
    (je(e), (t = bn(e)));
  } finally {
    on(r);
  }
  return t;
}
function Me(e) {
  var t = Ee(e);
  e.equals(t) ||
  ((e.wv = gn()),
  (Pe?.is_fork && null !== e.deps) ||
    (null !== Pe ? (Pe.capture(e, t, !0), Ne?.capture(e, t, !0)) : (e.v = t), null !== e.deps))
    ? en || (null !== qe ? (Pt() || Pe?.is_fork) && qe.set(e, t) : pe(e))
    : ve(e, y);
}
function Ae(e) {
  if (null !== e.effects) for (const t of e.effects) t.teardown && null !== t.fn && Sn(t);
}
var Oe = null,
  $e = null,
  Pe = null,
  Ne = null,
  qe = null,
  Le = null,
  Ce = !1,
  ze = !1,
  De = null,
  Re = null,
  He = 0,
  Fe = 1,
  We = class e {
    id = Fe++;
    #e = !1;
    linked = !0;
    #t = null;
    #n = null;
    async_deriveds = new Map();
    current = new Map();
    previous = new Map();
    #r = new Set();
    #i = new Set();
    #s = 0;
    #f = new Map();
    #o = null;
    #l = [];
    #a = [];
    #u = new Set();
    #c = new Set();
    #d = new Map();
    #h = new Set();
    is_fork = !1;
    #v = !1;
    constructor() {
      (null === $e ? (Oe = $e = this) : (($e.#n = this), (this.#t = $e)), ($e = this));
    }
    #p() {
      if (this.is_fork) return !0;
      for (const n of this.#f.keys()) {
        for (var e = n, t = !1; null !== e.parent;) {
          if (this.#d.has(e)) {
            t = !0;
            break;
          }
          e = e.parent;
        }
        if (!t) return !0;
      }
      return !1;
    }
    skip_effect(e) {
      (this.#d.has(e) || this.#d.set(e, { d: [], m: [] }), this.#h.delete(e));
    }
    unskip_effect(e, t = (e) => this.schedule(e)) {
      var n = this.#d.get(e);
      if (n) {
        for (var r of (this.#d.delete(e), n.d)) (ve(r, m), t(r));
        for (r of n.m) (ve(r, b), t(r));
      }
      this.#h.add(e);
    }
    #_() {
      var e = [];
      for (const i of this.#l)
        if (!(16384 & i.f) && 6144 & i.f) {
          for (var t = i, n = !1; null !== t.parent;) {
            var r = (t = t.parent).f;
            if (96 & r) {
              if (!(1024 & r)) {
                n = !0;
                break;
              }
              t.f ^= y;
            }
          }
          n || e.push(t);
        }
      return ((this.#l = []), e);
    }
    #g() {
      this.#e = !0;
      for (const e of this.#u) (this.#c.delete(e), ve(e, m), this.schedule(e));
      for (const e of this.#c) (ve(e, b), this.schedule(e));
      this.apply();
      for (var t = (De = []), n = [], r = (Re = []); this.#l.length > 0;) {
        He++ > 1e3 && (this.#y(), Ve());
        for (const e of this.#_())
          try {
            this.#m(e, t, n);
          } catch (o) {
            throw (Xe(e), this.#p() || this.discard(), o);
          }
      }
      if (((Pe = null), r.length > 0)) {
        var i = e.ensure();
        for (const e of r) i.schedule(e);
      }
      if (((De = null), (Re = null), this.#p())) {
        (this.#b(n), this.#b(t));
        for (const [e, t] of this.#d) Qe(e, t);
        return void (r.length > 0 && Pe.#g());
      }
      const s = this.#w();
      if (s) return (this.#b(n), this.#b(t), void s.#k(this));
      (this.#u.clear(), this.#c.clear());
      for (const e of this.#r) e(this);
      (this.#r.clear(), (Ne = this), Je(n), Je(t), (Ne = null), this.#o?.resolve());
      var f = Pe;
      if ((0 !== this.#s || (0 !== this.#l.length && null === f) || this.#y(), this.#l.length > 0))
        if (null !== f) {
          for (const e of this.#l) f.#l.push(e);
          this.#l = [];
        } else f = this;
      null !== f && (Ze.clear(), f.#g());
    }
    #m(e, t, n) {
      e.f ^= y;
      for (var r = e.first; null !== r;) {
        var i = r.f,
          s = !!(96 & i);
        if (!((s && 1024 & i) || 8192 & i || this.#d.has(r)) && null !== r.fn) {
          s ? (r.f ^= y) : 4 & i ? t.push(r) : yn(r) && (16 & i && this.#c.add(r), Sn(r));
          var f = r.first;
          if (null !== f) {
            r = f;
            continue;
          }
        }
        for (; null !== r;) {
          var o = r.next;
          if (null !== o) {
            r = o;
            break;
          }
          r = r.parent;
        }
      }
    }
    #w() {
      for (var e = this.#t; null !== e;) {
        if (!e.is_fork) for (const [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
        e = e.#t;
      }
      return null;
    }
    #k(e) {
      for (const [n, r] of e.current)
        (!this.previous.has(n) && e.previous.has(n) && this.previous.set(n, e.previous.get(n)),
          this.current.set(n, r));
      for (const [n, r] of e.async_deriveds) {
        const e = this.async_deriveds.get(n);
        e && r.promise.then(e.resolve).catch(e.reject);
      }
      (e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#c));
      const t = (e) => {
        var n = e.reactions;
        if (null !== n && (!(2 & e.f) || 6144 & e.f))
          for (const s of n) {
            var r = s.f;
            if (2 & r) t(s);
            else {
              var i = s;
              4194320 & r &&
                !this.async_deriveds.has(i) &&
                (this.#c.delete(i), ve(i, m), this.schedule(i));
            }
          }
      };
      for (const n of this.current.keys()) t(n);
      (this.oncommit(() => e.discard()), e.#y(), (Pe = this), this.#g());
    }
    #b(e) {
      for (var t = 0; t < e.length; t += 1) _e(e[t], this.#u, this.#c);
    }
    capture(e, t, r = !1) {
      (e.v === n || this.previous.has(e) || this.previous.set(e, e.v),
        8388608 & e.f || (this.current.set(e, [t, r]), qe?.set(e, t)),
        this.is_fork || (e.v = t));
    }
    activate() {
      Pe = this;
    }
    deactivate() {
      ((Pe = null), (qe = null));
    }
    flush() {
      try {
        (0, (ze = !0), (Pe = this), this.#g());
      } finally {
        ((He = 0),
          (Le = null),
          (De = null),
          (Re = null),
          (ze = !1),
          (Pe = null),
          (qe = null),
          Ze.clear());
      }
    }
    discard() {
      for (const e of this.#i) e(this);
      this.#i.clear();
      for (const e of this.async_deriveds.values()) e.reject(ke);
      (this.#y(), this.#o?.resolve());
    }
    register_created_effect(e) {
      this.#a.push(e);
    }
    #x() {
      for (let u = Oe; null !== u; u = u.#n) {
        var e = u.id < this.id,
          t = [];
        for (const [r, [i, s]] of this.current) {
          if (u.current.has(r)) {
            var n = u.current.get(r)[0];
            if (!e || i === n) continue;
            u.current.set(r, [i, s]);
          }
          t.push(r);
        }
        if (e)
          for (const [e, t] of this.async_deriveds) {
            const n = u.async_deriveds.get(e);
            n && t.promise.then(n.resolve).catch(n.reject);
          }
        var r = [...u.current.keys()].filter((e) => !u.current.get(e)[1]);
        if (u.#e && 0 !== r.length) {
          var i = r.filter((e) => !this.current.has(e));
          if (0 === i.length) e && u.discard();
          else if (t.length > 0) {
            if (e)
              for (const e of this.#h)
                u.unskip_effect(e, (e) => {
                  4194320 & e.f ? u.schedule(e) : u.#b([e]);
                });
            u.activate();
            var s = new Set(),
              f = new Map();
            for (var o of t) Ke(o, i, s, f);
            f = new Map();
            var l = [...u.current]
              .filter(([e, t]) => {
                const n = this.current.get(e);
                return !n || n[0] !== t[0] || n[1] !== t[1];
              })
              .map(([e]) => e);
            if (l.length > 0)
              for (const e of this.#a)
                155648 & e.f ||
                  !Ue(e, l, f) ||
                  (4194320 & e.f ? (ve(e, m), u.schedule(e)) : u.#u.add(e));
            if (u.#l.length > 0 && !u.#v) for (var a of (u.apply(), u.#_())) u.#m(a, [], []);
            u.deactivate();
          }
        }
      }
    }
    increment(e, t) {
      if (((this.#s += 1), e)) {
        let e = this.#f.get(t) ?? 0;
        this.#f.set(t, e + 1);
      }
    }
    decrement(e, t) {
      if (((this.#s -= 1), e)) {
        let e = this.#f.get(t) ?? 0;
        1 === e ? this.#f.delete(t) : this.#f.set(t, e - 1);
      }
      this.#v ||
        ((this.#v = !0),
        ce(() => {
          ((this.#v = !1), this.linked && this.flush());
        }));
    }
    transfer_effects(e, t) {
      for (const n of e) this.#u.add(n);
      for (const n of t) this.#c.add(n);
      (e.clear(), t.clear());
    }
    oncommit(e) {
      this.#r.add(e);
    }
    ondiscard(e) {
      this.#i.add(e);
    }
    settled() {
      return (this.#o ??= g()).promise;
    }
    static ensure() {
      if (null === Pe) {
        const t = (Pe = new e());
        ze ||
          Ce ||
          ce(() => {
            t.#e || t.flush();
          });
      }
      return Pe;
    }
    apply() {
      qe = null;
    }
    schedule(e) {
      ((Le = e),
        !(e.b?.is_pending && 16777228 & e.f) || 32768 & e.f
          ? this.#l.push(e)
          : e.b.defer_effect(e));
    }
    #y() {
      if (this.linked) {
        var e = this.#t,
          t = this.#n;
        (null === e ? (Oe = t) : (e.#n = t),
          null === t ? ($e = e) : (t.#t = e),
          (this.linked = !1));
      }
    }
  };
function Be(e) {
  var t = Ce,
    n = Ne;
  ((Ne = null), (Ce = !0));
  try {
    var r;
    for (e && (Be(), (r = e())); ;) {
      if ((de(), null === Pe)) return r;
      Pe.flush();
    }
  } finally {
    ((Ce = t), (Ne = n));
  }
}
function Ve() {
  try {
    !(function () {
      throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
    })();
  } catch (e) {
    (0, At(e, Le));
  }
}
var Ie = null;
function Je(e) {
  var t = e.length;
  if (0 !== t) {
    for (var n = 0; n < t;) {
      var r = e[n++];
      if (
        !(24576 & r.f) &&
        yn(r) &&
        ((Ie = new Set()),
        Sn(r),
        null === r.deps &&
          null === r.first &&
          null === r.nodes &&
          null === r.teardown &&
          null === r.ac &&
          Kt(r),
        Ie?.size > 0)
      ) {
        Ze.clear();
        for (const e of Ie) {
          if (24576 & e.f) continue;
          const t = [e];
          let n = e.parent;
          for (; null !== n;) (Ie.has(n) && (Ie.delete(n), t.push(n)), (n = n.parent));
          for (let e = t.length - 1; e >= 0; e--) {
            const n = t[e];
            24576 & n.f || Sn(n);
          }
        }
        Ie.clear();
      }
    }
    Ie = null;
  }
}
function Ke(e, t, n, r) {
  if (!n.has(e) && (n.add(e), null !== e.reactions))
    for (const i of e.reactions) {
      const e = i.f;
      2 & e ? Ke(i, t, n, r) : 4194320 & e && !(2048 & e) && Ue(i, t, r) && (ve(i, m), Ge(i));
    }
}
function Ue(e, t, n) {
  const r = n.get(e);
  if (void 0 !== r) return r;
  if (null !== e.deps)
    for (const i of e.deps) {
      if (f.call(t, i)) return !0;
      if (2 & i.f && Ue(i, t, n)) return (n.set(i, !0), !0);
    }
  return (n.set(e, !1), !1);
}
function Ge(e) {
  Pe.schedule(e);
}
function Qe(e, t) {
  if (!(32 & e.f && 1024 & e.f)) {
    (2048 & e.f ? t.d.push(e) : 4096 & e.f && t.m.push(e), ve(e, y));
    for (var n = e.first; null !== n;) (Qe(n, t), (n = n.next));
  }
}
function Xe(e) {
  ve(e, y);
  for (var t = e.first; null !== t;) (Xe(t), (t = t.next));
}
var Ye = new Set(),
  Ze = new Map();
var et = !1;
function tt(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: G, rv: 0, wv: 0 };
  return n;
}
function nt(e, t) {
  const n = tt(e);
  return (an(n), n);
}
function rt(e, t = !1, n = !0) {
  const r = tt(e);
  return (
    t || (r.equals = Q), Y && n && null !== re && null !== re.l && (re.l.s ??= []).push(r), r
  );
}
function it(e, t, n = !1) {
  null !== nn &&
    (!rn || 131072 & nn.f) &&
    le() &&
    4325394 & nn.f &&
    (null === ln || !ln.has(e)) &&
    (function () {
      throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    })();
  let r = n ? ct(t) : t;
  return ot(e, r, Re);
}
var st = null,
  ft = 0;
function ot(e, t, n = null) {
  if (!e.equals(t)) {
    en ? Ze.set(e, t) : Ze.has(e) || Ze.set(e, e.v);
    var r = We.ensure();
    if ((r.capture(e, t), 2 & e.f)) {
      const t = e;
      (2048 & e.f && Ee(t), null === qe && pe(t));
    }
    ((e.wv = gn()),
      (st = null),
      (ft = 0),
      ut(e, m, n),
      (st = null),
      le() &&
        null !== fn &&
        1024 & fn.f &&
        !(96 & fn.f) &&
        (null === dn
          ? (function (e) {
              dn = e;
            })([e])
          : dn.push(e)),
      !r.is_fork && Ye.size > 0 && !et && lt());
  }
  return t;
}
function lt() {
  et = !1;
  for (const e of Ye) {
    let t;
    1024 & e.f && ve(e, b);
    try {
      t = yn(e);
    } catch {
      t = !0;
    }
    t && Sn(e);
  }
  Ye.clear();
}
function at(e) {
  it(e, e.v + 1);
}
function ut(e, t, n) {
  var r = e.reactions;
  if (null !== r) {
    var i = le(),
      s = r.length;
    if (((ft += s) > 1e5 && null === st && (st = new Set()), null !== st)) {
      if (st.has(e)) return;
      st.add(e);
    }
    for (var f = 0; f < s; f++) {
      var o = r[f],
        l = o.f;
      if (i || o !== fn) {
        var a = 0 === (l & m);
        if ((a && ve(o, t), 131072 & l)) Ye.add(o);
        else if (2 & l) {
          var u = o;
          (qe?.delete(u), ut(u, b, n));
        } else if (a) {
          var c = o;
          (16 & l && null !== Ie && Ie.add(c), null !== n ? n.push(c) : Ge(c));
        }
      }
    }
  }
}
function ct(e) {
  if ("object" != typeof e || null === e || A in e || O in e) return e;
  const t = v(e);
  if (t !== d && t !== h) return e;
  var r = new Map(),
    s = i(e),
    f = nt(0),
    o = pn,
    l = (e) => {
      if (pn === o) return e();
      var t = nn,
        n = pn;
      (sn(null), _n(o));
      var r = e();
      return (sn(t), _n(n), r);
    };
  s && r.set("length", nt(e.length));
  return new Proxy(e, {
    defineProperty(e, t, n) {
      ("value" in n && !1 !== n.configurable && !1 !== n.enumerable && !1 !== n.writable) ||
        (function () {
          throw new Error("https://svelte.dev/e/state_descriptors_fixed");
        })();
      var i = r.get(t);
      return (
        void 0 === i
          ? l(() => {
              var e = nt(n.value);
              return (r.set(t, e), e);
            })
          : it(i, n.value, !0),
        !0
      );
    },
    deleteProperty(e, t) {
      var i = r.get(t);
      if (void 0 === i) {
        if (t in e) {
          const e = l(() => nt(n));
          (r.set(t, e), at(f));
        }
      } else (it(i, n), at(f));
      return !0;
    },
    get(t, i, s) {
      if (i === A) return e;
      var f = r.get(i),
        o = i in t;
      if (
        (void 0 !== f ||
          (o && !u(t, i)?.writable) ||
          ((f = l(() => {
            var e = nt(ct(o ? t[i] : n));
            return e;
          })),
          r.set(i, f)),
        void 0 !== f)
      ) {
        var a = En(f);
        return a === n ? void 0 : a;
      }
      return Reflect.get(t, i, s);
    },
    getOwnPropertyDescriptor(e, t) {
      this.has?.(e, t);
      var i = Reflect.getOwnPropertyDescriptor(e, t),
        s = r.get(t);
      if (void 0 !== s) {
        var f = En(s);
        if (f === n) return;
        if (!i || !("value" in i))
          return { enumerable: !0, configurable: !0, value: f, writable: !0 };
        i.value = f;
      }
      return i;
    },
    has(e, t) {
      if (t === A) return !0;
      var i = r.get(t),
        s = (void 0 !== i && i.v !== n) || Reflect.has(e, t);
      return (
        !(
          (void 0 !== i || (null !== fn && (!s || u(e, t)?.writable))) &&
          (void 0 === i &&
            ((i = l(() => {
              var r = nt(s ? ct(e[t]) : n);
              return r;
            })),
            r.set(t, i)),
          En(i) === n)
        ) && s
      );
    },
    set(e, t, i, o) {
      var a = r.get(t),
        c = t in e;
      if (s && "length" === t)
        for (var d = i; d < a.v; d += 1) {
          var h = r.get(d + "");
          void 0 !== h ? it(h, n) : d in e && ((h = l(() => nt(n))), r.set(d + "", h));
        }
      void 0 === a
        ? (c && !u(e, t)?.writable) || (it((a = l(() => nt(void 0))), ct(i)), r.set(t, a))
        : ((c = a.v !== n),
          it(
            a,
            l(() => ct(i)),
          ));
      var v = Reflect.getOwnPropertyDescriptor(e, t);
      if ((v?.set && v.set.call(o, i), !c)) {
        if (s && "string" == typeof t) {
          var p = r.get("length"),
            _ = Number(t);
          Number.isInteger(_) && _ >= p.v && it(p, _ + 1);
        }
        at(f);
      }
      return !0;
    },
    ownKeys(e) {
      En(f);
      var t = Reflect.ownKeys(e).filter((e) => {
        var t = r.get(e);
        return void 0 === t || t.v !== n;
      });
      for (var [i, s] of r) s.v === n || i in e || t.push(i);
      return t;
    },
    setPrototypeOf() {
      !(function () {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
      })();
    },
  });
}
var dt, ht, vt, pt, _t;
function gt() {
  if (void 0 === dt) {
    ((dt = window), (ht = document), (vt = /Firefox/.test(navigator.userAgent)));
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    ((pt = u(t, "firstChild").get),
      (_t = u(t, "nextSibling").get),
      p(e) && ((e[L] = void 0), (e[q] = null), (e[C] = void 0), (e.__e = void 0)),
      p(n) && (n[z] = void 0));
  }
}
function yt(e = "") {
  return document.createTextNode(e);
}
function mt(e) {
  return pt.call(e);
}
function bt(e) {
  return _t.call(e);
}
function wt(e, t) {
  if (!W) return mt(e);
  var n = mt(F);
  if (null === n) n = F.appendChild(yt());
  else if (t && 3 !== n.nodeType) {
    var r = yt();
    return (n?.before(r), V(r), r);
  }
  return (t && Et(n), V(n), n);
}
function kt(e, t = !1) {
  if (!W) {
    var n = mt(e);
    return n instanceof Comment && "" === n.data ? bt(n) : n;
  }
  if (t) {
    if (3 !== F?.nodeType) {
      var r = yt();
      return (F?.before(r), V(r), r);
    }
    Et(F);
  }
  return F;
}
function xt(e, t = !1) {
  if (!W) return mt(e);
  var n = wt(e, t);
  return (J(e), n);
}
function St(e, t = 1, n = !1) {
  let r = W ? F : e;
  for (var i; t--;) ((i = r), (r = bt(r)));
  if (!W) return r;
  if (n) {
    if (3 !== r?.nodeType) {
      var s = yt();
      return (null === r ? i?.after(s) : r.before(s), V(s), s);
    }
    Et(r);
  }
  return (V(r), r);
}
function Tt(e) {
  e.textContent = "";
}
function jt(e, t, n) {
  return null == t || "http://www.w3.org/1999/xhtml" === t
    ? n
      ? document.createElement(e, { is: n })
      : document.createElement(e)
    : n
      ? document.createElementNS(t, e, { is: n })
      : document.createElementNS(t, e);
}
function Et(e) {
  if (e.nodeValue.length < 65536) return;
  let t = e.nextSibling;
  for (; null !== t && 3 === t.nodeType;)
    (t.remove(), (e.nodeValue += t.nodeValue), (t = e.nextSibling));
}
function Mt(e) {
  var t = fn;
  if (null === t) return ((nn.f |= M), e);
  if (!(32768 & t.f || 4 & t.f)) throw e;
  At(e, t);
}
function At(e, n) {
  if (e === t) throw e;
  if (!(null !== n && 16384 & n.f)) {
    for (; null !== n;) {
      if (128 & n.f && !(33570816 & n.f)) {
        if (!(32768 & n.f)) throw e;
        try {
          return void n.b.error(e);
        } catch (r) {
          e = r;
        }
      }
      n = n.parent;
    }
    throw e;
  }
}
function Ot(e) {
  (null === fn &&
    (null === nn &&
      (function () {
        throw new Error("https://svelte.dev/e/effect_orphan");
      })(),
    (function () {
      throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
    })()),
    en &&
      (function () {
        throw new Error("https://svelte.dev/e/effect_in_teardown");
      })());
}
function $t(e, t) {
  var n = fn;
  null !== n && 8192 & n.f && (e |= w);
  var r = {
    ctx: re,
    deps: null,
    nodes: null,
    f: e | m | 512,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null,
  };
  Pe?.register_created_effect(r);
  var i = r;
  if (4 & e) null !== De ? De.push(r) : We.ensure().schedule(r);
  else if (null !== t) {
    try {
      Sn(r);
    } catch (i) {
      throw (It(r), i);
    }
    null !== i.deps ||
      null !== i.teardown ||
      null !== i.nodes ||
      i.first !== i.last ||
      524288 & i.f ||
      ((i = i.first), 16 & e && 65536 & e && null !== i && (i.f |= S));
  }
  if (
    null !== i &&
    ((i.parent = n),
    null !== n &&
      (function (e, t) {
        var n = t.last;
        null === n ? (t.last = t.first = e) : ((n.next = e), (e.prev = n), (t.last = e));
      })(i, n),
    null !== nn && 2 & nn.f && !(64 & e))
  ) {
    var s = nn;
    (s.effects ??= []).push(i);
  }
  return r;
}
function Pt() {
  return null !== nn && !rn;
}
function Nt(e) {
  Ot();
  var t = fn.f;
  if (nn || !(32 & t) || null === re || re.i) return qt(e);
  var n = re;
  (n.e ??= []).push(e);
}
function qt(e) {
  return $t(1048580, e);
}
function Lt(e) {
  return (Ot(), $t(1048584, e));
}
function Ct(e) {
  We.ensure();
  const t = $t(524352, e);
  return () => {
    It(t);
  };
}
function zt(e) {
  return $t(4, e);
}
function Dt(e, t = 0) {
  return $t(8 | t, e);
}
function Rt(e, t = [], n = [], r = []) {
  ye(r, t, n, (t) => {
    $t(8, () => {
      e(...t.map(En));
    });
  });
}
function Ht(e, t = [], n = [], r = []) {
  ye(r, t, n, (t) => {
    $t(4, () => e(...t.map(En)));
  });
}
function Ft(e, t = 0) {
  var n = $t(16 | t, e);
  return n;
}
function Wt(e) {
  return $t(524320, e);
}
function Bt(e) {
  var t = e.teardown;
  if (null !== t) {
    const r = en,
      i = nn;
    (tn(!0), sn(null));
    try {
      t.call(null);
    } catch (n) {
      At(n, e.parent);
    } finally {
      (tn(r), sn(i));
    }
  }
}
function Vt(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; null !== n;) {
    const e = n.ac;
    null !== e &&
      ge(() => {
        e.abort(D);
      });
    var r = n.next;
    (64 & n.f ? (n.parent = null) : It(n, t), (n = r));
  }
}
function It(e, t = !0) {
  var n = !1;
  ((t || 262144 & e.f) &&
    null !== e.nodes &&
    null !== e.nodes.end &&
    (Jt(e.nodes.start, e.nodes.end), (n = !0)),
    (e.f |= x),
    Vt(e, t && !n),
    xn(e, 0));
  var r = e.nodes && e.nodes.t;
  if (null !== r) for (const s of r) s.stop();
  (Bt(e), (e.f ^= x), (e.f |= 16384));
  var i = e.parent;
  (null !== i && null !== i.first && Kt(e),
    (e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null));
}
function Jt(e, t) {
  for (; null !== e;) {
    var n = e === t ? null : bt(e);
    (e.remove(), (e = n));
  }
}
function Kt(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  (null !== n && (n.next = r),
    null !== r && (r.prev = n),
    null !== t && (t.first === e && (t.first = r), t.last === e && (t.last = n)));
}
function Ut(e, t, n = !0) {
  var r = [];
  ((e.f |= 256), Gt(e, r, !0));
  var i = () => {
      (n && It(e), t && t());
    },
    s = r.length;
  if (s > 0) {
    var f = () => --s || i();
    for (var o of r) o.out(f);
  } else i();
}
function Gt(e, t, n) {
  if (!(8192 & e.f)) {
    e.f ^= w;
    var r = e.nodes && e.nodes.t;
    if (null !== r) for (const e of r) (e.is_global || n) && t.push(e);
    for (var i = e.first; null !== i;) {
      var s = i.next;
      if (!(64 & i.f)) Gt(i, t, !!(!!(65536 & i.f) || (!!(32 & i.f) && !!(16 & e.f))) && n);
      i = s;
    }
  }
}
function Qt(e) {
  ((e.f &= -257), Xt(e, !0));
}
function Xt(e, t) {
  if (!(256 & e.f) && 8192 & e.f) {
    ((e.f ^= w), 1024 & e.f || (ve(e, m), We.ensure().schedule(e)));
    for (var n = e.first; null !== n;) {
      var r = n.next;
      (Xt(n, !!(!!(65536 & n.f) || !!(32 & n.f)) && t), (n = r));
    }
    var i = e.nodes && e.nodes.t;
    if (null !== i) for (const e of i) (e.is_global || t) && e.in();
  }
}
function Yt(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; null !== n;) {
      var i = n === r ? null : bt(n);
      (t.append(n), (n = i));
    }
}
var Zt = null,
  en = !1;
function tn(e) {
  en = e;
}
var nn = null,
  rn = !1;
function sn(e) {
  nn = e;
}
var fn = null;
function on(e) {
  fn = e;
}
var ln = null;
function an(e) {
  null !== nn && (2097152 & nn.f || 2 & nn.f) && (ln ??= new Set()).add(e);
}
var un = null,
  cn = 0,
  dn = null;
var hn = 1,
  vn = 0,
  pn = vn;
function _n(e) {
  pn = e;
}
function gn() {
  return ++hn;
}
function yn(e) {
  var t = e.f;
  if (2048 & t) return !0;
  if (4096 & t) {
    for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if ((yn(s) && Me(s), s.wv > e.wv)) return !0;
    }
    512 & t && null === qe && ve(e, y);
  }
  return !1;
}
function mn(e, t, n = !0) {
  var r = e.reactions;
  if (null !== r && (null === ln || !ln.has(e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      2 & s.f ? mn(s, t, !1) : t === s && (n ? ve(s, m) : 1024 & s.f && ve(s, b), Ge(s));
    }
}
function bn(e) {
  var t = un,
    n = cn,
    r = dn,
    i = nn,
    s = ln,
    f = re,
    o = rn,
    l = pn,
    a = e.f;
  ((un = null),
    (cn = 0),
    (dn = null),
    (nn = 96 & a ? null : e),
    (ln = null),
    ie(e.ctx),
    (rn = !1),
    (pn = ++vn),
    null !== e.ac &&
      (ge(() => {
        e.ac.abort(D);
      }),
      (e.ac = null)));
  try {
    e.f |= E;
    var u = (0, e.fn)();
    e.f |= k;
    var c = wn(e);
    if (le() && null !== dn && !rn && null !== c && !(6146 & e.f))
      for (var d = 0; d < dn.length; d++) mn(dn[d], e);
    if (null !== i && i !== e) {
      if ((vn++, null !== i.deps)) for (let e = 0; e < n; e += 1) i.deps[e].rv = vn;
      if (null !== t) for (const e of t) e.rv = vn;
      null !== dn && (null === r ? (r = dn) : r.push(...dn));
    }
    return (8388608 & e.f && (e.f ^= M), u);
  } catch (h) {
    return (wn(e), Mt(h));
  } finally {
    ((e.f ^= E), (un = t), (cn = n), (dn = r), (nn = i), (ln = s), ie(f), (rn = o), (pn = l));
  }
}
function wn(e) {
  var t = e.deps,
    n = Pe?.is_fork;
  if (null !== un) {
    var r;
    if ((n || xn(e, cn), null !== t && cn > 0))
      for (t.length = cn + un.length, r = 0; r < un.length; r++) t[cn + r] = un[r];
    else e.deps = t = un;
    if (Pt() && 512 & e.f) for (r = cn; r < t.length; r++) (t[r].reactions ??= []).push(e);
  } else !n && null !== t && cn < t.length && (xn(e, cn), (t.length = cn));
  return t;
}
function kn(e, t) {
  let r = t.reactions;
  if (null !== r) {
    var i = s.call(r, e);
    if (-1 !== i) {
      var o = r.length - 1;
      0 === o ? (r = t.reactions = null) : ((r[i] = r[o]), r.pop());
    }
  }
  if (null === r && 2 & t.f && (null === un || !f.call(un, t))) {
    var l = t;
    (512 & l.f && (l.f ^= 512),
      l.v !== n && pe(l),
      null !== l.ac &&
        ge(() => {
          (l.ac.abort(D), (l.ac = null), ve(l, m));
        }),
      (function (e) {
        if (null !== e.effects)
          for (const t of e.effects)
            (t.teardown || t.ac) &&
              (t.teardown?.(),
              null !== t.ac &&
                ge(() => {
                  (t.ac.abort(D), (t.ac = null));
                }),
              null !== t.fn && (t.teardown = _),
              xn(t, 0),
              Vt(t));
      })(l),
      xn(l, 0));
  }
}
function xn(e, t) {
  var n = e.deps;
  if (null !== n) for (var r = t; r < n.length; r++) kn(e, n[r]);
}
function Sn(e) {
  var t = e.f;
  if (!(16384 & t)) {
    ve(e, y);
    var n = fn;
    fn = e;
    try {
      (16777232 & t
        ? (function (e) {
            for (var t = e.first; null !== t;) {
              var n = t.next;
              (32 & t.f || It(t), (t = n));
            }
          })(e)
        : Vt(e),
        Bt(e));
      var r = bn(e);
      ((e.teardown = "function" == typeof r ? r : null), (e.wv = hn));
    } finally {
      fn = n;
    }
  }
}
async function Tn() {
  (await Promise.resolve(), Be());
}
function jn() {
  return We.ensure().settled();
}
function En(e) {
  var t = !!(2 & e.f);
  if (
    (Zt?.add(e),
    null !== nn && !rn && !((null !== fn && 16384 & fn.f) || (null !== ln && ln.has(e))))
  ) {
    var n = nn.deps;
    if (2097152 & nn.f)
      e.rv < vn &&
        ((e.rv = vn),
        null === un && null !== n && n[cn] === e ? cn++ : null === un ? (un = [e]) : un.push(e));
    else {
      ((nn.deps ??= []), f.call(nn.deps, e) || nn.deps.push(e));
      var r = e.reactions;
      null === r ? (e.reactions = [nn]) : f.call(r, nn) || r.push(nn);
    }
  }
  if (en && Ze.has(e)) return Ze.get(e);
  if (t) {
    var i = e;
    if (en) {
      var s = i.v;
      return (((1024 & i.f || null === i.reactions) && !An(i)) || (s = Ee(i)), Ze.set(i, s), s);
    }
    var o = !(512 & i.f || rn || null === nn || !(512 & nn.f)),
      l = 0 === (i.f & k);
    (yn(i) && (o && (i.f |= 512), Me(i)), o && !l && (Ae(i), Mn(i)));
  }
  if (qe?.has(e)) return qe.get(e);
  if (8388608 & e.f) throw e.v;
  return e.v;
}
function Mn(e) {
  if (((e.f |= 512), null !== e.deps))
    for (const n of e.deps) {
      var t = n.reactions;
      (null === t ? (n.reactions = [e]) : f.call(t, e) || t.push(e),
        2 & n.f && !(512 & n.f) && (Ae(n), Mn(n)));
    }
}
function An(e) {
  if (e.v === n) return !0;
  if (null === e.deps) return !1;
  for (const t of e.deps) {
    if (Ze.has(t)) return !0;
    if (2 & t.f && An(t)) return !0;
  }
  return !1;
}
function On(e) {
  var t = rn;
  try {
    return ((rn = !0), e());
  } finally {
    rn = t;
  }
}
var $n = Symbol("events"),
  Pn = new Set(),
  Nn = new Set();
function qn(e, t, n, r = {}) {
  var i = (function (e, t, n, r = {}) {
    function i(e) {
      if ((r.capture || Rn.call(t, e), !e.cancelBubble)) return ge(() => n?.call(this, e));
    }
    return (
      e.startsWith("pointer") || e.startsWith("touch") || "wheel" === e
        ? ((i.__removed = !1),
          ce(() => {
            i.__removed || t.addEventListener(e, i, r);
          }))
        : t.addEventListener(e, i, r),
      i
    );
  })(t, e, n, r);
  return () => {
    ((i.__removed = !0), e.removeEventListener(t, i, r));
  };
}
function Ln(e, t, n) {
  (t[$n] ??= {})[e] = n;
}
function Cn(e) {
  for (var t = 0; t < e.length; t++) Pn.add(e[t]);
  for (var n of Nn) n(e);
}
var zn = null,
  Dn = !1;
function Rn(e) {
  var t = this,
    n = t.ownerDocument,
    r = e.type,
    i = e.composedPath?.() || [],
    s = i[0] || e.target;
  ((zn = e),
    Dn ||
      ((Dn = !0),
      setTimeout(() => {
        ((Dn = !1), (zn = null));
      })));
  var f = 0,
    o = zn === e && e[$n];
  if (o) {
    var l = i.indexOf(o);
    if (-1 !== l && (t === document || t === window)) return void (e[$n] = t);
    var u = i.indexOf(t);
    if (-1 === u) return;
    l <= u && (f = l);
  }
  if ((s = i[f] || e.target) !== t) {
    a(e, "currentTarget", { configurable: !0, get: () => s || n });
    var c = nn,
      d = fn;
    (sn(null), on(null));
    try {
      for (var h, v = []; null !== s && s !== t;) {
        try {
          var p = s[$n]?.[r];
          null == p || (s.disabled && e.target !== s) || p.call(s, e);
        } catch (_) {
          h ? v.push(_) : (h = _);
        }
        if (e.cancelBubble) break;
        (f++, (s = f < i.length ? i[f] : null));
      }
      if (h) {
        for (let e of v)
          queueMicrotask(() => {
            throw e;
          });
        throw h;
      }
    } finally {
      ((e[$n] = t), delete e.currentTarget, sn(c), on(d));
    }
  }
}
var Hn =
  globalThis?.window?.trustedTypes &&
  globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Fn(e) {
  var t = jt("template");
  return (
    (t.innerHTML = (function (e) {
      return Hn?.createHTML(e) ?? e;
    })(e.replaceAll("<!>", "\x3c!----\x3e"))),
    t.content
  );
}
function Wn(e, t) {
  var n = fn;
  null === n.nodes && (n.nodes = { start: e, end: t, a: null, t: null });
}
function Bn(e, t) {
  var n,
    r = !!(1 & t),
    i = !!(2 & t),
    s = !e.startsWith("<!>");
  return () => {
    if (W) return (Wn(F, null), F);
    void 0 === n && ((n = Fn(s ? e : "<!>" + e)), r || (n = mt(n)));
    var t = i || vt ? document.importNode(n, !0) : n.cloneNode(!0);
    r ? Wn(mt(t), t.lastChild) : Wn(t, t);
    return t;
  };
}
function Vn(e = "") {
  if (!W) {
    var t = yt(e + "");
    return (Wn(t, t), t);
  }
  var n = F;
  return (3 !== n.nodeType ? (n.before((n = yt())), V(n)) : Et(n), Wn(n, n), n);
}
function In() {
  if (W) return (Wn(F, null), F);
  var e = document.createDocumentFragment(),
    t = document.createComment(""),
    n = yt();
  return (e.append(t, n), Wn(t, n), e);
}
function Jn(e, t) {
  if (W) {
    var n = fn;
    return ((32768 & n.f && null !== n.nodes.end) || (n.nodes.end = F), void I());
  }
  null !== e && e.before(t);
}
var Kn = ["touchstart", "touchmove"];
function Un(e) {
  return Kn.includes(e);
}
function Gn(e) {
  let t,
    n = 0,
    r = tt(0);
  return () => {
    Pt() &&
      (En(r),
      Dt(
        () => (
          0 === n && (t = On(() => e(() => at(r)))),
          (n += 1),
          () => {
            ce(() => {
              ((n -= 1), 0 === n && (t?.(), (t = void 0), at(r)));
            });
          }
        ),
      ));
  };
}
function Qn(e, t, n, r) {
  new Xn(e, t, n, r);
}
var Xn = class {
  parent;
  is_pending = !1;
  transform_error;
  #S;
  #T = W ? F : null;
  #j;
  #E;
  #M;
  #A = null;
  #O = null;
  #$ = null;
  #P = null;
  #N = 0;
  #q = 0;
  #L = !1;
  #u = new Set();
  #c = new Set();
  #C = null;
  #z = Gn(
    () => (
      (this.#C = tt(this.#N)),
      () => {
        this.#C = null;
      }
    ),
  );
  constructor(e, t, n, r) {
    ((this.#S = e),
      (this.#j = t),
      (this.#E = (e) => {
        var t = fn;
        ((t.b = this), (t.f |= 128), n(e));
      }),
      (this.parent = fn.b),
      (this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e)),
      (this.#M = Ft(() => {
        if (W) {
          const e = U(this.#T);
          I();
          const t = "[!" === e;
          if (e.startsWith("[?")) {
            const t = JSON.parse(e.slice(2));
            this.#D(t);
          } else t ? this.#R() : this.#H();
        } else this.#F();
      }, 589824)),
      W && (this.#S = F));
  }
  #H() {
    try {
      this.#A = Wt(() => this.#E(this.#S));
    } catch (e) {
      this.error(e);
    }
  }
  #D(e) {
    const t = this.#j.failed,
      { reset: n, invoke_onerror: r } = this.#W(e);
    (ce(r),
      t &&
        (this.#$ = Wt(() => {
          t(
            this.#S,
            () => e,
            () => n,
          );
        })));
  }
  #W(e) {
    var t = !1,
      n = !1;
    const r = () => {
      this.#B() ||
        t ||
        ((t = !0),
        n &&
          (function () {
            throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
          })(),
        null !== this.#$ &&
          Ut(this.#$, () => {
            this.#$ = null;
          }),
        this.#V(() => {
          this.#F();
        }));
    };
    return {
      reset: r,
      invoke_onerror: () => {
        if (!this.#B())
          try {
            ((n = !0), this.#j.onerror?.(e, r), (n = !1));
          } catch (t) {
            At(t, this.#M && this.#M.parent);
          }
      },
    };
  }
  #B() {
    return !!(33570816 & this.#M.f);
  }
  #R() {
    const e = this.#j.pending;
    e &&
      ((this.is_pending = !0),
      (this.#O = Wt(() => e(this.#S))),
      ce(() => {
        if (!this.#B()) {
          var e = (this.#P = document.createDocumentFragment()),
            t = yt(),
            n = !1;
          if (
            (e.append(t),
            (this.#A = this.#V(() => {
              try {
                return Wt(() => this.#E(t));
              } catch (e) {
                try {
                  (this.error(e), (n = !0));
                } catch (e) {
                  At(e, this.#M.parent);
                }
                return null;
              }
            })),
            null === this.#A)
          )
            return ((this.#P = null), void (n && this.#_(Pe)));
          0 === this.#q &&
            (this.#S.before(e),
            (this.#P = null),
            Ut(this.#O, () => {
              this.#O = null;
            }),
            this.#_(Pe));
        }
      }));
  }
  #F() {
    try {
      if (
        ((this.is_pending = this.has_pending_snippet()),
        (this.#q = 0),
        (this.#N = 0),
        (this.#A = Wt(() => {
          this.#E(this.#S);
        })),
        this.#q > 0)
      ) {
        var e = (this.#P = document.createDocumentFragment());
        Yt(this.#A, e);
        const t = this.#j.pending;
        this.#O = Wt(() => t(this.#S));
      } else this.#_(Pe);
    } catch (t) {
      this.error(t);
    }
  }
  #_(e) {
    ((this.is_pending = !1), e.transfer_effects(this.#u, this.#c));
  }
  defer_effect(e) {
    _e(e, this.#u, this.#c);
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#j.pending;
  }
  #V(e) {
    var t = fn,
      n = nn,
      r = re;
    (on(this.#M), sn(this.#M), ie(this.#M.ctx));
    try {
      return (We.ensure(), e());
    } finally {
      (on(t), sn(n), ie(r));
    }
  }
  #I(e, t) {
    this.has_pending_snippet()
      ? ((this.#q += e),
        0 === this.#q &&
          (this.#_(t),
          this.#O &&
            Ut(this.#O, () => {
              this.#O = null;
            }),
          this.#P && (this.#S.before(this.#P), (this.#P = null))))
      : this.parent && this.parent.#I(e, t);
  }
  update_pending_count(e, t) {
    (this.#I(e, t),
      (this.#N += e),
      this.#C &&
        !this.#L &&
        ((this.#L = !0),
        ce(() => {
          ((this.#L = !1), this.#C && ot(this.#C, this.#N));
        })));
  }
  get_effect_pending() {
    return (this.#z(), En(this.#C));
  }
  error(e) {
    if (e === t) throw e;
    if (!this.#j.onerror && !this.#j.failed) throw e;
    Pe?.is_fork
      ? (this.#A && Pe.skip_effect(this.#A),
        this.#O && Pe.skip_effect(this.#O),
        this.#$ && Pe.skip_effect(this.#$),
        Pe.oncommit(() => {
          this.#B() || this.#J(e);
        }))
      : this.#J(e);
  }
  #J(e) {
    (this.#A && (It(this.#A), (this.#A = null)),
      this.#O && (It(this.#O), (this.#O = null)),
      this.#$ && (It(this.#$), (this.#$ = null)),
      W &&
        (V(this.#T),
        (function (e = 1) {
          if (W) {
            for (var t = e, n = F; t--;) n = bt(n);
            F = n;
          }
        })(),
        V(K())));
    let t = this.#j.failed;
    const n = (n) => {
      if (this.#B()) return;
      const { reset: r, invoke_onerror: i } = this.#W(n);
      (i(),
        t &&
          !this.#B() &&
          (this.#$ = this.#V(() => {
            try {
              return Wt(() => {
                var e = fn;
                ((e.b = this),
                  (e.f |= 128),
                  t(
                    this.#S,
                    () => n,
                    () => r,
                  ));
              });
            } catch (e) {
              return (At(e, this.#M.parent), null);
            }
          })));
    };
    ce(() => {
      if (!this.#B()) {
        var t;
        try {
          t = this.transform_error(e);
        } catch (r) {
          return void At(r, this.#M && this.#M.parent);
        }
        null !== t && "object" == typeof t && "function" == typeof t.then
          ? t.then(n, (e) => At(e, this.#M && this.#M.parent))
          : n(t);
      }
    });
  }
};
function Yn(e, t) {
  var n = null == t ? "" : "object" == typeof t ? `${t}` : t;
  n !== (e[z] ??= e.nodeValue) && ((e[z] = n), (e.nodeValue = `${n}`));
}
function Zn(e, t) {
  return nr(e, t);
}
function er(e, n) {
  (gt(), (n.intro = n.intro ?? !1));
  const r = n.target,
    i = W,
    s = F;
  try {
    for (var f = mt(r); f && (8 !== f.nodeType || "[" !== f.data);) f = bt(f);
    if (!f) throw t;
    (B(!0), V(f));
    const i = nr(e, { ...n, anchor: f });
    return (B(!1), i);
  } catch (o) {
    if (
      o instanceof Error &&
      o.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))
    )
      throw o;
    return (
      !1 === n.recover &&
        (function () {
          throw new Error("https://svelte.dev/e/hydration_failed");
        })(),
      gt(),
      Tt(r),
      B(!1),
      Zn(e, n)
    );
  } finally {
    (B(i), V(s));
  }
}
var tr = new Map();
function nr(
  e,
  { target: n, anchor: r, props: i = {}, events: s, context: f, intro: l = !0, transformError: a },
) {
  gt();
  var u = void 0,
    c = (function (e) {
      We.ensure();
      const t = $t(524352, e);
      return (e = {}) =>
        new Promise((n) => {
          e.outro
            ? Ut(t, () => {
                (It(t), n(void 0));
              })
            : (It(t), n(void 0));
        });
    })(() => {
      var l = r ?? n.appendChild(yt());
      Qn(
        l,
        { pending: () => {} },
        (n) => {
          if (
            (se({}),
            f && (re.c = f),
            s && (i.$$events = s),
            W && Wn(n, null),
            (u = e(n, i) || oe()),
            W && ((fn.nodes.end = F), null === F || 8 !== F.nodeType || "]" !== F.data))
          )
            throw (H(), t);
          fe();
        },
        a,
      );
      var c = new Set(),
        d = (e) => {
          for (var t = 0; t < e.length; t++) {
            var r = e[t];
            if (!c.has(r)) {
              c.add(r);
              var i = Un(r);
              for (const e of [n, document]) {
                var s = tr.get(e);
                void 0 === s && ((s = new Map()), tr.set(e, s));
                var f = s.get(r);
                void 0 === f
                  ? (e.addEventListener(r, Rn, { passive: i }), s.set(r, 1))
                  : s.set(r, f + 1);
              }
            }
          }
        };
      return (
        d(o(Pn)),
        Nn.add(d),
        () => {
          for (var e of c)
            for (const r of [n, document]) {
              var t = tr.get(r),
                i = t.get(e);
              0 == --i
                ? (r.removeEventListener(e, Rn), t.delete(e), 0 === t.size && tr.delete(r))
                : t.set(e, i);
            }
          (Nn.delete(d), l !== r && l.parentNode?.removeChild(l));
        }
      );
    });
  return (rr.set(u, c), u);
}
var rr = new WeakMap();
var ir,
  sr = class {
    anchor;
    #K = new Map();
    #U = new Map();
    #G = new Map();
    #Q = new Set();
    #X = !0;
    constructor(e, t = !0) {
      ((this.anchor = e), (this.#X = t));
    }
    #x = (e) => {
      if (this.#K.has(e)) {
        var t = this.#K.get(e),
          n = this.#U.get(t);
        if (n) (Qt(n), this.#Q.delete(t));
        else {
          var r = this.#G.get(t);
          r &&
            (Qt(r.effect),
            this.#U.set(t, r.effect),
            this.#G.delete(t),
            r.fragment.lastChild.remove(),
            this.anchor.before(r.fragment),
            (n = r.effect));
        }
        for (const [t, n] of this.#K) {
          if ((this.#K.delete(t), t === e)) break;
          const r = this.#G.get(n);
          r && (It(r.effect), this.#G.delete(n));
        }
        for (const [e, r] of this.#U) {
          if (e === t || this.#Q.has(e)) continue;
          const i = () => {
            if (Array.from(this.#K.values()).includes(e)) {
              var t = document.createDocumentFragment();
              (Yt(r, t), t.append(yt()), this.#G.set(e, { effect: r, fragment: t }));
            } else It(r);
            (this.#Q.delete(e), this.#U.delete(e));
          };
          this.#X || !n ? (this.#Q.add(e), Ut(r, i, !1)) : i();
        }
      }
    };
    #Y = (e) => {
      this.#K.delete(e);
      const t = Array.from(this.#K.values());
      for (const [n, r] of this.#G) t.includes(n) || (It(r.effect), this.#G.delete(n));
    };
    ensure(e, t) {
      var n = Pe;
      !t ||
        this.#U.has(e) ||
        this.#G.has(e) ||
        this.#U.set(
          e,
          Wt(() => t(this.anchor)),
        );
      (this.#K.set(n, e), W && (this.anchor = F), this.#x(n));
    }
  };
function fr(e, t, ...n) {
  var r = new sr(e);
  Ft(() => {
    const e = t() ?? null;
    r.ensure(e, e && ((t) => e(t, ...n)));
  }, S);
}
function or(e) {
  var t, n;
  (null === re &&
    (function () {
      throw new Error("https://svelte.dev/e/lifecycle_outside_component");
    })(),
    Y && null !== re.l
      ? ((t = re), (n = t.l), (n.u ??= { a: [], b: [], m: [] })).m.push(e)
      : Nt(() => {
          const t = On(e);
          if ("function" == typeof t) return t;
        }));
}
function lr(e, t, n = !1) {
  var r;
  W && ((r = F), I());
  var i = new sr(e);
  function s(e, t) {
    if (W) {
      var n = U(r);
      if (e !== parseInt(n.substring(1))) {
        var s = K();
        return (V(s), (i.anchor = s), B(!1), i.ensure(e, t), void B(!0));
      }
    }
    i.ensure(e, t);
  }
  Ft(
    () => {
      var e = !1;
      (t((t, n = 0) => {
        ((e = !0), s(n, t));
      }),
        e || s(-1, null));
    },
    n ? S : 0,
  );
}
function ar(e, t) {
  return t;
}
function ur(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = new Set();
    for (const t of e.pending.values()) for (const n of t) r.add(e.items.get(n).e);
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (r?.has(s)) {
      s.f |= j;
      Yt(s, document.createDocumentFragment());
    } else It(t[i], n);
  }
}
function cr(e, t, n, r, s, f = null) {
  var l = e,
    a = new Map();
  if (4 & t) {
    var u = e;
    l = W ? V(mt(u)) : u.appendChild(yt());
  }
  W && I();
  var c = null,
    d = Te(() => {
      var e = n();
      return i(e) ? e : null == e ? [] : o(e);
    });
  var h = new Map(),
    v = !0;
  function p(e) {
    if (!(16384 & _.effect.f)) {
      _.pending.delete(e);
      var n = En(d);
      ((_.fallback = c),
        (function (e, t, n, r, i) {
          var s,
            f,
            l,
            a,
            u,
            c = !!(8 & r),
            d = t.length,
            h = e.items,
            v = dr(e.effect.first),
            p = null,
            _ = [],
            g = [];
          if (c)
            for (u = 0; u < d; u += 1)
              ((l = i(t[u], u)),
                33554432 & (a = h.get(l).e).f || (a.nodes?.a?.measure(), (f ??= new Set()).add(a)));
          for (u = 0; u < d; u += 1) {
            if (((l = i(t[u], u)), (a = h.get(l).e), null !== e.outrogroups))
              for (const t of e.outrogroups) (t.pending.delete(a), t.done.delete(a));
            if (
              (8192 & a.f && (Qt(a), c && (a.nodes?.a?.unfix(), (f ??= new Set()).delete(a))),
              33554432 & a.f)
            ) {
              if (((a.f ^= j), a !== v)) {
                var y = p ? p.next : v;
                (a === e.effect.last && (e.effect.last = a.prev),
                  a.prev && (a.prev.next = a.next),
                  a.next && (a.next.prev = a.prev),
                  pr(e, p, a),
                  pr(e, a, y),
                  vr(a, y, n),
                  (_ = []),
                  (g = []),
                  (v = dr((p = a).next)));
                continue;
              }
              vr(a, null, n);
            }
            if (a !== v) {
              if (void 0 !== s && s.has(a)) {
                if (_.length < g.length) {
                  var m,
                    b = g[0];
                  p = b.prev;
                  var w = _[0],
                    k = _[_.length - 1];
                  for (m = 0; m < _.length; m += 1) vr(_[m], b, n);
                  for (m = 0; m < g.length; m += 1) s.delete(g[m]);
                  (pr(e, w.prev, k.next),
                    pr(e, p, w),
                    pr(e, k, b),
                    (v = b),
                    (p = k),
                    (u -= 1),
                    (_ = []),
                    (g = []));
                } else
                  (s.delete(a),
                    vr(a, v, n),
                    pr(e, a.prev, a.next),
                    pr(e, a, null === p ? e.effect.first : p.next),
                    pr(e, p, a),
                    (p = a));
                continue;
              }
              for (_ = [], g = []; null !== v && v !== a;)
                ((s ??= new Set()).add(v), g.push(v), (v = dr(v.next)));
              if (null === v) continue;
            }
            (33554432 & a.f || _.push(a), (p = a), (v = dr(a.next)));
          }
          if (null !== e.outrogroups) {
            for (const t of e.outrogroups)
              0 === t.pending.size && (ur(e, o(t.done)), e.outrogroups?.delete(t));
            0 === e.outrogroups.size && (e.outrogroups = null);
          }
          if (null !== v || void 0 !== s) {
            var x = [];
            if (void 0 !== s) for (a of s) 8192 & a.f || x.push(a);
            for (; null !== v;) (8192 & v.f || v === e.fallback || x.push(v), (v = dr(v.next)));
            var S = x.length;
            if (S > 0) {
              var T = 4 & r && 0 === d ? n : null;
              if (c) {
                for (u = 0; u < S; u += 1) x[u].nodes?.a?.measure();
                for (u = 0; u < S; u += 1) x[u].nodes?.a?.fix();
              }
              !(function (e, t, n) {
                for (var r, i = t.length, s = t.length, f = 0; f < i; f++) {
                  let n = t[f];
                  Ut(
                    n,
                    () => {
                      if (r) {
                        if ((r.pending.delete(n), r.done.add(n), 0 === r.pending.size)) {
                          var t = e.outrogroups;
                          (ur(e, o(r.done)), t.delete(r), 0 === t.size && (e.outrogroups = null));
                        }
                      } else s -= 1;
                    },
                    !1,
                  );
                }
                if (0 === s) {
                  var l = null !== n && 0 === e.pending.size;
                  if (l) {
                    var a = n,
                      u = a.parentNode;
                    (Tt(u), u.append(a), e.items.clear());
                  }
                  ur(e, t, !l);
                } else
                  ((r = { pending: new Set(t), done: new Set() }),
                    (e.outrogroups ??= new Set()).add(r));
              })(e, x, T);
            }
          }
          c &&
            ce(() => {
              if (void 0 !== f) for (a of f) a.nodes?.a?.apply();
            });
        })(_, n, l, t, r),
        null !== c &&
          (0 === n.length
            ? 33554432 & c.f
              ? ((c.f ^= j), vr(c, null, l))
              : Qt(c)
            : Ut(c, () => {
                c = null;
              })));
    }
  }
  var _ = {
    effect: Ft(() => {
      var e = En(d),
        i = e.length;
      let o = !1;
      W && ("[!" === U(l)) != (0 === i) && (V((l = K())), B(!1), (o = !0));
      for (var u = new Set(), _ = Pe, g = 0; g < i; g += 1) {
        W && 8 === F.nodeType && "]" === F.data && ((l = F), (o = !0), B(!1));
        var y = e[g],
          m = r(y, g),
          b = v ? null : a.get(m);
        (b
          ? (b.v && ot(b.v, y), b.i && ot(b.i, g))
          : ((b = hr(a, v ? l : (ir ??= yt()), y, m, g, s, t, n)), v || (b.e.f |= j), a.set(m, b)),
          u.add(m));
      }
      (0 === i && f && !c && (v ? (c = Wt(() => f(l))) : ((c = Wt(() => f((ir ??= yt())))).f |= j)),
        i > u.size && X(),
        W && i > 0 && V(K()),
        v || (h.set(_, u), p(_)),
        o && B(!0),
        En(d));
    }),
    flags: t,
    items: a,
    pending: h,
    outrogroups: null,
    fallback: c,
  };
  ((v = !1), W && (l = F));
}
function dr(e) {
  for (; null !== e && !(32 & e.f);) e = e.next;
  return e;
}
function hr(e, t, n, r, i, s, f, o) {
  var l = 1 & f ? (16 & f ? tt(n) : rt(n, !1, !1)) : null,
    a = 2 & f ? tt(i) : null;
  return {
    v: l,
    i: a,
    e: Wt(
      () => (
        s(t, l ?? n, a ?? i, o),
        () => {
          e.delete(r);
        }
      ),
    ),
  };
}
function vr(e, t, n) {
  if (e.nodes)
    for (
      var r = e.nodes.start, i = e.nodes.end, s = !t || 33554432 & t.f ? n : t.nodes.start;
      null !== r;
    ) {
      var f = bt(r);
      if ((s.before(r), r === i)) return;
      r = f;
    }
}
function pr(e, t, n) {
  (null === t ? (e.effect.first = n) : (t.next = n),
    null === n ? (e.effect.last = t) : (n.prev = t));
}
function _r(e, n, r = !1, i = !1, s = !1, f = !1) {
  var o = e,
    l = "";
  if (r) {
    var a = e;
    W && (o = V(mt(a)));
  }
  Rt(() => {
    var e = fn;
    if (l !== (l = n() ?? "")) {
      if (r && !W)
        return ((e.nodes = null), (a.innerHTML = l), void ("" !== l && Wn(mt(a), a.lastChild)));
      if ((null !== e.nodes && (Jt(e.nodes.start, e.nodes.end), (e.nodes = null)), "" !== l)) {
        if (W) {
          F.data;
          for (var f = I(), u = f; null !== f && (8 !== f.nodeType || "" !== f.data);)
            ((u = f), (f = bt(f)));
          if (null === f) throw (H(), t);
          return (Wn(F, u), void (o = V(f)));
        }
        var c = jt(
          i ? "svg" : s ? "math" : "template",
          i ? "http://www.w3.org/2000/svg" : s ? "http://www.w3.org/1998/Math/MathML" : void 0,
        );
        c.innerHTML = l;
        var d = i || s ? c : c.content;
        if ((Wn(mt(d), d.lastChild), i || s)) for (; mt(d);) o.before(mt(d));
        else o.before(d);
      }
    } else W && I();
  });
}
function gr(e, t, n) {
  var r;
  W && ((r = F), I());
  var i = new sr(e);
  Ft(() => {
    var e = t() ?? null;
    if (W && ("[" === U(r)) != (null !== e)) {
      var s = K();
      return (V(s), (i.anchor = s), B(!1), i.ensure(e, e && ((t) => n(t, e))), void B(!0));
    }
    i.ensure(e, e && ((t) => n(t, e)));
  }, S);
}
function yr(e, t) {
  let n = null,
    r = W;
  var i;
  if (W) {
    n = F;
    for (var s = mt(document.head); null !== s && (8 !== s.nodeType || s.data !== e);) s = bt(s);
    if (null === s) B(!1);
    else {
      var f = bt(s);
      (s.remove(), V(f));
    }
  }
  W || (i = document.head.appendChild(yt()));
  try {
    Ft(() => {
      var e = Wt(() => t(i));
      ((e.f |= 262144),
        W ||
          (null === e.nodes
            ? (e.nodes = { start: i, end: i, a: null, t: null })
            : (e.nodes.end = i)));
    });
  } finally {
    r && (B(!0), V(n));
  }
}
function mr(e) {
  var t,
    n,
    r = "";
  if ("string" == typeof e || "number" == typeof e) r += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = mr(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function br(e) {
  return "object" == typeof e
    ? (function () {
        for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
          (e = arguments[n]) && (t = mr(e)) && (r && (r += " "), (r += t));
        return r;
      })(e)
    : (e ?? "");
}
var wr = [..." \t\n\r\f \v\ufeff"];
function kr(e, t = !1) {
  var n = t ? " !important;" : ";",
    r = "";
  for (var i of Object.keys(e)) {
    var s = e[i];
    null != s && "" !== s && (r += " " + i + ": " + s + n);
  }
  return r;
}
function xr(e) {
  return "-" !== e[0] || "-" !== e[1] ? e.toLowerCase() : e;
}
function Sr(e, t, n, r, i, s) {
  var f = e[L];
  if (W || f !== n || void 0 === f) {
    var o = (function (e, t, n) {
      var r = null == e ? "" : "" + e;
      if ((t && (r = r ? r + " " + t : t), n))
        for (var i of Object.keys(n))
          if (n[i]) r = r ? r + " " + i : i;
          else if (r.length)
            for (var s = i.length, f = 0; (f = r.indexOf(i, f)) >= 0;) {
              var o = f + s;
              (0 !== f && !wr.includes(r[f - 1])) || (o !== r.length && !wr.includes(r[o]))
                ? (f = o)
                : (r = (0 === f ? "" : r.substring(0, f)) + r.substring(o + 1));
            }
      return "" === r ? null : r;
    })(n, r, s);
    ((W && o === e.getAttribute("class")) ||
      (null == o ? e.removeAttribute("class") : t ? (e.className = o) : e.setAttribute("class", o)),
      (e[L] = n));
  } else if (s && i !== s)
    for (var l in s) {
      var a = !!s[l];
      (null != i && a === !!i[l]) || e.classList.toggle(l, a);
    }
  return s;
}
function Tr(e, t = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    t[i] !== s && (null == n[i] ? e.style.removeProperty(i) : e.style.setProperty(i, s, r));
  }
}
function jr(e, t, n, r) {
  var i = e[C];
  if (W || i !== t) {
    var s = (function (e, t) {
      if (t) {
        var n,
          r,
          i = "";
        if ((Array.isArray(t) ? ((n = t[0]), (r = t[1])) : (n = t), e)) {
          e = String(e)
            .replaceAll(/\/\*.*?\*\//g, "")
            .trim();
          var s = !1,
            f = 0,
            o = !1,
            l = [];
          (n && l.push(...Object.keys(n).map(xr)), r && l.push(...Object.keys(r).map(xr)));
          var a = 0,
            u = -1;
          const t = e.length;
          for (var c = 0; c < t; c++) {
            var d = e[c];
            if (
              (o
                ? "/" === d && "*" === e[c - 1] && (o = !1)
                : s
                  ? s === d && (s = !1)
                  : "/" === d && "*" === e[c + 1]
                    ? (o = !0)
                    : '"' === d || "'" === d
                      ? (s = d)
                      : "(" === d
                        ? f++
                        : ")" === d && f--,
              !o && !1 === s && 0 === f)
            )
              if (":" === d && -1 === u) u = c;
              else if (";" === d || c === t - 1) {
                if (-1 !== u) {
                  var h = xr(e.substring(a, u).trim());
                  l.includes(h) || (";" !== d && c++, (i += " " + e.substring(a, c).trim() + ";"));
                }
                ((a = c + 1), (u = -1));
              }
          }
        }
        return (n && (i += kr(n)), r && (i += kr(r, !0)), "" === (i = i.trim()) ? null : i);
      }
      return null == e ? null : String(e);
    })(t, r);
    ((W && s === e.getAttribute("style")) ||
      (null == s ? e.removeAttribute("style") : (e.style.cssText = s)),
      (e[C] = t));
  } else
    r && (Array.isArray(r) ? (Tr(e, n?.[0], r[0]), Tr(e, n?.[1], r[1], "important")) : Tr(e, n, r));
  return r;
}
var Er = Symbol("is custom element"),
  Mr = Symbol("is html"),
  Ar = R ? "link" : "LINK";
function Or(e, t, n, i) {
  var s = (function (e) {
    return (e[q] ??= { [Er]: e.nodeName.includes("-"), [Mr]: e.namespaceURI === r });
  })(e);
  (W &&
    ((s[t] = e.getAttribute(t)),
    "src" === t || "srcset" === t || ("href" === t && e.nodeName === Ar))) ||
    (s[t] !== (s[t] = n) &&
      ("loading" === t && (e[P] = n),
      null == n
        ? e.removeAttribute(t)
        : "string" != typeof n &&
            (function (e) {
              var t,
                n = e.getAttribute("is") || e.nodeName,
                r = $r.get(n);
              if (r) return r;
              $r.set(n, (r = new Set()));
              var i = e,
                s = Element.prototype;
              for (; s !== i;) {
                for (var f in (t = c(i)))
                  t[f].set &&
                    "innerHTML" !== f &&
                    "textContent" !== f &&
                    "innerText" !== f &&
                    r.add(f);
                i = v(i);
              }
              return r;
            })(e).has(t)
          ? (e[t] = n)
          : e.setAttribute(t, n)));
}
var $r = new Map();
function Pr(e, t) {
  return e === t || e?.[A] === t;
}
function Nr(e = oe(), t, n, r) {
  var i = re.r,
    s = fn;
  return (
    zt(() => {
      var f, o;
      return (
        Dt(() => {
          ((f = o),
            (o = r?.() || []),
            On(() => {
              Pr(n(...o), e) || (t(e, ...o), f && Pr(n(...f), e) && t(null, ...f));
            }));
        }),
        () => {
          let r = s;
          for (; r !== i && null !== r.parent && 33554432 & r.parent.f;) r = r.parent;
          const f = r.teardown;
          r.teardown = () => {
            (o && Pr(n(...o), e) && t(null, ...o), f?.());
          };
        }
      );
    }),
    e
  );
}
var qr = !1;
function Lr(e, t, n, r) {
  var i = !Y || !!(2 & n),
    s = !!(8 & n),
    f = !!(16 & n),
    o = r,
    l = !0,
    a = void 0,
    c = () => (f && i ? ((a ??= we(r)), En(a)) : (l && ((l = !1), (o = f ? On(r) : r)), o));
  let d;
  if (s) {
    var h = A in e || $ in e;
    d = u(e, t)?.set ?? (h && t in e ? (n) => (e[t] = n) : void 0);
  }
  var v,
    p,
    _ = !1;
  if (
    (s
      ? ([v, _] = (function (e) {
          var t = qr;
          try {
            return ((qr = !1), [e(), qr]);
          } finally {
            qr = t;
          }
        })(() => e[t]))
      : (v = e[t]),
    void 0 === v &&
      void 0 !== r &&
      ((v = c()),
      d &&
        (i &&
          (function () {
            throw new Error("https://svelte.dev/e/props_invalid_value");
          })(),
        d(v))),
    (p = i
      ? () => {
          var n = e[t];
          return void 0 === n ? c() : ((l = !0), n);
        }
      : () => {
          var n = e[t];
          return (void 0 !== n && (o = void 0), void 0 === n ? o : n);
        }),
    i && !(4 & n))
  )
    return p;
  if (d) {
    var g = e.$$legacy;
    return function (e, t) {
      return arguments.length > 0 ? ((i && t && !g && !_) || d(t ? p() : e), e) : p();
    };
  }
  var y = !1,
    m = (1 & n ? we : Te)(() => ((y = !1), p()));
  s && En(m);
  var b = fn;
  return function (e, t) {
    if (arguments.length > 0) {
      const n = t ? En(m) : i && s ? ct(e) : e;
      return (it(m, n), (y = !0), void 0 !== o && (o = n), e);
    }
    return (en && y) || 16384 & b.f ? m.v : En(m);
  };
}
var Cr = class {
  #Z;
  #ee;
  constructor(e) {
    var t = new Map(),
      n = (e, n) => {
        var r = rt(n, !1, !1);
        return (t.set(e, r), r);
      };
    const r = new Proxy(
      { ...(e.props || {}), $$events: {} },
      {
        get: (e, r) => En(t.get(r) ?? n(r, Reflect.get(e, r))),
        has: (e, r) => r === $ || (En(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r)),
        set: (e, r, i) => (it(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i)),
      },
    );
    ((this.#ee = (e.hydrate ? er : Zn)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: r,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover,
      transformError: e.transformError,
    })),
      (e?.props?.$$host && !1 !== e.sync) || Be(),
      (this.#Z = r.$$events));
    for (const i of Object.keys(this.#ee))
      "$set" !== i &&
        "$destroy" !== i &&
        "$on" !== i &&
        a(this, i, {
          get() {
            return this.#ee[i];
          },
          set(e) {
            this.#ee[i] = e;
          },
          enumerable: !0,
        });
    ((this.#ee.$set = (e) => {
      Object.assign(r, e);
    }),
      (this.#ee.$destroy = () => {
        !(function (e, t) {
          const n = rr.get(e);
          n ? (rr.delete(e), n(t)) : Promise.resolve();
        })(this.#ee);
      }));
  }
  $set(e) {
    this.#ee.$set(e);
  }
  $on(e, t) {
    this.#Z[e] = this.#Z[e] || [];
    const n = (...e) => t.call(this, ...e);
    return (
      this.#Z[e].push(n),
      () => {
        this.#Z[e] = this.#Z[e].filter((e) => e !== n);
      }
    );
  }
  $destroy() {
    this.#ee.$destroy();
  }
};
function zr(e, t, n, r) {
  const i = n[e]?.type;
  if (((t = "Boolean" === i && "boolean" != typeof t ? null != t : t), !r || !n[e])) return t;
  if ("toAttribute" === r)
    switch (i) {
      case "Object":
      case "Array":
        return null == t ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return null == t ? null : t;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
      default:
        return t;
      case "Number":
        return null != t ? +t : t;
    }
}
"function" == typeof HTMLElement && HTMLElement;
var Dr = e.version;
export {
  ee as $,
  Tn as A,
  wt as B,
  Bn as C,
  qn as D,
  Ln as E,
  Ct as F,
  at as G,
  xt as H,
  Rt as I,
  nt as J,
  it as K,
  Nt as L,
  pn as M,
  Ht as N,
  En as O,
  zt as P,
  ne as Q,
  Lt as R,
  In as S,
  Cn as T,
  St as U,
  kt as V,
  ct as W,
  fe as X,
  Se as Y,
  se as Z,
  Zn as _,
  jr as a,
  Gn as b,
  yr as c,
  cr as d,
  Z as et,
  ar as f,
  er as g,
  fr as h,
  Or as i,
  On as j,
  jn as k,
  gr as l,
  or as m,
  Lr as n,
  _ as nt,
  Sr as o,
  lr as p,
  tt as q,
  Nr as r,
  br as s,
  Dr as t,
  J as tt,
  _r as u,
  Yn as v,
  Vn as w,
  Jn as x,
  Qn as y,
  ht as z,
};
