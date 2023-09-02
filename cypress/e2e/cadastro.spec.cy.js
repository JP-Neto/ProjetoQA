describe ("Teste de Cadastro ", ()=>{

    beforeEach (() => cy.visit('http://www.automationpractice.pl/index.php'));

    it("TC01 - Criação de conta", () => {

        const email = 'josenetoteste20@gmail.com';
        const fistName = 'Jose';
        const lastName = 'Neto';
        const password='12345';

        cy.get('.login').click();
        cy.get('#email_create').type(email);
        cy.get('#SubmitCreate').click();

        //1º validação
        cy.get('.page-heading').should('be.visible');

        cy.get('#id_gender1').check();
        cy.get('#customer_firstname').type(fistName);
        cy.get('#customer_lastname').type(lastName);
        cy.get('#passwd').type(password);
        cy.get('#days').select("25");
        cy.get('#months').select("10");
        cy.get('#years').select("1990");
        cy.get('#newsletter').check();
        cy.get('#submitAccount').click();

        //2º validação
        cy.get('#center_column').should('contain','Your account has been created.');
        
        
    });


    it("TC02 - Cadastro de Endereço apenas com campos obrigatorios", () => {
        const email = 'josenetoteste2@gmail.com';
        const password ='12345';//5 caracteres minimo
        const address = 'rua da areia';
        const city = 'João Pessoa- PB';
        const postcode = '53575';
        const phone = '8881-8181';

        cy.get('.login').click();
        cy.get('#email').type(email);
        cy.get('#passwd').type(password);
        cy.get('#SubmitLogin').click();
        cy.get('[title="Addresses"]').click();
        cy.get('[title="Add an address"]').click();

        //1º validação
        cy.get('#center_column').should('contain','Your addresses');

        cy.get('#address1').type(address);
        cy.get('#city').type(city);
        cy.get('#postcode').type(postcode);
        cy.get('#phone').type(phone);
        cy.get('#id_state').select("8");
        cy.get('#submitAddress').click();
        //2º validação
        cy.get('#addresses').should('contain','Your addresses are listed below.');
    
    });

   


})