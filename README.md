# Marketplace

Este projeto é um marketplace de serviços desenvolvido com React e TypeScript. Ele permite que os usuários escolham entre uma variedade de serviços, como Wordpress, ownCloud, MinIO, MariaDB, MySQL e PostgreSQL, e criem novas instâncias desses serviços.

##  Funcionalidades

- **Página Inicial:**
    - Apresenta uma lista de serviços organizados por categorias (Web, Banco de Dados).
    - Exibe informações sobre cada serviço: descrição, imagem e botão para criação.
- **Criação de Serviços:**
    - Permite que os usuários criem novas instâncias de serviços selecionados.
    - Inclui formulários para coletar dados específicos para cada tipo de serviço.
- **Detalhes do Serviço:**
    - Exibe informações detalhadas sobre um serviço criado, incluindo status, URL, recursos e logs simulados.
- **Gerenciamento de Serviços:**
    - Permite visualizar a lista de serviços criados.
    - Oferece links para a página de detalhes de cada serviço.

##  Tecnologias Utilizadas

- React
- TypeScript
- Bootstrap
- React Router DOM
- Bootstrap Icons
- i18next (tradução)
- Cypress (testes)

##  Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/StephanyMil/Marketplace.git
   cd marketplace

2. **Instale as dependências:**
    ```bash
    npm install

3. **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev

A aplicação estará disponível em http://localhost:3000/.