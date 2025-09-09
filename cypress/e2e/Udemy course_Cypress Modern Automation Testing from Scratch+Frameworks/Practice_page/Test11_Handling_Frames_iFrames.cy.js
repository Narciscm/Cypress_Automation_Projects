import 'cypress-iframe';

describe('Practice Page Tests - Handling Frames and iFrames', () => {
  //Test Case Nr 1
  it('Work with iFrames', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it
    
    // Load the iframe using its ID
    cy.frameLoaded('#courses-iframe');
    // Now we can interact with elements inside the iframe
    cy.iframe().find("a[href*='mentorship']").eq(0).click();

    //Wait for 2 seconds to see the result of the click action
    cy.wait(2000);

    // Assert - Verify the expected outcome

    // Verify that we navigated to the Mentorship page by checking the presence of two pricing titles
    cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2);

  });

  //Test Case Nr 2

})