import { loginURL } from "../../utils/SpotifyLogin";

describe('Spotify', () => {

    it('frontpage can be opened', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Piperlab')
    })

    it('login message when navigate without login', () => {
        cy.visit('http://localhost:3000/menu')
        cy.contains('sesión')
    })

    it('user can click login button', () => {
        cy.visit(loginURL())
        cy.get('input').first().type("test@test.com")
    })

})