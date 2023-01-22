///<reference types="cypress" />

import { visitHomePage } from '../helpers/actionsToNavigate';

describe('Tests the header of the website', () => {
    beforeEach(() => {
        visitHomePage();
    })

    it('Verifies the presence of the header image.', () => {
        cy.get('#saved-logo-regular');
    })

    it('Tests the presence and function of the header menu.', () => {
        //Tests the "About Us" link.
        cy.get('#menu-item-2722')
            .contains('About Us')
            .click();
        cy.url().should('include', 'firstbaptistgrandview.org/about-us');

        //Tests the "New Here?" link.
        cy.get('#menu-item-22')
            .contains('New Here?')
            .click();
        cy.url().should('include', 'firstbaptistgrandview.org/new-here');

        //Tests the "Ministries" link.
        cy.get('#menu-item-2741')
            .contains('Ministries')
            .click();
        cy.url().should('include', 'firstbaptistgrandview.org/ministries');

        //Tests the "Resources" link.
        cy.get('#menu-item-3195')
            .contains('Resources')
            .click();
        cy.url().should('include', 'firstbaptistgrandview.org/resources');

        //Tests the "The Gospel" link.
        cy.get('#menu-item-3212')
            .contains('The Gospel')
            .click();
        cy.url().should('include', 'firstbaptistgrandview.org/the-gospel');

        //Tests the "Give Online" link.
        cy.get('#menu-item-3199')
            .contains('Give Online')
            .click();
        cy.url().should('include', 'firstbaptistgrandview.org/online-giving');
    })

    it('Tests the search and social media links in the header menu.', () => {
        //Tests the search button.
        cy.get('#saved-header-search-open').click();
        cy.get('.saved-search-field > input').should('be.visible');

        //Tests the Facebook link.
        cy.get('#saved-header-icons > .saved-list-icons > :nth-child(1) > .mdi')
            .should('have.attr', 'href')
            .and('include', 'facebook.com/firstbaptistgrandview');

        //Tests the YouTube link.
        cy.get('#saved-header-icons > .saved-list-icons > :nth-child(2) > .mdi')
            .should('have.attr', 'href')
            .and('include', 'youtube.com/channel/UCb6ZhRagw1kxW1AeSd14eIA');
    })
})