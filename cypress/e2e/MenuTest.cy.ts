describe("Menu test", () => {
  it("Click menu element", () => {
    const pages: string[] = ["about-me", "contact", "work", "skills"];
    cy.visit("https://radeknycz.netlify.app/");
    cy.get(".menu a").each((el: JQuery<HTMLElement>) => {
      const href: any = el.attr("href");
      cy.log(href);
    });
    pages.forEach((page: string) => {
      cy.get(".menu-toggle").click();
      cy.get("ul.menu").should("have.class", "active");
      cy.get(`.menu a[href="/${page}"] li button`).click();
      cy.url().should("include", `/${page}`);
      cy.go("back");
    });
  });
});
