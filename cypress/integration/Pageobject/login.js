class login{
    
    email(){
        return cy.get('#user_username')
    }
    password(){
        return cy.get('#user_password')
    }
    signInButton(){
        return cy.get('#sign_in')
    }
}
export default login