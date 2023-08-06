context('TextInput', function () {
    beforeEach(function () {
        cy.visit('/textinput')
    })

    it('Проверка изменения кнопки', () => {
        cy.get('button[id="updatingButton"]').click()
        cy.get('button[id="updatingButton"]').should('have.text', 'Button That Should Change it\'s Name Based on Input Value')
        cy.get('input[class="form-control"]').type('qwerty')
        cy.get('button[id="updatingButton"]').click()
        cy.get('button[id="updatingButton"]').should('have.text', 'qwerty')
    });
})