context('Посещение страницы', function () {

    it('Вход на страницу', () => {
        cy.visit('/')
    });

    it('Поиск элемента1', () => {
        cy.get('a[href="/dynamicid"]').click()
    });

})