import locators from "../locators";

class CartPage {
  openCart() {
    cy.get(locators.cartPage.cartButton).click();
  }

  verifyProductInCart(productName) {
    cy.get(locators.cartPage.cartTable).should("contain", productName);
  }

  increaseQuantity(productName, quantity) {
    cy.get(locators.cartPage.cartTable)
      .contains(productName)
      .parent()
      .find(locators.cartPage.quantityInput)
      .clear()
      .type(quantity);
  }

  verifyQuantity(productName, expectedQuantity) {
    cy.get(locators.cartPage.cartTable)
      .contains(productName)
      .parent()
      .find(locators.cartPage.quantityInput)
      .should("have.value", expectedQuantity);
  }

  removeProduct(productName) {
    cy.get(locators.cartPage.cartTable)
      .contains(productName)
      .parent()
      .find(locators.cartPage.removeButton)
      .click();
  }

  verifyProductRemoved(productName) {
    cy.get(locators.cartPage.cartTable).should("not.contain", productName);
  }

  clickPlaceOrder() {
    cy.get(locators.cartPage.placeOrderButton).should("be.visible").click();
  }
}

export default new CartPage();
