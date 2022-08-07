import { User, UserType, News } from './types'

let UserDB: User[] = 
    [{
        id: "123",
        name: "Baiano",
        type: UserType.administrator
    }];

let NewsDB: News[] =
    [{
        id: "123",
        title: "Baiano",
        date: "Hoje"
    }];

export { UserDB, NewsDB };