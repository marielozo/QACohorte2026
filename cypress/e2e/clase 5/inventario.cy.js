/// <reference types="cypress" />

describe("inventario",()=>{
    beforeEach(()=>{
        cy.login('standard_user','secret_sauce');
    });

    it("six products are showing",()=>{
    cy.get('[data-test="inventory-item"]').should('have.length',6);
    cy.get('[data-test="inventory-item-name"]').first().should('have.text','Sauce Labs Backpack');    
    });

    it("carrito",()=>{
    
    cy.addToCart('backpack');
    cy.verifyCartQuantity(1);
    });

    it("ordenar de menor a mayor",()=>{
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)');
        cy.get('[data-test="inventory-item-price"]').first().should('have.text','$7.99');
    });

    it("agregar 2 productos y quitar 1",()=>{
        cy.addToCart('backpack');
        cy.addToCart('bike-light');
        cy.verifyCartQuantity(2);
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.verifyCartQuantity(1);
    });

    it('el producto aparece en el carrito', () => {
    cy.addToCart('backpack');
    cy.verifyCart();
    cy.verifyCartProduct('Backpack');
  })
});