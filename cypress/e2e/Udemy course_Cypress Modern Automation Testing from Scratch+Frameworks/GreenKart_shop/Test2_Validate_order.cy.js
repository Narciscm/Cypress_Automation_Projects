describe('Validate a product order', () => {
  //Test Case Nr 1
  it('Add 2 products to cart and validate the order', () => {
    // Test case steps go here

    // Arrange
    // Set up the application state
    //Visit the URL
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Act - Query for an element and interact with it
    //Find the search box using the class selector and type 'ca'
    cy.get('.search-keyword').type('ca');
    //Wait for 2 seconds to allow the search results to load
    cy.wait(2000);

    // Assert - Verify the expected outcome

    //Parent-child chaining
    //Alias the element with class 'products' as 'productLocator' for easier reference
    cy.get('.products').as('productLocator');

    //Using the alias, find the 'ADD TO CART' button within the third product (index 2) and click it
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();
    //Using the alias, iterate through each product element to find and click the 'ADD TO CART' button for 'Cashews'
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      //Iterate through each product element
      //Get the text of the product name
      const textVeg = $el.find('h4.product-name').text();
      if (textVeg.includes('Cashews')) {
        //cy.wrap($el).find('button').click();
        $el.find('button').click();
      };
    });
    //Click on the cart icon to view the cart
    cy.get(".cart-icon").click();
    //Click on the 'PROCEED TO CHECKOUT' button to go to the checkout page
    cy.contains('PROCEED TO CHECKOUT').click();
    //Click on the 'Place Order' button to proceed with the order
    cy.contains('Place Order').click();
  });
});