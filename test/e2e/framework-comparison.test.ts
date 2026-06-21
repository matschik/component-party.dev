import { expect, test } from "@playwright/test";

test.describe("Framework Comparison", () => {
  test("should display versus mode for a comparison URL", async ({ page }) => {
    await page.goto("/compare/react-vs-vue3/");

    await expect(page).toHaveTitle(/React vs Vue/);

    const selected = await page.getAttribute(
      "[data-framework-id-selected-list]",
      "data-framework-id-selected-list",
    );
    expect(selected).toContain("react");
    expect(selected).toContain("vue3");
  });

  test("should allow switching frameworks in versus mode", async ({ page }) => {
    await page.goto("/compare/react-vs-vue3/");

    // Add another framework using test ID
    const svelteButton = page.getByTestId("framework-button-svelte5");
    await expect(svelteButton).toBeVisible();
    // dispatchEvent bypasses Playwright's navigation wait that hangs on SvelteKit goto()
    await svelteButton.dispatchEvent("click");

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
    await page.goto("/");
    await page.waitForSelector('[data-testid="framework-selection-bar"]');

    // Select Vue in addition to the default React + Svelte 5
    const vueButton = page.getByTestId("framework-button-vue3");
    await expect(vueButton).toBeVisible();
    await vueButton.dispatchEvent("click");

    // Wait for content to load
    await expect(page.locator('[data-testid^="snippet-"]').first()).toBeVisible({
      timeout: 10_000,
    });

    // Check that we have multiple framework columns in the first snippet
    const firstSnippet = page.locator('[data-testid^="snippet-"]').first();
    const frameworkColumns = firstSnippet.locator('[data-testid^="framework-snippet-"]');
    await expect(frameworkColumns).toHaveCount(3); // React, Svelte 5, Vue 3
  });

  test("should handle framework loading errors gracefully", async ({ page }) => {
    // Navigate and wait for initial page load to finish so we know which chunks
    // are already resident and which would be lazy-loaded for a new framework.
    await page.goto("/");
    await page.waitForSelector('[data-testid="framework-selection-bar"]');
    await page.waitForLoadState("networkidle");

    // Any JS chunk requested AFTER networkidle will be a lazy-loaded framework chunk.
    // Abort them to simulate a network failure for the angular snippets.
    await page.route("**/_app/immutable/chunks/*.js", (route) => {
      route.abort("failed");
    });

    // Add Angular — its snippet chunk will be requested and aborted.
    const angularButton = page.getByTestId("framework-button-angular");
    await expect(angularButton).toBeVisible();
    await angularButton.dispatchEvent("click");

    // The error state must surface for at least one Angular snippet.
    const errorSnippets = page.locator('[data-testid^="error-snippet-angular"]');
    await expect(errorSnippets.first()).toBeVisible({ timeout: 10_000 });
  });
});
