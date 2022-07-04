import BasePage from "./BasePage.pom"
import { navBar } from "./NavBar.pom"

export default class LoginPage extends BasePage
{
    getEmailTextbox()
    {
        return cy.get('#email')
    }

    getPasswordTextbox()
    {
        return cy.get('#password')
    }

    getSignInButton()
    {
        return cy.get('button[type="submit"]')
    }

    login(email: string, password: string){
        this.getEmailTextbox().type(email)
        this.getPasswordTextbox().type(password)
        this.getSignInButton().click()
        navBar.getHomeMenu().should('have.text','Home')
    }
}

export const loginPage = new LoginPage();