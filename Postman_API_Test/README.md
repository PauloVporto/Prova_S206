# Testes de API - Postman
Este projeto utiliza a API pública JSONPlaceholder com 3 testes automatizados.

## Pré-requisitos
- Postman instalado
- Newman instalado: `npm install -g newman`
- Newman HTML Reporter: `npm install -g newman-reporter-html`

## Executar testes
```
newman run tests/collection.json -r html
```
