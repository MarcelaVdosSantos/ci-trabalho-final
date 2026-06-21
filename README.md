# Projeto de Automação de Testes - Esteira de CI/CD Completa

Este repositório contém uma suíte avançada de automação de testes desenvolvida com **Mocha**, **Jest** e **Playwright**. O ecossistema possui uma arquitetura robusta de Integração Contínua (CI) estruturada em 4 pipelines automatizadas no GitHub Actions e relatórios da execução dos testes.

## Tecnologias e Frameworks Utilizados

*   **Node.js** (v22.x)
*   **Mocha & Jest** - Frameworks principais para execução das suítes de testes
*   **Playwright** - Automação de testes
*   **TypeScript / TSC** - Verificação de tipagem estática e integridade da sintaxe
*   **Prettier** - Validação de formatação rigorosa do código
*   **Allure Report** - Dashboard gráfico avançado com histórico, hospedado online via GitHub Pages
*   **CTRF (Common Test Report Format)** - Painel visual de métricas integrado nativamente ao sumário do GitHub Actions
*   **Mochawesome & Jest-JUnit** - Geradores de relatórios visuais isolados em HTML e XML

---

## Arquitetura das 4 Pipelines (GitHub Actions)

As esteiras de automação estão divididas em 4 fluxos complementares localizados na pasta `.github/workflows/`:

### 1. 01 - Execução Manual (`workflow_dispatch`)
*   **Objetivo:** Permitir execuções isoladas sob demanda diretamente pela interface do GitHub para testes rápidos de validação de novas features.

### 2. 02 - Execução Agendada (`schedule`)
*   **Frequência:** Execução diária automática às **10:00 da manhã** (Horário de Brasília / 13:00 UTC).
*   **Objetivo:** Garantir a saúde do sistema e detectar quebras decorrentes de atualizações externas por meio de testes de regressão rotineiros.

### 3. 03 - Execução por Deploy (`workflow_run`)
*   **Gatilho:** Ativada automaticamente após a conclusão bem-sucedida das pipelines manual ou agendada.
*   **Objetivo:** Agir como um *Smoke Test* de ciclo contínuo para verificar a estabilidade do ambiente após atualizações de fluxo.

### 4. 04 - Execução Integrada (`push: main`)
*   **Gatilho:** Disparada automaticamente a cada `push` efetuado na branch principal (`main`).
*   **Fluxo Sequencial de Jobs:**
    1.  **Job Inspeção (`inspecao`):** Realiza a validação estática e estética do código através do `TypeScript` e do `Prettier`.
    2.  **Job Testes (`testes`):** Executa o ambiente e os navegadores do Playwright para rodar a suíte Mocha. Através da centralização de logs no `config-reporters.json`, quatro relatórios são gerados simultaneamente:
        *   **Jest-JUnit (`results.xml`):** Exibe o feedback instantâneo de erros nos checks nativos do GitHub.
        *   **Mochawesome HTML:** Relatório visual independente compactado como artefato para download.
        *   **Allure Report:** Compilação de dados dinâmicos enviada automaticamente para publicação web.
        *   **CTRF (`ctrf-report.json`):** Painel interativo com taxas de sucesso, estabilidade (*flaky tests*) e testes mais lentos renderizado no sumário do GitHub.
    3.  **Job Deploy (`deploy`):** Simulação de deploy final disparada exclusivamente após o sucesso absoluto das etapas anteriores.

---

## Relatórios de Testes Avançados

### Sumário Integrado (CTRF)
O sumário de testes do CTRF pode ser visualizado diretamente no GitHub Actions. Para acessar:
1. Vá na aba **Actions** e selecione a execução da pipeline **"04- Execução Integrada"**.
2. Clique no menu **Summary** no canto superior esquerdo para visualizar.

### Dashboard Allure Online
Os resultados interativos e o histórico de execuções de longo prazo são publicados automaticamente como um site estático.
*   **Acesse aqui:** [Painel Allure Online] (https://marcelavdossantos.github.io/ci-trabalho-final/)

---

## Instalação e Execução Local

### Pré-requisitos
Certifique-se de possuir o **Node.js (v22+)** e o gerenciador de pacotes **Yarn** configurados no sistema.

### 1. Clonar e Instalar Dependências
```bash
# Clone o repositório
git clone https://github.com/MarcelaVdosSantos/ci-trabalho-final.git

# Acesse o diretório
cd ci-trabalho-final

# Instale os pacotes mapeados (incluindo mocha-ctrf-json-reporter e allure-mocha)
yarn install

# Baixe os binários de navegadores do Playwright
yarn playwright install --with-deps
```

### 2. Validar o Linter antes do Push
Antes de enviar qualquer alteração, garanta que os arquivos atendem às regras rigorosas da esteira rodando:
```bash
yarn lint
```
*Obs.: Se o Prettier acusar desalinhamento ou problemas de code style no seu código ou arquivos YAML, use `npx prettier --write .` para corrigi-los instantaneamente de forma automática.*

### 3. Iniciar Servidor e Rodar os Testes
```bash
# Inicialize a aplicação local
yarn start

# Em um terminal secundário, execute os testes e gere os relatórios unificados
yarn test