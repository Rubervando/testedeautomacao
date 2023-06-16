const elementos = require ('../../../support/Elements/GlobalElements').ELEMENTS
const massaDeDados = require('faker-br');


describe('teste validos na tela de cadastro', () => {
    beforeEach(() => {
        cy.visit('/login')

    });    
    it('teste 01 Cadastro com sucesso', () => {
        var nomeUsuario = massaDeDados.name.firstName();

        cy.get(elementos.campoNome).type(nomeUsuario)
        cy.get(elementos.campoEmail).type(massaDeDados.internet.email())
        cy.get(elementos.botaoSignup).click()
        cy.get('#id_gender1').click()
        cy.get('[data-qa="password"]').type(Cypress.env('senhaUsuario'))
        
        cy.get('[data-qa="days"]').select('10')
        cy.get('[data-qa="months"]').select('January')
        cy.get('[data-qa="years"]').select('2002')
        cy.get('#newsletter').click()
        cy.get('#optin').click()

        cy.get('[data-qa="first_name"]').type(nomeUsuario)
        cy.get('[data-qa="last_name"]').type(massaDeDados.name.lastName())
        cy.get('[data-qa="company"]').type('abraço de golira')
        cy.get('[data-qa="address"]').type('rua dos bobos numero 0')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('bem ai')
        cy.get('[data-qa="city"]').type('la cula')
        cy.get('[data-qa="zipcode"]').type('60888888')
        cy.get('[data-qa="mobile_number"]').type('(85)9 9999 9999')

        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click()
        cy.get('b').should('have.text', nomeUsuario)


    });
    it('teste 02 Cadastro com sucesso', () => {
        var nomeUsuario = massaDeDados.name.firstName();

        cy.get(elementos.campoNome).type(nomeUsuario)
        cy.get(elementos.campoEmail).type(massaDeDados.internet.email())
        cy.get(elementos.botaoSignup).click()
        cy.get('#id_gender1').click()
        cy.get('[data-qa="password"]').type(Cypress.env('senhaUsuario'))
        
        cy.get('[data-qa="days"]').select('10')
        cy.get('[data-qa="months"]').select('January')
        cy.get('[data-qa="years"]').select('2002')
        cy.get('#newsletter').click()
        cy.get('#optin').click()

        cy.get('[data-qa="first_name"]').type(nomeUsuario)
        cy.get('[data-qa="last_name"]').type(massaDeDados.name.lastName())
        cy.get('[data-qa="company"]').type('abraço de golira')
        cy.get('[data-qa="address"]').type('rua dos bobos numero 0')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('bem ai')
        cy.get('[data-qa="city"]').type('la cula')
        cy.get('[data-qa="zipcode"]').type('60888888')
        cy.get('[data-qa="mobile_number"]').type('(85)9 9999 9999')

        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click()
        cy.get('b').should('have.text', nomeUsuario)

    });
    it('teste 03 Cadastro com sucesso', () => {
        var nomeUsuario = massaDeDados.name.firstName();

        cy.get(elementos.campoNome).type(nomeUsuario)
        cy.get(elementos.campoEmail).type(massaDeDados.internet.email())
        cy.get(elementos.botaoSignup).click()
        cy.get('#id_gender1').click()
        cy.get('[data-qa="password"]').type(Cypress.env('senhaUsuario'))
        
        cy.get('[data-qa="days"]').select('10')
        cy.get('[data-qa="months"]').select('January')
        cy.get('[data-qa="years"]').select('2002')
        cy.get('#newsletter').click()
        cy.get('#optin').click()

        cy.get('[data-qa="first_name"]').type(nomeUsuario)
        cy.get('[data-qa="last_name"]').type(massaDeDados.name.lastName())
        cy.get('[data-qa="company"]').type('abraço de golira')
        cy.get('[data-qa="address"]').type('rua dos bobos numero 0')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('bem ai')
        cy.get('[data-qa="city"]').type('la cula')
        cy.get('[data-qa="zipcode"]').type('60888888')
        cy.get('[data-qa="mobile_number"]').type('(85)9 9999 9999')

        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click()
        cy.get('b').should('have.text', nomeUsuario)


    });

    it('teste 04 Cadastro com sucesso', () => {
        var nomeUsuario = massaDeDados.name.firstName();

        cy.get(elementos.campoNome).type(nomeUsuario)
        cy.get(elementos.campoEmail).type(massaDeDados.internet.email())
        cy.get(elementos.botaoSignup).click()
        cy.get('#id_gender1').click()
        cy.get('[data-qa="password"]').type(Cypress.env('senhaUsuario'))
        
        cy.get('[data-qa="days"]').select('10')
        cy.get('[data-qa="months"]').select('January')
        cy.get('[data-qa="years"]').select('2002')
        cy.get('#newsletter').click()
        cy.get('#optin').click()

        cy.get('[data-qa="first_name"]').type(nomeUsuario)
        cy.get('[data-qa="last_name"]').type(massaDeDados.name.lastName())
        cy.get('[data-qa="company"]').type('abraço de golira')
        cy.get('[data-qa="address"]').type('rua dos bobos numero 0')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('bem ai')
        cy.get('[data-qa="city"]').type('la cula')
        cy.get('[data-qa="zipcode"]').type('60888888')
        cy.get('[data-qa="mobile_number"]').type('(85)9 9999 9999')

        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click()
        cy.get('b').should('have.text', nomeUsuario)

    });

});
