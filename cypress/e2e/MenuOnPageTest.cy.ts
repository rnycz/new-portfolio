describe("Menu On Page test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/work");
  });
  it("Show/hide menu", () => {
    cy.get("header .hamburger-react").click();
    cy.get("[data-cy='menu-page'] ul").should("be.visible");
    cy.get("header .hamburger-react").click();
    cy.get("[data-cy='menu-page'] ul").should("be.not.visible");
  });
  it("Click menu element", () => {
    const pages: string[] = ["about-me", "contact", "skills", "work"];
    cy.get("[data-cy='menu-page'] ul a").each((el: JQuery<HTMLElement>) => {
      const href: any = el.attr("href");
      cy.log(href);
    });
    pages.forEach((page: string) => {
      cy.get("header .hamburger-react").click();
      cy.get("[data-cy='menu-page'] ul").should("be.visible");
      cy.get(`[data-cy='menu-page'] a[href="/${page}"] li button`).click();
      cy.url().should("include", `/${page}`);
    });
    cy.get("header .hamburger-react").click();
    cy.get("[data-cy='menu-page'] ul").should("be.visible");
    cy.get(`[data-cy='menu-page'] a[href="/"]`).click();
    cy.url().should("include", `/`);
  });
});
