[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)
[![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)](https://swagger.io/)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/get-started/overview/)
[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)

# 😎 Read me

Node.js + Typescrypt + Express.js + MongoDB Real Estate REST-API as a proof of concept.

### 🌟 Extra features

- **[GraphQL](https://swagger.io/)** - A fun Query language for APIs.
- **[Docker](https://docs.docker.com/get-started/overview/)** - To easily run the project with just one command line.
- **[Jest](https://jestjs.io/)** - To keep the project bug-free.
- **[Swagger](https://swagger.io/)** - To easily test the API with a awesome UI.

### 🎯 Prerequisites

- Docker v19.03.0+

### 🚀 Installation

> This application runs on a docker compose with his own mongodb database

Just make sure docker is running and run at the root of the project:

`docker-compose up -d`

The API will run on http://localhost:3021/api/

Plus, you can go to 'homelike-service' folder and create a `.env` based on `.env.example` to run  the project locally with `npm run dev`

### 📖 Exploring the API

When the application is running, you can explore and test the API on his Swagger UI.<br/>
You can try it at http://localhost:3021/api/swagger

### 🤔Why not GraphQL?

If you find that working with REST is boring, the application has a GraphQL endpoint prepared to work with the apartments data.<br/>
You can try it at http://localhost:3021/api/graphql

### 🔍 Running Tests

You can run test to make sure everything is well, just run at the root of the project:

`npm run --prefix .\homelike-service\ test`

Or go to 'homelike-service' folder and `run npm run test`
