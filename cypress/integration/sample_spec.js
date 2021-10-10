
describe('Open and scroll', () => {
    it('Visits the Page', () => {
        cy.visit('http://localhost:3000')
        cy.scrollTo(0, 6000, { duration: 2000 })
        cy.scrollTo(0, 6000, { duration: 2000 })
    })
})

describe('Search Something', () => {
    it('Search a pokemon', () => {
        cy.get('input')
        .type('b')
        .type('u')
        .type('l')
        .type('b')
        .type('a')
        .type('s')
        .type('a')
        .type('u')
        .type('r')
    })
})