describe('ProtoCommerce Shop Tests', () => {
  //Test Case Nr 1
  it('Perform basic test', function() {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    //Visit the URL
    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    // Act

    // Navigate to the shop page
    cy.get(':nth-child(2) > .nav-link').click();

    // Add items to the cart
    // Use the custom command to select the product
    cy.selectProduct('Blackberry');
    cy.selectProduct('Nokia Edge');
    
    });
})