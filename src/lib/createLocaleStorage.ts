interface LocalStorageAPI {
  get(): string | null;
  getJSON(): unknown;
  setJSON(o: unknown): void;
  set(v: string): void;
  remove(): void;
}

export default function createLocaleStorage(k: string): LocalStorageAPI {
  function get(): string | null {
    return localStorage.getItem(k);
  }

  return {
    get,
    getJSON(): unknown {
      const value = get();
      if (value) {
        try {
          return JSON.parse(value);
        } catch (err) {
          console.error({ getJSONErr: err });
          return undefined;
        }
      }
    },
    setJSON(o: unknown): void {
      this.set(JSON.stringify(o));
    },
    set(v: string): void {
      localStorage.setItem(k, v);
    },
    remove(): void {
      localStorage.removeItem(k);
    },
  };
}
