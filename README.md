# Raiz do Vale

Aplicativo mobile de gestão de estoque inspirado no trabalho artesanal e nas cores do Vale do Jequitinhonha. Projeto desenvolvido com React Native, Expo e TypeScript.

## Como executar

```bash
npm install
npx expo start
```

Abra o projeto no Expo Go ou em um emulador Android/iOS.

## Acesso de demonstração

- E-mail: `estoque@raizdovale.com`
- Senha: `vale2026`

## Funcionalidades

- Login simulado com validação e indicador de carregamento.
- Cadastro de produtos com nome, preço e quantidade inicial.
- Painel de estoque com indicadores de saldo baixo e valor estimado.
- Busca e seleção de produtos para registrar saídas, sem permitir saldo negativo.
- Estado compartilhado em memória por Context API; os dados de demonstração voltam ao estado inicial ao reiniciar o app.

## Organização

- `src/components/`: componentes reutilizáveis, cada um com `styles.ts`.
- `src/context/`: estado global do estoque.
- `src/global/`: tema, tipos e formatação.
- `src/pages/`: telas do aplicativo, cada uma com seu `styles.ts`.
- `src/routes/`: navegação React Navigation com Stack e Bottom Tabs.
