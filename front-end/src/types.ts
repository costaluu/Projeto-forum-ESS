// O arquivo types.ts é uma especie de contrato entre o back-end e o front que vão trocar os mesmos tipos de dados.

export type ApiResponse = {
    msg: string
    status: number
    result?: Object
}

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
    markdownText: string
    edited: boolean
}
