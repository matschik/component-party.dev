import { expect, test, type Locator, type Page } from "@playwright/test";

async function firstEditorWithMultipleFiles(page: Page): Promise<Locator> {
  const editors = page.getByTestId(/code-editor-/);
  for (let index = 0; index < (await editors.count()); index += 1) {
    const editor = editors.nth(index);
    if ((await editor.getByTestId("code-file-tab").count()) > 1) return editor;
  }

  throw new Error("Expected a code editor with multiple files");
}

test.describe("Code snippet copy feedback", () => {
  test("copies the selected file and reports success after selecting another tab", async ({
    page,
  }) => {
    await page.goto("/");
    const editor = await firstEditorWithMultipleFiles(page);
    const tabs = editor.getByTestId("code-file-tab");

    await tabs.nth(1).click();
    await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true");

    const expectedSource = await editor.getByTestId("code-content").innerText();
    await page.evaluate(() => {
      const browserWindow = window as Window & { copiedSource?: string };
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText: async (value: string) => (browserWindow.copiedSource = value) },
      });
    });

    const copyButton = editor.getByTestId("copy-code");
    await editor.getByTestId("code-content").hover();
    await copyButton.click();

    await expect(copyButton).toHaveAccessibleName("Copied");
    await expect(editor.getByRole("status")).toHaveText("Copied");
    await expect
      .poll(() => page.evaluate(() => (window as Window & { copiedSource?: string }).copiedSource))
      .toBe(expectedSource);
    await expect(copyButton).toHaveAccessibleName("Copy to clipboard", { timeout: 3_000 });
  });

  test("reports a failure when clipboard and fallback copying both fail", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => {
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText: async () => Promise.reject(new Error("denied")) },
      });
      document.execCommand = () => false;
    });

    const editor = page.getByTestId(/code-editor-/).first();
    const copyButton = editor.getByTestId("copy-code");
    await editor.getByTestId("code-content").hover();
    await copyButton.click();

    await expect(copyButton).toHaveAccessibleName("Copy failed");
    await expect(editor.getByRole("status")).toHaveText("Copy failed");
  });
});
