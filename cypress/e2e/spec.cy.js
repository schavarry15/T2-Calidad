describe('T2', () => {
    beforeEach('Iniciando Sesión', () => {
        cy.visit(Cypress.env('pageUrl'))
        cy.get('#Agregar1').click()
        cy.get('#Username1').type('admin')
        cy.get('#Password1').type('admin')
        cy.get('#Iniciar1').click()

    })
    it('Agregando, Entrando a la Biblioteca', () => {
        cy.visit(Cypress.env('pageUrl'))
        cy.get('#Agregar1').click()
        cy.get('#Mibiblioteca1').click()
        cy.visit(Cypress.env('pageUrl') + '/Biblioteca')
        cy.location('pathname').should('eq', '/Biblioteca')

    })
    it('Leyendo la Biblioteca', () => {
        cy.visit(Cypress.env('pageUrl') + '/Biblioteca')
        cy.get('#Leyendo1').click()
    })
    it('Terminando en la Biblioteca', () => {
        cy.visit(Cypress.env('pageUrl') + '/Biblioteca')
        cy.get('#Terminado1').click()
    })
})