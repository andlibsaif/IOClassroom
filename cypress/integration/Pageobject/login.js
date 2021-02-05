class login{
    
    email_l(){
        return cy.get('#user_username')
    }
    password_l(){
        return cy.get('#user_password')
    }
    signInButton_l(){
        return cy.get('#sign_in')
    }
    logout_l(){
        return cy.get('[href="/logout.aspx"]')
    }

    choose_school_l(){
        return cy.get('#DBN_chzn > .chzn-single > span')
    }

    choose_term_l(){

        return cy.get('#Term_chzn > .chzn-single > span')
    }

    login_school_l(){
        return cy.get('#loginSKD > .ui-button-text')
    }

    login_admin_l(){
        return cy.get('#loginAdmin > .ui-button-text')
    }

    login_impersonate_l(){
        return cy.get('#loginTrouble > .ui-button-text')
    }

    login_user_l(){
        return cy.get('.ui-button-text')
    }

    login(user,pwd){
       this.signInButton_l().click()
       this.email_l().type(user)
       this.signInButton_l().click()
       this.password_l().type(pwd)
       this.signInButton_l().click()
       

    }

    logout(){
        this.logout_l().click()
    }

    proceed_school(){
        this.choose_school_l()
        this.choose_term_l()
        this.login_school_l().click()
    }

    proceed_admin(){
        this.choose_school_l()
        this.choose_term_l()
        this.login_admin_l().click()
    }

    proceed_impersonate(){
        this.choose_school_l()
        this.choose_term_l()
        this.login_impersonate_l().click()
    }

    proceed_user(){
        this.choose_school_l()
        this.choose_term_l()
        this.login_user_l.click()
    }

}
export default login