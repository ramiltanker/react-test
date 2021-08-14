describe('counter works correctly', function() {
    before(function() {
      cy.visit('http://localhost:3000');
    });
  
      it('should add and subtract products count', function() {
      cy.get('#counter').as('counter');
      cy.get('@counter').find('[data-testid="decrement"]').first().as('minusButton');
      cy.get('@counter').find('[data-testid="increment"]').last().as('plusButton');
      cy.get('@counter').find('[data-testid="count"]').as('countValue');
  
      cy.get('@countValue').should('contain', '0');
  
      cy.get('@plusButton').click();
      cy.get('@countValue').should('contain', '1');
  
      cy.get('@plusButton').click();
      cy.get('@countValue').should('contain', '2');
  
      cy.get('@minusButton').click();
      cy.get('@countValue').should('contain', '1');
  
      cy.get('@minusButton').click();
      cy.get('@countValue').should('contain', '0');
    });
  }); 