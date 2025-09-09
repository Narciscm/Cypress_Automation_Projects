describe("Folosirea comenzilor get() si click()", () => {
    //Testul nr 1
    it("Visits the Kitchen Sink and click on Assertions", () => {
        //Visit https://example.cypress.io
        cy.visit("https://example.cypress.io");

        //Search for the "Assertions" command and click on it
        cy.get('.home-list > :nth-child(8) > :nth-child(1)').click();
        //Check that the URL is correct
        cy.url().should('include', '/commands/assertions');
    });

    //Testul nr 2
    it("Visits the Kitchen Sink and click on Contains", () => {
        //Visit https://example.cypress.io
        cy.visit("https://example.cypress.io");
        
        //Search for the "contains" command and click on it
        cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(2) > a').click();
        //Check that "Button" is present on the page
        cy.get("#query-btn").should('contain', 'Button');
    });

    //Testul nr 3
    it("Visits the Kitchen Sink and fill the form", () => {
        //Visit https://example.cypress.io
        cy.visit("https://example.cypress.io");

        //Search for "misc" command and click on it
        cy.get('.home-list > :nth-child(9) > :nth-child(1)').click();
    });
});