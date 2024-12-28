/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string): Chainable<void>
      openUserMenu(): Chainable<void>
      openSettings(): Chainable<void>
      openProfile(): Chainable<void>
    }
  }
}

// Test credentials that match our mock data
const TEST_USER = {
  username: 'john.doe',
  password: 'password123',
  email: 'john.doe@business.com'
}

// Login through the UI
Cypress.Commands.add('login', (username = TEST_USER.username) => {
  cy.visit('http://localhost:3000/login')
  cy.get('input[type="text"]').type(username)
  cy.get('input[type="password"]').type(TEST_USER.password)
  cy.get('button[type="submit"]').click()
  
  // Wait for redirect and auth state to update
  cy.url().should('eq', 'http://localhost:3000/')
  // Verify user is logged in by checking for email in header
  cy.contains(TEST_USER.email).should('be.visible')
})

// Open user menu dropdown
Cypress.Commands.add('openUserMenu', () => {
  cy.contains(TEST_USER.email).click()
})

// Open settings panel
Cypress.Commands.add('openSettings', () => {
  cy.openUserMenu()
  cy.contains('Settings').click()
})

// Open profile dialog
Cypress.Commands.add('openProfile', () => {
  cy.openUserMenu()
  cy.contains('Profile').click()
})

export {}
