/// <reference types="cypress" />

describe("Login",()=>{
    beforeEach("",()=>{
        cy.visit('https://cypress-playground.vercel.app/login');
    });

    it("empty login",()=>{
        cy.get('[data-testid="login-submit"]').click();
        cy.contains(/credenciales inválidas/i).should('be.visible');
    });

    it("invalid credentials",()=>{
        cy.get('[data-testid="login-email"]').type('invalid@user.com');
        cy.get('[data-testid="login-password"]').type('invalidPassword');
        cy.get('[data-testid="login-submit"]').click();
        cy.contains(/credenciales inválidas/i).should('be.visible');
    });

    it("valid credentials",()=>{
        cy.get('[data-testid="login-email"]').type('admin@xacademy.com');
        cy.get('[data-testid="login-password"]').type('cypress123');
        cy.get('[data-testid="login-submit"]').click();
        cy.contains('Inicio de sesión exitoso. Redirigiendo...').should('be.visible');
    });
});