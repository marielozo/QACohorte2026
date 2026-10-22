describe('Sesión', () => {
  it('entra a la pantalla de productos', () => {
     cy.login('standard_user','secret_sauce');
    cy.get('[data-test="title"]').should('have.text', 'Products')
  })

  it('cierra sesión', () => {
   cy.login('standard_user','secret_sauce');
   cy.logout();
     })
})