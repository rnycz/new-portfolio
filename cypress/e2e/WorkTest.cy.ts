describe("Work test", () => {
  beforeEach(() => {
    cy.visit("https://radeknycz.netlify.app/work");
  });
  it("Show project image", () => {
    cy.get(".projects li").each((el: JQuery<HTMLElement>, index: number) => {
      cy.get(`.projects li:nth-child(${index + 1})`).trigger("mouseover");
      //cy.wait(700);
      cy.get(`.images div:nth-child(${index + 1})`).should("be.visible");
    });
  });
  it("Open GitHub by clicking on the project", () => {
    const pages: string[] = [
      "kanban-board",
      "kanban-board-api",
      "weather-extension",
      "chat-app",
      "image-editor",
      "crud-todo",
      "guess-the-word",
      "pizzeron-website",
    ];
    cy.get(".projects li a").each((el: JQuery<HTMLElement>) => {
      const href: any = el.attr("href");
      expect(href).to.include("https://github.com/rnycz/");
      cy.log(href);
    });
    pages.forEach((page: string) => {
      cy.get(`.projects li a[href="https://github.com/rnycz/${page}"]`)
        .invoke("removeAttr", "target")
        .click();
      cy.origin("https://github.com", () => {
        cy.url().should("include", "/rnycz/");
        cy.go("back");
      });
    });
  });
});
