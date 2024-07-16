/* eslint-disable no-undef */
describe('Marketplace', () => {

  describe('Going to My Services', () => {

    it('Given I am on the Marketplace page', () => {
      cy.visit('/')
    })

    it('When I click on My Services', () => {
      cy.get('.nav-link').click()
      cy.url().should('include', '/deployment')
    })

    it('Then I should see the My Services page', () => {
      cy.contains('My Services').should('to.have.length', 1)
      cy.contains('Uuid').should('to.have.length', 1)
      cy.get('tr > :nth-child(2)').contains('Service').should('to.have.length', 1)
      cy.contains('Status').should('to.have.length', 1)
      cy.contains('URL').should('to.have.length', 1)
    })
  })

  describe('Going to Marketplace', () => {

    it('Given I am on the My Services page', () => {
      cy.visit('/deployment')
    })

    it('When I click on Marketplace', () => {
      cy.contains('Marketplace').click()
      cy.url().should('include', '/')
    })

    it('Then I should see the Marketplace page', () => {
      cy.contains('Choose a service').should('to.have.length', 1)
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

    it('When I click on Create my Wordpress', () => {
      cy.contains('Create my Wordpress').click()
      cy.visit('/deployment/create/wordpress')
      cy.contains('Please fill in the required information to create the service.').should('to.have.length', 1)
    })

    it('And I click on Create my wordpress without fill out the form', () => {
      cy.contains('Create my wordpress').click()
    })

    it('Then I should see an error message and stay on the same page', () => {
      cy.contains('Please fill in the required information to create the service.').should('to.have.length', 1)
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

    it('When I click on Create my Wordpress', () => {
      cy.contains('Create my Wordpress').click()
    })

    it('Then I should see the Wordpress service creation page', () => {
      cy.visit('/deployment/create/wordpress')
      cy.contains('Create service wordpress').should('to.have.length', 1)
    })

    it('And I fill out the form', () => {
      cy.get('#subdomain').type('test')
      cy.get('#user').type('Testing')
      cy.get('#password').type('123456')
      cy.get('#passwordConfirmation').type('123456')
    })

    it('And I click on Create my wordpress', () => {
      cy.contains('Create my wordpress').click()
    })

    it('Then I should see the Wordpress service creation details page', () => {
      cy.contains('Create service wordpress').should('to.have.length', 1)
      cy.contains('Instance:').should('to.have.length', 1)
      cy.contains('Status').should('to.have.length', 1)
      cy.get('.alert-info').should('to.have.length', 1)
      cy.contains('Cluster status').should('to.have.length', 1)
      cy.get('.alert-success').should('to.have.length', 1)
      cy.contains('Service logs').should('to.have.length', 1)
      cy.get('.align-itens-start > :nth-child(2) > h3').contains('Details').should('to.have.length', 1)
      cy.get('.align-itens-start > :nth-child(2) > .row > :nth-child(2)').contains('wordpress').should('to.have.length', 1)
      cy.get(':nth-child(4) > a').contains('test').should('to.have.length', 1)
    })
  })

  describe('Checking the Wordpress service in My Services', () => {

    it('Given I am on the Marketplace page', () => {
      cy.visit('/')
    })

    it('When I click on My Services', () => {
      cy.get('.nav-link').click()
    })

    it('Then I should see the My Services page', () => {
      cy.contains('My Services').should('to.have.length', 1)
      cy.contains('Uuid').should('to.have.length', 1)
      cy.get('tr > :nth-child(2)').contains('Service').should('to.have.length', 1)
      cy.get('tbody > tr > :nth-child(2)').contains('wordpress').should('to.have.length', 1)
      cy.contains('Status').should('to.have.length', 1)
      cy.contains('URL').should('to.have.length', 1)
      cy.get('tbody > tr > :nth-child(4)').contains('test').should('to.have.length', 1)
    })

    it('And I click on the Wordpress service', () => {
      cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    })

    it('Then I should see the Wordpress service creation details page', () => {
      cy.get('h2').should('to.have.length', 1)
      cy.contains('Instance:').should('to.have.length', 1)
      cy.contains('Status').should('to.have.length', 1)
      cy.contains('Cluster status').should('to.have.length', 1)
      cy.contains('Service logs').should('to.have.length', 1)
      cy.get('.align-itens-start > :nth-child(2) > h3').contains('Details').should('to.have.length', 1)
      cy.get('.align-itens-start > :nth-child(2) > .row > :nth-child(2)').contains('wordpress').should('to.have.length', 1)
      cy.get(':nth-child(4) > a').contains('test').should('to.have.length', 1)
    })
  })
})