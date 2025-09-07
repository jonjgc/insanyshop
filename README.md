# InsanyShop E-commerce 

Este é um projeto de e-commerce, a **InsanyShop**. A aplicação permite a visualização de produtos, filtragem por categorias, busca, adição de itens a um carrinho de compras persistente e visualização de uma página de checkout.

O projeto foi construído seguindo um design pré-definido no Figma, com foco na fidelidade visual, componentização, responsividade e boas práticas de desenvolvimento.

## Deploy e Visualização

A aplicação está no ar e pode ser visualizada através do seguinte link:

**[Acessar a Loja Online](https://insanyshop-sandy.vercel.app)**

## Funcionalidades Implementadas

O projeto cumpre com todas as funcionalidades solicitadas no desafio:

-   [x] **Catálogo de Produtos:** Listagem de todos os produtos vindos de uma API REST, com sistema de paginação.
-   [x] **Páginas de Categoria:** Páginas dinâmicas (`/categoria/[nome]`) que exibem apenas produtos de uma categoria específica.
-   [x] **Filtros e Ordenação:** Implementação de filtros por categoria e ordenação de produtos por preço e relevância.
-   [x] **Busca:** Campo de busca funcional no cabeçalho que filtra produtos por nome e leva a uma página de resultados (`/search?q=...`).
-   [x] **Página de Produto:** Páginas dinâmicas (`/produto/[id]`) para cada item, exibindo seus detalhes.
-   [x] **Carrinho de Compras:**
    -   [x] Adicionar e remover produtos.
    -   [x] Ajustar quantidade de cada item.
    -   [x] Persistência de dados no `localStorage` (o carrinho não esvazia ao recarregar a página).
-   [x] **Resumo do Pedido:** Exibição de subtotal, frete (valor fixo) e valor total na página do carrinho.
-   [x] **Responsividade:** Interface adaptável para uma boa experiência em desktops, tablets e celulares.
-   [x] **Feedback ao Usuário:** Notificações (toasts) ao adicionar itens ao carrinho.

## Diferenciais

Além dos requisitos básicos, o projeto também inclui:

-   [x] **Deploy na Vercel:** A aplicação foi publicada e está disponível publicamente para visualização e testes.
-   [x] **Testes Unitários:** Foram escritos testes unitários com Jest e React Testing Library, garantindo a robustez e a manutenibilidade do código.

## Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

-   **Next.js:** Framework React para produção, com foco em performance e renderização no servidor.
-   **TypeScript:** Para adicionar tipagem estática e segurança ao código JavaScript.
-   **Styled-Components:** Para estilização de componentes de forma isolada e dinâmica.
-   **React Context API:** Para gerenciamento do estado global do carrinho de compras.
-   **Jest & React Testing Library:** Para a suíte de testes unitários.
-   **React Hot Toast:** Para as notificações (toasts) da aplicação.
-   **Vercel:** Para o deploy e hospedagem contínua do projeto.

## Como Rodar o Projeto Localmente

Siga os passos abaixo para executar a aplicação no seu ambiente de desenvolvimento.

**Pré-requisitos:**
* Node.js (versão 18 ou superior)
* npm

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/jonjgc/insanyshop.git]
    cd insanyshop
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  Abra [http://localhost:3000] no seu navegador para ver o resultado.

## Scripts Disponíveis

-   `npm run dev`: Inicia o servidor de desenvolvimento.
-   `npm run test`: Executa os testes unitários com Jest em modo de observação (`--watch`).