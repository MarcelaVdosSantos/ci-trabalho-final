# Projeto de Automação de Testes - Esteira de CI/CD Completa

Este repositório contém uma suíte de automação desenvolvida com **Mocha**, **Jest** e **Playwright**. O projeto conta com uma arquitetura de Integração Contínua (CI) estruturada em 4 pipelines automatizadas no GitHub Actions, garantindo a integridade do ecossistema a cada build.

## Tecnologias e Frameworks Utilizados

- **Node.js** (v22.x estável)
- **Mocha & Jest** - Frameworks para execução de testes unitários e funcionais
- **Playwright** - Framework para automação de testes End-to-End (E2E)
- **TypeScript / TSC** - Verificação estática e integridade do código JavaScript
- **Prettier** - Validação de formatação e padrões estéticos de código
- **Allure Report** - Dashboard gráfico interativo hospedado online via GitHub Pages
- **Mochawesome, Jest-JUnit & CTRF** - Geradores de artefatos de relatórios ricos e integração com o ecossistema GitHub

## Estrutura das 4 Pipelines (GitHub Actions)

As esteiras de automação estão divididas em 4 fluxos complementares dentro da pasta `.github/workflows/`:

### 01 - Execução Manual (`workflow_dispatch`)

- **Objetivo:** Permitir execuções manuais sob demanda diretamente pela interface do GitHub para testes rápidos de validação.
- **Ações:** Faz o checkout, configura o cache do Yarn, baixa o Playwright, executa a suíte e gera relatórios XML (JUnit) e HTML (Mochawesome).

### 02 - Execução Agendada (`scheduled`)

- **Frequência:** Todos os dias automaticamente às **10:00 da manhã** (Horário de Brasília / 13:00 UTC).
- **Objetivo:** Aguar testes de regressão de rotina para auditar a estabilidade diária das dependências e da aplicação.

### 03 - Execução por Deploy (`workflow_run`)

- **Gatilho:** Inicia de forma automatizada assim que as pipelines de `Execução Manual` ou `Execução Agendada` concluem o seu ciclo.
- **Objetivo:** Funcionar como um gatilho de _Smoke Test_ de ciclo contínuo para verificar ambientes após uma atualização do fluxo.

### 04 - Execução Integrada (`push: main`)

- **Gatilho:** Disparada automaticamente a cada `push` efetuado na branch principal (`main`).
- **Fluxo Sequencial de Jobs:**
  1.  **Job Inspeção:** Executa a verificação estática de formatação e integridade via `yarn lint`.
  2.  **Job Testes:** Roda os navegadores do Playwright e os testes estruturados do Mocha, gerando uma cobertura tripla de auditoria:
      - **Jest-JUnit:** Feedback instantâneo de erros nos checks nativos do GitHub.
      - **Mochawesome:** Relatório visual em formato HTML disponibilizado como artefato compactado.
      - **Allure Report:** Dashboard compilado via CLI e hospedado online de forma estática.
      - **CTRF Reporter:** Relatório inteligente com taxas de falhas, testes lentos e métricas de instabilidade (`flaky tests`).
  3.  **Job Deploy:** Simula o deploy final em produção após o sucesso das fases anteriores.

## Relatório Allure Online

Os dashboards gráficos gerados pela pipeline de execução integrada são implantados automaticamente. Acesse o histórico pelo link:

**[Acessar Painel Allure Online](https://github.io)**

## Instalação e Execução Local

### Pré-requisitos

Certifique-se de possuir o **Node.js (v22+)** e o gerenciador **Yarn** configurados.

### 1. Clonar e Instalar Dependências

# Clone o repositório

git clone https://github.com/MarcelaVdosSantos/ci-trabalho-final.git

# Acesse a pasta raiz

cd ci-trabalho-final

# Instale os pacotes mapeados

yarn install

# Instale os navegadores e dependências de sistema do Playwright

yarn playwright install --with-deps

### 2. Executar Linter e Validações de Código

yarn lint

_Nota: Caso o Prettier acuse desalinhamento em arquivos YAML ou de texto, utilize o comando `npx prettier --write .` para corrigi-los instantaneamente._

### 3. Executar a Aplicação e os Testes

# Inicie o servidor web local da aplicação

yarn start

# Em um novo terminal, dispare a suíte de testes do Mocha

yarn test
