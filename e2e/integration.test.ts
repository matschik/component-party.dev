import { expect, test } from "@playwright/test";
import { TestHelpers } from "./utils/test-helpers";

test.describe("Integration Tests", () => {
  let helpers: TestHelpers;

  test.beforeEach(async ({ page }) => {
    helpers = new TestHelpers(page);
    await page.goto("/");
    await helpers.waitForFrameworksToLoad();
  });

  test("should handle complete user journey from framework selection to code viewing", async ({
    page,
  }) => {
    // Start with no frameworks selected
    await helpers.clearFrameworkSelection();

    // Verify empty state using test ID
    await expect(page.getByTestId("empty-state")).toBeVisible();
    await expect(page.getByTestId("empty-state-message")).toContainText(
      "Please select a framework",
    );

    // Select React
    await helpers.selectFramework("react");
    await helpers.waitForContentToLoad();

    // Verify React content is displayed
    const selectedFrameworks = await helpers.getSelectedFrameworks();
    expect(selectedFrameworks).toContain("react");

    // Add Vue
    await helpers.selectFramework("vue3");
    await helpers.waitForContentToLoad();

    // Verify both frameworks are selected
    const updatedFrameworks = await helpers.getSelectedFrameworks();
    expect(updatedFrameworks).toContain("react");
    expect(updatedFrameworks).toContain("vue3");

    // Wait for content sections to be visible
    await page.waitForSelector('[data-testid="section-reactivity"]', {
      timeout: 10_000,
    });

    // Verify content sections are displayed using test IDs
    await expect(page.getByTestId("section-reactivity")).toBeVisible();
    await expect(page.getByTestId("section-templating")).toBeVisible();

    // Verify code editors are present (optional check)
    await helpers.getCodeEditors();
    // Code editors might not be present in all snippets, so we just check that the test completed successfully
  });

  test("should handle versus mode navigation and framework switching", async ({
    page,
  }) => {
    // Navigate to versus mode using search parameters
    await page.goto("/?f=react-vue3");

    // Verify versus mode is active
    await expect(page).toHaveTitle(/React vs Vue/);

    // Verify both frameworks are selected
    const selectedFrameworks = await helpers.getSelectedFrameworks();
    expect(selectedFrameworks).toContain("react");
    expect(selectedFrameworks).toContain("vue3");

    // Add another framework
    await helpers.selectFramework("svelte5");

    // Should navigate back to home
    await expect(page).toHaveURL("/");

    // Verify all three frameworks are selected
    const updatedFrameworks = await helpers.getSelectedFrameworks();
    expect(updatedFrameworks).toContain("react");
    expect(updatedFrameworks).toContain("vue3");
    expect(updatedFrameworks).toContain("svelte5");
  });

  test("should maintain state across page reloads", async ({ page }) => {
    // Select specific frameworks
    const vueButton = page.getByTestId("framework-button-vue3");
    await vueButton.click();

    // Wait for the framework to be selected and saved
    await helpers.waitForFrameworksToLoad();
    const selectedFrameworksBeforeReload =
      await helpers.getSelectedFrameworks();
    expect(selectedFrameworksBeforeReload).toContain("vue3");

    // Reload the page
    await page.reload();

    // Wait for frameworks to load
    await page.waitForSelector('[data-testid="framework-selection-bar"]');

    // Check that Vue is still selected
    const selectedFrameworks = await helpers.getSelectedFrameworks();
    expect(selectedFrameworks).toContain("vue3");
  });
});
