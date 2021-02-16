/// <reference types="Cypress"/>
//This import the login.js 
import login from '../Pageobject/login.js'

// This create instance of login.js
const log_in = new login()
// runs before all the test in the block
before(() => {
    cy.sessionLogin()
});
// runs before each test in the block
beforeEach( () => {
    cy.fixture('env_variable.json').as('env')
    Cypress.Cookies.preserveOnce("ASP.NET_SessionId")
    cy.get('@env').then(env => {
    cy.visit(env.auth_url)
    })
})

describe('School User', function(){
    it('Login to school', function(){  
                 log_in.login()
                 log_in.proceed_school()
                 cy.title().should('eq','Dashboard')
                })
            })
    
describe('Admin User', function(){
        it('Login to admin portal', function(){
                 log_in.login()
                 log_in.proceed_admin()
                 cy.title().should('eq','School List')
                })
            })

describe('Impersonate User', function(){
        it('Login to impersonate', function(){
                 log_in.login()
                 log_in.proceed_impersonate()
                 cy.title().should('eq','Troubleshoot')
                })
            })
// runs after all the test in the block
after(() => {
    log_in.logout()
    cy.title().should('eq','IO Classroom')
  })