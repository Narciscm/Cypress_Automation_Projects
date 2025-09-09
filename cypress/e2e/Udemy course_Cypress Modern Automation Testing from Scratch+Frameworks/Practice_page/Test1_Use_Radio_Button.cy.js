describe('Practice Page Tests - Use Radio Button', () => {
  //Test Case Nr 1
  it('Verify the functionality of radio buttons', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    // Click the radio button with value 'radio2'
    cy.get("input[value='radio2']").click();

    // Assert - Verify the expected outcome
    // Check that the radio button with value 'radio2' is checked, and the others are not checked
    cy.get("input[value='radio2']").should('be.checked');
    cy.get("input[value='radio1']").should('not.be.checked');
    cy.get("input[value='radio3']").should('not.be.checked');

  });

  //Test Case Nr 2
  it('Select radio button 1, then check the selection', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it
    // Assert - Verify the expected outcome
    // Act and Assert are combined here for clarity

    // Click the radio button with value 'radio1'
    // Check that the radio button with value 'radio1' is checked
    cy.get("input[value='radio1']").click().should('be.checked');

    // Additionally, verify that the other radio buttons are not checked
    cy.get("input[value='radio2']").should('not.be.checked');
    cy.get("input[value='radio3']").should('not.be.checked');

  });

})