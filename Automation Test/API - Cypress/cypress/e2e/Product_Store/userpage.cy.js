/// <reference types="cypress" />
import user_fixture from '../../fixtures/user.json'
import  '../../support/commands.js'
const el = require ('../../support/pages/main').ELEMENTS


describe('Checking the elements on user page', () => {

    beforeEach(() => {                   
          cy.visit('https://www.demoblaze.com/index.html')
      })

    it('Adding to cart', () => {
        cy.clearAllLocalStorage
        // cy.login({ user: user_fixture.user, password: user_fixture.password })  // sets a cookie
        cy.contains('Phones').click()
        cy.contains('Samsung galaxy s6').click()
        cy.get('.col-sm-12 > h3')
            .invoke('text')
            .then((text) => {
                const product_value = (text.split(' ')[0]).replace('$','');
                const s6Price = parseInt(product_value);
                cy.wrap(s6Price).as('s6Price');
            });

            cy.go('back');
            cy.get('a')
              .contains('Sony vaio i5')
              .click();
            cy.get('.col-sm-12 > h3')
              .invoke('text') // pega tudo de texto dentro do elemento .col-sm-12 > h3
              .then((text) => {
                cy.log(text) // printou $820 *includes tax
                const product_value = (text.split(' ')[0]).replace('$',''); //separou o texto por espaço utilizando a primeira parte do vetor($820) e depois substitiu o $ por nada
                cy.log(product_value)
                const sonyValue = parseInt(product_value); //transforma a string para float para fazer as contas
                cy.wrap(sonyValue).as('sonyValue');
                cy.log(sonyValue)

              });
        
            // Soma os preços e exibe o valor da soma
            

        cy.go('back');
        cy.contains('Phones').click()
        cy.contains('Samsung galaxy s6').click()
        cy.contains('Add to cart').click()
        // cy.on('window:alert', function(str) { //cy.on para verificar a pop up (alerta)
        //     expect(str).eql(el.add_to_cart_successfully_alert)
        // })
        cy.wait(1000)
        cy.on("window:confirm", (t) => { // clicando no botão OK do pop up
           cy.get('button#confirm').click()
        })
    
        cy.wait(1000)
        cy.contains('Home (current)').click()
        cy.wait(1000)
        cy.contains('Laptops').click()
        cy.wait(1000)
        cy.contains('Sony vaio i5').click()
        cy.contains('Add to cart').click()
        // cy.on('window:alert', function(str) { //cy.on para verificar a pop up (alerta)
        //     expect(str).eql(el.add_to_cart_successfully_alert)
        // })
        cy.wait(1000)
        cy.on("window:confirm", (t) => { // click on POP UP botton Ok
            cy.get('button#confirm').click()
         })
         
         cy.log(user_fixture.Total_Price)
         cy.wait(1000)
         cy.get(el.cart_menu_opt).click()
         cy.contains('Samsung galaxy s6').should('be.visible')
         cy.contains('Sony vaio i5').should('be.visible')
         
         cy.get('@s6Price').then((s6Price) => {
            cy.get('@sonyValue').then((sonyValue) => {
              const sum = s6Price + sonyValue;
            //   cy.wrap(sum).as('sum_sum');
            //   cy.log(`A soma dos preços do Samsung Galaxy S6 e Nokia Lumia 1520 é de $${sum.toFixed(2)}.`);
            cy.get('#totalp').should('contain', sum)
            });
          });

       })   
      
      

})