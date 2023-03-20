/// <reference types="cypress" />
const el = require ('../support/pages/main').ELEMENTS

Cypress.Commands.add('login', (user) => {

    cy.get(el.login_menu_opt).should('exist')
    cy.get(el.login_menu_opt).click()
    cy.wait(1000)
    cy.get(el.username_txt_fiel_login).click().type(user.user)
    cy.wait(1000)
    cy.get(el.password_txt_field_login).click().type(user.password)
    cy.get(el.login_btn).contains('Log in').click()
    }
)


