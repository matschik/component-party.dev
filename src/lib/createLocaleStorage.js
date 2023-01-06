export default function createLocaleStorage(k) {
  function get() {
    return localStorage.getItem(k);
  }

  return {
    get,
    getJSON() {
      var value = get();
      if (value) {
        try {
          return JSON.parse(value);
        } catch (err) {
          console.error({ getJSONErr: err });
          return undefined;
        }
      }
    },
    setJSON(o) {
      this.set(JSON.stringify(o));
    },
    set(v) {
      localStorage.setItem(k, v);
    },
    remove() {
      localStorage.removeItem(k);
    },
  };
}
