## nome do projeto

CI-TRABALHO-FINAL

## sobre o projeto

Trabalho final da disciplina de integração contínua. Foi utilizado um projeto já existente da disciplina de programação para automação de testes, foi criado 4 pipeline, onde:
01-manual: com a execução manual
02-scheduled: com a execução agendada
03-post-deploy:
04-integrated: Execução por push.

## funcionalidades

A api irá validar o login de usuários previamente cadastrados, validando login e senhas válidos e ativos

## tecnologias utilizadas

node.js

## pré-requisito

É necessário ter isntalado ou ter acesso ao GitHub Ations e o Node.js 24.x

## como executar o projeto

Clonar o repositório do projeto: git clone https://github.com/MarcelaVdosSantos/disciplina-programacao-automacao-desafio.git
Entrar no diretório: cd disciplina-programacao-automacao-desafio
Instalar as dependências: npm install -g yarn
Execute os testes unitários: yarn run tes

yarn add --dev mocha mocha-junit-reporter mochawesome mocha-multi-reporters

instalação do pacote playwright
yarn add -D playwright

- Execução por push.
- Execução manual.
- Execução agendada (schedule).
- Geração de relatório de testes.
- Armazenamento/publicação do relatório na pipeline.
- Criação de um README explicando a solução e os conceitos utilizados.

# 🚀 Disciplina de Programação e Automação - Desafio

Este projeto contém uma esteira automatizada de testes de integração e testes funcionais utilizando **Mocha** e **Playwright**. A pipeline está configurada para validar o estilo de código (Lint) e executar os testes de forma agendada no GitHub Actions.

## 🛠️ Tecnologias Utilizadas

- **Node.js** (v22.x)
- **Mocha** - Framework de Testes
- **Playwright** - Automação de Navegador/Ambiente
- **TypeScript / TSC** - Verificação estática de tipos
- **Prettier** - Formatação de código
- **GitHub Actions** - Integração Contínua (CI)

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com) (Gerenciador de pacotes)

## 🔧 Instalação Passo a Passo

1. Clone este repositório para a sua máquina local:

   ```bash
   git clone https://github.com
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd disciplina-programacao-automacao-desafio
   ```

3. Instale todas as dependências do projeto:

   ```bash
   yarn install
   ```

4. Instale os navegadores e dependências nativas necessárias para o Playwright:
   ```bash
   yarn playwright install --with-deps
   ```

## 🚀 Como Executar o Projeto Localmente

### 1. Iniciar o Servidor Local

Para subir o servidor web da aplicação e disponibilizar o site para os testes, execute:

```bash
yarn start
```

### 2. Executar a Validação de Código (Lint)

Para checar se existem erros de sintaxe e se a formatação está dentro dos padrões definidos (TypeScript + Prettier):

```bash
yarn lint
```

Se precisar corrigir automaticamente os espaços e formatações do código com o Prettier, você pode rodar:

```bash
npx prettier --write .
```

### 3. Rodar os Testes Automatizados

Com o servidor de desenvolvimento rodando, execute o comando abaixo em um novo terminal para iniciar os testes com o Mocha:

```bash
yarn test
```

## ⚙️ Esteira de Integração Contínua (CI)

O projeto possui uma pipeline configurada via GitHub Actions (`.github/workflows/`), que realiza os seguintes passos de forma automatizada:

1. Valida a estrutura dos arquivos e configurações.
2. Ativa o sistema de **Cache do Yarn** para agilizar execuções futuras.
3. Roda a checagem estática do TypeScript e do Prettier (`yarn lint`).
4. Executa todos os testes unitários/funcionais utilizando o Mocha (`yarn test`).
5. Publica um relatório detalhado direto na aba de Actions do GitHub (`test-reporter`).
6. Disponibiliza o download dos relatórios visuais HTML gerados pelo Mochawesome.

**Disparo Agendado:** A pipeline está configurada para rodar de forma totalmente automática **todos os dias às 10:00 da manhã** (Horário de Brasília / 13:00 UTC).
