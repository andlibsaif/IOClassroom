/// <reference types="Cypress"/>
// Pulling environment from cypress.json
//cypress.env


import login from '../Pageobject/login.js'


const log_in = new login()

beforeEach( () => {
    //let user
    //cy
      //  .intercept('POST','https://www.skedula.com/').as('login')
       // .intercept('POST', 'https://auth.ioeducation.com/users/sign_in').as('loginDetail')
          
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

afterEach(() => {
    // runs after each test in the block
    log_in.logout()
  })


describe('Login', function(){
    //let cypress
    
        it('Login to school', function(){

            cy
            .get('@user')
            .then(user => {
                 log_in.login(user.email,user.password)
                 log_in.proceed_school()
                 
            })
        })
        it('Login to admin portal', function(){

            cy
            .get('@user')
            .then(user => {
                 log_in.login(user.email,user.password)
                 log_in.proceed_admin()
            })
        })
        it('Login to impersonate', function(){

            cy
            .get('@user')
            .then(user => {
                 log_in.login(user.email,user.password)
                 log_in.proceed_impersonate()
            })
       })

    
})

