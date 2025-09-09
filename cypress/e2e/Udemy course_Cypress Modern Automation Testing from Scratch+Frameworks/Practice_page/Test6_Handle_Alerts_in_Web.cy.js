describe('Practice Page Tests - Handling Alerts in Web', () => {
  //Test Case Nr 1
  it('Handle Alerts', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    // Click on the alert button
    cy.get("#alertbtn").click();

    // Assert - Verify the expected outcome

    // Handle the alert and verify its text
    cy.on('window:alert', (str) => {
      // Mocha assertion for the alert text
      expect(str).to.equal('Hello , share this practice page and share your knowledge');
    });
  });

  //Test Case Nr 2
  it('Handle Confirm', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    // Click on the confirm button
    cy.get("[value='Confirm']").click();

    // Assert - Verify the expected outcome
    // Handle the alert and verify its text
    cy.on('window:confirm', (str) => {
      // Mocha assertion for the alert text
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });
  });
})