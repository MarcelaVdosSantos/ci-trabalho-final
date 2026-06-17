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
