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
it('About Us', function()
{
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
    cy.get('.oxd-topbar-header-userarea').click();
    cy.get('a.oxd-userdropdown-link:contains("About")').click();
   cy.wait(3000);
   
// Verify that the dialog box is initially visible
//cy.get('div.oxd-dialog-sheet').should('be.visible');
  
// Close the dialog box
cy.get('.oxd-dialog-close-button').click();
//cy.wait(1000);
// Verify that the dialog box is closed
cy.get('div.oxd-dialog-sheet').should('not.exist');
   

}

)