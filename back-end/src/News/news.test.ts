import NewsDB from "./news";

// Testes devem ser criados como [instancia].test.ts */
// Estude JEST e a sua linguagem
// Esture JASMINE para o front-end

describe("News", () => {
  let database: NewsDB;

  beforeAll(() => {
    database = new NewsDB();
  });

  it("The database should be created", () => {
    expect(database.db).not.toBeNull();
  });
});
