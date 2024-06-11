class DashboardPage {

    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
        }

        return selectors
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid)
    }
}

export default DashboardPage