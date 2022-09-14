class pages {

    criarConta = {
        firstName: () => cy.get('input[name="first_name"]').type('Teste'),
        lastName: () => cy.get('input[name="last_name"]').type('Teste'),
        businessName: () => cy.get('input[name="business_name"]').type('Teste'),
        email: () => cy.get('input[type="email"]').type('teste@testao.com.br'),
        // captha: () => cy.get('div .rc-inline-block #recaptcha-anchor').click(),
        buttonSubmit: () => cy.contains('button', 'Submit').click()
    }

}
module.exports = new pages();