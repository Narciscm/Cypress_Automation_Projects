describe('ProtoCommerce Shop Tests', () => {
  // Before all tests, load the fixture data
  before(function() {
    cy.fixture('ProtoCommerce_Test1').then(function(internal_data) {
      // Store the fixture data (internal_data) in the test context ( this )
      this.external_data = internal_data;
    });
  });
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
    // Iterate through each product name in the fixture file and add to the cart
    this.external_data.productName.forEach(function(product) {
      cy.selectProduct(product);
    });
  });
})