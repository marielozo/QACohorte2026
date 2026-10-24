describe('Checkout', () => {
  beforeEach(() => {
    cy.login('standard_user','secret_sauce')
    cy.addToCart('backpack')

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('compra completa', () => {
    cy.fixture('checkout',checkout=>{
      cy.completeForm(checkout.name, checkout.lastName, checkout.postalCode)
    cy.finalizarCompra()
    })
    
  })

  it('sin nombre muestra error', () => {
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'First Name is required')
  })

  it('sin código postal muestra error', () => {
  cy.fixture('checkout',checkout=>{
      cy.completeForm(checkout.name, checkout.lastName,)
        cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Postal Code is required')
    })


  })
})