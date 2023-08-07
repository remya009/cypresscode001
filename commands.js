// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//


// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('selectproduct', (productname) => { 
    
    cy.get('h4:nth-child(1)').each(($el, index, $list) => {
        
        if ($el.text().includes(productname)) {
          // wrap this element so we can
          // use cypress commands on it
          cy.get('button.btn.btn-info').eq(index).click()
        }
        })
     })

 
     Cypress.Commands.add('selectproduct001', (clothname) => { 

cy.get('.product-overlay').each(($el, index, $list) => {
                // $el is a wrapped jQuery element
                if ($el.text().includes(clothname)) {
                  // wrap this element so we can
                  // use cypress commands on it
               cy.get('.add-to-cart').eq(index).click()
               cy.get('.text-center').find('a[href*="view_cart"]').click()
               cy.get('.col-sm-6 > .btn').click()
               cy.get(':nth-child(7) > .btn').click()
               
                }
              })

            })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })