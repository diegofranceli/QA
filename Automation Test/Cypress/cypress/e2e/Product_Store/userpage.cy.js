/// <reference types="cypress" />
import user from '../../fixtures/user.json'
const el = require ('../../support/pages/main').ELEMENTS

describe('Checking the elements on user page', () => {
   
    before(() => {
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('Adding to cart', () => {
        cy.clearAllCookies()
        cy.get(el.login_menu_opt).should('exist')
        cy.get(el.login_menu_opt).click()
        cy.wait(1000)
        cy.get(el.username_txt_fiel_login).click().type(user.user)
        cy.wait(1000)
        cy.get(el.password_txt_field_login).click().type(user.password)
        cy.get(el.login_btn).contains('Log in').click()
        cy.contains('Phones').click()
        cy.contains('Samsung galaxy s6').click()
        cy.contains('Add to cart').click()
        cy.on('window:alert', function(str) { //cy.on para verificar a pop up (alerta)
            expect(str).eql(el.add_to_cart_successfully_alert)
        })
        cy.wait(1000)
        cy.on("window:confirm", (t) => { // clicando no botão OK do pop up
           cy.get('button#confirm').click()
        })
        user.Total_Price = user.Total_Price + user.Samsung_galaxy_s6_price
        cy.wait(1000)
        cy.contains('Home (current)').click()
        cy.wait(1000)
        cy.contains('Laptops').click()
        cy.wait(1000)
        cy.contains('Sony vaio i5').click()
        cy.contains('Add to cart').click()
        cy.on('window:alert', function(str) { //cy.on para verificar a pop up (alerta)
            expect(str).eql(el.add_to_cart_successfully_alert)
        })
        cy.wait(1000)
        cy.on("window:confirm", (t) => { // clicando no botão OK do pop up
            cy.get('button#confirm').click()
         })
         user.Total_Price = user.Total_Price + user.Sony_vaio_i5_price
         cy.log(user.Total_Price)
         cy.wait(1000)
         cy.get(el.cart_menu_opt).click()
         cy.contains('Samsung galaxy s6').should('be.visible')
         cy.contains('Sony vaio i5').should('be.visible')
         
      })   
      
      

})