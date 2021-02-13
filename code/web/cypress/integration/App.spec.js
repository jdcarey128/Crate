describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('button')
    cy.contains('Next')
    .click()
    cy.get('button')
    cy.contains('Next')
    .click()
    cy.get('button')
    cy.contains('Next')
    .click()
    cy.get('.jsx-1228826222')
    .click()
  })

  it("should display a title and a nav bar", () => {
    cy.contains('Crate')
    cy.contains('nav')
  })

  it("should be able to log in", () => {
    cy.get('[href="/user/login"]')
      .click()
    cy.get('input')
      .first()
      .type("user@crate.com")
    cy.get('input')
      .last()
      .type("123456")
    cy.get('button')
      .contains('Login')
      .click()
    cy.contains('Logging in, please wait...')
      .should('be.visible')
    cy.contains('Crates for everyone')
      .should('be.visible')
    cy.contains('Clothes for Men')
      .should('be.visible')
  })

  it("logging in with the wrong credentials should not work", () => {
    cy.get('[href="/user/login"]')
      .click()
    cy.get('input')
      .first()
      .type("superMegaLoser@bunk.com")
    cy.get('input')
      .last()
      .type("p@ssw0rd")
    cy.get('button')
      .contains('Login')
      .click()
    cy.contains('We do not have any user registered with superMegaLoser@bunk.com email address. Please signup.')
      .should('be.visible')

  })

  it("should be able to see user's info after login", () => {
    cy.get('[href="/user/login"]')
      .click()
    cy.get('input')
      .first()
      .type("user@crate.com")
    cy.get('input')
      .last()
      .type('123456')
    cy.get('button')
      .contains('Login')
      .click()
    cy.get('[href="/user/profile"]')
      .click()
    cy.contains('The User')
    .should('be.visible')
    cy.contains('user@crate.com')
    .should('be.visible')
    cy.contains('Shipping Address:')
    .should('be.visible')
    cy.contains('Description:')
      .should('be.visible')
    cy.get('img')
      .should('be.visible')
  })

  it("should be able to edit profile", () => {
    cy.get('[href="/user/login"]')
      .click()
    cy.get('input')
      .first()
      .type("user@crate.com")
    cy.get('input')
      .last()
      .type('123456')
    cy.get('button')
      .contains('Login')
      .click()
    cy.get('[href="/user/profile"]')
      .click()
    cy.get('button')
      .contains('Edit Profile')
      .click()
    cy.contains('Edit Profile')
      .should('be.visible')
    cy.get('[style="width: 25em; margin: 0px auto;"] > :nth-child(1) > .jsx-3002558909')
      .type('{selectall}{backspace}')
    cy.get(':nth-child(2) > .jsx-3002558909')
      .type('{selectall}{backspace}')
    cy.get(':nth-child(3) > .jsx-3002558909')
      .type('{selectall}{backspace}')
  })

  it("should be able to add a description", () => {
    cy.get('[href="/user/login"]')
      .click()
    cy.get('input')
      .first()
      .type("user@crate.com")
    cy.get('input')
      .last()
      .type('123456')
    cy.get('button')
      .contains('Login')
      .click()
    cy.get('[href="/user/profile"]')
      .click()
    cy.get('button')
      .contains('Edit Profile')
      .click()
    cy.get(':nth-child(3) > .jsx-3002558909')
      .type('{selectall}{backspace}')
      .type('I am a fake person, a husk, I only exist to subscribe to crates that never arrive').should('have.value', 'I am a fake person, a husk, I only exist to subscribe to crates that never arrive')
    cy.get('button')
      .contains('Save')
      .click()
    cy.contains('Profile saved successfully.')
    cy.get('[style="text-align: right;"] > div > [href="/user/profile"]')
    .click()
    cy.contains('I am a fake person, a husk, I only exist to subscribe to crates that never arrive')
      .should('be.visible')
  })

  it("should be able to add a different description", () => {
    cy.get('[href="/user/login"]')
      .click()
    cy.get('input')
      .first()
      .type("user@crate.com")
    cy.get('input')
      .last()
      .type('123456')
    cy.get('button')
      .contains('Login')
      .click()
    cy.get('[href="/user/profile"]')
      .click()
    cy.get('button')
      .contains('Edit Profile')
      .click()
    cy.get(':nth-child(3) > .jsx-3002558909')
      .type('{selectall}{backspace}')
      .type('This is a description').should('have.value', 'This is a description')
    cy.get('button')
      .contains('Save')
      .click()
    cy.contains('Profile saved successfully.')
    cy.get('[style="text-align: right;"] > div > [href="/user/profile"]')
    .click()
    cy.contains('This is a description')
      .should('be.visible')
  })

  it("should be able to add a shipping address", () => {
    cy.get('[href="/user/login"]')
      .click()
    cy.get('input')
      .first()
      .type("user@crate.com")
    cy.get('input')
      .last()
      .type('123456')
    cy.get('button')
      .contains('Login')
      .click()
    cy.get('[href="/user/profile"]')
      .click()
    cy.get('button')
      .contains('Edit Profile')
      .click()
    cy.get(':nth-child(2) > .jsx-3002558909')
      .type('{selectall}{backspace}')
      .type('424242 MeaningOfLife Ave').should('have.value', '424242 MeaningOfLife Ave')
    cy.get('button')
      .contains('Save')
      .click()
    cy.contains('Profile saved successfully.')
    cy.get('[style="text-align: right;"] > div > [href="/user/profile"]')
    .click()
    cy.contains('This is a description')
      .should('be.visible')
    cy.contains('424242 MeaningOfLife Ave')
      .should('be.visible')
  })

  it("should be able to add a different shipping address", () => {
    cy.get('[href="/user/login"]')
      .click()
    cy.get('input')
      .first()
      .type("user@crate.com")
    cy.get('input')
      .last()
      .type('123456')
    cy.get('button')
      .contains('Login')
      .click()
    cy.get('[href="/user/profile"]')
      .click()
    cy.get('button')
      .contains('Edit Profile')
      .click()
    cy.get(':nth-child(2) > .jsx-3002558909')
      .type('{selectall}{backspace}')
      .type('123 Fakey Dr').should('have.value', '123 Fakey Dr')
    cy.get('button')
      .contains('Save')
      .click()
    cy.contains('Profile saved successfully.')
    cy.get('[style="text-align: right;"] > div > [href="/user/profile"]')
    .click()
    cy.contains('This is a description')
      .should('be.visible')
    cy.contains('123 Fakey Dr')
      .should('be.visible')
  })

  it("should not update any info if the Cancel button is clicked", () => {
    cy.get('[href="/user/login"]')
      .click()
    cy.get('input')
      .first()
      .type("user@crate.com")
    cy.get('input')
      .last()
      .type('123456')
    cy.get('button')
      .contains('Login')
      .click()
    cy.get('[href="/user/profile"]')
      .click()
    cy.get('button')
      .contains('Edit Profile')
      .click()
    cy.get(':nth-child(2) > .jsx-3002558909')
      .type('{selectall}{backspace}')
      .type('OH NO BAD DATA VERY BAD').should('have.value', 'OH NO BAD DATA VERY BAD')
    cy.get(':nth-child(3) > .jsx-3002558909')
      .type('{selectall}{backspace}')
      .type('NOT GOOD DONT SAVE THIS').should('have.value', 'NOT GOOD DONT SAVE THIS')
    cy.get('button')
      .contains('Cancel')
      .click()
    cy.contains('This is a description')
      .should('be.visible')
    cy.contains('123 Fakey Dr')
      .should('be.visible')
  })

  it("should show all current info as values in input fields for editing", () => {
    cy.get('[href="/user/login"]')
      .click()
    cy.get('input')
      .first()
      .type("user@crate.com")
    cy.get('input')
      .last()
      .type('123456')
    cy.get('button')
      .contains('Login')
      .click()
    cy.get('[href="/user/profile"]')
      .click()
    cy.get('button')
      .contains('Edit Profile')
      .click()
    cy.get('[style="width: 25em; margin: 0px auto;"] > :nth-child(1) > .jsx-3002558909')
      .should('have.value', 'user@crate.com')
    cy.get('[style="width: 25em; margin: 0px auto;"] > :nth-child(2) > .jsx-3002558909')
      .should('have.value', '123 Fakey Dr')
    cy.get('[style="width: 25em; margin: 0px auto;"] > :nth-child(3) > .jsx-3002558909')
      .should('have.value', 'This is a description')
  })
})