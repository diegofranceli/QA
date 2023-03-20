/// <reference types="cypress" />
import user_fixture from '../../fixtures/user.json'
import  '../../support/commands.js'
const el = require ('../../support/pages/main').ELEMENTS


describe('Checking the elements on user page', () => {

    beforeEach(() => {                   
          cy.visit('https://www.demoblaze.com/index.html')
      })

    it('Adding to cart', () => {
        cy.login({ user: user_fixture.user, password: user_fixture.password })  // sets a cookie
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
        user_fixture.Total_Price = user_fixture.Total_Price + user_fixture.Samsung_galaxy_s6_price
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
         user_fixture.Total_Price = user_fixture.Total_Price + user_fixture.Sony_vaio_i5_price
         cy.log(user_fixture.Total_Price)
         cy.wait(1000)
         cy.get(el.cart_menu_opt).click()
         cy.contains('Samsung galaxy s6').should('be.visible')
         cy.contains('Sony vaio i5').should('be.visible')
         
      })   
      
      

})