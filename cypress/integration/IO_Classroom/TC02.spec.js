/// <reference types="Cypress"/>
// Pulling environment from cypress.json
//cypress.env()


describe('Login', function(){
    
        it('Sign in', function(){
            cy.request({
                url: 'https://auth.ioeducation.com/users/sign_in',                
                method: 'POST',
                body : {
                   
                    user:{username:'cdhutekar-c@illuminateed.net', password:'Chetan@3701'}
                }
            }).its('body').then(res => res.body.skedulaApiToken)
       
    
        
      
    })
})