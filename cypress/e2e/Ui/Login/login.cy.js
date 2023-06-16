    describe('testes da tela de login', () => {
        beforeEach(() => {
            cy.visit('/login')
        });


        it('Teste 1 Login validado', () => {
            
            cy.logado(Cypress.env('emailUsario'),Cypress.env('senhaUsuario'))
            cy.get('b').should('have.text',Cypress.env('usuarioNome'))
        
        });
        it('Teste 2 Tentativa de Login com senha invalida', () => {
            
            cy.logado(Cypress.env('emailUsario'),'bbbb')

            cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
        });
        it('Teste 3 Tentativa de Login invalida e senha correta', () => {
            
            cy.logado('aaaaaaaa@xkzm.com',Cypress.env('senhaUsuario'))
            
            cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
        
        });
        it('Teste 4 Tentativa de Login e senha invalida', () => {
            
            cy.logado('aaaaaaaa@xkzm.com','993884nadf')
            
            cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
        
        });
        it('Teste 5 Login sem o @ e senha correta', () => {
            
            cy.logado(Cypress.env('usuarioSem@'),Cypress.env('senhaUsuario'))
            
            
        });
        
        
    });