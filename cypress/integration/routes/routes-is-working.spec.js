describe('app works correctly with routes', function() {
    before(function() {
      cy.visit('http://localhost:3000');
    });
  
    it('should open default page', function() {
      cy.contains('Рецепт пельменей');
    });
  
    it('should open cards page after "cards" button click', function() {
      cy.get('a').contains('Cards').click();
      cy.contains('Текст карточки');
    });
  
    it('should open agreement page after continue button click', function() {
      cy.contains('Обычная доставка').click();
      cy.get('button').contains('Продолжить оформление').click();
      cy.contains('Подтверждение заказа');
    });
  }); 