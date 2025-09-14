beforeEach(() => {
   cy.fixture('ProtoCommerce_Test1').then((internal_data) => {
      // Store the fixture data (internal_data) in the test context ( this )
      this.external_data = internal_data;
    });
});