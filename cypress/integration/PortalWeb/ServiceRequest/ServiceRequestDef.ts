/// <reference types="Cypress"/>
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import {loginPage} from "../../../pageObject/PortalWeb/LoginPage.pom"
import {navBar} from "../../../pageObject/PortalWeb/NavBar.pom"
import {serviceRequestPage} from "../../../pageObject/PortalWeb/ServiceRequestsPage.pom"

Given('I login to the Portal web page', dataTable =>
{
    dataTable.hashes().forEach(row => {
        loginPage.login(row.email,row.password)
    });
    navBar.getHomeMenu().should('have.text','Home')
    navBar.getAnnouncementsMenu().should('have.text','Announcements')
})

And('I navigate to Service request page', ()=>
{
    navBar.getServiceRequestMenu().click()
})

When('I add the new service request', ()=>
{
    serviceRequestPage.getCreateNewRequestBtn().click()
    
})

And('I select type of request {string}', typeOfRequest =>
{
    serviceRequestPage.selectTypeOfRequestDropdownList(typeOfRequest)
})

And('I input the details of the issue {string}', detailValue =>
{
    serviceRequestPage.getDetailsOfIssue().type(detailValue)
})

And('I input the location {string}', locationValue =>
{
    serviceRequestPage.getLocation().type(locationValue)
})

And('I click the submit button', () =>
{
    serviceRequestPage.getSubmitBtn().click()
})

Then('The new service request is created successfully with title {string}', (titleValue) =>
{
    cy.contains('Create successfully')
    cy.contains(titleValue)
})