import locators from "../../support/locators";

describe("Contact Page Tests", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.fixture("contactData.json").as("contactData");
    cy.fixture("expData.json").as("expected");
  });

  it("Should send a contact message successfully", function () {
    cy.get(locators.contactPage.contactButton).should("be.visible").click();
    cy.get(locators.contactPage.contactModal).should("be.visible");

    cy.get(locators.contactPage.contactEmail).should("be.visible").type(this.contactData.email);
    cy.get(locators.contactPage.contactName).should("be.visible").type(this.contactData.name);
    cy.get(locators.contactPage.contactMessage).should("be.visible").type(this.contactData.message);

    cy.get(locators.contactPage.sendMessageButton).click();

    cy.on(locators.contactPage.successAlert, (str) => {
      expect(str).to.contains(this.expected.expectedContactText.successMessage);
    });
  });
});
