/* eslint-disable */

describe('Navigation', () => {
    it('should navigate to the api docs', () => {
        cy.visit('http://localhost:3000/')
        cy.get('a[href*="api-docs"]').click()
        cy.url().should('include', '/api-docs')

        // The new page should contain an h1 with "About page"
        cy.get('h2').contains('Laddu Notion')
    })
})