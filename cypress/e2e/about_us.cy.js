///<reference types="cypress" />

import { visitHomePage } from '../helpers/actionsToNavigate';

describe('Tests the elements of the About Us page.', () => {
    beforeEach(() => {
        visitHomePage();
    })

    it('Tests the elements of the About Us page', () => {
        //Navigates to the "About Us" page.
        cy.get('#menu-item-2722')
            .contains('About Us')
            .click();
        
        //Checks the page title
        cy.get('.saved-h1').contains('About Us');

        //Checks the breadcrumb
        cy.get('.ctfw-breadcrumbs > [href="https://firstbaptistgrandview.org/"]')
            .contains('Home')
            .should('be.visible');
        cy.get('.ctfw-breadcrumbs > [href="https://firstbaptistgrandview.org/about-us/"]')
            .contains('About Us')
            .should('be.visible');

        //Checks the presence of the main content of the page
        cy.get('.saved-entry-content').should('be.visible');
        
        //Checks the widgets at the bottom of the page
        cy.get('#ctfw-events-2').contains('Upcoming Events');
        cy.get('#ctfw-sermons-2').contains('Latest Sermons');
        cy.get('#fbw_id-3').contains('Like Us On Facebook');

        //Verify the presence of the footer social media icons
        cy.get('#saved-footer-icons > .saved-list-icons > :nth-child(1) > .mdi')
            .should('have.attr', 'href')
            .and('include', 'facebook.com/firstbaptistgrandview');
        cy.get('#saved-footer-icons > .saved-list-icons > :nth-child(2) > .mdi')
            .should('have.attr', 'href')
            .and('include', 'youtube.com/channel/UCb6ZhRagw1kxW1AeSd14eIA');

        //Verify the page copyright info
        cy.get('#saved-footer-notice').contains('©');
    })
})