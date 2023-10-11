Cypress.Commands.add('fillFirstNameField', (name) => {
  cy.get('[name="first_name"]').type(name)
})

Cypress.Commands.add('fillLastNameField', (surname) => {
  cy.get('[name="last_name"]').type(surname)
})

Cypress.Commands.add('fillEmailField', (email) => {
  cy.get('[name="email"]').type(email)
})

Cypress.Commands.add('fillPasswordField', (password) => {
  cy.get('[name="password"]').type(password)
})

Cypress.Commands.add('confirmPassword', (password) => {
  cy.get('[name="confirm_password"]').type(password)
})

Cypress.Commands.add('fillrequiredFormFields', ({ name, surname, email, password }) => {
  cy.fillFirstNameField(name)
  cy.fillLastNameField(surname)
  cy.fillEmailField(email)
  cy.fillPasswordField(password)
  cy.confirmPassword(password)
})

Cypress.Commands.add('unlockSliderCaptcha', (data) => {
  cy.get('#slider-track').invoke('width').as('width')
  cy.get('@width').then(width => {
    cy.get('#slider-thumb').invoke('width').as('sliderWidth')
    cy.get('@sliderWidth')
      .then(sliderWidth => {
        const endDot = width - sliderWidth
        cy.get('#slider-thumb')
          .trigger('mousedown', { which: 1, pageX: 0, pageY: 0 })
          .trigger('mousemove', { which: 1, pageX: `${endDot}`, pageY: 0 })
          .trigger('mouseup')
      })
      .then(() => {
        cy.get('#slider-thumb').should('have.text', 'Unlocked')
        cy.get('#captcha_solved').should('have.value', 'true')
      })
  })
})

Cypress.Commands.add('partiallySlideSubmitSlider', (data) => {
  cy.get('#slider-track').invoke('width').as('width')
  cy.get('@width').then(width => {
    cy.get('#slider-thumb').invoke('width').as('sliderWidth')
    cy.get('@sliderWidth')
      .then(sliderWidth => {
        const endSliderDot = width - sliderWidth
        const startSliderDot = 0
        let slideTo = Math.random() * (endSliderDot - startSliderDot) + startSliderDot
        cy.get('#slider-thumb')
          .trigger('mousedown', { which: 1, pageX: 0, pageY: 0 })
          .trigger('mousemove', { which: 1, pageX: `${slideTo}`, pageY: 0 })
          .trigger('mouseup')
      })
  })
})

Cypress.Commands.add('submitForm', () => {
  cy.get('[type="submit"]').click()
})

Cypress.Commands.add('uploadAvatar', (pathToFile) => {
  cy.get('input[type=file]').selectFile(pathToFile)
})

Cypress.Commands.add('backToForm', () => {
  cy.contains('a', 'Back to Form').click()
})