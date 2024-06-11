class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }
}

export default MenuPage