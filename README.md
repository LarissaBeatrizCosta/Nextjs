Nesse projeto desenvolvido com **Next.js** e **TypeScript** será encontrada uma interface para listagem, busca e visualização de detalhes sobre corretoras.

Além das tecnologias mencionadas acima, conta com **Material UI (MUI)** e gerenciamento de estado com **Jotai**, camada de serviços com **Axios** e integração com a [BrasilAPI](https://brasilapi.com.br/)


## Tecnologias Utilizadas

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Componentes e Estilização**: [Material UI (MUI)](https://mui.com/)
- **Gerenciamento de Estado**: [Jotai](https://jotai.org/)
- **Requisições HTTP**: [Axios](https://axios-http.com/)

## Estrutura do Projeto

A estrutura de pastas foi organizada para separação de responsabilidades

```text
├── app/                # Layouts e páginas.
├── atoms/              # Estados globais gerenciados pela biblioteca Jotai.
├── components/         # Componentes de UI.
├── lib/                # Instância do Axios (baseURL da Brasil API)
├── providers/          # Contexto da aplicação.
├── services/           # Chamadas de API.
├── styles/             # Estilos da aplicação.
├── types/              # Definições de tipos e interfaces.
├── utils/              # Utilitários genéricos.
```
## Pré-requisitos
- Node.js 20.9.0 ou superior
- npm (ou yarn/pnpm/bun)

## Instalação e execução
- **Clone o repositório:**
   git clone https://github.com/LarissaBeatrizCosta/Nextjs.git
   cd Nextjs

- **Instale as dependências:**
   npm install

- **Variável de ambiente:**
Por padrão, o projeto já consome a API pública da CVM na Brasil API, mas você pode sobrescrever a URL base criando um arquivo .env.local:
   NEXT_PUBLIC_API_URL=https://brasilapi.com.br/api/cvm/corretoras/v1

- **Rode o servidor de desenvolvimento:**
   npm run dev

- **Acesse http://localhost:3000 no navegador**