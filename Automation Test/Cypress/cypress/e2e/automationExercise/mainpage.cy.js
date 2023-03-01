/// <reference types="cypress" />


describe('checking the elements on main page', () => {
    beforeEach(() => {
      cy.visit('https://automationexercise.com/')
    })
  
    // it('Verify if the page title', () => {
    //     cy.title().should('eq','Automation Exercise')
    // })

    // it('Verify if image is being shown', () => {
    //   cy.get('[alt="Website for automation practice"]').should('be.visible')

    // })

    // it('Verify if the menu options are being shown', () => {
    //   cy.get(' Products')

    // })

    it('Verify if the category are being shown', () => {
      cy.get('Category')

    })

  })


  
  