context('VerifyText', function () {
    beforeEach(function () {
        cy.visit('/verifytext')
    })

    it('Верификация текста', () => {
        cy.get('div[class="bg-primary"]').should('include.text', 'Welcome UserName!')
    });
})