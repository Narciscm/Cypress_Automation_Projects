const country = require('../../fixtures/country.json');

let global_country;
before(function() {
    cy.fixture("country").then((data) => {
        global_country = data;
    });
});

describe("Intercept Request/Response", () => {
    it("Intercept Rest API call",() => {
        cy.visit("https://narciscm.github.io/express-web-app/");

        cy.intercept({ //request object
            url: 'https://restcountries.com/v3.1/all?fields=name',
            method: 'GET'
        },{ //response object
            statusCode: 200,
            body: [{
                    "name": {
                        "common": "Liberia",
                        "official": "Republic of Liberia",
                        "nativeName": {
                            "eng": {
                                "official": "Republic of Liberia",
                                "common": "Liberia"
                                }
            }
        }
                    }]
        }).as("countryapi");

        cy.get('button').contains('Fetch Data from API').click();
        cy.wait("@countryapi");

        cy.get('#result').should('have.text', 'Liberia');
    })

    it("Intercept Rest API call; Use country from fixtures", () => {
        cy.visit("https://narciscm.github.io/express-web-app/");

        cy.intercept({ //request object
            url: 'https://restcountries.com/v3.1/all?fields=name',
            method: 'GET'
        },{ //response object
            statusCode: 200,
            body: [{
                    "name": {
                        "common": "Liberia",
                        "official": "Republic of Liberia",
                        "nativeName": {
                            "eng": {
                                "official": "Republic of Liberia",
                                "common": "Liberia"
                                }
            }
        }
                    }]
        }).as("countryapi");

        cy.get('button').contains('Fetch Data from API').click();
        cy.wait("@countryapi");

        cy.get('#result').should('have.text', country.name);
    })

    it("Intercept Rest API call; Use country from fixtures v2", () => {
        cy.visit("https://narciscm.github.io/express-web-app/");

        cy.intercept({ //request object
            url: 'https://restcountries.com/v3.1/all?fields=name',
            method: 'GET'
        },{ //response object
            statusCode: 200,
            body: [{
                    "name": {
                        "common": "Liberia",
                        "official": "Republic of Liberia",
                        "nativeName": {
                            "eng": {
                                "official": "Republic of Liberia",
                                "common": "Liberia"
                                }
            }
        }
                    }]
        }).as("countryapi");

        cy.get('button').contains('Fetch Data from API').click();
        cy.wait("@countryapi");

        cy.fixture("country").then((data) =>{
            cy.get('#result').should('have.text', 
            data.name);
        })        
    })

    it("Intercept Rest API call; Use country from fixtures v3", 
        {retries :
            {
                runMode: 2,
                openMode: 2
            }
        },() => {
        cy.visit("https://narciscm.github.io/express-web-app/");

        cy.intercept({ //request object
            url: 'https://restcountries.com/v3.1/all?fields=name',
            method: 'GET'
        },{ //response object
            statusCode: 200,
            body: [{
                    "name": {
                        "common": "Liberia",
                        "official": "Republic of Liberia",
                        "nativeName": {
                            "eng": {
                                "official": "Republic of Liberia",
                                "common": "Liberia"
                                }
            }
        }
                    }]
        }).as("countryapi");

        cy.get('button').contains('Fetch Data from API').click();
        cy.wait("@countryapi");

        cy.get('#result').should('have.text', global_country.name);
    })

    it("Change request url", () => {
        cy.visit("https://narciscm.github.io/express-web-app/");

        cy.intercept( 'GET', 'https://restcountries.com/v3.1/all?fields=name', (req)=>
        {req.url = 'https://restcountries.com/v3.1/name/sri'}).as("countryapi");

        cy.get('button').contains('Fetch Data from API').click();
        cy.wait("@countryapi");

        cy.get('#result').should('have.text', 'Sri Lanka');
    })
})