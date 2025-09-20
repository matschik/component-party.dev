export default function createLocaleStorage<T = unknown>(
  k: string,
  defaultValue: T,
) {
  function get(): string | null {
    return localStorage.getItem(k);
  }

  return {
    get,
    getJSON(): T {
      const value = get();
      if (value) {
        try {
          return JSON.parse(value) as T;
        } catch (err) {
          console.error({ getJSONErr: err });
          return defaultValue;
        }
      }
      return defaultValue;
    },
    setJSON(o: T) {
      this.set(JSON.stringify(o));
    },
    set(v: string) {
      localStorage.setItem(k, v);
    },
    remove() {
      localStorage.removeItem(k);
    },
  };
}
