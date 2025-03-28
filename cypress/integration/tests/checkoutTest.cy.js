import homePage from "../../support/pages/homePage";
import productPage from "../../support/pages/productPage";
import cartPage from "../../support/pages/cartPage";
import checkoutPage from "../../support/pages/checkoutPage";

describe("E-Commerce Cart Tests", () => {
  beforeEach(function () {
    homePage.visit();
    cy.fixture("orderData.json").as("order");
    cy.fixture("productData.json").as("product");
  });

  it("Should add a product to the cart", function () {
    homePage.openProduct(this.product.products[0].name);
    productPage.addToCart();
    cartPage.openCart();
    cartPage.verifyProductInCart(this.product.products[0].name);
    cartPage.clickPlaceOrder();
    checkoutPage.fillCheckoutDetails(
      this.order.orderDetails.name,
      this.order.orderDetails.country,
      this.order.orderDetails.city,
      this.order.orderDetails.creditCard,
      this.order.orderDetails.month,
      this.order.orderDetails.year
    );
    checkoutPage.submitOrder();
    checkoutPage.verifyOrderSuccess();
  });
});
