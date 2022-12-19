describe("Header test", () => {
  beforeEach(() => {
    cy.visit("https://radeknycz.netlify.app/");
  });
  it("Change language", () => {
    if (localStorage.getItem("language") === null) {
      cy.get(".language-switch").contains("EN");
      cy.get(".language-switch").click();
      cy.get(".language-switch").contains("PL");
    } else {
      cy.get(".language-switch").click();
    }
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
  it("Mail button", () => {
    cy.get("a[href*='mailto:']").each((mail: JQuery<HTMLElement>) => {
      cy.request(mail.prop("href"));
    });
  });
});
