/// <reference types="Cypress"/>
// Pulling environment from cypress.json
//cypress.env


import login from '../Pageobject/login.js'


const log_in = new login()


beforeEach( () => {

    cy.visit('/')
    cy.fixture('user.json').as('user')
})

describe('Login', function(){

    
    
        it('Login to school', function(){
            cy.get('@user').then(user => {
                 log_in.loginui(user.email,user.password)
                 log_in.proceed_school()
                 cy.title().should('eq','Dashboard') 
            })
        })
        it('Login to admin portal', function(){

            cy.get('@user').then(user => {
                 log_in.loginui(user.email,user.password)
                 log_in.proceed_admin()
                 cy.title().should('eq','School List')
            })
        })
        it('Login to impersonate', function(){

            cy.get('@user').then(user => {
                 log_in.loginui(user.email,user.password)
                 log_in.proceed_impersonate()
                 cy.title().should('eq','Troubleshoot')
            })
       })

    
})

afterEach(() => {
    // runs after each test in the block
    log_in.logout()
    cy.title().should('eq','IO Classroom')
  })