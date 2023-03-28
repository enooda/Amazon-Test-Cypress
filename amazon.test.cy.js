describe ("Test purchasing a Nespresso coffee machine from Amazon.com", () => {

    const signInDetails = {
        email: "cypress.test.batman@gmail.com",
        password: "A0LKop!",
    }

    before(() => {
        cy.log("open website amazon.com")
        cy.visit("https://www.amazon.com/")
      })

    it ("should add a Nespresso coffee machine to the cart and complete the checkout process", () => {

        cy.log("search for coffee machine")
        cy.get("#nav-search-bar-form").type("coffee machine")

        cy.log("click on serach button")
        cy.get("#nav-search-submit-button").click()

        cy.log("check that URL contains searched kw")
        cy.url().should("include", "coffee+machine")

        cy.log("expands Brands and choose filter Nespresso")
        cy.get('[aria-label="See more, Brands"]').click() 
        cy.get('li[aria-label="Nespresso"] i[class*=icon-checkbox]').click()

        cy.log("check that URL contains Nespresso")
        cy.url().should("include", "coffee+machine", "Nespresso")

        cy.log("select products with 4 Stars & Up")
        cy.get('section[aria-label="4 Stars & Up"]').click()

        cy.log("set the highest price to 320 eur")
        cy.get("#high-price").type("320")
        cy.get("#a-autoid-1").click()

        cy.log("choose 6th coffee machine")
        cy.get('div[data-index="6"]').click()

        cy.log("add coffee machine to the shopping cart")
        cy.get('input[name="submit.buy-now"]').click()

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })

          cy.log("log into account")
          cy.get("#ap_email").type(signInDetails.email)
          cy.get("#continue").click()
            
        cy.get("#ap_password").type(signInDetails.password)
        cy.get("#signInSubmit").click()
        
        cy.log("proceed to payment")
        cy.get('input[aria-labelledby="submitOrderButtonId-announce"]').click()

        })
    })