import { expect, test } from "@playwright/test";

test.describe("Framework Comparison", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Wait for frameworks to load
    await page.waitForSelector('[data-testid="framework-selection-bar"]');
  });

  test("should display versus mode for framework comparison URLs", async ({ page }) => {
    // Navigate to a versus URL using search parameters
    await page.goto("/?f=react-vue3");

    // Check that the page title includes both frameworks
    await expect(page).toHaveTitle(/React vs Vue/);

    // Check that both frameworks are selected
    const selectedFrameworks = await page.getAttribute(
      "[data-framework-id-selected-list]",
      "data-framework-id-selected-list",
    );
    expect(selectedFrameworks).toContain("react");
    expect(selectedFrameworks).toContain("vue3");
  });

  test("should allow switching frameworks in versus mode", async ({ page }) => {
    // Start in versus mode using search parameters
    await page.goto("/?f=react-vue3");

    // Add another framework using test ID
    const svelteButton = page.getByTestId("framework-button-svelte5");
    await svelteButton.click();

    // Should now have 3 frameworks selected
    const selectedFrameworks = await page.getAttribute(
      "[data-framework-id-selected-list]",
      "data-framework-id-selected-list",
    );
    expect(selectedFrameworks).toContain("react");
    expect(selectedFrameworks).toContain("vue3");
    expect(selectedFrameworks).toContain("svelte5");
  });

  test("should display code snippets for multiple frameworks", async ({ page }) => {
    // Select multiple frameworks using test ID
    const vueButton = page.getByTestId("framework-button-vue3");
    await vueButton.click();

    // Wait for content to load
    await page.waitForSelector('[data-testid^="snippet-"]', {
      timeout: 10_000,
    });

    // Check that we have multiple framework columns in the first snippet
    const firstSnippet = page.locator('[data-testid^="snippet-"]').first();
    const frameworkColumns = firstSnippet.locator('[data-testid^="framework-snippet-"]');
    await expect(frameworkColumns).toHaveCount(3); // React, Svelte 5, Vue 3
  });

  test("should handle framework loading errors gracefully", async ({ page }) => {
    // Block Angular's lazily-imported snippet chunk so its load rejects.
    // Built chunks are emitted as /assets/angular-<hash>.js (the previous
    // **/framework/angular*.js glob never matched, so this test was a no-op).
    await page.route("**/angular-*.js", (route) => {
      route.abort("failed");
    });

    // Add a framework that will fail to load using test ID
    const angularButton = page.getByTestId("framework-button-angular");
    await angularButton.click();

    // The error state must surface for at least one Angular snippet.
    const errorSnippets = page.locator('[data-testid^="error-snippet-angular"]');
    await expect(errorSnippets.first()).toBeVisible({ timeout: 10_000 });
  });
});
