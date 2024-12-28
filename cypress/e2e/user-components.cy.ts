import { mockUserData } from '../../src/lib/mock/user-data'

const TEST_USER = {
  username: 'john.doe',
  password: 'password123',
  email: 'john.doe@business.com'
}

describe('User Components', () => {
  describe('Authentication', () => {
    it('should show login page when not authenticated', () => {
      cy.visit('http://localhost:3000')
      cy.contains('Sign In').should('be.visible')
      cy.contains(TEST_USER.email).should('not.exist')
    })

    it('should login successfully with valid credentials', () => {
      cy.login()
      cy.contains(TEST_USER.email).should('be.visible')
    })

    it('should redirect to home after login', () => {
      cy.login()
      cy.url().should('eq', 'http://localhost:3000/')
    })
  })

  describe('User Menu', () => {
    beforeEach(() => {
      cy.login()
    })

    it('should display user info and dropdown menu', () => {
      // Check if user email is displayed
      cy.contains(TEST_USER.email).should('be.visible')
      
      // Check if avatar is displayed with correct initials
      const initials = mockUserData.name.split(' ').map(n => n[0]).join('')
      cy.contains(initials).should('be.visible')
      
      // Open and verify dropdown menu
      cy.openUserMenu()
      cy.contains('Profile').should('be.visible')
      cy.contains('Settings').should('be.visible')
      cy.contains('Log out').should('be.visible')
    })

    it('should open profile dialog', () => {
      cy.openProfile()
      
      // Verify profile dialog content
      cy.contains('Business Information').should('be.visible')
      cy.contains(mockUserData.name).should('be.visible')
      cy.contains(mockUserData.role).should('be.visible')
      cy.contains(mockUserData.department).should('be.visible')
    })
  })

  describe('Settings Panel', () => {
    beforeEach(() => {
      cy.login()
      cy.openSettings()
    })

    it('should display all settings sections', () => {
      // Verify section headers
      cy.contains('Notifications').should('be.visible')
      cy.contains('Display').should('be.visible')
      cy.contains('Communication').should('be.visible')
      
      // Verify notification settings
      cy.contains('Email Notifications').should('be.visible')
      cy.contains('Push Notifications').should('be.visible')
      cy.contains('Updates & News').should('be.visible')
      cy.contains('Report Summaries').should('be.visible')
      
      // Verify display settings
      cy.contains('Compact View').should('be.visible')
      cy.contains('Show Metrics').should('be.visible')
      cy.contains('Dashboard Layout').should('be.visible')
      
      // Verify communication settings
      cy.contains('Availability Status').should('be.visible')
      cy.contains('Auto Reply').should('be.visible')
    })

    it('should update notification settings', () => {
      // Toggle email notifications
      cy.get('#email-notif').click()
      cy.get('#email-notif[aria-checked="false"]').should('exist')
      
      // Toggle push notifications
      cy.get('#push-notif').click()
      cy.get('#push-notif[aria-checked="false"]').should('exist')
    })

    it('should update display settings', () => {
      // Toggle compact view
      cy.get('#compact-view').click()
      cy.get('#compact-view[aria-checked="true"]').should('exist')
      
      // Change dashboard layout
      cy.get('#list').click()
      cy.get('#list[aria-checked="true"]').should('exist')
    })

    it('should update communication settings', () => {
      // Change availability status
      cy.contains('Available').click()
      cy.contains('Busy').click()
      cy.contains('Busy').should('be.visible')
      
      // Toggle auto reply
      cy.get('#auto-reply').click()
      cy.get('#auto-reply[aria-checked="true"]').should('exist')
    })
  })

  describe('Logout Functionality', () => {
    beforeEach(() => {
      cy.login()
    })

    it('should log out when clicking logout', () => {
      cy.openUserMenu()
      cy.contains('Log out').click()
      
      // Verify logged out state
      cy.contains('Sign In').should('be.visible')
      cy.contains(TEST_USER.email).should('not.exist')
    })

    it('should redirect to login page after logout', () => {
      cy.openUserMenu()
      cy.contains('Log out').click()
      cy.url().should('include', '/login')
    })
  })
})
