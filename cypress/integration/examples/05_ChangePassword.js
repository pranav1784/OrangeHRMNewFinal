/// <reference types = "Cypress"/>

it('Change Password',function()
{
    cy.loginEnvironment();

    cy.get('.oxd-topbar-header-userarea').click();
    cy.wait(4000);

    cy.get('a.oxd-userdropdown-link:contains("Change")').click();

    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/pim/updatePassword');

  }
)

it('Update Password',function()
{
    cy.loginEnvironment();

    cy.get('.oxd-topbar-header-userarea').click();
    cy.wait(4000);

    cy.get('a.oxd-userdropdown-link:contains("Change")').click();

    cy.wait(1000);

    cy.get('div.oxd-input oxd-input--active').type('Admin');

  }
)