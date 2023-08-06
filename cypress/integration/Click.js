context('Click', function () {
    beforeEach(function () {
        cy.visit('/click')
    })

    it('Тест с кликом', () => {
        cy.get('button[class="btn btn-primary"]').should('have.css', 'background-color', 'rgb(0, 123, 255)')
            .and('have.class', 'btn btn-primary')
            .and('have.not.class', 'btn btn-success')

        cy.get('button[id="badButton"]').click().should('have.css', 'background-color', 'rgb(40, 167, 69)')
            .and('have.class', 'btn btn-success')
            .and('have.not.class', 'btn btn-primary')
    });
})