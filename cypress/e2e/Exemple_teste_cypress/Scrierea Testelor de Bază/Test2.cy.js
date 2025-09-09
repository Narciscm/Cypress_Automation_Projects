describe("Folosirea comenzilor get(), click() si type()", () => {
    //Testul nr 1
    it("Visits the Kitchen Sink and click on Contains", () => {
        //Visit https://example.cypress.io
        cy.visit("https://example.cypress.io");

        //Search for the "contains" command and click on it
        cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(2) > a').click();
        //Search for the "inputName" field and type a name
        cy.get("#inputName").type("Popescu Ion");
        //Search for the "inputEmail" field and type an email
        cy.get("#inputEmail").type("popescu.ion@example.com");
        //Check that the submit button is visible and click it
        cy.get("[data-cy=submit]").should('be.visible').click();
    });

    //Testul nr 2
    it('Visits the Kitchen Sink and click on Misc', () => {
        //Visit https://example.cypress.io
        cy.visit("https://example.cypress.io");

        //Search for the "misc" command and click on it
        cy.get('.home-list > :nth-child(9) > :nth-child(1)').click();
        //Search for the "name" field and type a name
        cy.get('#name').type('Popescu Ion');
    });
});