describe("Contact test", () => {
  beforeEach(() => {
    cy.visit("https://radeknycz.netlify.app/contact");
  });
  it("Open GitHub", () => {
    cy.get(".header-icons a[href='https://github.com/rnycz']")
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
    cy.get(".contact div svg.contact-icons").realClick();
    cy.get(".copy-done").should("be.visible");
    cy.window().then((win: Cypress.AUTWindow) => {
      win.navigator.clipboard.readText().then((text: string) => {
        expect(text).to.eq("radeknycz98@gmail.com");
      });
    });

    cy.window().then((win: Cypress.AUTWindow) => {
      win.navigator.clipboard.writeText("");
    });

    cy.get(".contact div svg.contact-copy").realClick();
    cy.get(".copy-done").should("be.visible");
    cy.window().then((win: Cypress.AUTWindow) => {
      win.navigator.clipboard.readText().then((text: string) => {
        expect(text).to.eq("radeknycz98@gmail.com");
      });
    });
  });
});
