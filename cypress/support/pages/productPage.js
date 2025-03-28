class ProductPage {
    addToCart() {
        cy.contains("Add to cart").click();
        cy.on("window:alert", (alertText) => {
            expect(alertText).to.contains("Product added");
        });
    }

  openProduct(productName) {
      // Scroll to the product and click on it
      cy.contains(".card-title", productName).scrollIntoView().should("be.visible").click();
  }

  verifyProductDetails(expectedName, expectedPrice, expectedDescription) {
      // Verify Product Name
      cy.get("h2.name").invoke("text").then((text) => {
          expect(text.trim()).to.equal(expectedName);
      });

      // Verify Product Price
      cy.get("h3.price-container").invoke("text").then((text) => {
          expect(text.trim()).to.include(expectedPrice);
      });

      // Verify Product Description (remove "Product description" text)
      cy.get("#more-information").invoke("text").then((text) => {
          const actualDescription = text.replace("Product description", "").trim();
          expect(actualDescription).to.include(expectedDescription);
      });
  }
}

export default new ProductPage();
