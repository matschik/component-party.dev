export default function createLocaleStorage<T = unknown>(k: string, defaultValue: T) {
  function get(): string | null {
    if (typeof localStorage === "undefined") return null;
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
          console.error("Failed to parse localStorage value:", {
            key: k,
            value,
            error: err,
          });
          return defaultValue;
        }
      }
      return defaultValue;
    },
    setJSON(o: T) {
      this.set(JSON.stringify(o));
    },
    set(v: string) {
      if (typeof localStorage === "undefined") return;
      localStorage.setItem(k, v);
    },
    remove() {
      if (typeof localStorage === "undefined") return;
      localStorage.removeItem(k);
    },
  };
}
