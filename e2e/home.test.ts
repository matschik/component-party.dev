import { expect, test } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display the main header and navigation", async ({ page }) => {
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Component Party" }),
    ).toBeVisible();
  });

  test("should show framework selection prompt when no frameworks are selected", async ({
    page,
  }) => {
    // Clear any selected frameworks and prevent default initialization
    await page.evaluate(() => {
      localStorage.removeItem("framework_display");
      localStorage.setItem("framework_display_initialized", "true");
    });
    await page.reload();

    await expect(page.getByTestId("empty-state")).toBeVisible();
    await expect(page.getByTestId("empty-state-message")).toContainText(
      "Please select a framework",
    );
  });

  test("should display default frameworks on first visit", async ({ page }) => {
    // Clear localStorage to simulate first visit
    await page.evaluate(() => {
      localStorage.removeItem("framework_display");
      localStorage.removeItem("framework_display_initialized");
    });
    await page.reload();

    // Wait for frameworks to load
    await page.waitForSelector('[data-testid="framework-selection-bar"]');

    // Wait for frameworks to be actually selected
    await page.waitForFunction(
      () => {
        const element = document.querySelector(
          "[data-framework-id-selected-list]",
        );
        return (
          element &&
          element
            .getAttribute("data-framework-id-selected-list")
            ?.includes("react")
        );
      },
      { timeout: 10000 },
    );

    const selectedFrameworks = await page.getAttribute(
      "[data-framework-id-selected-list]",
      "data-framework-id-selected-list",
    );
    expect(selectedFrameworks).toContain("react");
    expect(selectedFrameworks).toContain("svelte5");
  });

  test("should allow toggling framework selection", async ({ page }) => {
    // Wait for frameworks to load
    await page.waitForSelector('[data-testid="framework-selection-bar"]');

    // Find React framework button using test ID
    const reactButton = page.getByTestId("framework-button-react");
    await expect(reactButton).toBeVisible();

    // Click to deselect React
    await reactButton.click();

    // Wait for the selection to update
    await page.waitForTimeout(500);

    // Verify React is no longer selected
    const selectedFrameworks = await page.getAttribute(
      "[data-framework-id-selected-list]",
      "data-framework-id-selected-list",
    );
    expect(selectedFrameworks).not.toContain("react");

    // Click again to reselect React
    await reactButton.click();

    // Wait for the selection to update
    await page.waitForTimeout(500);

    // Verify React is selected again
    const selectedFrameworksAfter = await page.getAttribute(
      "[data-framework-id-selected-list]",
      "data-framework-id-selected-list",
    );
    expect(selectedFrameworksAfter).toContain("react");
  });

  test("should display content sections when frameworks are selected", async ({
    page,
  }) => {
    // Wait for frameworks to be selected
    await page.waitForSelector("[data-framework-id-selected-list]", {
      timeout: 10_000,
    });

    // Wait for content to load
    await page.waitForSelector('[data-testid^="snippet-"]', {
      timeout: 10_000,
    });

    // Check that we have content sections
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(7); // 6 main sections + 1 header

    // Check for specific sections using test IDs
    await expect(page.getByTestId("section-reactivity")).toBeVisible();
    await expect(page.getByTestId("section-templating")).toBeVisible();
  });
});
