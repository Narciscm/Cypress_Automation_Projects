Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false prevents Cypress from failing the test
    return false;
});


describe("Suita 1", () => {
    it("Test 1", () => {
        cy.visit("https://www.google.com");
        cy.get("#L2AGLb").click();

        cy.wait(10000);

        cy.get(".gLFyf").type("Vlog de it").wait(1000).type("{enter}");
    });
});