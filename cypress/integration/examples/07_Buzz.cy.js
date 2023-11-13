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
    it("Open Buzz Feed",()=>{
        //.each(($el, index, $list) => {
        cy.get(".oxd-main-menu-item--name").each(($el,index,$list)=>{
            if($el.text().includes("Buzz"))
            {
                cy.wrap($el).click()
                cy.get($el).should(($element) => {
                    const parentElement = $element.parent();
            
                   // expect(parentElement).to.have.class("Active");
                 //   expect(parentElement).to.have.css("color", "#64728c");
                  })
                  
                }
            

             //   cy.get($el).should(($element) 
            })
           // cy.debug()
           cy.wait(5000)
            cy.get('p.orangehrm-buzz-newsfeed-title').should("have.text","Buzz Newsfeed")
            cy.get('textarea.oxd-buzz-post-input',{timeout:10000}).type(data.longpara,{force: true} )
           // cy.wait(10000)
            cy.get("div.orangehrm-buzz-create-post-actions button").eq(0).click()
            //used invoke below to retrieve value from text area, invoke is used to retrieve
            cy.get('.orangehrm-buzz-post-modal-header-text > .oxd-buzz-post > .oxd-buzz-post-input').invoke('val').then((value)=>{
            
                expect(value).to.eq(data.longpara)

            })

        })
        



   