/// <reference types="Cypress"/>

beforeEach(()=>
{
    cy.fixture('LoginCredentials').then(function(data){
        this.data=data
      })
    cy.visit(Cypress.env('urlPortal'))
})