# Projeto Trybe Futebol Clube !

# Sobre o projeto
Este projeto trata-se de um site informativo sobre partidas e classificações de futebol.
A proposta foi a criação de uma API que é consumida por um front-end já disponibilizado.
Foi construído um back-end dockerizado utilizando modelagem de dados através do Sequelize.

# Principais conceitos desenvolvidos no projeto

> Realização da dockerização dos apps, network, volume e compose;
> Modelagem de dados com MySQL através do Sequelize;
> Criação e associação de tabelas usando models do sequelize;
> Construção de uma API REST com endpoints para consumir os models criados;
> Construção de um CRUD com TypeScript, utilizando ORM;

## Estrutura do projeto

Banco de dados:
> Container docker MySQL - Já configurado pela Trybe no arquivo docker-compose, através de um serviço definido como db.

Back-end:
> Rodar na porta 3001, pois o front-end faz requisições para ele nessa porta por padrão.
> A aplicação é inicializada a partir do arquivo app/backend/src/server.ts

Front-end:
> O Front já foi desenvolido pela Trybe, sendo necessário configurar apenas o Dockerfile.
> O Front se comunica com o serviço de back-end pela url http://localhost:3001 através dos endpoints criados durante o projeto.

Docker
> O docker-compose faz a união de todos os serviços conteinerizados (backend, frontend e db) na qual subirá o projeto completo com o comando npm run compose:up.


# Configurações mínimas para execução do projeto

Sistema Operacional Distribuição Unix
> Node versão 16
> Docker
> Docker-compose versão >=1.29.2
➡️ O node deve ter versão igual ou superior à 16.14.0 LTS:

Instalar o nvm.
Rode os comandos abaixo para instalar a versão correta do node e usá-la:
nvm install 16.14 --lts
nvm use 16.14
nvm alias default 16.14
➡️ O docker-compose deve ter versão igual ou superior àˆ1.29.2:

## Instalando Dependências

npm install

## Executando aplicação

Para instalar as aplicações (front e back) rodamos o comando npm run install:apps na pasta raiz do projeto;

Para executar o compose: npm run compose:up / npm run compose:down.

## Executando Testes

* Para rodar todos os testes:

  ```
    npm test
  ```
