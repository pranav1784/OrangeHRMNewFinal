/// <reference types = "Cypress"/>

it('Logout',function()
{
    cy.loginEnvironment();

    cy.get('.oxd-topbar-header-userarea').click();
    cy.wait(4000);

    cy.get('a.oxd-userdropdown-link:contains("Logout")').click();

    //assertions
   cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    

}



)