export class Assertions {
  static expectToDisplayElementContainsValue(locator, value) {
    cy.get(locator)
      .contains(value)
      .should('be.visible');
  };

  static expectElementToHaveText(locator, text) {
    cy.get(locator)
      .contains(text);
  }

  static expectElementAttributeHaveValue(locator, attr, value) {
    cy.get(locator)
      .should('have.attr', attr, value);
  }

  static expectElementToHaveValue(locator, value) {
    cy.get(locator)
      .should('have.value', value);
  }
}