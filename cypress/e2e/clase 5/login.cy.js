/// <reference types="cypress" />

describe("login",()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com');
    });

    it("login",()=>{
    cy.get('[data-test="username"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible').and('have.attr','type','password');
    cy.get('[data-test="error"]').should('not.exist');
});

    it('succesful login',()=>{
        cy.fixture('login',login=>{
            login.forEach(data=>{
                if(data.site=="saucedemo"){
                    if(data.type=="valid"){
  cy.get('[data-test="username"]').should('be.visible').type(data.user);
    cy.get('[data-test="password"]').should('be.visible').and('have.attr','type','password').type(data.password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include','/inventory.html');
                    }
                }
            });
        });
      
    });

    it('missing credentials',()=>{
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Username is required');
    });

    it("missing password",()=>{
        cy.fixture('login',login=>{
            login.forEach(data=>{
                if(data.site=="saucedemo"){
                    if(data.type=="valid"){

        cy.get('[data-test="username"]').should('be.visible').type(data.user);
        cy.get('[data-test="login-button"]').click();
cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Password is required');
                    }
                }
            });
        });
        
    });

    it("wrong password",()=>{
         cy.fixture('login',login=>{
            login.forEach(data=>{
                if(data.site=="saucedemo"){
                    if(data.type=="invalid"){
          cy.get('[data-test="username"]').should('be.visible').type(data.user);
        cy.get('[data-test="password"]').should('be.visible').and('have.attr','type','password').type(data.password);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Username and password do not match any user in this service');
                    }
                }
            });
        });
      
    });
    
        
});