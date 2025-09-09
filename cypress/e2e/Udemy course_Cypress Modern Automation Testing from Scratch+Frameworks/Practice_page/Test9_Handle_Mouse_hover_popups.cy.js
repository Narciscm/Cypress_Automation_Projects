describe('Practice Page Tests - Handling Mouse Hover Popups', () => {
    //Mouse hover - is not working in Cypress - we have to use invoke('show') method
  //Test Case Nr 1
  it('Verify mouse hover popups - Top', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    // In this example, we will handle mouse hover popups
    cy.get("#mousehover").invoke('show') // to make the hidden element visible
    cy.contains('Top').click({force: true}) // force:true - to click on a hidden element

    // Assert - Verify the expected outcome

    cy.url().should('include', 'top') // verify that the URL contains 'top'

  });

  //Test Case Nr 2
  it('Verify mouse hover popups - Reload', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    // In this example, we will handle mouse hover popups
    cy.get("div.mouse-hover-content").invoke('show') // to make the hidden element visible
    cy.contains('Reload').click(); // force:true - to click on a hidden element

    // Assert - Verify the expected outcome

    cy.url().should('include', '/') // verify that the URL contains '/'

  });
})