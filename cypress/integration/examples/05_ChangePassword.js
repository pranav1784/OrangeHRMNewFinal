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

it.only('Update Password By Entering Incorrect Current Pasword',function()
{
    cy.loginEnvironment();

    cy.get('.oxd-topbar-header-userarea').click();
    cy.wait(4000);

    cy.get('a.oxd-userdropdown-link:contains("Change")').click();

    cy.wait(1000);

    //cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('HELLO');
   
    // Entering the current password
    cy.get('input[type="password"]').eq(0).type('Admin123');

     // Entering the New password
     cy.get('input[type="password"]').eq(1).type('Admin1234');

      // Entering the Confirm password
      cy.get('input[type="password"]').eq(2).type('Admin1234');

      //Submit button
      cy.get('button[type="submit"]').click();

      //Taster is visble or not
      cy.get("#oxd-toaster_1", { timeout: 10000 }).should("exist").should("contain", "Current Password is Incorrect");


      //Inccorect Password doesn't match
     // cy.get('#oxd-toaster_1').should("","Error Current Password is Inccorect");

 }
)

it.only('Update Password By Entering Correct Current Pasword',function()
{
    cy.loginEnvironment();

    cy.get('.oxd-topbar-header-userarea').click();
    cy.wait(4000);

    cy.get('a.oxd-userdropdown-link:contains("Change")').click();

    cy.wait(1000);

    //cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('HELLO');
   
    // Entering the current password
    cy.get('input[type="password"]').eq(0).type('admin123');

     // Entering the New password
     cy.get('input[type="password"]').eq(1).type('Admin1234');

      // Entering the Confirm password
      cy.get('input[type="password"]').eq(2).type('Admin1234');

      //Submit button
      cy.get('button[type="submit"]').click();

      //Taster is visble or not
      cy.get("#oxd-toaster_1", { timeout: 5000 }).should("exist").should("contain", "Successfully Saved");


      //Inccorect Password doesn't match
     // cy.get('#oxd-toaster_1').should("","Error Current Password is Inccorect");

 }
)