Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false prevents Cypress from failing the test
    return false;
});

describe("Suita 2", () => {
    it("Test 2", () => {
        cy.visit("https://www.linkedin.com");

        cy.get('.nav__button-secondary').should('be.visible').click();
        cy.get('#username').should('be.visible').type('narcis_cristi93@yahoo.com');
        cy.get('#password').should('be.visible').type('mavrodache1');
        cy.get('.btn__primary--large').should('be.visible').click();

        cy.get('#ember16').should('exist');
    });
});