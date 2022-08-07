export enum UserType {
    normal = 1,
    administrator,
}

export interface User {
    readonly id: string
    name: string
    type: UserType
}

export interface News {
    readonly id: string
    title: string
    date: string
}