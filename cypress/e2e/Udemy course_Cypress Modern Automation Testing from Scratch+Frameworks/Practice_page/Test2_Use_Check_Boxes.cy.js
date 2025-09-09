describe('Practice Page Tests - Use Check Boxes', () => {
  //Test Case Nr 1
  it('Check and verify checkbox 1', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    // Check the checkbox with id 'checkBoxOption1'
    cy.get("#checkBoxOption1").check();

    // Assert - Verify the expected outcome

    // Assert that the checkbox with id 'checkBoxOption1' is checked
    cy.get("#checkBoxOption1").should('be.checked');
    //Assert that the checkbox with id 'checkBoxOption1' has the value 'option1'
    cy.get("#checkBoxOption1").should('have.value', 'option1');

  });

  //Test Case Nr 2
  it('Check and verify checkbox 2', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it
    // Assert - Verify the expected outcome
    // Act and Assert are in the same step here

    //Check the checkbox with id 'checkBoxOption2'
    //Assert that the checkbox with id 'checkBoxOption2' is checked
    //Assert that the checkbox with id 'checkBoxOption2' has the value 'option2'
    cy.get("#checkBoxOption2").check().should('be.checked').should('have.value', 'option2');

  });

  //Test Case Nr 3
  it('Check and verify checkbox 3, then uncheck it', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it
    // Assert - Verify the expected outcome
    // Act and Assert are in the same step here

    //Check the checkbox with id 'checkBoxOption3'
    //Assert that the checkbox with id 'checkBoxOption3' is checked
    //Assert that the checkbox with id 'checkBoxOption3' has the value 'option3'
    cy.get("#checkBoxOption3").check().should('be.checked').should('have.value', 'option3');

    //Uncheck the checkbox with id 'checkBoxOption3'
    //Assert that the checkbox with id 'checkBoxOption3' is not checked
    cy.get("#checkBoxOption3").uncheck().should('not.be.checked');

  });

  //Test Case Nr 4
  it('Check and verify all the checkboxes', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it
    // Assert - Verify the expected outcome
    // Act and Assert are in the same step here

    //Check all the checkboxes'
    //Assert that all the checkboxes are checked
    cy.get('input[type="checkbox"]').check().should('be.checked');

  });

  //Test Case Nr 5
  it('Check and verify multiple checkboxes', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it
    // Assert - Verify the expected outcome
    // Act and Assert are in the same step here

    //Check multiple checkboxes'
    //Assert that all the selected checkboxes are checked
    cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked');

  });
})