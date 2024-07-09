describe('Navbar', () => {
    it('When click in Meus Serviços should redirect to /deployment', () => {
      cy.visit('/')
      cy.contains('Meus Serviços').click()
      cy.url().should('include', '/deployment')
    })
  
    it('When click in Marketplace should redirect to /', () => {
      cy.visit('/deployment')
      cy.contains('Marketplace').click()
      cy.url().should('include', '/')
    })
})
  