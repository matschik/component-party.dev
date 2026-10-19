var e = Object.defineProperty,
  r = (r, t) => {
    let a = {};
    for (var o in r) e(a, o, { get: r[o], enumerable: !0 });
    return (t || e(a, Symbol.toStringTag, { value: "Module" }), a);
  };
export { r as t };
