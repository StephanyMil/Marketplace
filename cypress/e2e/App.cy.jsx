/* eslint-disable no-undef */
describe('Marketplace', () => {

  describe('Going to Meus Serviços', () => {

    it('Given I am on the Marketplace page', () => {
      cy.visit('/')
    })

    it('When I click on Meus Serviços', () => {
      cy.get('.nav-link').click()
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
      cy.get('h3').should('to.have.length', 2)
    })

    it('And I shoul see all the services available', () => {
      cy.get('.card').should('to.have.length', 6)
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

    // Clear local storage after each test
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
      cy.get('h2').should('to.have.length', 1)
      cy.contains('Instância:').should('to.have.length', 1)
      cy.contains('Status').should('to.have.length', 1)
      cy.get('.alert-info').should('to.have.length', 1)
      cy.contains('Status do cluster').should('to.have.length', 1)
      cy.get('.alert-success').should('to.have.length', 1)
      cy.contains('Logs das instâncias').should('to.have.length', 1)
      cy.get('.align-itens-start > :nth-child(2) > h3').contains('Detalhes').should('to.have.length', 1)
      cy.get('.align-itens-start > :nth-child(2) > .row > :nth-child(2)').contains('wordpress').should('to.have.length', 1)
      cy.get(':nth-child(4) > a').contains('test').should('to.have.length', 1)
    })
  })

  describe('Checking the Wordpress service in Meus Serviços', () => {

    it('Given I am on the Marketplace page', () => {
      cy.visit('/')
    })

    it('When I click on Meus Serviços', () => {
      cy.get('.nav-link').click()
    })

    it('Then I should see the Meus Serviços page', () => {
      cy.contains('Meus serviços').should('to.have.length', 1)
      cy.contains('Uuid').should('to.have.length', 1)
      cy.get('tr > :nth-child(2)').contains('Serviço').should('to.have.length', 1)
      cy.get('tbody > tr > :nth-child(2)').contains('wordpress').should('to.have.length', 1)
      cy.contains('Status').should('to.have.length', 1)
      cy.contains('URL').should('to.have.length', 1)
      cy.get('tbody > tr > :nth-child(4)').contains('test').should('to.have.length', 1)
    })

    it('And I click on the Wordpress service', () => {
      cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    })

    it('Then I should see the Detalhes da criação do serviço wordpress page', () => {
      cy.get('h2').should('to.have.length', 1)
      cy.contains('Instância:').should('to.have.length', 1)
      cy.contains('Status').should('to.have.length', 1)
      cy.contains('Status do cluster').should('to.have.length', 1)
      cy.contains('Logs das instâncias').should('to.have.length', 1)
      cy.get('.align-itens-start > :nth-child(2) > h3').contains('Detalhes').should('to.have.length', 1)
      cy.get('.align-itens-start > :nth-child(2) > .row > :nth-child(2)').contains('wordpress').should('to.have.length', 1)
      cy.get(':nth-child(4) > a').contains('test').should('to.have.length', 1)
    })
  })
})