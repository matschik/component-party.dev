import { expect, test } from "@playwright/test";
import { TestHelpers } from "./utils/test-helpers";

test.describe("Homepage", () => {
  let testHelpers: TestHelpers;

  test.beforeEach(async ({ page }) => {
    testHelpers = new TestHelpers(page);
    await page.goto("/");
  });

  test("should display the main header and navigation", async ({ page }) => {
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Component Party" })).toBeVisible();
  });

  test("should display default frameworks on first visit", async () => {
    // Clear localStorage to simulate first visit
    await testHelpers.clearFrameworkSelection();

    // Wait for frameworks to load
    await testHelpers.waitForFrameworksToLoad();

    const selectedFrameworks = await testHelpers.getSelectedFrameworks();
    expect(selectedFrameworks).toContain("react");
    expect(selectedFrameworks).toContain("svelte5");
  });

  test("should allow toggling framework selection via URL params", async ({ page }) => {
    // Navigate to home with only svelte5 (react deselected)
    await page.goto("/?f=svelte5");
    await testHelpers.waitForFrameworksToLoad();

    // Verify React is not selected
    const selectedWithoutReact = await testHelpers.getSelectedFrameworks();
    expect(selectedWithoutReact).not.toContain("react");
    expect(selectedWithoutReact).toContain("svelte5");

    // Navigate to home with both frameworks (react re-selected)
    await page.goto("/?f=react,svelte5");
    await testHelpers.waitForFrameworksToLoad();

    // Verify React is selected again
    const selectedWithReact = await testHelpers.getSelectedFrameworks();
    expect(selectedWithReact).toContain("react");
    expect(selectedWithReact).toContain("svelte5");
  });

  test("should show framework selection prompt when no frameworks are selected", async ({
    page,
  }) => {
    // Navigate with empty framework param to show no-selection state
    await page.goto("/");
    await testHelpers.waitForFrameworksToLoad();
    await testHelpers.deselectAllFrameworks();

    await expect(page.getByTestId("empty-state")).toBeVisible();
    await expect(page.getByTestId("empty-state-message")).toContainText(
      "Please select a framework",
    );
  });

  test("should display content sections when frameworks are selected", async ({ page }) => {
    // Wait for frameworks to be selected
    await testHelpers.waitForFrameworksToLoad();

    // Wait for content to load
    await testHelpers.waitForContentToLoad();

    // Check that we have content sections
    await expect(page.getByTestId(/^section-/)).toHaveCount(6); // 6 sections

    // Check for specific sections using test IDs
    await expect(page.getByTestId("section-reactivity")).toBeVisible();
    await expect(page.getByTestId("section-templating")).toBeVisible();
  });
});
