describe('Practice Page Tests - Handling Web Tables', () => {
  //Test Case Nr 1
  it('Verify the price of the course "Python"', () => {
    // Test case steps go here

    // Arrange
    
    // Set up the application state
    // Visit the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Act - Query for an element and interact with it

    // In this example, we will verify the price of the course "Python" in the web table
    // Locate the table cell containing "Python" and then get the price from the next cell
    cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
        const text = $el.text();
        if(text.includes("Python")) {
            // $el - is a wrapped jQuery element
            // cy.wrap($el) - is converting the jQuery element to a Cypress element
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) {
                const priceText = price.text();
                expect(priceText).to.equal('25');
            })
        }
    })

    // Assert - Verify the expected outcome

  });

  //Test Case Nr 2

})