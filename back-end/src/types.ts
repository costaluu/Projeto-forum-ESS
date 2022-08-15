export type ApiResponse = {
    msg: string
    status: number
    result?: Object
}

export const HTTP_SUCCESS: ApiResponse = { msg: 'SUCCESS', status: 200 }
export const HTTP_BAD_REQUEST: ApiResponse = { msg: 'BAD REQUEST', status: 400 }
export const HTTP_NOT_FOUND: ApiResponse = { msg: 'NOT FOUND', status: 404 }
export const HTTP_ERROR: ApiResponse = { msg: 'ERROR', status: 500 }

export enum UserType {
    normal = 1,
    administrator = 2,
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
