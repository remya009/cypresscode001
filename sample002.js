import producthomepage from '../pageobject/pageobject002'


describe('testcasesuite0012',function(){

    before(function(){
cy.fixture('datasetup1').then((data1) => {
            
    this.data1=data1

    })
})

    it('testcase0012',function(){


       const product2 = new producthomepage()

        cy.visit('https://www.automationexercise.com/login')
product2.getgmail().type("reeganbatra@gmail.com")
        //cy.get('input[data-qa="login-email"]').type("reeganbatra@gmail.com")
        cy.get('input[data-qa="login-password"]').type("Shiva007")
        cy.get('button[data-qa="login-button"]').click()

        //reusable method
        cy.selectproduct001(this.data1.clothname)
        //cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p').click()
      
       // cy.get('.product-overlay').find('.overlay-content').invoke('text').should('contain', 'Blue Top')
          
            // Fails because hits is not passed in via args
           /*cy.get('.product-overlay').each(($el, index, $list) => {
                // $el is a wrapped jQuery element
              if ($el.text().includes('Blue Top')) {
                  // wrap this element so we can
                  // use cypress commands on it
               cy.get('.add-to-cart').eq(index).click()
               cy.get('.text-center').find('a[href*="view_cart"]').click()
               cy.get('.col-sm-6 > .btn').click()
               cy.get(':nth-child(7) > .btn').click()
               
                }
             })*/
           
       

    })

})