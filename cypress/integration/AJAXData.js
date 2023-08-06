context('Посещение страницы', function () {
    beforeEach(function () {
        cy.visit('/ajax')
    })

//Перехват запроса с подменой тела
    it('Асинхронные данные с подменой тела. AJAX Data with intercept', () => {
        cy.intercept('GET', '**/ajaxdata', {
            body: "Peter Pan",
        }).as('ajaxdata') //перехват запроса

        cy.get('button[id="ajaxButton"]').click()
        cy.wait('@ajaxdata')
        cy.get('p[class="bg-success"]').should('have.text', 'Peter Pan')
    });

//Перехват запроса без подмены тела
    it('Асинхронные данные без подмены тела. AJAX Data with intercept', () => {
        cy.intercept('GET', '**/ajaxdata').as('ajaxdata') //перехват запроса

        cy.get('button[id="ajaxButton"]').click()
        cy.wait('@ajaxdata')
        cy.get('p[class="bg-success"]').should('have.text', 'Data loaded with AJAX get request.')
    });

//Перехват запроса с подменой статус-кода
    it('Асинхронные данные с подменой статуса. AJAX Data with intercept', () => {
        cy.intercept('GET', '**/ajaxdata', {
            statusCode: 500,
        }).as('ajaxdata') //перехват запроса

        cy.get('button[id="ajaxButton"]').click()
        cy.wait('@ajaxdata')
        cy.get('p[class="bg-success"]').should('not.exist')
    });
})