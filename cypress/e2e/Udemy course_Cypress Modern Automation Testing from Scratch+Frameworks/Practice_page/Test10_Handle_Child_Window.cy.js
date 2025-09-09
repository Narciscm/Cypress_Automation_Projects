describe('Practice Page Tests - Handling Child Windows', () => {
  //Cypress cannot open child windows, but we can verify if the link has the correct target URL
  //Test 2 - Open the child window, but we cannot do any validation on it
  //Test 1 - Take the href attribute of the child window and navigate to it

  //Test Case Nr 1
  it('Take the href attribute of the child window and navigate to it', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    cy.get('#opentab').then(function(el) {
        const url = el.prop('href');
        cy.log(url);
        cy.visit(url);
    });

    // Assert - Verify the expected outcome

  });

  //Test Case Nr 2
  it('Open the child window and verify the URL', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    // Click on the button to open the child window
    cy.get('#openwindow').click();

    // Assert - Verify the expected outcome

  });
})