function e(e, t) {
  function r() {
    return "undefined" == typeof localStorage ? null : localStorage.getItem(e);
  }
  return {
    get: r,
    getJSON() {
      const e = r();
      if (e)
        try {
          return JSON.parse(e);
        } catch (o) {
          return t;
        }
      return t;
    },
    setJSON(e) {
      this.set(JSON.stringify(e));
    },
    set(t) {
      "undefined" != typeof localStorage && localStorage.setItem(e, t);
    },
    remove() {
      "undefined" != typeof localStorage && localStorage.removeItem(e);
    },
  };
}
export { e as t };
