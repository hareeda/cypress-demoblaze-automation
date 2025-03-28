class HomePage {
    visit() {
      cy.visit("https://www.demoblaze.com");
    }
  
    openProduct(productName) {
      cy.contains(productName).click();
    }
  }
  
  export default new HomePage();
  