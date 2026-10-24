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
        cy.fixture('login',login=>{
            login.forEach(data=>{
                if(data.site=="playground"){
                    if(data.type=="invalid"){
   cy.get('[data-testid="login-email"]').type(data.user);
        cy.get('[data-testid="login-password"]').type(data.password);
        cy.get('[data-testid="login-submit"]').click();
        cy.contains(/credenciales inválidas/i).should('be.visible');
                    }
                }
            });
        });
     
    });

    it("valid credentials",()=>{
          cy.fixture('login',login=>{
            login.forEach(data=>{
                if(data.site=="playground"){
                    if(data.type=="valid"){
        cy.get('[data-testid="login-email"]').type(data.user);
        cy.get('[data-testid="login-password"]').type(data.password);
        cy.get('[data-testid="login-submit"]').click();
        cy.contains('Inicio de sesión exitoso. Redirigiendo...').should('be.visible');
                    }
                }
            });
        });

    });
});