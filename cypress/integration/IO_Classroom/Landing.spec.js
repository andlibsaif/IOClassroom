/// <reference types="Cypress"/>
//This import the login.js 
import login from '../Pageobject/login.js'
import landing from '../Pageobject/landing.js'
// This create instance of login.js
const log_in = new login()
const landing_page= new landing()
// runs before all the test in the block
before(() => {
    cy.sessionLogin()
});
// runs before each test in the block
beforeEach( () => {
    Cypress.Cookies.preserveOnce("ASP.NET_SessionId")
    cy.fixture('env_variable.json').as('env')

    cy.get('@env').then(env => {
    cy.visit(env.auth_url)
    })
})

describe('School User', function(){
    it('Login to school', function(){  
                 log_in.login()
                 log_in.proceed_school()
                 cy.title().should('eq','Dashboard')
                 landing_page.mailIconClick()
                })
            })
    
