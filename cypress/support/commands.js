// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login",(userName, password)=>{
     cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').should('be.visible').type(userName);
    cy.get('[data-test="password"]').should('be.visible').and('have.attr','type','password').type(password);
    cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("logout",()=>{
     cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test="login-button"]').should('be.visible')

});

Cypress.Commands.add("addToCart",(product)=>{
    cy.get(`[data-test="add-to-cart-sauce-labs-${product}"]`).click();
});

Cypress.Commands.add("verifyCartQuantity",(quantity)=>{
    cy.get('[data-test="shopping-cart-badge"]').should('contain',quantity);
});

Cypress.Commands.add("verifyCart",()=>{
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="title"]').should('have.text', 'Your Cart')
});

Cypress.Commands.add("verifyCartProduct",(product)=>{
    cy.get('[data-test="inventory-item-name"]').should('have.text', `Sauce Labs ${product}`)
});