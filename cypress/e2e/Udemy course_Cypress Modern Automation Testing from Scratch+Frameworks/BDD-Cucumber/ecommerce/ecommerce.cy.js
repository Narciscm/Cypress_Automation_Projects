import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pageObject/HomePage";
import ProductPage from "../pageObject/ProductPage";

// Create an instance of the HomePage class
const homePage = new HomePage();
// Create an instance of the ProductPage class
const productPage = new ProductPage();

Given('I open the E-commerce application', () => {
  cy.visit(Cypress.env('url')+"angularpractice/");
});

When("I add the following items to the cart", function() {
    // Navigate to the shop page
    // Use the methods from the HomePage class
    homePage.getShopTab().click();

    // Add items to the cart
    // Iterate through each product name in the fixture file and add to the cart
    // Use the custom command defined in commands.js
    this.external_data.productName.forEach(function(product) {
      cy.selectProduct(product);
    });

    // Proceed to checkout
    // Use the methods from the ProductPage class
    productPage.checkoutButton().click();
});


And('Validate the total price in the cart', () => {
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        // Extract the price text and convert it to a number
        var sum = 0;
      // Extract the price text and convert it to a number
      const amount = $el.text();
      // Split the text to get the numeric part
      var res = amount.split(" ");
      // Trim any whitespace and convert to number
      res = res[1].trim();
      // Add to the sum
      sum = Number(sum) + Number(res);
      // Log the intermediate sum for debugging
    }).then(function() {
      cy.log(sum);
    });

    // Get the total price displayed in the cart and verify it matches the calculated sum
    cy.get('h3 strong').then(function(element) {
      // Extract the total price text
      const amount = element.text();
      // Split the text to get the numeric part
      var res = amount.split(" ");
      // Trim any whitespace
      var total = res[1].trim();
      // Log the total for debugging
      cy.log(total);
      // Assert that the calculated sum matches the displayed total
      expect(Number(total)).to.equal(sum);
    });

});

Then('Select the country and submit the order', () => {
    // Click on the checkout button on the cart page
    cy.contains('Checkout').click();

    // Fill in the country details and complete the purchase
    cy.get('#country').type('Romania');
    cy.get('.suggestions > ul > li > a').click();
    cy.get('#checkbox2').click({ force: true });
    cy.get('input[type="submit"]').click();

    // Assert
    // Verify the success message
    // Use a more robust assertion method to check for the success message
    cy.get('.alert').then(function(element) {
      const actualText = element.text();
      expect(actualText.includes('Success! Thank you! Your order will be delivered in next few weeks :-).')).to.be.true;
    });
});