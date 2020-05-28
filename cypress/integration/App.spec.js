describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('opens with user auth', () => {
        cy.visit ('/');
        cy.get('[data-cy=auth]').should('contain', 'linx');
      });

    it('logs users in when clicked', () => {
        cy.visit ('/');
        cy.get('[data-cy=started]').click();
        cy.get('[data-cy=showInfo]').should('contain', 'organize links');
    });

  });