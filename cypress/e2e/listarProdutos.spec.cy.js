describe("Listar Produtos",()=>{

    beforeEach (() => cy.visit('http://www.automationpractice.pl/index.php'));


    it("TC05 - Listar Produtos Femininos", () => {
              
        cy.get('#block_top_menu').click(112.92,59);
        cy.get('#center_column').should('contain','You will find here all woman fashion collections.');
    
        //OK
    });

    it.only("TC06 - Adicionar itens ao carrinho", () => {
              
        
       cy.get('#block_top_menu').click(112.92,59);
       
       cy.get('a[href="http://www.automationpractice.pl/index.php?controller=cart&add=1&id_product=1&token=a180f290da91cdbdd9cbd87c20dc2991"]').click();
       
       cy.get('.fancybox-inner').should('be.visible');

       //Não adiciona Produtos ao carrinho a ferramenta apresenta erros
    
        //OK
    });




})