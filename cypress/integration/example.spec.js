describe('zozo card lp should work', () => {
	it('Visits the Kitchen Sink', () => {
		cy.visit('https://zozo.jp/_card/')
		cy.scrollTo(0, 100)
		cy.get('.p-card-application-balloon').should('exist')
		cy.get('.p-card-application').screenshot('screenshot.png')
	})
})
