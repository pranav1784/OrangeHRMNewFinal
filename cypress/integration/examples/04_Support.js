/// <reference types = "Cypress"/>
let data
before(()=>{
    cy.fixture("example").then(function (Fdata) {
        data = Fdata
      })
})
beforeEach(()=>{
    cy.loginEnvironment(data.username,data.password)
      cy.visit("")
      
    })
it('Support',function()
{
    cy.get('.oxd-topbar-header-userarea').click();
    cy.wait(2000);

    cy.get('a.oxd-userdropdown-link:contains("Support")').click();

    cy.get('div.orangehrm-card-container').should('be.visible');
    

}



)