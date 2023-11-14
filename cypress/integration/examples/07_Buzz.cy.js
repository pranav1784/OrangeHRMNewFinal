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
          
cy.intercept("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/anniversaries?limit=5").as("messages")
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
            cy.wait("@messages").then((interception) => {
              // Check the status or do any other assertions if needed
              expect(interception.response.statusCode).to.eq(200);
           })
           // cy.debug()
           cy.wait(2000)
            cy.get('p.orangehrm-buzz-newsfeed-title').should("have.text","Buzz Newsfeed")
            cy.get('textarea.oxd-buzz-post-input',{timeout:10000}).type(data.longpara,{force: true} )
           // cy.wait(10000)
            cy.get("div.orangehrm-buzz-create-post-actions button").eq(0).click()
            //used invoke below to retrieve value from text area, invoke is used to retrieve
            cy.get('.orangehrm-buzz-post-modal-header-text > .oxd-buzz-post > .oxd-buzz-post-input').invoke('val').then((value)=>{
            
                expect(value).to.eq(data.longpara)

            })
            cy.get("input[type='file']").selectFile('cypress/resources/QATeamImg.png',{force:true})
            cy.get('div.orangehrm-buzz-post-modal-actions').find("button[type='submit']").click()
            cy.get('.oxd-toast').should("be.visible")
cy.get('div.oxd-grid-item--gutters').eq(0).find(".oxd-sheet--rounded").find(".orangehrm-buzz-post-body").find("p.oxd-text").then((ele)=>{
  expect(ele.text()).to.include(data.longpara)
})
  cy.get('div.oxd-grid-item--gutters').eq(0).find(".oxd-sheet--rounded").find(".orangehrm-buzz-post").find(".orangehrm-buzz-post-header").find("p.orangehrm-buzz-post-time").eq(0).then((time)=>{
    const dateTimeOnPage = new Date(time.text())
    const currentDate = new Date()
    expect(time.text()).to.contain(currentDate.getFullYear())
  //expect(time.text()).to.contain(currentDate.getMonth())
  expect(time.text()).to.contain(currentDate.getDate())
   // cy.log(time.text())
  })
  
})
it.only("Like comment the buzz posts",()=>{
  cy.intercept("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/anniversaries?limit=5").as("messages")
  cy.get(".oxd-main-menu-item--name").each(($el,index,$list)=>{
    if($el.text().includes("Buzz"))
    {
        cy.wrap($el).click()
        cy.get($el).should(($element) => {
            const parentElement = $element.parent();
    
          })
          
     }
          })
    cy.wait("@messages").then((interception) => {
     
      expect(interception.response.statusCode).to.eq(200);
   })
  
   cy.wait(2000)
   cy.get("svg#heart-svg").eq(0).click({force:true}).parent().should("have.class","orangehrm-like-animation")
   //cy.get('div.oxd-grid-item--gutters').eq(0).children(".oxd-sheet--rounded").find(".orangehrm-buzz-post-footer").find(".orangehrm-buzz-post-actions")
})



   