describe('Practice Page Tests - Use Dynamic Dropdowns', () => {
  //Test Case Nr 1
  it('Select an option from the dynamic dropdown', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    //Type 'ind' into the dynamic dropdown input field with id 'autocomplete'
    cy.get("#autocomplete").type('ind');

    // Assert - Verify the expected outcome

    //Iterate through each element in the list of dropdown options with class 'ui-menu-item div'
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
    //Iterate through each element in the list of dropdown options
      //If the text of the current element is 'India', click on it
      if ($el.text() === "India") {
        $el.click();
      };
    });

  });

  //Test Case Nr 2
  it('Select Romania as an option from the dynamic dropdown, then verify the selection', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    //Type 'ind' into the dynamic dropdown input field with id 'autocomplete'
    cy.get("#autocomplete").type('ro');

    // Assert - Verify the expected outcome

    //Iterate through each element in the list of dropdown options with class 'ui-menu-item div'
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
    //Iterate through each element in the list of dropdown options
      //If the text of the current element is 'Romania', click on it
      if ($el.text() === "Romania") {
        $el.click();
      };
    });

    //Assert that the input field with id 'autocomplete' has the value 'Romania'
    cy.get("#autocomplete").should('have.value', 'Romania');

  });

})