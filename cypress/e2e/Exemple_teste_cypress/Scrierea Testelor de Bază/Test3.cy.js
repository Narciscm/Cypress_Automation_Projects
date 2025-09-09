describe("Folosirea comenzilor contains(), click() si type()", () => {
    //Testul nr 1
    it("Visits the Kitchen Sink and click on Contains", () => {
        //Visit https://example.cypress.io
        cy.visit("https://example.cypress.io");

        //Click on the "children" link
        cy.contains('children').click();
        //Check that "apples" is present on the page
        cy.get('.traversal-next-all').contains('apples');
    });

    //Testul nr 2
    it('Visits the Kitchen Sink and click on check', () => {
        //Visit https://example.cypress.io
        cy.visit("https://example.cypress.io");

        //Click on the "check" link
        cy.contains("check").click();
        //Check that "password1" is present on the page and write a password
        cy.get("#password1").type("Parola12345");
    });

    //Testul nr 3
    it('Visits the Kitchen Sink and click on wait', () => {
        //Visit https://example.cypress.io
        cy.visit("https://example.cypress.io");

        //Click on the "wait" link
        cy.contains("wait").click();
        //Check that "wait-input3" is present on the page and write a wait time
        cy.get(".form-control.wait-input2").type("Exemplul este pe rand 2");

        cy.contains("Get Comment").click();
        cy.wait(2000);
        cy.get(".network-comment");
    }); 
});