import { expect, test, type Page } from "@playwright/test";
import { TestHelpers } from "./utils/test-helpers";

async function expectFooterBelowViewport(page: Page) {
  const footer = page.locator("footer");
  await expect(footer).toBeVisible();
  const { top, viewportHeight } = await footer.evaluate((element) => ({
    top: element.getBoundingClientRect().top,
    viewportHeight: window.innerHeight,
  }));
  expect(top).toBeGreaterThanOrEqual(viewportHeight);
}

for (const viewport of [
  { width: 390, height: 844 },
  { width: 1440, height: 900 },
]) {
  test.describe(`Footer at ${viewport.width}x${viewport.height}`, () => {
    test.use({ viewport });

    test("should start below the first screen on the homepage", async ({ page }) => {
      await page.goto("/");
      await new TestHelpers(page).waitForContentToLoad();
      await expectFooterBelowViewport(page);
    });

    test("should start below the first screen with no frameworks selected", async ({ page }) => {
      await page.goto("/");
      await new TestHelpers(page).deselectAllFrameworks();
      await expect(page.getByTestId("empty-state")).toBeVisible();
      await expectFooterBelowViewport(page);
    });

    test("should start below the first screen on the 404 page", async ({ page }) => {
      await page.goto("/missing-footer-test-page/");
      await expect(page.getByTestId("error-status")).toHaveText("404");
      await expectFooterBelowViewport(page);
    });
  });
}
