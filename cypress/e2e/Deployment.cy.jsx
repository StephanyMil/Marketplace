describe('Deployment', () => {
    it('Should return true when title component was correct', () => {
      cy.visit('/deployment')
      cy.contains('Meus serviços').should('to.have.length', 1)
    })

    it('Should return true when table component is correct', () => {
      cy.visit('/deployment')
      cy.contains('Uuid').should('to.have.length', 1)
      cy.get('tr > :nth-child(2)').contains('Serviço').should('to.have.length', 1)
      cy.contains('Status').should('to.have.length', 1)
      cy.contains('URL').should('to.have.length', 1)
    })
})