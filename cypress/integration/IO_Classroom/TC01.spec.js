/// <reference types="Cypress"/>
// Pulling environment from cypress.json
//cypress.env


import login from '../Pageobject/login.js'




beforeEach( () => {
    let user
    cy
        .intercept('POST','https://www.skedula.com/').as('login')
        .intercept('POST', 'https://auth.ioeducation.com/users/sign_in').as('loginDetail')
          
       // .intercept('POST', '/api/api/Account/Logoff').as('logOff')

    cy
        .fixture('user.json').as('user')

    cy.
        clearCookies();
    cy.
        reload(true);

    cy. 
        visit('/')

  

})


describe('Login', function(){
    let cypress
    const log_in = new login()
        it('Sign in', function(){

            cy
            .get('@user')
            .then(user => {
                 
        log_in.signInButton().click()

        log_in.email().type(user.email)
         
        log_in.signInButton().click()

        log_in.password().type(user.password)

        log_in.signInButton().click()

    
        

       // cy.visit('https://www.skedula.com/home')
       
        cy.visit(Cypress.env('baseUrlP'))


            })
      
    })
})

// describe('GURU: Login Positive', () => {
//     const log_in = new login()
//     it('Positive Login', ()=>{
//         cy
//         .get('@user')
//         .then(user => {
//             log_in.signInButton().click()
//             log_in.email().type(user.email)
//             log_in.signInButton().click()
//             log_in.password().type(user.password)
//             log_in.signInButton().click()
//         cy.wait('@login')
//         .then(loginReq => {
//             expect(loginReq.status).to.eq(200);
//         });
//         cy.wait('@loginDetail')
//         .then(loginDetail => {
//             expect(loginDetail.status).to.eq(200);
//         });
      
//         });
//     });
// });