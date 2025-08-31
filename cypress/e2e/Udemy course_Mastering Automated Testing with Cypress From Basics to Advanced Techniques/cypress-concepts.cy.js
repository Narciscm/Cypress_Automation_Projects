describe("Cypress Concepts", () => {
    it ('Visit Website', () => {
        cy.visit('https://anilpatidar.github.io/Cypress-Test-Framework/')
    });
    it ('Checkbox Test', () => {
        cy.visit('https://anilpatidar.github.io/Cypress-Test-Framework/')
        cy.get('#checkbox2').check();
        cy.get('#checkbox2').uncheck();
        cy.get('#checkbox2').should('not.be.checked');
        cy.get('#checkbox3').check();
        cy.get('#checkbox3').should('be.checked');
    });

    it('Radio button Test', function() {
        cy.visit('https://anilpatidar.github.io/Cypress-Test-Framework/')
        cy.get('#male').check();
        cy.get('#male').should('be.visible');
        cy.get('#female').check();
        cy.get('[for="female"]').should('have.text', 'Female');
       
    });

    it('Dynamic Select', function() {
        cy.visit('https://anilpatidar.github.io/Cypress-Test-Framework/')
        cy.get('#countryInput').clear();
        cy.get('#countryInput').type('ind');
         cy.get('#dynamicSelect').select('India');
        
    });

    it('Static Select', function() {
        cy.visit('https://anilpatidar.github.io/Cypress-Test-Framework/')
        cy.get('#staticSelect').select('staticOption2');
        
    });

    it('Dynamic Dropdown Select', function() {
        cy.visit('https://anilpatidar.github.io/Cypress-Test-Framework/')
        cy.get('#countryInput').click();
        cy.get('#countryInput').clear();
        cy.get('#countryInput').type('uni');
        cy.get('#dynamicSelect').select('United Kingdom');
        
    });
} )