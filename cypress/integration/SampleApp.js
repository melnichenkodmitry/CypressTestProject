context('SampleApp', function () {
    beforeEach(function () {
        cy.visit('/sampleapp')
    })

    it('Попытка логина, позитивный тест', () => {
        cy.get('label[id=loginstatus]').should('include.text', 'User logged out.')

        cy.get('input[name="UserName"]').type('qwerty')
        cy.get('input[name="Password"]').type('pwd')
        cy.get('button[id="login"]').click()

        cy.get('label[id=loginstatus]').should('have.text', 'Welcome, qwerty!')
    });

    it('Попытка логина, негативный тест', () => {
        cy.get('label[id=loginstatus]').should('include.text', 'User logged out.')

        cy.get('input[name="UserName"]').type('qwerty')
        cy.get('input[name="Password"]').type('pwd123')
        cy.get('button[id="login"]').click()

        cy.get('label[id=loginstatus]').should('have.text', 'Invalid username/password')
    });
})