describe("Header test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Change language", () => {
    if (localStorage.getItem("language") === null) {
      cy.get("[data-cy='language-switch']").contains("EN");
      cy.get("[data-cy='language-switch']").click();
      cy.get("[data-cy='language-switch']").contains("PL");
    } else {
      cy.get("[data-cy='language-switch']").click();
    }
  });
  it("Open GitHub", () => {
    cy.get("[data-cy='header-icons'] a[href='https://github.com/rnycz']")
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
  it("Mail button", () => {
    cy.get("a[href*='mailto:']").each((mail: JQuery<HTMLElement>) => {
      cy.request(mail.prop("href"));
    });
  });
});
