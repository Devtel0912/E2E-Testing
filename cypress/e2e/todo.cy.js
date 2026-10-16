
describe('Todo Application E2E Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080/todo.html');
  });

  it('displays the empty Todo list', () => {
    cy.get('[data-testid="task-count"]')
      .should('have.text', '0');

    cy.get('[data-testid="todo-list"]')
      .should('be.empty');
  });

  it('adds a new task', () => {
    cy.get('[data-testid="todo-input"]')
      .type('Learn Cypress');

    cy.contains('button', 'Add Task').click();

    cy.get('[data-testid="todo-list"]')
      .should('contain.text', 'Learn Cypress');

    cy.get('[data-testid="task-count"]')
      .should('have.text', '1');

    cy.get('[data-testid="todo-input"]')
      .should('have.value', '');
  });

  it('marks a task as completed', () => {
    cy.get('[data-testid="todo-input"]')
      .type('Practice JavaScript');

    cy.contains('button', 'Add Task').click();

    cy.get('[data-testid="todo-list"] li')
      .should('have.length', 1)
      .find('input[type="checkbox"]')
      .check();

    cy.get('[data-testid="todo-list"] li')
      .should('have.class', 'completed');
  });

  it('deletes a task', () => {
    cy.get('[data-testid="todo-input"]')
      .type('Delete this task');

    cy.contains('button', 'Add Task').click();

    cy.contains('li', 'Delete this task')
      .contains('button', 'Delete')
      .click();

    cy.get('[data-testid="todo-list"] li')
      .should('have.length', 0);

    cy.get('[data-testid="task-count"]')
      .should('have.text', '0');
  });

});
