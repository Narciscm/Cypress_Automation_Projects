class HomePage 
{
    getEditBox()
    {
        return cy.get("input[name='name']:nth-child(2)");
    }

    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4) > [name="name"]');
    }

    getGender()
    {
        return cy.get("#exampleFormControlSelect1");
    }

    getEntrepreneurRadioButton()
    {
        return cy.get('#inlineRadio3');
    }

    getShopTab()
    {
        return cy.get(':nth-child(2) > .nav-link');
    }
}

export default HomePage;