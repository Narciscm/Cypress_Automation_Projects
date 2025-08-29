const cypress = require("cypress")

describe("Suita 1", () => {
    //Testul nr 1
    it("test 1", () => {
        cy.visit("https://www.emag.ro")

        cy.get('.js-refuse').click()
        cy.get('[name="query"]').type("samsung galaxy S24").type("{enter}")
        cy.get('[data-product-id="64816455"]').click()
    })
})