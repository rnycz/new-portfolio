describe("About me test", () => {
  it("Check request to resume", () => {
    cy.visit("https://radeknycz.netlify.app/about-me");
    cy.get(".resume a").each((a: JQuery<HTMLElement>) => {
      const href: any = a.attr("href");
      cy.log(href);
      cy.request(a.prop("href"));
      expect(href).to.include("Radosław_Nycz");
    });
  });
});
