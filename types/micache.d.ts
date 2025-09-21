declare module "micache" {
  interface FsCache {
    get(key: string): Promise<string | null>;
    set(key: string, value: string): Promise<void>;
    clear?(): Promise<void>;
    delete?(key: string): Promise<boolean>;
  }

  export function createFsCache(name: string): Promise<FsCache>;
}
