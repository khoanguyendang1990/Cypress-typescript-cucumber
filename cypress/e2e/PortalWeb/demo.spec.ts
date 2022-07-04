import { basePage } from "../../pageObject/PortalWeb/BasePage.pom"
import { homePage } from "../../pageObject/PortalWeb/HomePage.pom"
import { loginPage } from "../../pageObject/PortalWeb/LoginPage.pom"
import { navBar } from "../../pageObject/PortalWeb/NavBar.pom"

describe('test demo', () => {

    it('Login to Portal', () =>{
        basePage.logConsole('Navigate to url')
        basePage.goToPortalWeb()
        basePage.logConsole('Input email and password')
        loginPage.login("dev+master@simplysakal.asia","Admin123")
    })

    it('Navigate to service request', () => {
        basePage.logConsole('Click Service request on NavBar')
        navBar.getServiceRequestMenu().click()
        cy.contains('Create successfully 1')
        basePage.logConsole('after')
        cy.contains('Create successfully 2')
    })

    // it('failed step 1', () => {
    //     cy.contains('Create successfully')
    // })

    // it('failed step 2', () => {
    //     cy.contains('Create successfully')
    // })
})