describe("Bienvenido al curso de Cypress seccion 1", () => {

    it("Mi primer test -> Hola mundo", ()=>{
        cy.log("Hola mundo")
        cy.wait(1000)
    })

    it("Segundo test -> campo name",() => {
        cy.visit("https://demoqa.com/text-box")

        cy.get('#userName').type("Vanessa")
        cy.wait(1000)
        
    })
        
})//Cierre de describe
