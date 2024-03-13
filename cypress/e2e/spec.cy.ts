/// <reference types="cypress" />
describe("Initial frameworks", () => {
  it("initial frameworks from scratch", () => {
    cy.visit("/");
    cy.get("[data-framework-id-selected-list]").should(
      "have.attr",
      "data-framework-id-selected-list",
      "react,svelte4"
    );
  });

  it("initial frameworks from local storage", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("framework_display", '["vue3","svelte4"]');
      },
    });
    cy.get("[data-framework-id-selected-list]").should(
      "have.attr",
      "data-framework-id-selected-list",
      "vue3,svelte4"
    );
  });

  it("initial frameworks from query param 'f'", () => {
    cy.visit("/?f=react,vue3");
    cy.get("[data-framework-id-selected-list]").should(
      "have.attr",
      "data-framework-id-selected-list",
      "react,vue3"
    );
  });
});

describe("pages", () => {
  it("compare page", () => {
    cy.visit("/compare/vue2-vs-vue3");
    cy.get("[data-framework-id-selected-list]").should(
      "have.attr",
      "data-framework-id-selected-list",
      "vue2,vue3"
    );
  });
});

// describe("sidenav links", () => {
//   it("clicking sidenav links", () => {
//     cy.visit("/?f=react");
//     cy.get("main a[href='#reactivity']").click();
//     cy.get("[data-framework-id-selected-list]").should(
//       "have.attr",
//       "data-framework-id-selected-list",
//       "react"
//     );
//   });
// })
