/// <reference types="cypress" />
import { faker } from '@faker-js/faker';


describe('API test for Petstore', () => {
    const random_ID = Math.floor(Math.random() * 1000000);
    it('Finds Pets by status - Available', () => {
        const URL_Petstore = 'https://petstore.swagger.io/v2/pet/findByStatus?status=available'
        cy.request({
            method: 'GET',
            url: URL_Petstore

        }).then((response)=>{
            expect(response.status).to.eq(200)
            // convertendo o response de json para string
            const firstPet = response.body[0] //0 -> pegando o primeiro resultado da pesquisa
            cy.log(JSON.stringify(firstPet, null, 2))
        })

    })   


    it('Finds Pets by invalid status', () => {
        const URL_Petstore = 'https://petstore.swagger.io/v2/pet/findByStatus?status=test'
        cy.request({
            method: 'GET',
            url: URL_Petstore

        }).then((response)=>{
    
            // Mostrar na tela qual o status code da aquisição 
            const firstPet = response.status
            cy.log(JSON.stringify(firstPet, null, 2))//printando o resultado convertendo json para string
            expect(response.status).to.eq(400)
        })

    })  
    
    it('Checking the name type (string)', () => {
        const URL_Petstore = 'https://petstore.swagger.io/v2/pet/findByStatus?status=available'
        cy.request({
            method: 'GET',
            url: URL_Petstore

        }).then((response)=>{
    
           
            // response.body.forEach((pet) => {
            //    const firstPet = pet.name
            //     cy.log(JSON.stringify(firstPet, null, 2))
                expect(pet.name).to.be.a('string')
            // }) 
        })

    })   


    it('Add a new pet to the store', () => {
        const URL_Petstore = 'https://petstore.swagger.io/v2/pet'

        cy.request({
            method: 'POST',
            url: URL_Petstore,
            body:{
                "id": random_ID,
                "name": "Diego",
                "status": "available"
              }

        }).then((response)=>{
    
            expect(response.status).to.eq(200)
            expect(response.body.id).to.equal(random_ID)
            expect(response.body.name).to.equal('Diego')
            expect(response.body.status).to.equal('available')
        })

    }) 

    it('Update a pet to the store', () => {
        const URL_Petstore = 'https://petstore.swagger.io/v2/pet'
        const firstName = faker.name.firstName()
        cy.request({
            method: 'PUT',
            url: URL_Petstore,
            body:{
                "id": 999,
                "name": firstName,
                "status": "available"
              }

        }).then((response)=>{
    
            expect(response.status).to.eq(200)
            expect(response.body.id).to.equal(999)
            expect(response.body.name).to.equal(firstName)
            expect(response.body.status).to.equal('available')
        })

    })
      
    it('Delete a pet', () => {
        const URL_Petstore = 'https://petstore.swagger.io/v2/pet/'+random_ID
  
        cy.request({
            method: 'DELETE',
            url: URL_Petstore

        }).then((response)=>{
    
            expect(response.status).to.eq(200)
            
        })

        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/'+random_ID,
            failOnStatusCode: false

        }).then((response_get)=>{
            expect(response_get.status).to.eq(404)
            expect(response_get.body.message).to.equal('Pet not found')
        })


    })

      

})