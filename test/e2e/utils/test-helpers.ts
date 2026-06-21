import { type Page, expect } from "@playwright/test";

export class TestHelpers {
  constructor(private page: Page) {}

  async clearFrameworkSelection() {
    await this.page.evaluate(() => {
      localStorage.removeItem("framework_display");
    });
    await this.page.reload();
  }

  async waitForFrameworksToLoad(timeout = 10_000) {
    await this.page.waitForSelector('[data-testid="framework-selection-bar"]', {
      timeout,
    });
  }

  async waitForContentToLoad(timeout = 10_000) {
    await this.page.waitForSelector('[data-testid^="snippet-"]', { timeout });
  }

  async getSelectedFrameworks(): Promise<string[]> {
    const selectedFrameworks = await this.page.getAttribute(
      "[data-framework-id-selected-list]",
      "data-framework-id-selected-list",
    );
    return selectedFrameworks ? selectedFrameworks.split(",") : [];
  }

  async selectFramework(frameworkId: string) {
    const button = this.page.getByTestId(`framework-button-${frameworkId}`);
    await expect(button).toBeVisible();
    // Use dispatchEvent to fire the click without blocking on SvelteKit's goto() call.
    // After the click, wait for Svelte to update the DOM attribute before proceeding.
    await button.dispatchEvent("click");
    await this.page.waitForFunction(
      (id) => {
        const el = document.querySelector("[data-framework-id-selected-list]");
        return el?.getAttribute("data-framework-id-selected-list")?.includes(id) ?? false;
      },
      frameworkId,
      { timeout: 5_000 },
    );
  }

  async deselectFramework(frameworkId: string) {
    const button = this.page.getByTestId(`framework-button-${frameworkId}`);
    await expect(button).toBeVisible();
    await button.dispatchEvent("click");
    await this.page.waitForFunction(
      (id) => {
        const el = document.querySelector("[data-framework-id-selected-list]");
        const selected = el?.getAttribute("data-framework-id-selected-list") ?? "";
        return !selected.split(",").filter(Boolean).includes(id);
      },
      frameworkId,
      { timeout: 5_000 },
    );
  }

  async toggleFramework(frameworkId: string) {
    const button = this.page.getByTestId(`framework-button-${frameworkId}`);
    await expect(button).toBeVisible();
    await button.dispatchEvent("click");
  }

  async selectFrameworks(frameworkIds: string[]) {
    for (const frameworkId of frameworkIds) {
      await this.selectFramework(frameworkId);
    }
  }

  async deselectFrameworks(frameworkIds: string[]) {
    for (const frameworkId of frameworkIds) {
      await this.deselectFramework(frameworkId);
    }
  }

  async deselectAllFrameworks() {
    const selectedFrameworks = await this.getSelectedFrameworks();
    await this.deselectFrameworks(selectedFrameworks);
  }

  async getFrameworkButton(frameworkId: string) {
    return this.page.getByTestId(`framework-button-${frameworkId}`);
  }

  async getCodeEditors() {
    return this.page.getByTestId(/code-editor-/);
  }

  async getSnippetContainers() {
    return this.page.getByTestId(/snippet-/);
  }

  async mockFrameworkLoadingFailure(frameworkId: string) {
    // Built snippet chunks are emitted as /assets/<frameworkId>-<hash>.js.
    await this.page.route(`**/${frameworkId}-*.js`, (route) => {
      route.abort("failed");
    });
  }
}
