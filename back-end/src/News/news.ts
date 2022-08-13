import { News } from "../types";
import { promises } from "fs";
import Data from "./data.json";

// Definição da classe da database que vai ler e escrever no arquivo data.json
// Cada função é responsável por uma tarefa especifica

class NewsDB {
  db: News[] = [];

  constructor() {
    this.db = Data;
  }

  getNews(id: string): News | undefined {
    return this.db.find((news) => news.id == id);
  }

  createNews(news: News): void {
    this.db.push(news);
  }

  deleteNews(id: string): void {
    this.db = this.db.filter((news) => news.id == id);
  }

  editNews(id: string, news: News): void {
    this.deleteNews(id);

    this.createNews(news);
  }

  async saveNews(): Promise<void> {
    try {
      await promises.writeFile("./data.json", this.db.toString(), {
        flag: "w",
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default NewsDB;
