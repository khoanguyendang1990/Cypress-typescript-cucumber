export default class BasePage
{
    selectDropdownList = (parentLocator:string, dropdownLocator:string, value:string) =>{

        cy.get(parentLocator).click()
        cy.get(dropdownLocator).each(($e1, index, $list) =>
        {
            if($e1.text()===value)
            {
                $e1.trigger('click')
            }
        })
        cy.get(parentLocator).should('have.text',value)
    }

    goToPortalWeb = ()=>{
        cy.visit(Cypress.env('urlPortal'))
    }

    logConsole = (log:string) =>{
        cy.log(`- INFO: ${log}`)
    }
}

// export const selectDropdownList = (parentLocator:string, dropdownLocator:string, value:string) => {
//     cy.get(parentLocator).click()
//         cy.get(dropdownLocator).each(($e1, index, $list) =>
//         {
//             if($e1.text()===value)
//             {
//                 $e1.trigger('click')
//             }
//         })
//         cy.get(parentLocator).should('have.text',value)
// }
export const basePage = new BasePage();