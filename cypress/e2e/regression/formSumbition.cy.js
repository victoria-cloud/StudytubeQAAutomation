describe("Testing Application Form Submission. Submit form with valid data :", () => {

    beforeEach(() => {
        cy.visit('')
    })

    // Test Case 1: Automate the form submission with valid data and verify that the
    // submission is successful and the data is correctly displayed on the success
    // page.
    it('C001 Form submition with valid data and verify that the submission is successful', () => {
        cy.fixture('userData').then(user => {
            cy.fillrequiredFormFields(user)
            cy.unlockSliderCaptcha()
            cy.submitForm()
            cy.wait(1000)
            cy.url().should('include', '/success')
            cy.contains('h1', 'Successful Form Submissions').should('be.visible')
            cy.get('li').invoke('text').then(text => {
                cy.log(text)
                expect(text).to.contain(`Name: ${user.name} ${user.surname}`)
                expect(text).to.contain(`Email: ${user.email}`)
                expect(text).to.contain('No Avatar Uploaded')
            })
        })
    })


})


