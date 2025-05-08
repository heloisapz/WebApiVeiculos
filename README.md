# API de Alocação de Veículos

Este repositório contém o back-end da aplicação de alocação de veículos, desenvolvido com **ASP.NET Core**, **Entity Framework Core** e **MySQL**. A API segue o padrão RESTful e está preparada para integração com um front-end Angular.

---

## Tecnologias

- ASP.NET Core 8
- Entity Framework Core
- MySQL
- Docker
- Angular CLI 

---

## Pré-requisitos

- [.NET SDK 8+](https://dotnet.microsoft.com/download)
- [Docker](https://www.docker.com/)
- [MySQL Workbench ou outro cliente](https://www.mysql.com/products/workbench/) (opcional)
- Node.js
- [Angular Cli] (instalar com `npm install -g @angular-cli`)

---

## Subindo o banco de dados com Docker

Execute o comando abaixo para iniciar um container MySQL com os parâmetros necessários:

<pre>
  <code>
docker run -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=veiculosdatabase -e MYSQL_USER=usuario -e MYSQL_PASSWORD=123456 -p 3307:3306 -d mysql:latest
  </code>
</pre>

## Atualização de pacotes e rodando a aplicação

Execute os comando abaixos para atualizar os pacotes e rodar a aplicação:


<pre>
  <code>
npm install <br>
ng serve
  </code>
</pre>
