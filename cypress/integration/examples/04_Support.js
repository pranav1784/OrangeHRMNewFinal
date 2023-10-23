/// <reference types = "Cypress"/>

it('Support',function()
{
    cy.loginEnvironment();

    cy.get('.oxd-topbar-header-userarea').click();
    cy.wait(2000);

    cy.get('a.oxd-userdropdown-link:contains("Support")').click();

    cy.get('div.orangehrm-card-container').should('be.visible');
    

}



)