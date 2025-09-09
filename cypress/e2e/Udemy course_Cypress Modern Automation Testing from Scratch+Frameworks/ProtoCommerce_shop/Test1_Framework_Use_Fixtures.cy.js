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
    // Interact with the application
    //Fill the form using the data from the fixture file
    cy.get("input[name='name']:nth-child(2)").type(this.external_data.name);
    cy.get("#exampleFormControlSelect1").select(this.external_data.gender);

    // Assert
    // Verify the expected outcome
    cy.get(':nth-child(4) > [name="name"]').should('have.value', this.external_data.name);
    cy.get("input[name='name']:nth-child(2)").should('have.attr', 'minlength', '2');
    cy.get('#inlineRadio3').should('be.disabled');

    // Act

    // Navigate to the shop page
    cy.get(':nth-child(2) > .nav-link').click();

    // Add items to the cart
    // Iterate through each product card and add 'Blackberry' to the cart
    cy.get('h4.card-title').each(($el, index, $list) => {
      if ($el.text().includes('Blackberry')) {
        cy.get('button.btn.btn-info').eq(index).click();
      }
    });
    });
})