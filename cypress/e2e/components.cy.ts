describe('Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('Click Counter', () => {
    it('should increment count when clicked', () => {
      // Get initial state
      cy.contains('Click Me!').should('be.visible')
      cy.contains('Total Clicks').should('not.exist')

      // Click the button
      cy.contains('Click Me!').click()

      // Check loading state
      cy.contains('Counting...').should('be.visible')

      // Check final state
      cy.contains('Total Clicks:').should('be.visible')
      cy.contains('1').should('be.visible')

      // Click again
      cy.contains('Click Me!').click()
      cy.contains('2').should('be.visible')
    })
  })

  describe('Metrics Chart', () => {
    it('should display the chart with correct data', () => {
      // Check chart title
      cy.contains('Monthly Revenue').should('be.visible')

      // Check axis labels
      cy.contains('Jan').should('be.visible')
      cy.contains('Jul').should('be.visible')

      // Check if the chart SVG exists
      cy.get('svg').should('exist')

      // Check if line path exists
      cy.get('path.recharts-curve').should('exist')

      // Check tooltip interaction with force: true
      cy.get('path.recharts-curve').trigger('mouseover', { force: true })
      cy.get('.recharts-tooltip-wrapper').should('be.visible')
    })

    it('should show all months and have interactive tooltips', () => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

      // Verify all months are visible
      months.forEach(month => {
        cy.contains(month).should('be.visible')
      })

      // Test tooltip interaction at start of chart
      cy.get('.recharts-line-curve').trigger('mousemove', {
        force: true,
        clientX: 100,
        clientY: 200
      })
      cy.get('.recharts-tooltip-wrapper').should('be.visible')
      
      // Wait a bit for the tooltip to update
      cy.wait(500)

      // Test tooltip at middle of chart
      cy.get('.recharts-line-curve').trigger('mousemove', {
        force: true,
        clientX: 300,
        clientY: 200
      })
      cy.get('.recharts-tooltip-wrapper').should('be.visible')
    })
  })
})
