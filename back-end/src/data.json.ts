import { User, UserType, News } from "./types";

// Aqui estão os "bancos de dados", se for necessario criar seu tipo vá em types e crie o seu.
// Apos criar não se esqueça de exportar

let UserDB: User[] = [
  {
    id: "123",
    name: "Baiano",
    type: UserType.administrator,
  },
];

let NewsDB: News[] = [
  {
    id: "123",
    title: "Baiano",
    date: "Hoje",
  },
];

export { UserDB, NewsDB };
