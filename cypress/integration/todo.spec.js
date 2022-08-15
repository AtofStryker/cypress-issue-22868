describe('visit site', () => {
  it('takes a very long time', () => {
    cy.visit('https://qa.cognitivecredit.com/'), {
      timeout: 90000
    }
  })
})