interface LocalStorageAPI {
  get(): string | null;
  getJSON(): any;
  setJSON(o: any): void;
  set(v: string): void;
  remove(): void;
}

export default function createLocaleStorage(k: string): LocalStorageAPI {
  function get(): string | null {
    return localStorage.getItem(k);
  }

  return {
    get,
    getJSON(): any {
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
    setJSON(o: any): void {
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
