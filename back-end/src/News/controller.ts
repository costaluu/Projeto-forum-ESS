import { Request } from "express";
import NewsDB from "./news";
import { News } from "../types";

function validator(fields: string[], params: Object): boolean {
  for (var i = 0; i < fields.length; i++) {
    if (params.hasOwnProperty(fields[i]) === false) return false;
  }

  return true;
}

export function getNews(request: Request): News | undefined {
  const valid = validator(["id"], request.body);

  if (!valid) {
    return undefined;
  }

  let db: NewsDB = new NewsDB();
  let result: News | undefined = db.getNews(request.body.id);

  return result;
}

export function createNews(request: Request): boolean {
  const valid = validator(["id", "title", "date", "markdownText"], request.body);

  if (!valid) {
    return false;
  }

  let db: NewsDB = new NewsDB();
  db.createNews(request.body);

  return true;
}

export function deleteNews(request: Request): boolean {
  const valid = validator(["id"], request.body);

  if (!valid) {
    return false;
  }

  let db: NewsDB = new NewsDB();
  db.deleteNews(request.body.id);

  return true;
}

export function editNews(request: Request): boolean {
  const valid = validator(["id", "title", "date", "markdownText"], request.body);

  if (!valid) {
    return false;
  }

  let db: NewsDB = new NewsDB();
  db.editNews(request.body.id, request.body);

  return true;
}

export async function saveNews(request: Request): Promise<boolean> {
  let db: NewsDB = new NewsDB();
  db.saveNews();

  return true;
}
