describe("My First Spec", () => {
    //Testul nr 1
    it("Validate example.cypress.io website", () => {
        cy.visit("https://example.cypress.io")
        //Locate the elements
        //Assert different things (ex. text)
        cy.contains("nextAll").click() //Implicit wait, assertions
        cy.url().should("include", "commands/traversal") //Explicit wait
    })

    it('Test Studio ', function() {
    cy.visit('example.cypress.io')
    });
});

