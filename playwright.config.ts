import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    command: "pnpm run build && pnpm run preview --port 4144",
    port: 4144,
  },
  testDir: "e2e",
});
