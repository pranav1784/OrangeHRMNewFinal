/// <reference types = "Cypress"/>

it('About Us', function()
{
    cy.loginEnvironment();
    cy.get('.oxd-topbar-header-userarea').click();
    cy.get('a.oxd-userdropdown-link:contains("About")').click();
   cy.wait(3000);
   //Element Class
   //cy.get('.oxd-dialog-sheet')

//By ROle attribute
//cy.get('[role="document"]')

//By Element Tag and Class
   cy.get('div.oxd-dialog-sheet').should('be.visible');
   
   
   cy.contains('About').should('be.visible');

}

)

it('Closing About Us', function()
{
    cy.loginEnvironment();
    cy.get('.oxd-topbar-header-userarea').click();
    cy.get('a.oxd-userdropdown-link:contains("About")').click();
   cy.wait(3000);
   //Element Class
   //cy.get('.oxd-dialog-sheet')

//By ROle attribute
//cy.get('[role="document"]')

//By Element Tag and Class
   cy.get('div.oxd-dialog-sheet').should('be.visible');
   
   
   cy.get('.oxd-dialog-close-button').click();

}

)