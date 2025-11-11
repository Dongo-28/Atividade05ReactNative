# Atividade 05 - Navegação e Componentes Interativos (React Native)

Projeto simples **Expo** com uma tela inicial e 4 "níveis" (componentes) que demonstram:
- useState, TextInput, Button, View
- renderização condicional
- estilização dinâmica

## Estrutura
- App.js
- /components
  - Level0.js
  - Level1.js
  - Level2.js
  - Level3.js

## Requisitos (pré-requisitos)
- Node.js (versão LTS recomendada)
- npm
- (Opcional) Emulador Android/iOS ou Expo Go no telemóvel

## Passos para executar (após extrair o ZIP)
1. Abra um terminal e vá para a pasta do projeto:
   ```
   cd Atividade05ReactNative
   ```
2. Instale as dependências:
   ```
   npm install
   ```
   > Se preferir, pode instalar o expo-cli globalmente: `npm install -g expo-cli`, mas não é obrigatório.
3. Inicie o servidor de desenvolvimento:
   ```
   npx expo start
   ```
4. Abra no seu dispositivo:
   - Escaneie o QR code com a app **Expo Go** (Android/iOS), ou
   - Pressione `a` para abrir no emulador Android, `i` para iOS (se tiver configurado).

## Notas
- Este projeto evita bibliotecas externas de navegação (react-navigation) e faz a navegação por estado para facilidade.
- Se tiver problemas com `expo` ou versões, actualize o SDK conforme a sua instalação do Expo.