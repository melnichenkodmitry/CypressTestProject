context('AJAX Data', function () {
    beforeEach(function () {
        cy.visit('/ajax')
    })

    it('Асинхронные данные с подменой тела', () => {
        cy.intercept('GET', '**/ajaxdata', {
            body: "Peter Pan",
        }).as('ajaxdata') //перехват запроса

        cy.get('button[id="ajaxButton"]').click()
        cy.wait('@ajaxdata')
        cy.get('p[class="bg-success"]').should('have.text', 'Peter Pan')
    });

    it('Асинхронные данные без подмены тела', () => {
        cy.intercept('GET', '**/ajaxdata').as('ajaxdata') //перехват запроса

        cy.get('button[id="ajaxButton"]').click()
        cy.wait('@ajaxdata')
        cy.get('p[class="bg-success"]').should('have.text', 'Data loaded with AJAX get request.')
    });

    it('Асинхронные данные с подменой статуса', () => {
        cy.intercept('GET', '**/ajaxdata', {
            statusCode: 500,
        }).as('ajaxdata') //перехват запроса

        cy.get('button[id="ajaxButton"]').click()
        cy.wait('@ajaxdata')
        cy.get('p[class="bg-success"]').should('not.exist')
    });
})