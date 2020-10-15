// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should operations update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get ('#operator_add').click();
    cy.get('#number4').click();
    cy.get ('#operator_equals').click();
    cy.get('.display').should('contain', '6');
  })
  it('should be able to have mupltiple operations chained together', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator_subtract').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
  })
  it('should be able to display correct ouput for a range of numbers', () => {
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number6').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '8.685975609756097')
  })
  it('should display error when user divides by zero', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Error')
  })
})
