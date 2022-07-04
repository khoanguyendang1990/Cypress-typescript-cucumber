import BasePage from "./BasePage.pom"
export default class ServiceRequestsPage extends BasePage
{
    getCreateNewRequestBtn()
    { 
        return cy.get('.css-1gpauhq > .MuiTypography-root')
    }

    getTypeOfRequestDropdownList()
    {
        return cy.get('#type-of-requests')
    }
    selectTypeOfRequestDropdownList(value:string)
    { 
        this.selectDropdownList('#type-of-requests','.MuiMenuItem-root',value)
    }

    getDetailsOfIssue()
    {
        return cy.get('input[name="condo_service_request_title"]')
    }

    getLocation()
    {
        return cy.get('textarea[name="condo_service_request_content"]')
    }

    getSubmitBtn()
    {
        return cy.get('button[type="Submit"]')
    }

    getServiceItem()
    {
        return cy.get('.MuiTypography-root')
    }

}
export const serviceRequestPage = new ServiceRequestsPage();