
# Short-Url
O Short-Url consiste em uma API que possui como funcionalidades receber uma URL e retornar uma versão encurtada da mesma que pode ser utilizada para redirecionar até a URL original.

O projeto surgiu inicialmente com o intuito de desenvolver minha habilidade na construção de APIs e aprender sobra uma stask tão poderosa como é o Nodejs. Dessa forma toda a construção da aplicação foi feita em Nodejs como já citado anteriormente, em conjunto com express e PostgreSql para armazarnar as URL e tudo isso feito em arquitetura RestFull.



## Tenologias utilizadas

- Node.js (Back-end)
- Express.js (Framework web)
- Sequelize (ORM para PostgreSQL)
- PostgreSQL (Banco de dados)
- NanoID (Gerador de identificadores únicos)
- Nodemon (Hot reload durante o desenvolvimento)



## Funcionalidades

- Receber uma URL e devolver uma URL encurtada.
- Redirecionar a partir da URL encurtada até a URL original.

## Instalação

Clone o repositório 

```bash
  git clone https://github.com/CarHSMig/Short-Url.git
  cd Short-Url
```

Crie um arquivo .env na raiz do projeto para armazenar os seguintes dados: 

```bash
    PORT=3000 // Porta onde a API será executada.

    DB_HOST=127.0.0.1 // Endereço do servidor do banco de dados.
    DB_PORT=5432 // Porta do banco de dados PostgreSQL.
    DB_USER=seu_usuario // Nome do usuário do banco de dados PostgreSQL.
    DB_PASSWORD=sua_senha // Senha do usuário do banco de dados.
    DB_NAME=url_short // Nome do banco de dados onde as URLs encurtadas serão armazenadas.
```

Instale os pacotes necéssarios

```bash
  npm install
```

Caso esteja utilizando yarn rode

```bash
  yarn install
```

Crie o DB e Rode as migrações:
```bash
  npm run db:create
  npm run migrate 
```

Por fim rode a aplicação:

```bash
  npm run start
```








## Exemplo de uso

### Criando uma URL encurtada

Post /shorten

Enive uma requisição passando no body a URL que deseja encurtar

```json
  {
    "original_url": "https://www.google.com"
  }
```

Exemplo de resposta: 

```json
  {
    "short_url": "http://localhost:3000/aB1cD3"
  }
```

Vale ressaltar que tanto a resposta quanto o domínio base da URL é definido conforma onde a aplicação está rodando, nesse caso é um exemplo para a aplicação rodando localmente ou seja utilizando localhost:3000, mas caso ela rode em um domínio próprio o retorno pode ser diferente, EX:
```json
{
  "short_url": https://minhaapi.com/aB1cD3
}
```
Assim como a url utilizada na requisição será "https://minhaapi.com/shorten"

### Redirecionando para a URL original

Get /:short_url

Com a aplicação rodando basta passar a URL encurtada no navegador ou realizar uma requisição GET para a URL e você será direcionado para a URL original inserida

Exemplo de url para requisição: 
 https://minhaapi.com/aB1cD3



## Futuras Atualizações: 

- Implementar testes unitários utilizando Jest.js 

- Implementar contador de acessos a URL encurtada

- Desencurtador de URL

- Implementar a possíbilidade de um prefixo a url encurtada

- Implementar Acesso de login para acompanhamento das URLs encurtadas
