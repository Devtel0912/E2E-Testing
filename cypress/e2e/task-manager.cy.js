describe("Task Manager E2E Tests", () => {
  it("loads the application successfully", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Task Manager").should("be.visible");
  });
});