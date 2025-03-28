import homePage from "../../support/pages/homePage";
import productPage from "../../support/pages/productPage";

describe("E-Commerce Product Tests", () => {
  beforeEach(function () {
    homePage.visit();
    cy.fixture("productData.json").as("productData");
  });

  it("Should verify product details for all products", function () {
    this.productData.products.forEach((product) => {
      cy.log(`Verifying details for ${product.name}`);

      homePage.openProduct(product.name);
      productPage.verifyProductDetails(
        product.name,
        product.price,
        product.description
      );

      // Return to the previous page before moving to the next product
      cy.go("back");
    });
  });
});
