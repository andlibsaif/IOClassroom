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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("sessionLogin", ()=>{
    
    // despite some information in cypress docs saying this should really
    // never need to be called - this whole pyramid doesn't seem to work
    // if it's not called
    cy.fixture('user.json').as('user')
    cy.clearCookies();

    cy.request({
        url: "https://www.skedula.com/",
        headers: {
            // send a fake cookie to ensure site sends back a fresh session id
            cookie: "ASP.NET_SessionId=x"
        }
    })
      .then(resp => {
        let sessionId = resp.headers.["set-cookie"][0].split(";")[0].split("=")[1];
        cy.get('@user').then(user => {
        cy.request("POST", `https://auth.ioeducation.com/api/v1/auth/authorize`, {
            username: user.email,
            password: user.password,
            client_id: "skedula_id",
            state: sessionId
            })
        }).then(resp => {
            cy.request(`https://www.skedula.com/login.aspx?code=${resp.body.code}&state=${resp.body.state}`).then(resp => {
                cy.setCookie("ASP.NET_SessionId", sessionId);

                cy.request({
                    method: "POST",
                    url: `https://www.skedula.com/auth/login/loginSkedula.aspx`,
                    form: true,
                    body: {
                        DBN: "00X001",
                        Term: "112"
                    }
                }).then(resp => {
                    cy.log("login complete");
                });
            });
        });
      })
});