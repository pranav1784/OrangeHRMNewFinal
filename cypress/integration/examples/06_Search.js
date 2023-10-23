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
beforeEach(() => {
  cy.loginEnvironment()
})

it("Test If All items are being displayed", () => {
  cy.get(".oxd-main-menu-item--name").each(($el, index, $list) => {
    expect(items).to.contains($el.text())
  })
})
it("Test if Total is matched in the appear eleements", () => {
  cy.get(".oxd-main-menu-item--name").should("have.length", "12")
})
it("Test if search is filtering out correct records", () => {
  cy.get("input[placeholder='Search']").type("e")
  cy.get("ul.oxd-main-menu li").should("have.length", 6)
})
