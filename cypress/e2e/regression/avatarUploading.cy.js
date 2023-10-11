describe("Testing Application Form Submission. Uploading Avatar :", () => {

    beforeEach(() => {
        cy.visit('')
    })

    // Test Case 4: Test the form with various types of images for the avatar and
    // verify that the uploaded image is correctly displayed on the success page.
    // Supported extensions: JPG, JPEG, PNG, GIF, BMP, 2MB max)
    const avatars = [
        'cypress/fixtures/avatarLessThen2MB_png.png',
        'cypress/fixtures/avatarLessThen2MB_jpg.jpg',
        'cypress/fixtures/avatarLessThen2MB_jpeg.jpeg',
        'cypress/fixtures/avatarLessThen2MB_bmp.bmp',
        'cypress/fixtures/avatar_2MB_bmp.bmp',
    ]

    avatars.forEach((avatar, index) => {
        it(`C011-${index} Check Form submission with [.png, .jpg, .bmp, .jpeg] avatar upload and verify that the submission is successful`, () => {
            cy.fixture('userData').then(user => {
                cy.fillrequiredFormFields(user)
                //upload file
                cy.get('input[type=file]').selectFile(avatar)
                cy.unlockSliderCaptcha()
                cy.submitForm()
                cy.wait(1000)
                cy.url().should('include', '/success')
                cy.contains('h1', 'Successful Form Submissions').should('be.visible')
                cy.get('li').invoke('text').then(text => {
                    expect(text).to.contain(`Name: ${user.name} ${user.surname}`)
                    expect(text).to.contain(`Email: ${user.email}`)
                })
                //check uploaded correct file 
                cy.get('li img').invoke('attr', 'src').then(src => {
                    let fileExtension = src.split('.').pop()
                    expect(fileExtension).to.equal(avatar.split('.').pop())
                })
            })

        })
    })

    // this test is failed: gif-avatar is not uploaded but user redirecred to success page with NO AVATAR UPLOADED
    it('C012 Check Form submission with [.gif] avatar upload and verify that the submission is successful', () => {
        cy.fixture('userData').then(user => {
            cy.fillrequiredFormFields(user)
            //upload file
            cy.get('input[type=file]').selectFile('cypress/fixtures/avatarLessThen2MB_gif.gif')
            cy.unlockSliderCaptcha()
            cy.submitForm()
            cy.wait(1000)
            cy.url().should('include', '/success')
            cy.contains('h1', 'Successful Form Submissions').should('be.visible')
            cy.get('li').invoke('text').then(text => {
                cy.log(text)
                expect(text).to.contain(`Name: ${user.name} ${user.surname}`)
                expect(text).to.contain(`Email: ${user.email}`)
            })
            cy.get('li img')
                .should('have.attr', 'alt', 'Avatar')
        })
    })

    it('C013 Check Form is not submited with .png avatar upload more then 2MB', () => {
        cy.fixture('userData').then(user => {
            cy.fillrequiredFormFields(user)
            cy.get('input[type=file]').selectFile('cypress/fixtures/avatarMoreThen2MB_png.png')
            cy.unlockSliderCaptcha()
            cy.submitForm()
            cy.contains('li', 'File size must be less than 2 MB.').should('be.visible')
        })
    })

    it('C014 Check Form is not submited with .bmp avatar upload more then 2MB', () => {
        cy.fixture('userData').then(user => {
            cy.fillrequiredFormFields(user)
            cy.get('input[type=file]').selectFile('cypress/fixtures/avatarMoreThen2MB_bmp.bmp')
            cy.unlockSliderCaptcha()
            cy.submitForm()
            cy.contains('li', 'File size must be less than 2 MB.').should('be.visible')
        })
    })
})


