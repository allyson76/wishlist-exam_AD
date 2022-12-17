/// <reference types="cypress"/>
import Auth from '../page/login.page'
import loginData from '../data/loginData'
import Favourites from '../page/wishlist.page'

describe('Wishlist', () => {
  beforeEach(() => {
    cy.visit('/')
    Auth.loginUser(loginData.validuser.email, loginData.validuser.password)
  })

  it('Add a single product to Favourites', () => {
    cy.get(Favourites.pageTitle).should('be.visible')
    cy.get(Favourites.productTitle).should('be.visible')
    cy.get(Favourites.wishlistIcon).should('be.visible')
    cy.get(Favourites.wishlistIcon).click()
    cy.get(Favourites.addedMsg).contains('Quality Fitted Hat added to favorites')
  })

  it('Add multiple products to Favourites', () => {
    cy.url().should('contain', '/products')
    cy.get(Favourites.productTitle).should('be.visible')
    cy.get(Favourites.wishlistIcon).should('be.visible')
    cy.get(Favourites.wishlistIcon).click()
    cy.get(Favourites.addedMsg).contains('Quality Fitted Hat added to favorites')

    cy.get(Favourites.product2Title).should('be.visible')
    cy.get(Favourites.wishlist2Icon).should('be.visible')
    cy.get(Favourites.wishlist2Icon).click()
    cy.get(Favourites.addedMsg).contains('Quality Mousepad added to favorites')
    cy.get(Favourites.favouriteBtn).should('have text', 2)
  })

  it('Remove from Favourites', () => {
    cy.get(Favourites.pageTitle).should('be.visible')
    cy.get(Favourites.productTitle).should('be.visible')
    cy.get(Favourites.wishlistIcon).should('be.visible')
    cy.get(Favourites.wishlistIcon).click()
    cy.get(Favourites.addedMsg).contains('Quality Fitted Hat added to favorites')
    cy.get(Favourites.favouriteBtn).should('have text', 1)
    cy.get(Favourites.favouriteBtn).click()
    cy.get(Favourites.productTitle).should('exist')
    cy.get(Favourites.removedBtn).should('be.visible')
    cy.get(Favourites.removedBtn).click()
    cy.get(Favourites.removedMsg).contains('Quality Fitted Hat removed from favorites')
  })

  it('View product in Favourites/Wishlist', () => {
    cy.url().should('contain', '/products')
    cy.get(Favourites.pageTitle).should('be.visible')
    cy.get(Favourites.productTitle).should('be.visible')
    cy.get(Favourites.wishlistIcon).should('be.visible').click()
    cy.get(Favourites.addedMsg).contains('Quality Fitted Hat added to favorites')
    cy.get(Favourites.favouriteBtn).should('have text', 1)
    cy.get(Favourites.favouriteBtn).click()
    cy.url().should('contain', '/favorites')
    cy.get(Favourites.favTitle).should('have text', 'Favorites')
    cy.get(Favourites.productTitle).should('exist')
    cy.get(Favourites.removedBtn).should('be.visible')
  })

  it('View a product in Favourites/Wishlist when wishlist is empty', () => {
    cy.get(Favourites.pageTitle).should('be.visible')
    cy.get(Favourites.productTitle).should('be.visible')
    cy.get(Favourites.wishlistIcon).should('be.visible')
    cy.get(Favourites.wishlistIcon).dbclick()
    cy.get(Favourites.addedMsg).contains('Quality Fitted Hat removed from favorites')
    cy.get(Favourites.favouriteBtn).click()
    cy.get(Favourites.emptyCart).should('be.visible')
    cy.get(Favourites.productTitle).should('not.exist')
  })
})