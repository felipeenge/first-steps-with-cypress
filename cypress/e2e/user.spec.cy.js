import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
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
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('ImployeeTe')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLiscenceTest')
    cy.get(selectorsList.genericField).eq(7).clear().type('2025-03-10')
    cy.get(selectorsList.dataCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    cy.get(selectorsList.genericComboBox).eq(0).click({ force: true })
    cy.get(selectorsList.secondItemComboBox).click()
    cy.get(selectorsList.genericComboBox).eq(1).click({ force: true })
    cy.get(selectorsList.thirdItemCombobox).click()

  })
  it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
