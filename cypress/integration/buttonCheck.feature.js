describe('Checking Greeting message', () => {
	it('Testing connection and functionality', () => {
        cy.visit('http://localhost:3001')
        cy.contains('Greetings')
        cy.get('#quote').click()
        })
        it('Message after pressing the button', () => {
                cy.get('#message').should('contain', 'hello how are you')
            })
})