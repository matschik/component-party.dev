import { expect, test } from "@playwright/test";

test("home page has expected header", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("header")).toBeVisible();
});
