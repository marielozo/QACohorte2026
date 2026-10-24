/// <reference types="cypress" />

describe("clase 7",()=>{
    beforeEach(()=>{
        cy.visit("https://cypress-playground.vercel.app/forms");
    });

    it("completar formulario",()=>{
        cy.fixture('formulario').then(formulario=>{
            formulario.forEach(data =>{
   cy.get('[data-testid="bp-name"]').clear().type(data.name);
        cy.get('[data-testid="bp-email"]').clear().type(data.email);
        cy.get('[data-testid="bp-comments"]').clear().type(data.comment);
            });
     
        });
      
    });
});