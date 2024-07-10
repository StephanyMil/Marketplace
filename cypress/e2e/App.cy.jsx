describe('Marketplace', () => {

  describe('Going to Meus Serviços', () => {

    it('Given I am on the Marketplace page', () => {
      cy.visit('/')
    })

    it('When I click on Meus Serviços', () => {
      cy.contains('Meus Serviços').click()
      cy.url().should('include', '/deployment')
    })

    it('Then I should see the Meus Serviços page', () => {
      cy.contains('Meus serviços').should('to.have.length', 1)
      cy.contains('Uuid').should('to.have.length', 1)
      cy.get('tr > :nth-child(2)').contains('Serviço').should('to.have.length', 1)
      cy.contains('Status').should('to.have.length', 1)
      cy.contains('URL').should('to.have.length', 1)
    })
  })

  describe('Going to Marketplace', () => {

    it('Given I am on the Meus Serviços page', () => {
      cy.visit('/deployment')
    })

    it('When I click on Marketplace', () => {
      cy.contains('Marketplace').click()
      cy.url().should('include', '/')
    })

    it('Then I should see the Marketplace page', () => {
      cy.contains('Escolha um serviço').should('to.have.length', 1)
      cy.contains('Web').should('to.have.length', 1)
      cy.contains('Banco de dados').should('to.have.length', 1)
    })
  })

  describe('Creating a Wordpress service - failure', () => {

    it('Given I am on the Marketplace page', () => {
      cy.visit('/')
    })

    it('When I click on Criar meu Wordpress', () => {
      cy.contains('Criar meu Wordpress').click()
      cy.visit('/deployment/create/wordpress')
      cy.contains('Por favor preencha as informações obrigatórias para a criação do serviço.').should('to.have.length', 1)
    })

    it('And I click on Criar meu wordpress without fill out the form', () => {
      cy.contains('Criar meu wordpress').click()
    })

    it('Then I should see an error message and stay on the same page', () => {
      cy.contains('Por favor preencha as informações obrigatórias para a criação do serviço.').should('to.have.length', 1)
    })
    after(() => {
      cy.clearLocalStorage()
    })
  })

  describe('Creating a Wordpress service - success', () => {
   
    it('Given I am on the Marketplace page', () => {
      cy.visit('/')
    })

    it('When I click on Criar meu Wordpress', () => {
      cy.contains('Criar meu Wordpress').click()
    })

    it('Then I should see the Criação de serviço wordpress page', () => {
      cy.visit('/deployment/create/wordpress')
      cy.contains('Criação de serviço wordpress').should('to.have.length', 1)
    })

    it('And I fill out the form', () => {
      cy.get('#subdomain').type('test')
      cy.get('#user').type('Testing')
      cy.get('#password').type('123456')
      cy.get('#passwordConfirmation').type('123456')
    })

    it('And I click on Criar meu wordpress', () => {
      cy.contains('Criar meu wordpress').click()
    })

    it('Then I should see the Detalhes da criação do serviço wordpress page', () => {
      cy.contains('Detalhes da criação do serviço wordpress').should('to.have.length', 1)
      cy.contains('Instância:').should('to.have.length', 1)
      cy.contains('Status').should('to.have.length', 1)
      cy.contains('Status do cluster').should('to.have.length', 1)
      cy.contains('Logs das instâncias').should('to.have.length', 1)
      cy.contains('Detalhes').should('to.have.length', 1)
      cy.get('.align-itens-start > :nth-child(2) > .row > :nth-child(2)').contains('wordpress').should('to.have.length', 1)
      cy.get(':nth-child(4) > a').contains('test').should('to.have.length', 1)
    })
  })

  describe('Checking the Wordpress service in Meus Serviços', () => {

    it('Given I am on the Marketplace page', () => {
      cy.visit('/')
    })

    it('When I click on Meus Serviços', () => {
      cy.contains('Meus Serviços').click()
    })

    it('And I click on the Wordpress service', () => {
      cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    })

    it('Then I should see the Detalhes da criação do serviço wordpress page', () => {
      cy.contains('Detalhes da criação do serviço wordpress').should('to.have.length', 1)
      cy.contains('Instância:').should('to.have.length', 1)
      cy.contains('Status').should('to.have.length', 1)
      cy.contains('Status do cluster').should('to.have.length', 1)
      cy.contains('Logs das instâncias').should('to.have.length', 1)
      cy.contains('Detalhes').should('to.have.length', 1)
      cy.get('.align-itens-start > :nth-child(2) > .row > :nth-child(2)').contains('wordpress').should('to.have.length', 1)
      cy.get(':nth-child(4) > a').contains('test').should('to.have.length', 1)
    })
  })
})