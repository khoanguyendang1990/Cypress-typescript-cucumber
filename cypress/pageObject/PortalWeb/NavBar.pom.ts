import BasePage from "./BasePage.pom";

export default class NavBar extends BasePage{

    getHomeMenu()
    {
        return cy.get('.css-1rarb74 > [href="/"]')
    }
    
    getAnnouncementsMenu()
    {
        return cy.get('.css-1rarb74 > [href="/announcements"]')
    }

    getServiceRequestMenu()
    {
        return cy.get('.css-1rarb74 > [href="/service-requests"]')
    }
}

export const navBar = new NavBar();