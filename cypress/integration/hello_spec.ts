describe('TypeScript', () => {
  it('tests', () => {
    cy.visit('http://localhost:51111')
    cy.get('/')
      .should('contain', 'Hello, cypress!')
  })
})
