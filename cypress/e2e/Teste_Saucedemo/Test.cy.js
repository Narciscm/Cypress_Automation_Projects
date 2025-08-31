describe("Suita 1", () => {
    context("Login cu user/parola gresita", () => {
        //Testul nr 1
        it("Test cu parola gresita", () => {
            // Arange
            // Set up the application state
            cy.visit("https://www.saucedemo.com/")

            // Act - Query for an element and interact with it
            cy.get('[data-test="username"]').type("standard_user");
            cy.get('[data-test="password"]').type("secret_saucee");
            cy.get('[data-test="login-button"]').click();

            // Assert - Verify the expected outcome
            cy.get('[data-test="error"]').should("be.visible");
        })
    })

})