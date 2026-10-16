
describe('Cypress E2E Testing Practice', () => {

  it('loads the application homepage', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('h1', 'Kitchen Sink')
      .should('be.visible');
  });

  it('navigates to the Actions page', () => {
    cy.visit('https://example.cypress.io');

    cy.get('a[href="/commands/actions"]')
      .filter(':visible')
      .first()
      .should('be.visible')
      .click();

    cy.location('pathname')
      .should('eq', '/commands/actions');

    cy.contains('h1', 'Actions')
      .should('be.visible');
  });

});