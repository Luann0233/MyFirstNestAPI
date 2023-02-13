<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

### :octocat: Como clonar o repositório do projeto

```bash
# Clone este repositório
$ git clone https://github.com/Luann0233/MyFirstNestAPI.git

# Acesse a pasta do projeto no terminal/cmd
$ cd MyFirstNestAPI

```

## Instalação

```bash
$ yarn install
```

## Rodando projeto

```bash
# development
$ yarn dev
```

## Rodando Prisma Studio(Visualizar o DB no navegador)

```bash
$ yarn studio
```
![image](https://user-images.githubusercontent.com/52284404/218580975-c0097d0c-c4a9-4b1a-b5dc-03c4f1958967.png)


# 🔖 Collection Postman

Baixe [aqui](https://drive.google.com/file/d/1eqmk4VhwOqYBzRf8ZESOisP4qBngHzNv/view?usp=share_link) a collection do postman com as requisições. Ou se preferir o arquivo está na raaíz do projeto.

# Endpoint Login / Usuários
`URL(POST)`: http://localhost:3000/login`

`BODY`:
```JSON
{
    "email": "teste@gmail.com",
    "password": "Senha123"
}
```
---
## Endpoint Me (busca usuário logado)
- `URL(GET)`: http://localhost:3000/me`

---
## Endpoint CRIAR usuário
`URL(POST)`: http://localhost:3000/user`

`BODY`:
```JSON
{
    "email": "teste10@gmail.com",
    "password": "Senha123",
    "name": "Teste10"
}
```
---
## Endpoint lista todos os usuários
- `URL(GET)`: http://localhost:3000/user`
---
## Endpoint buca usuário pelo ID
- `URL(GET)`: http://localhost:3000/user/1`
---
## Endpoint EDITAR usuário
`URL(PATH)`: http://localhost:3000/user/1`


`BODY`:
```JSON
{
    "name": "exampleEdit"
}
```
---
## Endpoint APAGAR usuário
`URL(DELETE)`: http://localhost:3000/user/1`

<br>
<br>

# Endpoint Despesas
## Endpoint CRIAR despesa
`URL(POST)`: http://localhost:3000/expense`

`BODY`:
```JSON
{
    "descricao": "Despesa 1",
    "data": "2023-01-31",
    "valor": 10,
    "authorId": 1,
}
```
---
## Endpoint lista todos as despesa
- `URL(GET)`: http://localhost:3000/expense`
---
## Endpoint buca despesa pelo ID
- `URL(GET)`: http://localhost:3000/expense/1`
---
## Endpoint EDITAR usuário
`URL(PATH)`: http://localhost:3000/expense/1`

`BODY`:
```JSON
{
    "descricao": "Despesa Edit",
    "data": "2023-02-01",
    "valor": 12,
    "authorId": 1,
}
```
---
## Endpoint APAGAR despesa
`URL(DELETE)`: http://localhost:3000/expense/1`

