const locators = {
    signupPage: {
        signupButton: "#signin2",
        signupModal: "#signInModal",
        usernameInput: "#sign-username",
        passwordInput: "#sign-password",
        submitButton: 'button[onclick="register()"]',
        successAlert: "window:alert",
    },
    contactPage: {
        contactButton: "a[data-target='#exampleModal']",
        contactModal: "#exampleModal",
        contactEmail: "#recipient-email",
        contactName: "#recipient-name",
        contactMessage: "#message-text",
        sendMessageButton: "button[onclick='send()']",
        successAlert: "window:alert",
    },
    cartPage: {
        cartButton: "#cartur",
        productInCart: ".success",
        placeOrderButton: ".btn.btn-success",
        addToCartButton: "button:contains('Add to cart')",
        successAlert: "window:alert",
        cartTable: "#tbodyid",
        quantityInput: "input.cart_quantity",
        removeButton: "a[onclick^='deleteItem']", // Targeting 'deleteItem' function
    },
    loginPage: {
        loginButton: "#login2",
        loginModal: "#logInModal",
        usernameInput: "#loginusername",
        passwordInput: "#loginpassword",
        submitButton: 'button[onclick="logIn()"]',
        welcomeText: "#nameofuser",
    },
    checkoutPage: {
        checkoutModalButton: 'button[data-target="#orderModal"]',
        checkoutModal: "#orderModal",
        nameInput: "#name",
        countryInput: "#country",
        cityInput: "#city",
        creditCardInput: "#card",
        monthInput: "#month",
        yearInput: "#year",
        purchaseButton: "button[onclick='purchaseOrder()']",
        successMessage: ".sweet-alert",
    },
};

export default locators;
