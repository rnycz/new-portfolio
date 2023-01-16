describe("Contact test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/contact");
  });
  it("Open GitHub", () => {
    cy.get("[data-cy='github']")
      .should("be.visible")
      .then((a: JQuery<HTMLElement>) => {
        expect(a).to.have.attr("target", "_blank");
      })
      .invoke("removeAttr", "target")
      .click();
    cy.origin("https://github.com", () => {
      cy.url().should("include", "/rnycz");
    });
  });
  it("Copy mail to clipboard", () => {
    cy.get("svg.contact-icons").realClick();
    cy.get("[data-cy='copy-done']").should("be.visible");
    cy.window().then((win: Cypress.AUTWindow) => {
      win.navigator.clipboard.readText().then((text: string) => {
        expect(text).to.eq("radeknycz98@gmail.com");
      });
    });

    cy.window().then((win: Cypress.AUTWindow) => {
      win.navigator.clipboard.writeText("");
    });

    cy.get("svg.contact-copy").realClick();
    cy.get("[data-cy='copy-done']").should("be.visible");
    cy.window().then((win: Cypress.AUTWindow) => {
      win.navigator.clipboard.readText().then((text: string) => {
        expect(text).to.eq("radeknycz98@gmail.com");
      });
    });
  });
});
