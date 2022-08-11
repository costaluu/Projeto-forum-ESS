import express, { Application, Request, Response } from "express";
import { UserDB, NewsDB } from "./data.json"; // importação das dbs.

const app: Application = express();
const port = 3000;

// As rotas são cadastradas aqui, "/" significa localhost:3000, usar o POSTMAN para fazer as requisições e testar.
// Estudar sobre REST API
// Pra rodar o back-end basta entrar na pasta e rodar npm start

app.get("/", (request: Request, response: Response) => {
  response.send("Hello");
});

app.listen(port, () => {
  console.log("Backend listening on port 3000");
});
