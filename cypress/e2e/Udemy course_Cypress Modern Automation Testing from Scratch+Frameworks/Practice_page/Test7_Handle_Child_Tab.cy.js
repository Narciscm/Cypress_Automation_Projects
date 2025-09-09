describe('Practice Page Tests - Handling Child Tabs', () => {
  //Cypress cannot handle multiple tabs, but we can verify if the link has the correct target URL
  //Test Case Nr 1
  it('Remove target attribute and navigate to the new page', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    // Click on the "Open Tab" button after removing the target attribute
    cy.get("#opentab").invoke('removeAttr', 'target').click();

    // Assert - Verify the expected outcome

    // Verify that the new page has the expected URL
    cy.url().should('include', 'https://www.qaclickacademy.com/');

  });

  //Test Case Nr 2
  it('Navigate to the new page and back', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    // Click on the "Open Tab" button after removing the target attribute
    cy.get("#opentab").invoke('removeAttr', 'target').click();

    // Assert - Verify the expected outcome

    // Verify that the new page has the expected URL
    cy.url().should('include', 'https://www.qaclickacademy.com/');

    // Act - Query for an element and interact with it

    // Navigate back to the original page
    cy.go('back');

    // Assert - Verify the expected outcome

    // Verify that the new page has the expected URL
    cy.url().should('include', 'https://rahulshettyacademy.com/AutomationPractice/');

  });
})