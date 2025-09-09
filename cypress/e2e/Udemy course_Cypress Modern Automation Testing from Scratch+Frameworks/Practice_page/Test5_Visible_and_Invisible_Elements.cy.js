describe('Practice Page Tests - Handling Visible and Invisible Elements', () => {
  //Test Case Nr 1
  it('Verify the visibility of elements', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    // Check that the element with id 'displayed-text' is visible
    cy.get("#displayed-text").should('be.visible');
    // Click the button with id 'hide-textbox' to hide the text box
    cy.get("#hide-textbox").click();

    // Assert - Verify the expected outcome
    // Check that the element with id 'displayed-text' is not visible
    cy.get("#displayed-text").should('not.be.visible');

    // Click the button with id 'show-textbox' to show the text box
    cy.get("#show-textbox").click();
    // Check that the element with id 'displayed-text' is visible again
    cy.get("#displayed-text").should('be.visible');

  });

  //Test Case Nr 2

})