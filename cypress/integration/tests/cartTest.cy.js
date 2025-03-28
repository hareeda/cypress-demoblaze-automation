import homePage from "../../support/pages/homePage";
import productPage from "../../support/pages/productPage";
import cartPage from "../../support/pages/cartPage";

describe("E-Commerce Cart Tests", () => {
  beforeEach(function () {
    homePage.visit();
    cy.fixture("productData.json").as("product");
  });

  it("Should add a product to the cart", function () {
    homePage.openProduct(this.product.products[0].name);
    productPage.addToCart();
    cartPage.openCart();
    cartPage.verifyProductInCart(this.product.products[0].name);
  });

  it("Should remove product from the cart after increasing quantity", function () {
    homePage.openProduct(this.product.products[0].name);
    productPage.addToCart();
    cartPage.openCart();
    
    cartPage.removeProduct(this.product.products[0].name);
    cartPage.verifyProductRemoved(this.product.products[0].name);
  });
});
