import locators from "../../support/locators";

describe("User Login Tests", () => {
  beforeEach(function () {    
    cy.visit("/");
    cy.fixture("userData.json").as("userData");
    cy.fixture("expData.json").as("expected");
  });

  it("Should log in successfully with valid credentials", function () {
    cy.login(this.userData.validUser.username, this.userData.validUser.password);
    cy.get(locators.loginPage.welcomeText).should("contain", this.expected.expectedLoginText.welcomeText);
  });

  it("Should fail to log in with invalid credentials", function () {
    cy.login(this.userData.invalidUser.username, this.userData.invalidUser.password);

    cy.on("window:alert", (str) => {
      expect(str).to.equal(this.expected.expectedLoginText.noUser);
    });
  });

  it("Should fail to log in with invalid password", function () {
    cy.login(this.userData.validUser.username, this.userData.invalidUser.password);

    cy.on("window:alert", (str) => {
      expect(str).to.equal(this.expected.expectedLoginText.wrongPass);
    });
  });

  it("Should fail to log in when no credentials are entered", function () {
    cy.visit("/");

    cy.get(locators.loginPage.loginButton).should("be.visible").click();
    cy.get(locators.loginPage.loginModal).should("be.visible");

    cy.get(locators.loginPage.usernameInput).should("be.visible").type(this.userData.validUser.username).clear();
    cy.get(locators.loginPage.passwordInput).should("be.visible").type(this.userData.validUser.password).clear();

    cy.get(locators.loginPage.submitButton).should("be.visible").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(this.expected.expectedLoginText.blankTextErrorPass);
    });
  });
});
