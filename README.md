Cypress E-Commerce Automation

📌 Project Overview

This project is an automated test suite for an E-Commerce Website using Cypress. It includes tests for user authentication, product browsing, cart management, checkout, and contact form submissions.

🚀 Tech Stack

Cypress (End-to-End Testing)

JavaScript / TypeScript

Mocha & Chai (Test Framework & Assertions)

GitHub (Version Control)

📂 Project Structure

/cypress
  ├── fixtures          # Test data (JSON files)
  ├── integration       # Test scripts
  ├── pages             # Page Object Model files
  ├── support           # Custom commands & utilities
  ├── plugins           # Cypress plugins
  ├── reports           # Test reports (if configured)
  ├── screenshots       # Test failure screenshots

🔧 Setup & Installation

Clone the Repository:

git clone https://github.com/yourusername/cypress-demoblaze-automation.git
cd cypress-demoblaze-automation

Install Dependencies:

npm install

Run Tests in Cypress GUI:

npx cypress open

Run Tests in Headless Mode:

npx cypress run

🛠 Features Covered

✅ User Signup & Login Tests✅ Product Search & Selection✅ Add to Cart & Remove Product✅ Checkout & Order Placement✅ Contact Form Submission✅ Negative Scenarios (Invalid Credentials, Empty Cart, etc.)

📌 Custom Commands

cy.login(username, password) → Logs in a user

cy.addToCart(productName) → Adds a product to the cart

cy.verifyProductInCart(productName) → Validates product presence in the cart

📜 Reporting & Logs

To generate a report after test execution:

npx cypress run --reporter mochawesome

📢 Contribution Guidelines

Feel free to contribute by submitting Pull Requests and opening Issues for any improvements or bug fixes.

🔗 Contact

For queries or collaboration, reach out at [hareeda33@gmail.com] or open an issue in the repository!

💡 Happy Testing! 🚀
