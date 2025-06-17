/// <reference types="cypress" />

describe('Testes no DemoQA', () => {

  // Teste Positivo: Preenchimento de formulário com sucesso
  it('Deve preencher o formulário de texto corretamente', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.get('#userName').type('João da Silva');
    cy.get('#userEmail').type('joao@email.com');
    cy.get('#currentAddress').type('Rua A, 123');
    cy.get('#permanentAddress').type('Rua B, 456');
    cy.get('#submit').click();

    // Validações
    cy.get('#name').should('contain', 'João da Silva');
    cy.get('#email').should('contain', 'joao@email.com');
  });

  // Teste Positivo: Seleção de checkbox
  it('Deve marcar a opção de checkbox e verificar', () => {
    cy.visit('https://demoqa.com/checkbox');
    cy.get('.rct-checkbox').first().click();
    cy.get('.rct-node-parent').should('contain.text', 'You have selected');
  });

  // Teste Negativo: Email inválido
  it('Deve mostrar erro ao inserir email inválido', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.get('#userEmail').type('email-invalido');
    cy.get('#submit').click();

    // Deve aplicar classe de erro
    cy.get('#userEmail').should('have.class', 'field-error');
  });

  // Teste Positivo: Selecionar opção do radio button
  it('Deve selecionar o radio button "Impressive"', () => {
    cy.visit('https://demoqa.com/radio-button');
    cy.get('label[for="impressiveRadio"]').click();
    cy.get('.text-success').should('contain', 'Impressive');
  });

  // Teste Positivo: Clicar com botão direito
  it('Deve clicar com botão direito e verificar mensagem', () => {
    cy.visit('https://demoqa.com/buttons');
    cy.get('#rightClickBtn').rightclick();
    cy.get('#rightClickMessage').should('contain', 'You have done a right click');
  });

  // Teste Negativo: Submissão de formulário vazio
  it('Não deve submeter o formulário se os campos obrigatórios estiverem vazios', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.get('#submit').click();
    cy.get('#output').should('not.exist');
  });

  // Teste Positivo: Adicionar registro na tabela
  it('Deve adicionar um novo registro na tabela', () => {
    cy.visit('https://demoqa.com/webtables');
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type('Maria');
    cy.get('#lastName').type('Silva');
    cy.get('#userEmail').type('maria@email.com');
    cy.get('#age').type('30');
    cy.get('#salary').type('5000');
    cy.get('#department').type('TI');
    cy.get('#submit').click();

    cy.get('.rt-tbody').should('contain.text', 'Maria');
  });

  

  // Teste Positivo: Seleção de cores em autocomplete
  it('Deve selecionar cor no campo auto complete', () => {
    cy.visit('https://demoqa.com/auto-complete');
    cy.get('#autoCompleteMultipleInput').type('Red{enter}');
    cy.get('#autoCompleteMultipleInput').type('Green{enter}');
    cy.get('.auto-complete__multi-value__label').should('contain', 'Red');
    cy.get('.auto-complete__multi-value__label').should('contain', 'Green');
  });

  // Teste Negativo: Submissão com e-mail vazio
  it('Não deve permitir submissão sem email', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.get('#userName').type('Teste');
    cy.get('#submit').click();
    cy.get('#output').should('not.exist');
  });

  // Teste Positivo: Interação com slider
  it('Deve mover o slider e verificar valor', () => {
    cy.visit('https://demoqa.com/slider');
    cy.get('.range-slider').invoke('val', 80).trigger('change');
    cy.get('#sliderValue').should('have.value', '80');
  });

});
