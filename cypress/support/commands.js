import locators from "./locators";

Cypress.Commands.add("addToCart", (productName) => {
  cy.contains(productName).click();
  cy.get(locators.cartPage.addToCartButton).click();
  cy.on(locators.cartPage.successAlert, (str) => {
    expect(str).to.contains("Product added");
  });
});

Cypress.Commands.add("login", (username, password) => {
  cy.get(locators.loginPage.loginButton).should("be.visible").click();
  cy.get(locators.loginPage.loginModal).should("be.visible");

  cy.get(locators.loginPage.usernameInput).should("be.visible").clear().type(username);
  cy.get(locators.loginPage.passwordInput).should("be.visible").clear().type(password);

  cy.get(locators.loginPage.submitButton).should("be.visible").click();
});

Cypress.Commands.add("signup", (username, password) => {
  cy.get(locators.signupPage.signupButton).should("be.visible").click();
  cy.get(locators.signupPage.signupModal).should("be.visible");

  cy.get(locators.signupPage.usernameInput).should("be.visible").clear().type(username);
  cy.get(locators.signupPage.passwordInput).should("be.visible").clear().type(password);

  cy.get(locators.signupPage.submitButton).click();
});

Cypress.Commands.add("sendContactMessage", (email, name, message) => {
  cy.get(locators.contactPage.contactButton).should("be.visible").click();
  cy.get(locators.contactPage.contactModal).should("be.visible");

  cy.get(locators.contactPage.contactEmail).should("be.visible").type(email);
  cy.get(locators.contactPage.contactName).should("be.visible").type(name);
  cy.get(locators.contactPage.contactMessage).should("be.visible").type(message);

  cy.get(locators.contactPage.sendMessageButton).click();
});