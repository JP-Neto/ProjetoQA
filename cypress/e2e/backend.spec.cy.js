describe ("Backend Test API", () => {

    it("TC 07 - Listar todos os Produtos", () => {
        cy.request('https://automationexercise.com/api/productsList')
            .should(function(response) {
                const { status, statusText } = response;
                expect(status).to.equal(200)
                expect(statusText).to.equal('OK')
            })
    })

    it("TC 08 - Listar Usuario por Email", () => {
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/getUserDetailByEmail',
            body: {
                email:'thow@uol.com.br'
                
            }
        }).should(function(response) {
            const { status, statusText } = response;
            expect(status).to.equal(200)
            expect(statusText).to.equal('OK')
        })
    })

    it("TC 09 - Post para Pesquisar produtos", () => {
     
           cy.request(
            'POST', 'https://automationexercise.com/api/searchProduct', {
            search_product: 'top'
              
        }).should(function(response) {
            const { status, statusText } = response;
            expect(status).to.equal(200)
            expect(statusText).to.equal('OK')

        })
      
    })

    it("TC 10 - Verificação de login", () => {
     
        cy.request('POST', 'https://automationexercise.com/api/verifyLogin', {
            password: 'xxxxxx'
           
     }).should(function(response) {
         const { status, statusText } = response;
         expect(status).to.equal(200)
        expect(statusText).to.equal('OK')

     })
   
 })
})