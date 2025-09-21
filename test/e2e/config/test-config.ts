export const testConfig = {
  timeouts: {
    default: 10_000,
    contentLoad: 15000,
  },

  frameworks: {
    default: ["react", "svelte5"],
    test: ["react", "vue3", "svelte5"],
  },

  performance: {
    maxLoadTime: 10_000,
  },
};

export const testSelectors = {
  // Core selectors only
  frameworkSelectionBar: '[data-testid="framework-selection-bar"]',
  frameworkButton: (id: string) => `[data-testid="framework-button-${id}"]`,
  emptyState: '[data-testid="empty-state"]',
  snippet: (id: string) => `[data-testid="snippet-${id}"]`,
  codeEditor: (frameworkId: string, snippetId: string) =>
    `[data-testid="code-editor-${frameworkId}-${snippetId}"]`,
};

export const testData = {
  // Only essential test data
  frameworks: ["react", "vue3", "svelte5"],
  sections: ["Reactivity", "Templating", "Component Composition"],
};
