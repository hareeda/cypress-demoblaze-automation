import locators from "../locators";

class CheckoutPage {
  openCheckoutModal() {
    cy.get(locators.checkoutPage.checkoutModalButton).should("be.visible").click();
    cy.get(locators.checkoutPage.checkoutModal).should("be.visible");
  }

  fillCheckoutDetails(name, country, city, card, month, year) {
    cy.get(locators.checkoutPage.nameInput).should("be.visible").type(name);
    cy.get(locators.checkoutPage.countryInput).should("be.visible").type(country);
    cy.get(locators.checkoutPage.cityInput).should("be.visible").type(city);
    cy.get(locators.checkoutPage.creditCardInput).should("be.visible").type(card);
    cy.get(locators.checkoutPage.monthInput).should("be.visible").type(month);
    cy.get(locators.checkoutPage.yearInput).should("be.visible").type(year);
  }

  submitOrder() {
    cy.get(locators.checkoutPage.purchaseButton).should("be.visible").click();
  }

  verifyOrderSuccess() {
    cy.get(locators.checkoutPage.successMessage)
      .should("be.visible")
      .contains("Thank you for your purchase!");
  }
}

export default new CheckoutPage();
