class MyInfoPage {

    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dataField: "[placeholder='yyyy-dd-mm']",
            genericComboBox: ".oxd-select-text--arrow",
            dataCloseButton: ".--close",
            secondItemComboBox: '.oxd-select-dropdown > :nth-child(27)',
            thirdItemCombobox: '.oxd-select-dropdown > :nth-child(2)',
            submitButton: "[type='submit']",
        }

        return selectors
    }

    fillPersonalDetails(FirstName, LastName) {
        cy.get(this.selectorsList().firstNameField).clear().type('FirstName')
        cy.get(this.selectorsList().lastNameField).clear().type('LastName')
    }

    fillEmployeeDetails(employeeID, otherId, driverLiscenceNumber, expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeID)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLiscenceNumber)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(expiryDate)
        cy.get(this.selectorsList().dataCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click({ force: true })
        cy.get(this.selectorsList().secondItemComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({ force: true })
        cy.get(this.selectorsList().thirdItemCombobox).click()
    }


}

export default MyInfoPage