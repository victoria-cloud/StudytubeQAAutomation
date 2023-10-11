describe("Testing Application Form Submission. Form fields validation :", () => {

    beforeEach(() => {
        cy.visit('')
    })

    // Test Case 2: Automate form submission with invalid data (e.g., mismatched
    // passwords, invalid email format) and verify that the submission fails and
    // appropriate validation messages are displayed.
    it('C002 Check Form submission with invalid password', () => {
        cy.fixture('invalidPasswordUserData').then(user => {
            cy.fillrequiredFormFields(user)
            cy.unlockSliderCaptcha()
            cy.submitForm()
            cy.contains('Password must be at least 8 characters long!').should('be.visible')

        })
    })

    it('C003 Check Form submission with unmatched password', () => {
        cy.fixture('invalidPasswordUserData').then(user => {
            cy.fillrequiredFormFields(user)
            //enter unmatched password
            cy.get('[name="confirm_password"]').type('unmatchedPassword')
            cy.unlockSliderCaptcha()
            cy.submitForm()
            cy.contains('Passwords do not match!').should('be.visible')

        })
    })

    it('C004 Check Form submission with empty confirm password field', () => {
        cy.fixture('userData').then(user => {
            cy.fillFirstNameField(user.name)
            cy.fillLastNameField(user.surname)
            cy.fillEmailField(user.email)
            cy.fillPasswordField(user.password)
            cy.unlockSliderCaptcha()
            cy.submitForm()
            //user see default browser's hint 'Please fill out this field', form is not submitted, last-name field is focused
            cy.get('[name="confirm_password"]').should('be.focused')
            cy.contains('h1', 'Successful Form Submissions').should('not.exist')
        })
    })

    // here could be a lot of test cases for verifying email but as I see we have only default browser validation 
    it('C005 Check Form submission with invalid email format (without @)', () => {
        cy.fixture('invalidEmailFormatUserData').then(user => {
            cy.fillrequiredFormFields(user)
            cy.unlockSliderCaptcha()
            cy.submitForm()
            //user see default browser's hint, form is not submitted
            cy.contains('h1', 'Successful Form Submissions').should('not.exist')
        })
    })

    it('C006 Check Form submission with empty name field', () => {
        cy.fixture('userData').then(user => {
            cy.fillLastNameField(user.surname)
            cy.fillEmailField(user.email)
            cy.fillPasswordField(user.password)
            cy.confirmPassword(user.password)
            cy.unlockSliderCaptcha()
            cy.submitForm()
            //user see default browser's hint 'Please fill out this field', form is not submitted, first-name field is focused
            cy.get('[name="first_name"]').should('be.focused')
            cy.contains('h1', 'Successful Form Submissions').should('not.exist')
        })
    })

    it('C007 Check Form submission with empty name and surname fields', () => {
        cy.fixture('userData').then(user => {
            cy.fillEmailField(user.email)
            cy.fillPasswordField(user.password)
            cy.confirmPassword(user.password)
            cy.unlockSliderCaptcha()
            cy.submitForm()
            //user see default browser's hint 'Please fill out this field', form is not submitted, first-name field is focused
            cy.get('[name="first_name"]').should('be.focused')
            cy.contains('h1', 'Successful Form Submissions').should('not.exist')
        })
    })

    it('C008 Check Form submission with empty surname field', () => {
        cy.fixture('userData').then(user => {
            cy.fillFirstNameField(user.name)
            cy.fillEmailField(user.email)
            cy.fillPasswordField(user.password)
            cy.confirmPassword(user.password)
            cy.unlockSliderCaptcha()
            cy.submitForm()
            //user see default browser's hint 'Please fill out this field', form is not submitted, last-name field is focused
            cy.get('[name="last_name"]').should('be.focused')
            cy.contains('h1', 'Successful Form Submissions').should('not.exist')
        })
    })

    it('C009 Check Form submission with empty email field', () => {
        cy.fixture('userData').then(user => {
            cy.fillFirstNameField(user.name)
            cy.fillLastNameField(user.surname)
            cy.fillPasswordField(user.password)
            cy.confirmPassword(user.password)
            cy.unlockSliderCaptcha()
            cy.submitForm()
            //user see default browser's hint 'Please fill out this field', form is not submitted, last-name field is focused
            cy.get('[name="email"]').should('be.focused')
            cy.contains('h1', 'Successful Form Submissions').should('not.exist')
        })
    })

    // Test Case 3: Test the slider captcha functionality by attempting form
    // submission without sliding the captcha to the end and verify that the form
    // submission is blocked.
    it('C010 Check Form submission is blocked without sliding the captcha to the end ', () => {
        cy.fixture('userData').then(user => {
            cy.fillrequiredFormFields(user)
            cy.partiallySlideSubmitSlider()
            cy.submitForm()
            cy.contains('Please solve the captcha!').should('be.visible')
        })
    })

})


