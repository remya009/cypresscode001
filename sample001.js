describe('testcasesuite001',function(){

    it('testcase001',function(){

        cy.visit('https://www.automationexercise.com/login')
        cy.get('input[name="name"]').type('Remya')
        cy.get('[data-qa="signup-email"]').type("reeganbatra1@gmail.com")
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('#id_gender2').check().should('be.checked')
        cy.get('#password').type('Shiva007')
        cy.get('#days').select('10').should('have.value',"10")
        cy.get('#months').select('August').should('have.value',"8")
        cy.get('#years').select('2000').should('have.value',"2000")
        cy.get('#newsletter').check().should('be.checked')
        cy.get('#first_name').type('Jean')
        cy.get('#last_name').type('justus')
        cy.get('#company').type('Cognizant')
        cy.get('#address1').type('Dunluce')
        cy.get('#country').select('Canada').should('have.value',"Canada")
        cy.get('#state').type('Toronto')
        cy.get('#city').type('Ontario')
        cy.get('#zipcode').type('56466')
        cy.get('#mobile_number').type('4534563456')
        cy.get('button').contains('Create Account').click()
     
        
        

    })
})