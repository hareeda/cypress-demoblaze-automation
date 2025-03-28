import locators from "../../support/locators";

describe("User Signup Tests", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.fixture("userData.json").as("userData");
    cy.fixture("expData.json").as("expected");
  });

  it("Should sign up successfully with valid credentials", function () {
    cy.get(locators.signupPage.signupButton).should("be.visible").click();
    cy.get(locators.signupPage.signupModal).should("be.visible");

    cy.get(locators.signupPage.usernameInput).should("be.visible").type(this.userData.newUser.username);
    cy.get(locators.signupPage.passwordInput).should("be.visible").type(this.userData.newUser.password);

    cy.get(locators.signupPage.submitButton).click();

    cy.on(locators.signupPage.successAlert, (str) => {
      expect(str).to.contains(this.expected.expectedSignUpText.successSignup);
    });
  });

  it("Should fail to sign up with existing username", function () {
    cy.get(locators.signupPage.signupButton).click();
    cy.get(locators.signupPage.signupModal).should("be.visible");

    cy.get(locators.signupPage.usernameInput).type(this.userData.existingUser.username);
    cy.get(locators.signupPage.passwordInput).type(this.userData.existingUser.password);

    cy.get(locators.signupPage.submitButton).click();

    cy.on(locators.signupPage.successAlert, (str) => {
      expect(str).to.contains(this.expected.expectedSignUpText.errorSignup);
    });
  });
});
