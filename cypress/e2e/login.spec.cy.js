describe ("Login Test", () => {

beforeEach (() => cy.visit('http://www.automationpractice.pl/index.php'));


it("TC03 - Login com dados Invalidos", () => {
    const email = 'teste2221@gmail.com';
    const password='123455';//senha correta 12345

    cy.get('.login').click();
    cy.get('#email').type(email);
    cy.get('#passwd').type(password);
    cy.get('#SubmitLogin').click();
    cy.get('#center_column').should('contain','error');

    //OK
});

it("TC04 - Login com dados validos", () => {
    const email = 'josenetoteste@gmail.com';
    const password='12345';//senha correta 12345

    cy.get('.login').click();
    cy.get('#email').type(email);
    cy.get('#passwd').type(password);
    cy.get('#SubmitLogin').click();
    cy.get('#center_column').should('contain','Welcome to your account. Here you can manage all of your personal information and orders.');

    //OK
});



})