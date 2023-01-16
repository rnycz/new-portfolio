describe("Menu test", () => {
  it("Click menu element", () => {
    const pages: string[] = ["about-me", "contact", "work", "skills"];
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy='menu'] a").each((el: JQuery<HTMLElement>) => {
      const href: any = el.attr("href");
      cy.log(href);
    });
    pages.forEach((page: string) => {
      cy.get(".hamburger-react").click();
      cy.get("[data-cy='menu']").should("have.class", "active");
      cy.get(`[data-cy='menu'] a[href="/${page}"] li button`).click();
      cy.url().should("include", `/${page}`);
      cy.go("back");
      cy.get(".hamburger-react").click();
    });
  });
});
