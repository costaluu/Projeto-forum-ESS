import express, { Application, Request, Response } from "express";
import * as NewsController from "./News/controller"; // Controller responsável pelas requisições http
import { News } from "./types";

const app: Application = express();
const port = 3000;
app.use(express.json());

// As rotas são cadastradas aqui, "/" significa localhost:3000, usar o POSTMAN para fazer as requisições e testar.
// Estudar sobre REST API
// Pra rodar o back-end basta entrar na pasta e rodar npm start

app.get("/", (request: Request, response: Response) => {
  response.send("Backend is working!");
});

app.get("/getnews", (request: Request, response: Response) => {
  /* Requisicao exemplo */
  let result: News | undefined = NewsController.getNews(request);

  if (result != undefined) {
    response.send(result);
  } else {
    response.send({ msg: 1 });
  }
});

app.listen(port, () => {
  console.log("Backend listening on port 3000");
});
