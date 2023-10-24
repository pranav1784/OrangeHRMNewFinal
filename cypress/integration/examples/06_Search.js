/// <reference types = "Cypress"/>
let items = [
  "Admin",
  "PIM",
  "Leave",
  "Time",
  "Recruitment",
  "My Info",
  "Performance",
  "Dashboard",
  "Directory",
  "Claim",
  "Buzz",
  "Maintenance",
]
let count=0
let auth=""
before(() => {

  
  cy.loginEnvironment()
    cy.getCookie("orangehrm").then((cookie)=>{
       auth=cookie.value
      // cy.log(auth)
    
    })

  cy.wait(2000)
})
beforeEach(()=>{
  cy.session('orangehrm', () => {
   cy.setCookie('orangehrm',auth)
 })
  cy.visit("https://opensource-demo.orangehrmlive.com/", {
        // onBeforeLoad: function () {
        //   cy.setCookie("orangehrm",auth)
        // }
      })
  
})

it("Test If All valid items are being displayed", () => {
  cy.get(".oxd-main-menu-item--name").each(($el, index, $list) => {
    expect(items).to.contains($el.text())
  })
})
it("Test if Total is matched in the appear elements", () => {
  cy.get(".oxd-main-menu-item--name").as("name")
  //cy.wait(2000)
  cy.get("@name").should("have.length", "12")
})
it("Test if search is filtering out correct records", () => {
  cy.get("input[placeholder='Search']").type("e")
 // cy.wait(2000)
  cy.get("ul.oxd-main-menu li").should("have.length", 6)

})

it("Test if doing the filter, it is only filtering out correct records",()=>{
cy.get("input[placeholder='Search']").type("im")
cy.get(".oxd-main-menu-item--name").should("contain","im").then(ele=>{
  count=ele.length
  })
cy.get("input[placeholder='Search']").clear()
// cy.get(".oxd-main-menu-item--name").then(ele=>{
// count=ele.length
})


it("Test if collapsible navbar is working",()=>{
  cy.get("input[placeholder='Search']").type("im")
  cy.get("button.oxd-icon-button.oxd-main-menu-button").click()
  cy.get("aside").should("have.class","toggled")
  cy.get('.oxd-main-menu-item--name').should("have.length",count)
  cy.get("button.oxd-icon-button.oxd-main-menu-button").click()
  cy.get("aside").should("not.have.class","toggled")
  cy.get("input[placeholder='Search']").clear()

}
)