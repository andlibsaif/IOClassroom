class landing{
    // Element for login page all the locator ends with _l
    mail_l(){
    return cy.get('.userNav > :nth-child(4) > a > .fff')
    }

    mailIconClick(){
        this.mail_l().click()
    }
}
export default landing