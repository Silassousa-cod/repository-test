import pages from '../support/pages';

beforeEach(() => {
    cy.visit('/')
});

describe('Cadastro de usuário', () => {
    it('efetuar cadastro de um novo usuário com sucesso', () => {
    pages.criarConta.firstName()
    pages.criarConta.lastName()
    pages.criarConta.businessName()
    pages.criarConta.email()
    pages.criarConta.buttonSubmit()
    });
});