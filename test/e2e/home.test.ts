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
    await expect(
      page.getByRole("heading", { name: "Component Party" }),
    ).toBeVisible();
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

  test("should allow toggling framework selection", async () => {
    // Wait for frameworks to load
    await testHelpers.waitForFrameworksToLoad();

    // Deselect React
    await testHelpers.deselectFramework("react");

    // Verify React is no longer selected
    const selectedFrameworks = await testHelpers.getSelectedFrameworks();
    expect(selectedFrameworks).not.toContain("react");

    // Reselect React
    await testHelpers.selectFramework("react");

    // Wait for the selection to update
    await testHelpers.waitForFrameworksToLoad();

    // Verify React is selected again
    const selectedFrameworksAfter = await testHelpers.getSelectedFrameworks();
    expect(selectedFrameworksAfter).toContain("react");
  });

  test("should show framework selection prompt when no frameworks are selected", async ({
    page,
  }) => {
    // Clear localStorage to simulate first visit
    await testHelpers.clearFrameworkSelection();

    await testHelpers.waitForFrameworksToLoad();

    // Deselect all frameworks
    await testHelpers.deselectAllFrameworks();

    await expect(page.getByTestId("empty-state")).toBeVisible();
    await expect(page.getByTestId("empty-state-message")).toContainText(
      "Please select a framework",
    );
  });

  test("should display content sections when frameworks are selected", async ({
    page,
  }) => {
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
