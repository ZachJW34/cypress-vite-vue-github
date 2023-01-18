describe('app', () => {
  it('should visit', () => {
    cy.visit('/')
    cy.get('button').click().contains('count is 1')
  })
})