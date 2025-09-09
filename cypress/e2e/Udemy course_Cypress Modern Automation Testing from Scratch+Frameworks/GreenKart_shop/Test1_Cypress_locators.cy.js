describe('Work with Cypress locators', () => {
  //Test Case Nr 1
  it('Get a list of products with a specific keyword', () => {
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

    //Find all elements with the class 'product' and assert that there are 5 of them
    cy.get('.product').should('have.length', 5);

    //Find all visible elements with the class 'product' and assert that there are 4 of them
    cy.get('.product:visible').should('have.length', 4);

    //Parent-child chaining
    //Find the element with class 'products' and then find all visible elements with class 'product' within it
    cy.get('.products').find('.product').should('have.length', 4);
  });

  //Test Case Nr 2
  it('Find a specific product using index and add it to the cart', () => {
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
    //Find the element with class 'products' and then find all visible elements with class 'product' within it
    //Then, find the 'ADD TO CART' button within the third product (index 2) and click it
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
  });

  //Test Case Nr 3
  it('Find a specific product using text and add it to the cart', () => {
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
    //Find the element with class 'products' and then find all visible elements with class 'product' within it
    //Then, find the 'ADD TO CART' button within the product that contains the text 'Cashews' and click it
    cy.get('.products').find('.product').each(($el, index, $list) => {
      //Iterate through each product element
      //Get the text of the product name
      const textVeg = $el.find('h4.product-name').text();
      if (textVeg.includes('Cashews')) {
        //cy.wrap($el).find('button').click();
        $el.find('button').click();
      };
    });
  });

  //Test Case Nr 4
  it('Find the brand logo and log its text', () => {
    // Test case steps go here

    // Arrange
    // Set up the application state
    //Visit the URL
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Act - Query for an element and interact with it
    //Find the brand logo using the class selector and log its text to the Cypress console
    cy.get(".brand").then(function(logoElement) {
    // Assert - Verify the expected outcome
    //Log the text of the logo element to the Cypress console
    cy.log(logoElement.text());
    });

  });

  //Test Case Nr 5
  it('Use aliases to get a list of products', () => {
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

    //Using the alias, find all visible elements with the class 'product' and assert that there are 4 of them
    cy.get('@productLocator').find('.product').should('have.length', 4);
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
  });

  //Test Case Nr 6
  it('Differentiate between console log and Cypress log', () => {
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

    //assert if logo text is correctly displayed
    cy.get('.brand').should('have.text','GREENKART')

    //Parent-child chaining
    //Alias the element with class 'products' as 'productLocator' for easier reference
    cy.get('.products').as('productLocator');

    //Using the alias, find the 'ADD TO CART' button within the third product (index 2) and click it
    //Then, log a message to the Chrome console after the click action is completed
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function() {
      console.log('Product added to cart');
    });


    // Act - Query for an element and interact with it

    //Find the brand logo using the class selector and log its text to the Cypress console
    cy.get(".brand").then(function(logoElement) {
  
      // Assert - Verify the expected outcome
      //Log the text of the logo element to the Cypress console
      cy.log(logoElement.text());
    });
  });
});