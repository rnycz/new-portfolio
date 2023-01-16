describe("About me test", () => {
  it("Check request to resume", () => {
    cy.visit("http://localhost:3000/about-me");
    cy.get("[data-cy='resume'] a").each((a: JQuery<HTMLElement>) => {
      const href: any = a.attr("href");
      cy.log(href);
      cy.request(a.prop("href"));
      expect(href).to.include("Radosław_Nycz");
    });
  });
});
