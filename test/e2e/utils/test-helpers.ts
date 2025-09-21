import { Page, expect } from "@playwright/test";

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
    await button.click();
  }

  async deselectFramework(frameworkId: string) {
    const button = this.page.getByTestId(`framework-button-${frameworkId}`);
    await expect(button).toBeVisible();
    await button.click();
  }

  async toggleFramework(frameworkId: string) {
    const button = this.page.getByTestId(`framework-button-${frameworkId}`);
    await expect(button).toBeVisible();
    await button.click();
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

  async mockFrameworkLoadingFailure() {
    await this.page.route("**/framework/*.js", (route) => {
      route.abort("failed");
    });
  }
}
