describe('Test Suite name', async () => {
  it('Test Case name', async () => {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#contact-us > .thumbnail > .section-title > h1').click();
  });
});
