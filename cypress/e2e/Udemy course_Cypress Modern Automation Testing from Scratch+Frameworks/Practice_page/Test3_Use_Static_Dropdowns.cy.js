describe('Practice Page Tests - Use Static Dropdowns', () => {
  //Test Case Nr 1
  it('Select and verify static dropdown option 1', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    //Select the option with value 'option1' from the static dropdown with id 'dropdown-class-example'
    cy.get("select").select('option1');

    // Assert - Verify the expected outcome

    //Assert that the static dropdown with id 'dropdown-class-example' has the value 'option1'
    cy.get("select").should('have.value', 'option1');

  });

  //Test Case Nr 2
  it('Select and verify static dropdown option 2', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it
    // Assert - Verify the expected outcome
    // Act and Assert are in the same step here

    //Select the option with value 'option2' from the static dropdown with id 'dropdown-class-example'
    //Assert that the static dropdown with id 'dropdown-class-example' has the value 'option2'
    cy.get("select").select('option2').should('have.value', 'option2');

  });

})