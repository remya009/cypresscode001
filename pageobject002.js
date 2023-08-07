
      class producthomepage{

        getgmail(){
           
            return cy.get('input[data-qa="login-email"]')


        }


        getsignup(){
           
            return cy.get(
                '[data-qa="signup-email"]')
            

        }
        getgender(){
           
            return cy.get('#id_gender2')
            

        }
        getpassword(){
           
            return cy.get('#password')
            

        }
        getdays(){
           
            return cy.get('#days')
            

        }

    }
    export default producthomepage