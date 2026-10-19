var e = {},
  t = function (t, r, n) {
    let o = Promise.resolve();
    if (r && r.length > 0) {
      let t;
      const l = document.querySelector("meta[property=csp-nonce]"),
        a = l?.nonce || l?.getAttribute("nonce");
      ((s = r
        .map((r) => {
          r = (function (e, t) {
            return new URL(e, t).href;
          })(r, n);
          const o =
            ((s = r),
            import.meta.resolve ? new URL(import.meta.resolve(s)) : new URL(s, import.meta.url));
          var s;
          const l = o.pathname.endsWith(".css");
          return (function (e, t, r) {
            if (t in e) return e[t];
            const n = r();
            if (!n) return void (e[t] = void 0);
            const o = n.then(
              () => {
                e[t] = void 0;
              },
              (r) => {
                throw ((e[t] = void 0), r);
              },
            );
            return ((e[t] = o), o);
          })(e, o.href, () => {
            if (void 0 === t) {
              t = { all: new Set(), styles: new Set() };
              const e = document.getElementsByTagName("link");
              for (let r = e.length - 1; r >= 0; r--) {
                const n = e[r];
                (t.all.add(n.href), "stylesheet" === n.rel && t.styles.add(n.href));
              }
            }
            if ((l ? t.styles : t.all).has(o.href)) return;
            const e = document.createElement("link");
            return (
              (e.rel = l ? "stylesheet" : "modulepreload"),
              l || (e.as = "script"),
              (e.crossOrigin = ""),
              (e.href = o.href),
              a && e.setAttribute("nonce", a),
              document.head.appendChild(e),
              l
                ? new Promise((t, r) => {
                    (e.addEventListener("load", t),
                      e.addEventListener("error", () =>
                        r(new Error(`Unable to preload CSS for ${o}`)),
                      ));
                  })
                : void 0
            );
          });
        })
        .filter((e) => void 0 !== e)),
        (o = Promise.all(
          s.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: "fulfilled", value: e }),
              (e) => ({ status: "rejected", reason: e }),
            ),
          ),
        )));
    }
    var s;
    function l(e) {
      const t = new Event("vite:preloadError", { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
    }
    return o.then((e) => {
      for (const t of e || []) "rejected" === t.status && l(t.reason);
      return t().catch(l);
    });
  };
export { t };
