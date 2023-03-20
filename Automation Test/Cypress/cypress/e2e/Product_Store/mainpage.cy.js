/// <reference types="cypress" />
import user from '../../fixtures/user.json'
const el = require ('../../support/pages/main').ELEMENTS
import { faker } from '@faker-js/faker';
import user_fixture from '../../fixtures/user.json'
import  '../../support/commands'

let userData = {
  username: faker.internet.userName(),
  password: faker.internet.password()
}

describe('checking the elements on main page', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/index.html')
    })

      it('Verify if the page title', () => {
          cy.title().should('eq',el.store_title)
      })

      it('Verify sign up successfully', () => {
        cy.get(el.signup_menu_opt).should('exist')
        cy.get(el.signup_menu_opt).click()
        cy.wait(1000) //aguarda 1s
        cy.get(el.username_txt_field).click()
        cy.get(el.username_txt_field).type(userData.username)
        cy.wait(1000) //aguarda 1s
        cy.get(el.password_txt_field).click()
        cy.get(el.password_txt_field).type(userData.password)
        cy.get(el.signup_btn).contains('Sign up').click()
        cy.on('window:alert', function(str) { //cy.on para verificar a pop up (alerta)
          expect(str).eql(el.signup_successfully_alert)
        })
        cy.wait(1000)
      })

      it('Verify login successfully', () => {
        cy.login({ user: user_fixture.user, password: user_fixture.password })
      })

  })


  
  