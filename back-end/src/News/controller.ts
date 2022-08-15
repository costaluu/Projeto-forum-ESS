import { Request, Response } from 'express'
import NewsDB from './news'
import { HTTP_SUCCESS, HTTP_BAD_REQUEST, HTTP_NOT_FOUND, HTTP_ERROR, News, ApiResponse } from '../types'
import Logger from '@ptkdev/logger'

const log = new Logger()

export function validator(fields: string[], params: Object): Boolean {
    // Checagem dos parametros da requisição HTTP
    for (var i = 0; i < fields.length; i++) {
        if (params.hasOwnProperty(fields[i]) === false) return false
    }

    return true
}

export function getNews(request: Request, response: Response): void {
    log.info('GetNews request received')

    const valid = validator(['id'], request.body)

    if (!valid) {
        response.send(HTTP_BAD_REQUEST)

        return
    }

    let db: NewsDB = new NewsDB()
    let result: News | undefined = db.getNews(request.body.id)

    if (result == undefined) {
        response.send(HTTP_NOT_FOUND)
    } else {
        let httpResponse: ApiResponse = HTTP_SUCCESS
        httpResponse.result = result

        response.send(httpResponse)
    }

    return
}

export function getAllNews(request: Request, response: Response): void {
    log.info('GetAllNews request received')

    const valid = validator([], request.body)

    if (!valid) {
        response.send(HTTP_BAD_REQUEST)

        return
    }

    let db: NewsDB = new NewsDB()
    let result: News[] = db.getAllNews()

    if (result == undefined) {
        response.send(HTTP_NOT_FOUND)
    } else {
        let httpResponse: ApiResponse = HTTP_SUCCESS
        httpResponse.result = result

        response.send(httpResponse)
    }

    return
}

export function createNews(request: Request, response: Response): void {
    log.info('CreateNews request received')

    const valid = validator(['id', 'title', 'date', 'markdownText'], request.body)

    if (!valid) {
        response.send(HTTP_BAD_REQUEST)

        return
    }

    let db: NewsDB = new NewsDB()

    let createNews: Promise<Boolean> = db.createNews({
        id: request.body.id,
        title: request.body.title,
        date: request.body.date,
        markdownText: request.body.markdownText,
    } as News)

    createNews.then((result: Boolean) => {
        if (result) {
            response.send(HTTP_SUCCESS)
        } else {
            response.send(HTTP_ERROR)
        }
    })

    return
}

export function deleteNews(request: Request, response: Response): void {
    log.info('DeleteNews request received')

    const valid = validator(['id'], request.body)

    if (!valid) {
        response.send(HTTP_BAD_REQUEST)

        return
    }

    let db: NewsDB = new NewsDB()

    let deleteNews: Promise<Boolean> = db.deleteNews(request.body.id)

    deleteNews.then((result: Boolean) => {
        if (result) {
            response.send(HTTP_SUCCESS)
        } else {
            response.send(HTTP_ERROR)
        }
    })

    return
}

export function editNews(request: Request, response: Response): void {
    log.info('EditNews request received')

    const valid = validator(['id', 'title', 'date', 'markdownText'], request.body)

    if (!valid) {
        response.send(HTTP_BAD_REQUEST)

        return
    }

    let db: NewsDB = new NewsDB()

    let editNews: Promise<Boolean> = db.editNews(request.body.id, {
        id: request.body.id,
        title: request.body.title,
        date: request.body.date,
        markdownText: request.body.markdownText,
    } as News)

    editNews.then((result: Boolean) => {
        if (result) {
            response.send(HTTP_SUCCESS)
        } else {
            response.send(HTTP_ERROR)
        }
    })

    return
}
