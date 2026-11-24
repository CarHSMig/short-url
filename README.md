<h1 align="center">Short-Url</h1>

<p align="center">API REST para encurtar URLs e redirecionar para o endereço original.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=white" alt="Sequelize">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/tests-Jest%20%2B%20Supertest-C21325?logo=jest&logoColor=white" alt="Jest">
</p>

---

## Sobre

Recebe uma URL longa, gera um código curto e único com **NanoID**, guarda o par no PostgreSQL e
redireciona quem acessar o link curto. Também faz o caminho inverso: dado um link curto, devolve a URL original.

O projeto foi construído para praticar o desenho de APIs REST em Node.js, com migrations, separação
por controllers e **testes de request** para cada endpoint.

> Existe também uma reescrita em **NestJS + TypeScript + TypeORM**: [ts-short-url](https://github.com/CarHSMig/ts-short-url).

## Endpoints

| Método | Rota | Corpo | Resposta |
|---|---|---|---|
| `POST` | `/shorten` | `{ "original_url": "https://www.google.com" }` | `{ "short_url": "http://localhost:3000/aB1cD3" }` |
| `POST` | `/unshorten` | `{ "short_url": "http://localhost:3000/aB1cD3" }` | `{ "original_url": "https://www.google.com" }` |
| `GET` | `/:short_url` | – | Redirecionamento para a URL original |

O domínio do link curto acompanha o host onde a API está rodando.

## Stack

- **Node.js + Express**
- **Sequelize** (ORM, migrations) + **PostgreSQL**
- **NanoID** para os códigos curtos
- **Jest + Supertest** para testes de request
- morgan, cors, nodemon

## Estrutura

```
config/        # configuração do Sequelize
controllers/   # um controller por caso de uso (shorten, unshorten, redirect)
migrations/
models/
routes/
tests/         # testes de request por endpoint
server.js
```

## Como rodar

Pré-requisitos: Node 18+ e PostgreSQL.

```bash
git clone https://github.com/CarHSMig/short-url.git
cd short-url
npm install
```

Crie um `.env` na raiz:

```env
PORT=3000
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=url_short
```

```bash
npm run db:create
npm run migrate
npm run dev        # ou npm start
```

### Testes

```bash
npm test           # usa as variáveis de .env.test
```

## Próximos passos

- [ ] Contador de acessos por link
- [ ] Prefixo/alias personalizado
- [ ] Login para acompanhar os links criados

## Autor

**Carlos Henrique dos Santos Migon** · [LinkedIn](https://www.linkedin.com/in/carlos-henrique-dos-santos-migon-46387b336/) · [GitHub](https://github.com/CarHSMig)
